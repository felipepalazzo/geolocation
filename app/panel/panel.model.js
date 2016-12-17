import {Backbone} from '../../vendor/vendor';

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
});
