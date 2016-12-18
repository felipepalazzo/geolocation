/* globals describe, it, expect */
import PanelModel from '../../app/panel/panel.model';

describe('PanelModel', () => {
  it('should be defined', () => {
    expect(PanelModel).toBeDefined();
  });
  it('can be instantiated', () => {
    let panel = new PanelModel();
    expect(panel).not.toBeNull();
  });
  describe('defaults', () => {
    it('should have IP default value', () => {
      let panel = new PanelModel();
      expect(panel.get('query')).toEqual('0.0.0.0');
    });
  });
  describe('#resetDefaults', () => {
    it('should reset all attributes', () => {
      let panel = new PanelModel({
        country: 'France',
        city: 'Paris',
      });
      panel.resetDefaults();
      expect(panel.get('country')).toBeFalsy();
      expect(panel.get('city')).toBeFalsy();
    });
  });
});
