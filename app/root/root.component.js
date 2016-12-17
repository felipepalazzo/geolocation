import {Marionette} from '../../vendor/vendor';
import template from './root.template.jst.ejs';
import FormView from '../form/form.component';
import MapView from '../map/map.component';
import PanelModel from '../panel/panel.model';
import PanelView from '../panel/panel.component';

export default Marionette.View.extend({
  template: template,
  regions: {
    formRegion: '[data-region="form"]',
    panelRegion: '[data-region="panel"]',
    mapRegion: '[data-region="map"]',
  },
  childViewEvents: {
    'click:myLocation': 'changePanel',
    'click:locate': 'showMap',
  },
  initialize() {
    this.panelModel = new PanelModel();
  },
  onRender() {
    this.showForm();
    this.showPanel();
    this.showMap();
  },
  changePanel(model) {
    this.panelModel.set(model);
  },
  showMap(host) {
    this.showChildView('mapRegion', new MapView());
  },
  showForm() {
    this.showChildView('formRegion', new FormView());
  },
  showPanel() {
    this.showChildView('panelRegion', new PanelView({
      model: this.panelModel,
    }));
  },
});
