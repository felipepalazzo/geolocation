import {_, Backbone} from '../../vendor/vendor';

export default Backbone.Model.extend({
  defaults: {
    query: '',
    country: '',
    regionName: '',
    city: '',
    timezone: '',
    lat: '',
    lon: '',
  },
  clearAll() {
    let attrs = _.clone(this.attributes);
    _.each(attrs, (val, key) => {
      this.set(key, '');
    }, this);
  },
});
