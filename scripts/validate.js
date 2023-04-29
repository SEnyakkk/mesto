// const validationConfig = {
//   inputSelector: '.form__data',
//   submitButtonSelector: '.form__save',
//   inputErrorTemplate: '.popup__invalid_',
//   inactiveButtonClass: 'form__save_disabled',
//   inputErrorClass: 'form__data_invalid',
//   errorClass: 'popup__invalid_visible'
// };

// export class FormValidator {
//   constructor(validationConfig, form) {
//     this._inputSelector = validationConfig.inputSelector;
//     this._submitButtonSelector = validationConfig.submitButtonSelector;
//     this._inputErrorTemplate = validationConfig.inputErrorTemplate;
//     this._inactiveButtonClass = validationConfig.inactiveButtonClass;
//     this._inputErrorClass = validationConfig.inputErrorClass;
//     this._errorClass = validationConfig.errorClass;
//     this._form = form;

//   }

//   _setEventListener(){
//     this._inputList.forEach((input) => {
//       input.addEventListener('input', () => {
//         this._checkInput();
//         this._toggleButton()
//       })
//     })
//   }

//   _toggleButton() {
//     inputValid(inputList) ? enableButton(button, inactiveButtonClass) : disableButton(button, inactiveButtonClass);
//   }

//   _checkInput(input, errorText) {
//     const errorText = this._form.querySelector(`${inputErrorTemplate}${input.name}`);
//     input.validity.valid ? this._hideInputError(input, errorText) : this._showInputError(input, errorText);
//   }

//   _hideInputError(input, errorText) {
//     this._input.classList.remove(inputErrorClass);
//     errorText.textContent = '';
//     errorText.classList.remove(errorClass);
//   }

//   _showInputError(input, errorText) {
//     input.classList.add(this._inputErrorClass);
//     errorText.textContent = input.validationMessage;
//     errorText.classList.add(errorClass);
//   }

//   enableValidation() {
//     this._inputList = this._form.querySelector(this._inputSelector);
//     this._button = this._form.querySelector(this._submitButtonSelector);
//     this._setEventListeners();
//     this._toggleButton();
//   }
// }

// показать ошибки
// function showInputError(input, errorText, inputErrorClass, errorClass) {
//   input.classList.add(inputErrorClass);
//   errorText.textContent = input.validationMessage;
//   errorText.classList.add(errorClass);
// };

// скрыть ошибки
// function hideInputError(input, errorText, inputErrorClass, errorClass) {
//   input.classList.remove(inputErrorClass);
//   errorText.textContent = '';
//   errorText.classList.remove(errorClass);
// };

// проверка валидности для отображения ошибки
// function checkInput(input, inputErrorTemplate, inputErrorClass, errorClass) {
//   const errorText = document.querySelector(`${inputErrorTemplate}${input.name}`);
//   input.validity.valid ? hideInputError(input, errorText, inputErrorClass, errorClass) : showInputError(input, errorText, inputErrorClass, errorClass);
//  };

// function setEventListeners(inputList, button, inputErrorTemplate, inactiveButtonClass, inputErrorClass, errorClass) {
//   inputList.forEach((input) => {
//     input.addEventListener('input', () => {
//       checkInput(input, inputErrorTemplate, inputErrorClass, errorClass);
//       toggleButton(inputList, button, inactiveButtonClass)
//      });
//   });
// };

// переключение кнопки
// function toggleButton(inputList, button, inactiveButtonClass) {
//   inputValid(inputList) ? enableButton(button, inactiveButtonClass) : disableButton(button, inactiveButtonClass);
// };

// enableValidation(validationConfig)

// function enableValidation(config) {
//   const forms = Array.from(config.formSelector);
//   forms.forEach((form) => {
//     const inputList = form.querySelectorAll(config.inputSelector);
//     const button = form.querySelector(config.submitButtonSelector);
//     setEventListeners(inputList, button, config.inputErrorTemplate, config.inactiveButtonClass, config.inputErrorClass, config.errorClass);
//     toggleButton(inputList, button, config.inactiveButtonClass)
//   });
// };






