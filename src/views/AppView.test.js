import AppView from './AppView';

describe('AppController', () => {
  describe('#constructor', () => {
    it('creates nessessary fields and methods', () => {
      const view = new AppView();

      expect(view.screenCount).toBe(0);
      expect(view.walk).toBe(0);
      expect(view.inputValue).toBe(null);
      expect(view.token).toBe('');
      expect(view.renderBaseView).toBeInstanceOf(Function);
      expect(view.moveSlider).toBeInstanceOf(Function);
      expect(view.checkSliderView).toBeInstanceOf(Function);
      expect(view.createButtonsView).toBeInstanceOf(Function);
      expect(view.createCardView).toBeInstanceOf(Function);
    });
  });
});
