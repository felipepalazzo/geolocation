import {Marionette, Radio} from '../../vendor/vendor';

export default Marionette.View.extend({
  className: 'map',
  template: false,
  modelEvents: {
    'change:lat lon': 'onLatLngChange',
  },
  initialize(options) {
    const channel = Radio.channel('notify');
    this.myLocation = options.myLocation;
    this.defaultOpts = {zoom: 5};
    this.listenTo(channel, 'some:event', this.setMyLocationMark);
    this.listenTo(this.myLocation, 'change:lat lon', this.setMyLocationMark);
  },
  createMap() {
    this.map = new google.maps.Map(this.el, {
      zoom: this.defaultOpts.zoom,
    });
  },
  setMyLocationMark() {
    this.myLocationMark.setPosition({
      lat: this.myLocation.get('lat'),
      lng: this.myLocation.get('lon'),
    });
    this.myLocationMark.setAnimation(google.maps.Animation.DROP);
  },
  createHostLocationMark() {
    this.mark = new google.maps.Marker({
      map: this.map,
    });
  },
  createMyLocationMark() {
    this.myLocationMark = new google.maps.Marker({
      map: this.map,
    });
  },
  onLatLngChange() {
    this.setMark();
    this.setMapPosition();
  },
  setMark() {
    this.mark.setPosition({
      lat: this.model.get('lat'),
      lng: this.model.get('lon'),
    });
    this.mark.setAnimation(google.maps.Animation.DROP);
  },
  setMapPosition() {
    this.map.setCenter({
      lat: this.model.get('lat'),
      lng: this.model.get('lon'),
    });
  },
  onRender() {
    this.createMap();
    this.createHostLocationMark();
    this.createMyLocationMark();
  },
});
