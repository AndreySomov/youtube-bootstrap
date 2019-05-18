export default class SliderController {
  constructor(context) {
    this.context = context;
    this.view = this.context.view;
    this.slider = this.context.view.slider;
    this.isDown = false;
    this.startX = 0;
    this.scrollLeft = 0;
    this.offset = 0;

    this.slider.onmousedown = this.onDown.bind(this);
    this.slider.onmouseleave = this.onLeave.bind(this);
    this.slider.onmouseup = this.onUp.bind(this);
    this.slider.onmousemove = this.onMove.bind(this);
    this.slider.ontouchstart = this.onDown.bind(this);
    this.slider.ontouchend = this.onUp.bind(this);
    this.slider.ontouchcancel = this.onLeave.bind(this);
    this.slider.ontouchmove = this.onMove.bind(this);
  }

  static unify(event) {
    return event.targetTouches ? event.targetTouches[0] : event;
  }

  onDown(event) {
    if (!this.context.sliderStatus) return;
    this.activateSlider();
    const newEvent = SliderController.unify(event);
    this.isDown = true;
    this.scrollLeft = this.slider.scrollLeft;
    this.startX = newEvent.pageX;
  }

  onLeave() {
    this.deactivateSlider();
    if (!this.isDown) return;
    this.isDown = false;
    this.view.moveSlider();
    this.context.checkSlider();
  }

  changeScreenCount() {
    if (this.offset > 30) this.view.screenCount += this.view.screenCount === 0 ? 0 : -1;

    if (this.offset <= 30) this.view.screenCount += 1;
  }

  onUp() {
    if (!this.isDown) return;
    this.deactivateSlider();
    this.isDown = false;
    this.changeScreenCount();
    this.view.moveSlider();
    this.context.checkSlider();
  }

  onMove(event) {
    event.preventDefault();
    if (!this.isDown) return;

    const newEvent = SliderController.unify(event);
    const x = newEvent.pageX - this.slider.offsetLeft;
    const walk = (x - this.startX);
    this.offset = walk;
    this.slider.scrollLeft = this.scrollLeft - walk;
  }

  activateSlider() {
    const screenWidth = document.documentElement.clientWidth;
    if (screenWidth < 790) return; // return
    this.slider.classList.remove('deactivated-slider'); // field
    this.slider.classList.add('activated-slider'); // field
  }

  deactivateSlider() {
    const screenWidth = document.documentElement.clientWidth;
    if (screenWidth < 790) return; // return
    this.slider.classList.add('deactivated-slider'); // field
    this.slider.classList.remove('activated-slider'); // field
  }

  destroySlider() {
    this.view.slider.innerHTML = '';
    this.context.token = '';
    this.view.screenCount = 0;
    this.view.checkSliderView();
  }
}
