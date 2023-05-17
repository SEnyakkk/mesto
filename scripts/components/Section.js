export class Section {
  constructor({ items, renderer }, templateSelector) {
    this._template = document.querySelector(templateSelector);
    this._initialCards = items
    this._renderer = renderer
  }

  addCard() {
    this._initialCards.forEach(element => {
      this.addItem(element)
    });
  }

  addItem(element) {
    this._template.prepend(this._renderer(element));
  }

}

