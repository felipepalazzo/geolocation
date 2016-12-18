/* globals describe, it, expect */
import MapModel from '../../app/map/map.model';

describe('MapModel', () => {
  it('should be defined', () => {
    expect(MapModel).toBeDefined();
  });
  it('can be instantiated', () => {
    let map = new MapModel();
    expect(map).not.toBeNull();
  });
});
