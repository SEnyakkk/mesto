export class Card {
  constructor(data, templateSelector, openZoomPopup, openPopupDelet, handleActivLike) {
    this._link = data.link;
    this._name = data.name;
    this._myid = data.myid;
    this._ownerid = data.owner._id;
    this._likes = data.likes;
    this._likesLength = data.likes.length;
    this._handleActivLike = handleActivLike;
    this._isLiked = false;
    this._cardid = data._id;
    this._templateSelector = templateSelector;
    this._openZoomPopup = openZoomPopup;
    this._openPopupDelet = openPopupDelet;
    this._cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    this._deleteElement = this._cardElement.querySelector('.element__delete');
    this._imageElement = this._cardElement.querySelector('.element__image');
    this._textElement = this._cardElement.querySelector('.element__text');
    this._likeButton = this._cardElement.querySelector('.element__like');
    this._counter = this._cardElement.querySelector('.element__counter');
  }

  createCard() {
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._textElement.textContent = this._name;
    this._setEventListeners()
    this._toggleTrashButton()
    this._findMyLike()
    return this._cardElement;
  }

  //отметить элемент
  _handleLike() {
    this._handleActivLike(this._isLiked, this._cardid)
    // this._likeButton.classList.toggle('element__like_active');
  };

  //проверка на наличие моего лайка
  _findMyLike() {
    this._likes.forEach(like => {
      if (like._id === this._myid) {
        this._likeButton.classList.add('element__like_active');
        this._isLiked = true;
        return
      }
    });
    this._counter.textContent = this._likesLength
  }

  toggleLike(likes) {
    this._likeButton.classList.toggle('element__like_active');
    this._isLiked = this._likeButton.classList.contains('element__like_active') ? true : false;
    this._counter.textContent = likes.length
  }



  //удаление елемента
  _handleDelete() {
    // this._cardElement.remove();
    this._openPopupDelet({ item: this, cardid: this._cardid });
  };

  //отображенеи иконки удаления карточки
  _toggleTrashButton() {
    this._myid === this._ownerid ? this._deleteElement.style.display = 'block' : this._deleteElement.style.display = 'none'
  }

  deletCard() {
    this._cardElement.remove();
  }

  //увеличить элемент
  _handleZoom() {
    this._openZoomPopup(this._link, this._name)
  }

  //слушатели кнопок и открытия элемента
  _setEventListeners(card) {
    this._deleteElement.addEventListener('click', () => { this._handleDelete(); });
    this._likeButton.addEventListener('click', () => { this._handleLike(); });
    this._imageElement.addEventListener('click', () => { this._handleZoom(); });
  }
}
