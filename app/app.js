import {Marionette} from '../vendor/vendor';
import RootView from './root/root.component';

export default Marionette.Application.extend({
  region: '[data-region="app"]',
  onStart() {
    this.showView( new RootView() );
  },
});
