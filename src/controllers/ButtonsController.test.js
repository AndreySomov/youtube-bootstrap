import data from '../testObjects/testObjects';
import ButtonsController from './ButtonsController';

describe('ButtonsController', () => {
  describe('#constructor', () => {
    it('creates nessessary fields', () => {
      const buttonsController = new ButtonsController(data.context);

      expect(buttonsController.context).toEqual(data.context);
      expect(buttonsController.view).toEqual(data.context.view);
      expect(buttonsController.buttonContainer.onclick).toBeInstanceOf(Function);
    });
  });
});

describe('#onClick', () => {
  const buttonsController = new ButtonsController(data.context);
  it('should work when event has data-attribute', () => {
    buttonsController.view.moveSlider = jest.fn();
    buttonsController.context.checkSlider = jest.fn();

    const target = document.createElement('button');
    target.setAttribute('data-id', '1');
    const event = { target };
    buttonsController.onClick(event);

    expect(buttonsController.context).toEqual(data.context);
    expect(buttonsController.view.moveSlider).toHaveBeenCalledTimes(1);
    expect(buttonsController.context.checkSlider).toHaveBeenCalledTimes(1);
  });

  it('should not work when event without data-attribute', () => {
    buttonsController.view.moveSlider = jest.fn();
    buttonsController.context.checkSlider = jest.fn();

    const target = document.createElement('button');
    const event = { target };
    buttonsController.onClick(event);

    expect(buttonsController.context).toEqual(data.context);
    expect(buttonsController.view.moveSlider).toHaveBeenCalledTimes(0);
    expect(buttonsController.context.checkSlider).toHaveBeenCalledTimes(0);
  });
});

describe('#hideButtons', () => {
  it('adds class hidden', async () => {
    const buttonsController = new ButtonsController(data.context);
    buttonsController.hideButtons();
    expect(buttonsController.buttonContainer.classList.contains('hidden')).toBe(true);
  });
});

describe('#showButtons', () => {
  it('removes class hidden', () => {
    const buttonsController = new ButtonsController(data.context);
    buttonsController.buttonContainer.classList.add('hidden');

    buttonsController.showButtons();
    expect(buttonsController.buttonContainer.classList.contains('hidden')).toBe(false);
  });
});
