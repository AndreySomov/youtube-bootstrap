export default class ButtonsController {
  constructor(context) {
    this.context = context;
    this.view = this.context.view;
    this.buttonContainer = this.view.buttonContainer;

    this.buttonContainer.onclick = this.onClick.bind(this);
  }

  onClick(event) {
    if (event.target.hasAttribute('data-id')) {
      this.view.screenCount += +event.target.getAttribute('data-id');
      this.view.moveSlider();
      this.context.checkSlider();
    }
  }

  hideButtons() {
    this.buttonContainer.classList.add('hidden');
  }

  showButtons() {
    this.buttonContainer.classList.remove('hidden');
  }
}
