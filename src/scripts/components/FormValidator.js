export class FormValidator {
  constructor(validationConfig, form) {
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inputErrorTemplate = validationConfig.inputErrorTemplate;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._form = form;
    this._inputList = form.querySelectorAll(this._inputSelector);
    this._button = form.querySelector(this._submitButtonSelector);
  }

  _checkInput() {
    this._errorText = this._form.querySelector(`${this._inputErrorTemplate}${this._input.name}`);
    this._input.validity.valid ? this._hideInputError() : this._showInputError();
  }

  _hideInputError() {
    this._input.classList.remove(this._inputErrorClass);
    this._errorText.textContent = '';
    this._errorText.classList.remove(this._errorClass);
  }

  _showInputError() {
    this._input.classList.add(this._inputErrorClass);
    this._errorText.textContent = this._input.validationMessage;
    this._errorText.classList.add(this._errorClass);
  }

  _inputValid() {
    return Array.from(this._inputList).every((input) => input.validity.valid);
  }

  resetValidation() {
    this._inputList.forEach((input) => {
      this._input = input;
      this._errorText = this._form.querySelector(`${this._inputErrorTemplate}${this._input.name}`);
      this._hideInputError();
    });
    this._disableButton();
  }

  _toggleButton() {
    this._inputValid() ? this._enableButton() : this._disableButton();
  }

  _enableButton() {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.disabled = false;
  };

  _disableButton() {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = true;
  }

  _setEventListener() {
    this._toggleButton()
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._input = input;
        this._checkInput()
        this._toggleButton()
      })
    })
  }

  enableValidation() {

    this._setEventListener();
  }
}
