import {Marionette} from '../../vendor/vendor';
import template from './panel.template.jst.ejs';

export default Marionette.View.extend({
  template: template,
  modelEvents: {
    'change': 'render',
  },
});
