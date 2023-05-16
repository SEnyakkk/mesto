export class Section {
  constructor({ items, renderer }, templateSelector) {
    this._template = document.querySelector(templateSelector);
    this._initialCards = items
    this.renderer = renderer
  }

  addCard() {
    this._initialCards.forEach(element => {
      this.addItem(this.renderer(element))
    });
  }

  addItem(elementDom) {
    this._template.prepend(elementDom)
  }

}

