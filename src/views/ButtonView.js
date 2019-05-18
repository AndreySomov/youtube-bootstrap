export default class ButtonView {
  constructor(className, id) {
    this.id = id;
    this.element = document.createElement('button');
    this.element.classList.add('button', className);
    this.element.setAttribute('data-id', id);

    this.element.innerHTML = '<div class="button-help"></div>';
  }
}
