import {Marionette, $} from '../../vendor/vendor';
import template from './form.template.jst.ejs';

export default Marionette.View.extend({
  tagName: 'form',
  template: template,
  ui: {
    myLocationBtn: '[data-ui="my-location"]',
    hostLocationBtn: '[data-ui="host-location"]',
    resetBtn: '[data-ui="reset"]',
    host: 'input[name="host"]',
  },
  events: {
    'click @ui.myLocationBtn': 'showMyLocation',
    'click @ui.hostLocationBtn': 'showHostLocation',
    'click @ui.resetBtn': 'resetMyLocation',
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
    deferred
      .done((response) => {
        if (response.message) {

        } else {
          this.triggerMethod('click:locate', response);
        }
      })
      .fail((response) => {
        console.error(response.statusText);
      });
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
