import { Popup } from "./Popup.js";

export class PopupDelet extends Popup {
  constructor(poupSelector, submitPopup) {
    super(poupSelector);
    this._submitPopup = submitPopup;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitPopup(this._item);
    })
  }

  open = (item) => {
    super.open();
    this._item = item
  }
}
