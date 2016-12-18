import {_, Backbone} from '../../vendor/vendor';

export default Backbone.Model.extend({
  defaults: {
    query: '0.0.0.0',
    country: '',
    regionName: '',
    city: '',
    timezone: '',
    lat: '',
    lon: '',
    isp: '',
  },
  clearAll() {
    let attrs = _.clone(this.attributes);
    _.each(attrs, (val, key) => {
      key !== 'query' ? this.set(key, '') : this.set(key, '0.0.0.0');
    }, this);
  },
});
