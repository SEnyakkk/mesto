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
      this._submitPopup({item: this._item, cardid: this._cardid});
    })
  }

  open = ({item, cardid}) => {
    super.open();
    this._item = item;
    this._cardid = cardid;
  }
}
