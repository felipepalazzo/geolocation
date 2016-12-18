import {Marionette, $, _} from '../../vendor/vendor';
import template from './form.template.jst.ejs';

export default Marionette.View.extend({
  tagName: 'form',
  template: template,
  DEBOUNCE_WAIT_IN_MS: 500,
  ui: {
    myLocationBtn: '[data-ui="my-location"]',
    hostLocationBtn: '[data-ui="host-location"]',
    resetBtn: '[data-ui="reset"]',
    host: 'input[name="host"]',
  },
  events: {
    'click @ui.resetBtn': 'resetMyLocation',
    'click @ui.myLocationBtn': 'onMyLocationBtnClick',
    'click @ui.hostLocationBtn': 'onHostLocationBtnClick',
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
  onHostLocationBtnClick() {
    this._showHostLocation();
  },
  showMyLocation() {
    let deferred = this.getMyGeoLocation();
    deferred
      .done((response) => {
        this.triggerMethod('click:myLocation', response);
      })
      .fail((response) => {
        console.error(response.statusText);
      });
  },
  showHostLocation() {
    let host = this.ui.host.val();
    let deferred = this.getHostGeoLocation(host);
    this.togglehostLocationBtn();
    deferred
      .done((response) => {
        this.togglehostLocationBtn();
        if (response.message) {

        } else {
          this.triggerMethod('click:locate', response);
        }
      })
      .fail((response) => {
        this.togglehostLocationBtn();
        console.error(response.statusText);
      });
  },
  togglehostLocationBtn() {
    this.ui.hostLocationBtn.toggleClass('disabled');
  },
  resetMyLocation() {
    this.triggerMethod('click:reset');
  },
  getMyGeoLocation() {
    return $.get('http://ip-api.com/json/');
  },
  getHostGeoLocation(host) {
    return $.get('http://ip-api.com/json/' + host);
  },
});
