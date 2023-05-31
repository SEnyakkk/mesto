import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.form');
    this._inputList = this._form.querySelectorAll('.form__data');
    this._submitButton = this._form.querySelector('.form__save');
    this._submitText = this._submitButton.value;
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value
    });
    return this._inputValues
  }


  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    })
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submitButton.value = `${this._submitButton.value}...`
      this._submitForm(this._getInputValues());
    })
  }

  setSubmitText() {
    this._submitButton.value = this._submitText;
  }

  close() {
    super.close();
    this._form.reset();
  }
}

