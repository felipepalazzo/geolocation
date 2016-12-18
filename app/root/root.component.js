import {Marionette, Radio} from '../../vendor/vendor';
import template from './root.template.jst.ejs';
import FormView from '../form/form.component';
import MapModel from '../map/map.model';
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
    'click:myLocation': 'onMyLocationClick',
    'click:locate': 'onLocateClick',
    'click:reset': 'resetMyLocation',
  },
  initialize() {
    this.panelModel = new PanelModel();
    this.mapModel = new MapModel();
    this.channel = Radio.channel('notify');
  },
  onRender() {
    this.showForm();
    this.showPanel();
  },
  onMyLocationClick(model) {
    this.panelModel.set(model);
    this.channel.trigger('click:location');
  },
  onLocateClick(host) {
    if ( !this.getRegion('mapRegion').hasView() ) {
      this.showMap();
    }
    this.mapModel.set(host);
  },
  resetMyLocation() {
    this.panelModel.clearAll();
  },
  showMap(host) {
    this.showChildView('mapRegion', new MapView({
      model: this.mapModel,
      myLocation: this.panelModel,
    }));
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
