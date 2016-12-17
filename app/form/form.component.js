import {Marionette, $} from '../../vendor/vendor';
import template from './form.template.jst.ejs';

export default Marionette.View.extend({
  tagName: 'form',
  template: template,
  ui: {
    button: '[data-ui="button"]',
  },
  events: {
    'click @ui.button': 'showGeoLocation',
  },
  showGeoLocation() {
    let deferred = this.getGeoLocation();
    deferred.done((response) => {
      this.model.set(response);
    });
  },
  getGeoLocation() {
    return $.get('http://ip-api.com/json/');
  },
});
