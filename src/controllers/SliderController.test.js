import data from '../testObjects/testObjects';
import SliderController from './SliderController';

describe('SliderController', () => {
  describe('#constructor', () => {
    const sliderController = new SliderController(data.context);

    it('creates nessessary fields', () => {
      expect(sliderController.context).toEqual(data.context);
      expect(sliderController.view).toEqual(data.context.view);
      expect(sliderController.slider).toEqual(data.context.view.slider);
      expect(sliderController.isDown).toEqual(false);
      expect(sliderController.startX).toEqual(0);
      expect(sliderController.scrollLeft).toEqual(0);
      expect(sliderController.offset).toEqual(0);
    });

    it('binds function events', () => {
      expect(sliderController.slider.onmousedown).toBeInstanceOf(Function);
      expect(sliderController.slider.onmouseleave).toBeInstanceOf(Function);
      expect(sliderController.slider.onmouseup).toBeInstanceOf(Function);
      expect(sliderController.slider.onmousemove).toBeInstanceOf(Function);
      expect(sliderController.slider.ontouchstart).toBeInstanceOf(Function);
      expect(sliderController.slider.ontouchend).toBeInstanceOf(Function);
      expect(sliderController.slider.ontouchcancel).toBeInstanceOf(Function);
      expect(sliderController.slider.ontouchmove).toBeInstanceOf(Function);
    });
  });

  describe('#unify', () => {
    it('returns events for current device', () => {
      expect(SliderController.unify(data.event)).toEqual(1);
      expect(SliderController.unify(data.emptyEvent)).toEqual(data.emptyEvent);
    });
  });

  describe('#onDown', () => {
    it('if context.sliderStatus is false to do nothing', () => {
      const sliderController = new SliderController(data.context);

      sliderController.activateSlider = jest.fn();
      sliderController.context.sliderStatus = false;
      sliderController.onDown();

      expect(sliderController.activateSlider).toHaveBeenCalledTimes(0);
    });

    it('changes fields', () => {
      const sliderController = new SliderController(data.context);

      sliderController.context.sliderStatus = true;
      SliderController.unify = jest.fn(() => data.emptyEvent);
      sliderController.activateSlider = jest.fn();

      sliderController.onDown();

      expect(sliderController.isDown).toEqual(true);
      expect(sliderController.scrollLeft).toEqual(0);
      expect(sliderController.startX).toEqual(100);
    });

    it('calls functions', () => {
      const sliderController = new SliderController(data.context);
      sliderController.context.sliderStatus = true;
      SliderController.unify = jest.fn(() => data.emptyEvent);
      sliderController.activateSlider = jest.fn();

      sliderController.onDown();

      expect(SliderController.unify).toHaveBeenCalledTimes(1);
      expect(sliderController.activateSlider).toHaveBeenCalledTimes(1);
    });
  });

  describe('#onLeave', () => {
    it('if context.sliderStatus is false to do nothing', () => {
      const sliderController = new SliderController(data.context);
      sliderController.isDown = true;

      sliderController.activateSlider = jest.fn();
      sliderController.context.sliderStatus = false;
      sliderController.onDown();

      expect(sliderController.activateSlider).toHaveBeenCalledTimes(0);
    });

    it('changes data', () => {
      const sliderController = new SliderController(data.context);
      sliderController.isDown = true;

      sliderController.deactivateSlider = jest.fn();
      sliderController.view.moveSlider = jest.fn();
      sliderController.context.checkSlider = jest.fn();
      sliderController.view.checkSliderView = jest.fn();

      sliderController.onLeave();

      expect(sliderController.isDown).toEqual(false);
      expect(sliderController.deactivateSlider).toHaveBeenCalledTimes(1);
      expect(sliderController.view.moveSlider).toHaveBeenCalledTimes(1);
      expect(sliderController.context.checkSlider).toHaveBeenCalledTimes(1);
    });
  });

  describe('#destroySlider', () => {
    it('clears slider data', () => {
      const sliderController = new SliderController(data.context);

      sliderController.view.slider.innerHTML = 'text';
      sliderController.context.token = 666;
      sliderController.view.screenCount = 10;
      sliderController.slider.classList.add('class');

      expect(sliderController.view.slider.innerHTML).toEqual('text');
      expect(sliderController.context.token).toEqual(666);
      expect(sliderController.view.screenCount).toEqual(10);
      expect(sliderController.slider.classList.contains('class')).toBe(true);

      sliderController.destroySlider();

      expect(sliderController.view.slider.innerHTML).toEqual('');
      expect(sliderController.context.token).toEqual('');
      expect(sliderController.view.screenCount).toEqual(0);
    });
  });
});
