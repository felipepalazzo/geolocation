import {Marionette, $} from '../../vendor/vendor';
import template from './form.template.jst.ejs';

export default Marionette.View.extend({
  tagName: 'form',
  template: template,
  ui: {
    myLocationBtn: '[data-ui="my-location"]',
    hostLocationBtn: '[data-ui="host-location"]',
    host: 'input[name="host"]',
  },
  events: {
    'click @ui.myLocationBtn': 'showGeoLocation',
    'click @ui.hostLocationBtn': 'showHostLocation',
  },
  showGeoLocation() {
    let deferred = this.getMyGeoLocation();
    deferred
      .done((response) => {
        this.triggerMethod('click:myLocation', response);
      });
  },
  showHostLocation() {
    let host = this.ui.host.val();
    let deferred = this.getHostGeoLocation(host);
    deferred
      .done((response) => {
        this.triggerMethod('click:locate', response);
      });
  },
  getMyGeoLocation() {
    return $.get('http://ip-api.com/json/');
  },
  getHostGeoLocation(host) {
    return $.get('http://ip-api.com/json/' + host);
  },
});
