import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.form')
    this._inputList = this._form.querySelectorAll('.form__data')
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value
    });
    console.log(this._inputValues)
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
      this._submitForm(this._getInputValues());
      this.close();
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}

