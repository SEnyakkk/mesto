// //класс создания карточек
export class Card {
  constructor(data, templateSelector, openZoomPopup) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._openZoomPopup = openZoomPopup;
  }

  _getTemplate() {
    const cdElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return cdElement;
  }

  createCard() {
    this._cardElement = this._getTemplate();
    this._deleteElement = this._cardElement.querySelector('.element__delete');
    this._imageElement = this._cardElement.querySelector('.element__image');
    this._textElement = this._cardElement.querySelector('.element__text');
    this._groupElement = this._cardElement.querySelector('.element__group');
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._setEventListeners()
    return this._cardElement;
  }

  //удаление елемента
  _handleDelete() {
    this._cardElement.remove();
  };

  //отметить элемент
  _handleLike() {
    this._groupElement.classList.toggle('element__group_active');
  };

  //увеличить элемент
  _handleZoom() {
    this._openZoomPopup(this._link, this._name)
  }

  //слушатели кнопок и открытия элемента
  _setEventListeners(card) {
    this._deleteElement.addEventListener('click', () => {this._handleDelete();});
    this._groupElement.addEventListener('click', () => {this._handleLike();});
    this._imageElement.addEventListener('click', () => {this._handleZoom();});
  }
}