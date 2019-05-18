import CardView from './CardView';
import ButtonView from './ButtonView';

export default class AppView {
  constructor() {
    this.screenCount = 0;
    this.walk = 0;
    this.inputValue = null;
    this.token = '';
  }

  renderBaseView() {
    this.app = document.createElement('div');
    this.app.className = 'app';
    this.form = document.createElement('form');
    this.form.classList.add('form');
    this.form.innerHTML = '<input type="text" class="input" placeholder="Введите запрос"></input>';

    this.slider = document.createElement('ul');
    this.slider.classList.add('slider', 'disactive-slider');

    this.app.appendChild(this.form);
    this.app.appendChild(this.slider);
    document.body.appendChild(this.app);
  }

  moveSlider() {
    const screenWidth = document.documentElement.clientWidth;
    this.slider.scrollTo({
      left: screenWidth * this.screenCount,
      behavior: 'smooth',
    });
  }

  checkSliderView() {
    if (this.screenCount >= 1) this.buttons[1].classList.remove('hidden');
    if (this.screenCount < 1) this.buttons[1].classList.add('hidden');
    if (this.screenCount >= 2) this.buttons[0].classList.remove('hidden');
    if (this.screenCount < 2) this.buttons[0].classList.add('hidden');

    this.buttons[0].firstElementChild.innerHTML = this.screenCount - 1;
    this.buttons[1].firstElementChild.innerHTML = this.screenCount;
    this.buttons[2].innerHTML = this.screenCount + 1;
    this.buttons[3].firstElementChild.innerHTML = this.screenCount + 2;
  }

  createButtonsView() {
    this.buttons = [];
    this.buttonContainer = document.createElement('div');
    this.buttonContainer.classList.add('button-container', 'hidden');

    const prevprevButton = new ButtonView('prev-prev-button', -2).element;
    prevprevButton.classList.add('hidden');

    const prevButton = new ButtonView('prev-button', -1).element;
    prevButton.classList.add('hidden');

    const currentButton = new ButtonView('current-button', 0).element;
    currentButton.innerHTML = '1';

    const nextButton = new ButtonView('next-button', 1).element;
    nextButton.firstElementChild.innerHTML = '2';

    this.buttons = [prevprevButton, prevButton, currentButton, nextButton];

    this.buttons.forEach(button => this.buttonContainer.appendChild(button));

    this.app.appendChild(this.buttonContainer);
  }

  createCardView(clipInfo) {
    clipInfo.forEach((item) => {
      const cardView = new CardView(item);
      this.slider.appendChild(cardView.element);
    });
  }
}
