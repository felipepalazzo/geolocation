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
    this.listenTo(channel, 'add:location', this.setMyLocationMark);
    this.listenTo(channel, 'reset:location', this.resetMyLocationMark);
  },
  createMap() {
    this.map = new google.maps.Map(this.el, {
      zoom: this.defaultOpts.zoom,
    });
  },
  setMyLocationMark() {
    let lat = this.myLocation.get('lat');
    let lng = this.myLocation.get('lon');
    this.myLocationMark.setMap(this.map);
    this.myLocationMark.setPosition({
      lat: lat,
      lng: lng,
    });
    this.myLocationMark.setAnimation(google.maps.Animation.DROP);
    this.setMapPosition(lat, lng);
  },
  resetMyLocationMark() {
    this.myLocationMark.setMap(null);
  },
  createHostLocationMark() {
    this.mark = new google.maps.Marker({
      map: this.map,
    });
  },
  createMyLocationMark() {
    this.myLocationMark = new google.maps.Marker();
  },
  onLatLngChange() {
    this.setMark();
    this.setMapPosition(this.model.get('lat'), this.model.get('lon'));
  },
  setMark() {
    this.mark.setPosition({
      lat: this.model.get('lat'),
      lng: this.model.get('lon'),
    });
    this.mark.setAnimation(google.maps.Animation.DROP);
  },
  setMapPosition(lat, lng) {
    this.map.setCenter({
      lat: lat,
      lng: lng,
    });
  },
  onRender() {
    this.createMap();
    this.createHostLocationMark();
    this.createMyLocationMark();
  },
});
