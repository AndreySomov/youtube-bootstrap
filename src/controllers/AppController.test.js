import AppController from './AppController';
import AppModel from '../models/AppModel';
import AppView from '../views/AppView';
import ButtonsController from './ButtonsController';
import SliderController from './SliderController';

describe('AppController', () => {
  describe('#constructor', () => {
    it('creates nessessary fields and methods', () => {
      const view = new AppView();
      const model = new AppModel();
      const app = new AppController(model, view);

      expect(app.view).toBeInstanceOf(AppView);
      expect(app.model).toBeInstanceOf(AppModel);
      expect(app.token).toBe('');
      expect(app.sliderStatus).toBe(false);
      expect(app.checkSlider).toBeInstanceOf(Function);
      expect(app.fillSlider).toBeInstanceOf(Function);
      expect(app.start).toBeInstanceOf(Function);
    });

    describe('#checkSlider', () => {
      it('should call checkSliderView', () => {
        const view = new AppView();
        const model = new AppModel();
        const app = new AppController(model, view);

        app.view.checkSliderView = jest.fn();
        app.start();
        app.checkSlider();

        expect(app.view.checkSliderView).toHaveBeenCalledTimes(1);
      });

      it('should call checkSliderView', () => {
        const view = new AppView();
        const model = new AppModel();
        const app = new AppController(model, view);

        app.view.checkSliderView = jest.fn();
        app.start();
        app.checkSlider();

        expect(app.view.checkSliderView).toHaveBeenCalledTimes(1);
      });
    });

    describe('#start', () => {
      it('should change field right', () => {
        const view = new AppView();
        const model = new AppModel();
        const app = new AppController(model, view);

        app.start();
        expect(app.sliderConroller).toBeInstanceOf(SliderController);
        expect(app.buttonsController).toBeInstanceOf(ButtonsController);
        expect(app.view.form.onsubmit).toBeInstanceOf(Function);
      });
    });
  });
});
