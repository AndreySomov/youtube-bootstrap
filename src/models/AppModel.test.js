import AppModel from './AppModel';
import testObjects from '../testObjects/testObjects';
import 'whatwg-fetch';
import constants from '../constants';


describe('AppModel', () => {
  describe('#constructor', () => {
    it('creates nessessary fields', () => {
      const key = 'key';
      const domain = 'domain';
      const model = new AppModel(key, domain);

      expect(model.key).toEqual(key);
      expect(model.domain).toEqual(domain);
    });
  });

  describe('#getClipIds', () => {
    it('Should return object with ids and nextPageToken properties', () => {
      const model = new AppModel(constants.key, constants.domain);
      const inputValue = 'game of throns';
      const nextPageToken = 'CABQAA';
      const result = model.getClipIds(inputValue, nextPageToken);

      expect(result).toBeInstanceOf(Object);
    });
  });

  describe('#getClipInfo', () => {
    it('Should return array with Objects', async () => {
      const model = new AppModel(constants.key, constants.domain);
      const ids = 'ljAZReGojzU,';
      const result = await model.getClipInfo(ids);

      expect(result).toBeInstanceOf(Object);
      expect(result.items[0].snippet.title).toBe('Brook Lopez Full Game 1 Highlights Bucks vs Raptors 2019 NBA Playoffs - 29 Pts, 11 Reb, 4 Blk!');
    });
  });

  describe('#parseData', () => {
    it('parses data and returns correct array', () => {
      expect(AppModel.parseData(testObjects.clipInfo)).toEqual(testObjects.transformInfo);
    });
  });
});
