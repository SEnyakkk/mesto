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

  _toggleButton() {
    inputValid(inputList) ? enableButton(button, inactiveButtonClass) : disableButton(button, inactiveButtonClass);
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
  _setEventListener(){
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInput(input)
        // this._toggleButton()
      })
    })
  }

  enableValidation() {
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._button = this._form.querySelector(this._submitButtonSelector);
    this._setEventListener();
    // this._toggleButton();
  }
}

// // включить кнопку
// function enableButton(button, inactiveButtonClass) {
//   button.classList.remove(inactiveButtonClass);
//   button.disabled = false;
// };
// // выключить кнопку
// function disableButton(button, inactiveButtonClass) {
//   button.classList.add(inactiveButtonClass);
//   button.disabled = true;
// }
// // проверка валидности для отображения кнопки
// function inputValid(inputList) {
//   return Array.from(inputList).every((input) => input.validity.valid);
// };
