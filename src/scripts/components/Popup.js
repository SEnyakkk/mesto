export class Popup {
  constructor(poupSelector) {
    this._popup = document.querySelector(poupSelector);
    this._popupClose = this._popup.querySelector('.popup__close-button');
  }

  _popupCloseButton = () => {
    this.close()
  }

  _closePopupOverlay = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close()
    };
  }

  _closePopupEsc = (evt) => {
    const key = evt.key;
    if (key === 'Escape') {
      this.close()
    };
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading) {
      this._submitButton.value = loadingText;
    } else {
      this._submitButton.value = this._submitText;
    }
  }


  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupEsc);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupEsc);
  }

  setEventListener() {
    this._popupClose.addEventListener('click', this._popupCloseButton);
    this._popup.addEventListener('mousedown', this._closePopupOverlay);
  }
}
