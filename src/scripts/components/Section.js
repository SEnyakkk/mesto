export class Section {
  constructor(renderer, templateSelector) {
    this._template = document.querySelector(templateSelector);
    // this._initialCards = items
    this._renderer = renderer
  }

  addCard(items) {
    // this._initialCards = items
    items.forEach(element => {
      this._renderer(element);
    });
  }

  addItem(element) {
    this._template.prepend(element);
  }

}

