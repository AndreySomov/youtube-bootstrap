import testObjects from '../testObjects/testObjects';
import CardView from './CardView';

describe('CardView', () => {
  describe('#constructor', () => {
    it('contains HtmlElement', () => {
      const cardView = new CardView(testObjects.transformItem);

      expect(cardView.element).toBeInstanceOf(HTMLLIElement);
      expect(cardView.element.children[0]).toBeInstanceOf(HTMLDivElement);
      expect(cardView.element.children[0].className).toBe('card-container');
    });
  });
});
