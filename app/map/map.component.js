import {Marionette} from '../../vendor/vendor';

export default Marionette.View.extend({
  className: 'map',
  template: false,
  createMap() {
    this.map = new google.maps.Map(this.el, {
      zoom: 5,
      center: {lat: -25.363, lng: 131.044},
    });
  },
  onRender() {
    this.createMap();
  },
});
