import { Popup } from "./Popup.js";

export class PopupDelet extends Popup {
  constructor(poupSelector, submitPopup) {
    super(poupSelector);
    this._submitPopup = submitPopup;
    this._submitButton = this._form.querySelector('.form__save');
    this._submitText = this._submitButton.value
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitButton.value = (`${this._submitButton.value}...`)
      this._submitPopup({ item: this._item, cardid: this._cardid });
    })
  }

  open = ({ item, cardid }) => {
    super.open();
    this._item = item;
    this._cardid = cardid;
  }

  setSubmitText() {
    this._submitButton.value = this._submitText;
  }
}
