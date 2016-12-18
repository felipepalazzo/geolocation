import {Marionette, $, _} from '../../vendor/vendor';
import template from './form.template.jst.ejs';

export default Marionette.View.extend({
  tagName: 'form',
  template: template,
  DEBOUNCE_WAIT_IN_MS: 300,
  ui: {
    myLocationBtn: '[data-ui="my-location"]',
    hostLocationBtn: '[data-ui="host-location"]',
    resetBtn: '[data-ui="reset"]',
    host: 'input[name="host"]',
    formGroup: '[data-ui="form-group"]',
    helpBlock: '[data-ui="help-block"]',
  },
  events: {
    'click @ui.resetBtn': 'resetMyLocation',
    'click @ui.myLocationBtn': 'onMyLocationBtnClick',
    'submit': 'onSubmit',
  },
  initialize() {
    this._showMyLocation = _.debounce(
      this.showMyLocation.bind(this),
      this.DEBOUNCE_WAIT_IN_MS
    );
    this._showHostLocation = _.debounce(
      this.showHostLocation.bind(this),
      this.DEBOUNCE_WAIT_IN_MS
    );
  },
  onMyLocationBtnClick() {
    this._showMyLocation();
  },
  onSubmit(evt) {
    evt.preventDefault();
    this._showHostLocation();
  },
  showMyLocation() {
    let deferred = this.getMyLocation();
    deferred
      .done((response) => {
        this.triggerMethod('click:myLocation', response);
      })
      .fail((response) => {
        console.error(response.statusText);
      });
  },
  showHostLocation() {
    let host = this.ui.host.val().trim().replace(/^https?:\/\//gi, '');
    if (!host.length) {
      this.showErrors();
      this.showErrorMessage('Please type website domain');
      return;
    }
    this.togglehostLocationBtn();
    let deferred = this.getHostGeoLocation(host);
    deferred
      .done((response) => {
        this.togglehostLocationBtn();
        if (response.message) {
          this.showErrors();
          this.showErrorMessage(response.message);
        } else {
          this.removeErrors();
          this.triggerMethod('click:locate', response);
        }
      })
      .fail((response) => {
        this.togglehostLocationBtn();
        console.error(response.statusText);
      });
  },
  showErrors() {
    this.ui.formGroup.addClass('has-error');
  },
  removeErrors() {
    this.ui.formGroup.removeClass('has-error');
    this.showErrorMessage('');
  },
  showErrorMessage(message) {
    this.ui.helpBlock.html(message);
  },
  togglehostLocationBtn() {
    this.ui.hostLocationBtn.toggleClass('disabled');
  },
  resetMyLocation() {
    this.triggerMethod('click:reset');
  },
  getMyLocation() {
    return $.get('http://ip-api.com/json/');
  },
  getHostGeoLocation(host) {
    return $.get('http://ip-api.com/json/' + host);
  },
});
