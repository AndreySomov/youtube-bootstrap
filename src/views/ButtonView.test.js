import ButtonView from './ButtonView';

describe('CardView', () => {
  describe('#constructor', () => {
    it('contains HtmlElement', () => {
      const button = new ButtonView('test', 10);

      expect(button.element).toBeInstanceOf(HTMLButtonElement);
      expect(button.element.getAttribute('data-id')).toBe('10');
      expect(button.element.classList.contains('button')).toBe(true);
      expect(button.element.classList.contains('test')).toBe(true);
      expect(button.element.firstChild).toBeInstanceOf(HTMLDivElement);
      expect(button.element.firstChild.className).toBe('button-help');
    });
  });
});
