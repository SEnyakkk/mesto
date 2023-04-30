export class FormValidator {
  constructor(validationConfig, form) {
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inputErrorTemplate = validationConfig.inputErrorTemplate;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._form = form;
  }

  _checkInput(input) {
    const errorText = this._form.querySelector(`${this._inputErrorTemplate}${input.name}`);
    input.validity.valid ? this._hideInputError(input, errorText) : this._showInputError(input, errorText);
  }

  _hideInputError(input, errorText) {
    input.classList.remove(this._inputErrorClass);
    errorText.textContent = '';
    errorText.classList.remove(this._errorClass);
  }

  _showInputError(input, errorText) {
    input.classList.add(this._inputErrorClass);
    errorText.textContent = input.validationMessage;
    errorText.classList.add(this._errorClass);
  }

  _inputValid() {
    return Array.from(this._inputList).every((input) => input.validity.valid);
  }

  _toggleButton() {
    this._inputValid() ? this._enableButton() : this._disableButton(this._button);
  }

  _enableButton() {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.disabled = false;
  };

  _disableButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = true;
  }

  _setEventListener(){
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInput(input)
        this._toggleButton()
      })
    })
  }

  enableValidation() {
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._setEventListener();
  }
}
