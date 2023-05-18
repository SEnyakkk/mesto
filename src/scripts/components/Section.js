export class Section {
  constructor({ items, renderer }, templateSelector) {
    this._template = document.querySelector(templateSelector);
    // this._initialCards = items
    this._renderer = renderer
  }

  // addCard() {
  //   this._initialCards.forEach(element => {
  //     this.addItem(element)
  //   });
  // }

  addCard(items) {
    this._initialCards = items
    items.forEach(element => {
      this._renderer(element);
    });
  }

  addItem(element) {
    this._template.prepend(element);
  }

}

