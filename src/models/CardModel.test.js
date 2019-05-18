import CardModel from './CardModel';
import testObject from '../testObjects/testObjects';

describe('CardModel', () => {
  describe('#constructor', () => {
    it('creates nessessary fields', () => {
      const card = new CardModel(testObject.clipItem);

      expect(card.title).toEqual(testObject.transformItem.title);
      expect(card.description).toEqual(testObject.transformItem.description);
      expect(card.viewCount).toEqual(testObject.transformItem.viewCount);
      expect(card.dislikeCount).toEqual(testObject.transformItem.dislikeCount);
      expect(card.likeCount).toEqual(testObject.transformItem.likeCount);
      expect(card.channelTitle).toEqual(testObject.transformItem.channelTitle);
      expect(card.publishedAt).toEqual(testObject.transformItem.publishedAt);
      expect(card.imgUrl).toEqual(testObject.transformItem.imgUrl);
      expect(card.id).toEqual(testObject.transformItem.id);
    });
  });
});
