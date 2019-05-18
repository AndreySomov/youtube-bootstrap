import AppModel from '../models/AppModel';
import SliderController from './SliderController';
import ButtonsController from './ButtonsController';

export default class AppController {
  constructor(model, view) {
    this.inputValue = null;
    this.model = model;
    this.view = view;
    this.token = '';
    this.sliderStatus = false;
  }

  async fillSlider(event) {
    if (event) event.preventDefault();

    const newInputValue = this.view.form.children[0].value;
    if (this.inputValue !== newInputValue) {
      this.sliderStatus = false;
      this.sliderConroller.destroySlider();
      this.buttonsController.hideButtons();
    }
    if (newInputValue === '') return;

    this.sliderStatus = true;
    this.inputValue = newInputValue;

    const searchData = await this.model.getClipIds(this.inputValue, this.token);
    if (searchData.ids.length === 0) return;

    this.token = searchData.nextPageToken;

    const videoData = await this.model.getClipInfo(searchData.ids);
    const transformData = AppModel.parseData(videoData);
    this.view.createCardView(transformData);
    this.buttonsController.showButtons();
  }

  checkSlider() {
    this.view.checkSliderView();
    const sliderSCR = this.view.slider.scrollWidth;
    const scrWidth = document.documentElement.clientWidth;
    if (this.view.screenCount * scrWidth > sliderSCR - scrWidth * 3) this.fillSlider();
  }


  start() {
    this.view.renderBaseView();
    this.view.form.onsubmit = this.fillSlider.bind(this);

    this.sliderConroller = new SliderController(this);

    this.view.createButtonsView();
    this.buttonsController = new ButtonsController(this);
  }
}
