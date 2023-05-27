export class Card {
  constructor(data, templateSelector, openZoomPopup, openPopupDelet) {
    this._link = data.link;
    this._name = data.name;
    this._myId = data.myid;
    this._ownerId = data.owner._id;
    this._templateSelector = templateSelector;
    this._openZoomPopup = openZoomPopup;
    this._openPopupDelet = openPopupDelet;

  }

  _getTemplate() {
    const tempElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return tempElement;
  }

  createCard() {
    this._cardElement = this._getTemplate();
    this._deleteElement = this._cardElement.querySelector('.element__delete');
    this._imageElement = this._cardElement.querySelector('.element__image');
    this._textElement = this._cardElement.querySelector('.element__text');
    this._likeButton = this._cardElement.querySelector('.element__group');
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._setEventListeners()
    this._myTrashButton()
    return this._cardElement;
  }

  _myTrashButton() {
    this._myId === this._ownerId ? this._deleteElement.style.display = 'block' : this._deleteElement.style.display = 'none'
  }

  //удаление елемента
  _handleDelete() {
    // this._cardElement.remove();
    this._openPopupDelet(this)
  };

  deletCard() {
    this._cardElement.remove();
  }

  //отметить элемент
  _handleLike() {
    this._likeButton.classList.toggle('element__group_active');
  };

  //увеличить элемент
  _handleZoom() {
    this._openZoomPopup(this._link, this._name)
  }

  //слушатели кнопок и открытия элемента
  _setEventListeners(card) {
    this._deleteElement.addEventListener('click', () => {this._handleDelete();});
    this._likeButton.addEventListener('click', () => {this._handleLike();});
    this._imageElement.addEventListener('click', () => {this._handleZoom();});
  }
}
