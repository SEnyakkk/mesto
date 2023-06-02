import { PopupWithForm } from "./PopupWithForm.js";

export class PopupDelet extends PopupWithForm {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._submitText = this._submitButton.value;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(this._submitButton.value, 'Да...')
      this._submitForm({ item: this._item, cardid: this._cardid });
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
