import {Marionette, $, _, Radio} from '../../vendor/vendor';
import template from './panel.template.jst.ejs';
window.jQuery = $;
require('bootstrap');

export default Marionette.View.extend({
  template: template,
  ui: {
    tooltipEl: '[data-ui="tooltip"]',
  },
  initialize() {
    const channel = Radio.channel('notify');
    this.listenTo(channel, 'reset:location add:location', this.render);
  },
  onRender() {
    this.toggleIcon();
    this.initTooltip();
  },
  toggleIcon() {
    let isVisible = !!(this.model.get('lat') || this.model.get('lon'));
    this.ui.tooltipEl.toggleClass('hidden', !isVisible);
  },
  initTooltip() {
    _.each(this.ui.tooltipEl, (elem) => {
      let $elem = $(elem);
      let field = $elem.data('field');
      $elem.tooltip({
        title: 'This is your ' + field + ' from ISP ' + this.model.get('isp'),
      });
    }, this);
  },
  onBeforeDestroy() {
    this.ui.tooltipEl.tooltip('destroy');
  },
});
