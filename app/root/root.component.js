import {Marionette} from '../../vendor/vendor';
import template from './root.template.jst.ejs';
import FormView from '../form/form.component';
import PanelModel from '../panel/panel.model';
import PanelView from '../panel/panel.component';

export default Marionette.View.extend({
  template: template,
  regions: {
    formRegion: '[data-region="form"]',
    panelRegion: '[data-region="panel"]',
  },
  initialize() {
    this.PanelModel = new PanelModel();
  },
  onRender() {
    this.showForm();
    this.showPanel();
  },
  showForm() {
    this.showChildView('formRegion', new FormView({
      model: this.PanelModel,
    }));
  },
  showPanel() {
    this.showChildView('panelRegion', new PanelView({
      model: this.PanelModel,
    }));
  },
});
