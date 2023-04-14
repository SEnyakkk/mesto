const validationConfig = {
  formSelector: document.forms,
  inputSelector: '.form__data',
  submitButtonSelector: '.form__save',
  inputErrorTemplate: '.popup__invalid_',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__data_invalid',
  errorClass: 'popup__invalid_visible'
};

enableValidation(validationConfig)

function enableValidation(config) {
  const forms = Array.from(config.formSelector);
  forms.forEach((form) => {
    const inputList = form.querySelectorAll(config.inputSelector);
    const button = form.querySelector(config.submitButtonSelector);
    setEventListeners(inputList, button, config.inputErrorTemplate, config.inactiveButtonClass, config.inputErrorClass, config.errorClass);
    toggleButton(inputList, button, config.inactiveButtonClass)
  });
};

function setEventListeners(inputList, button, inputErrorTemplate, inactiveButtonClass, inputErrorClass, errorClass) {
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInput(input, inputErrorTemplate, inputErrorClass, errorClass);
      toggleButton(inputList, button, inactiveButtonClass)
     });
  });
};
// скрыть ошибки
function hideInputError(input, errorText, inputErrorClass, errorClass) {
  input.classList.remove(inputErrorClass);
  errorText.textContent = '';
  errorText.classList.remove(errorClass);
};
// показать ошибки
function showInputError(input, errorText, inputErrorClass, errorClass) {
  input.classList.add(inputErrorClass);
  errorText.textContent = input.validationMessage;
  errorText.classList.add(errorClass);
};

// проверка валидности для отображения ошибки
function checkInput(input, inputErrorTemplate, inputErrorClass, errorClass) {
 const errorText = document.querySelector(`${inputErrorTemplate}${input.name}`);
 input.validity.valid ? hideInputError(input, errorText, inputErrorClass, errorClass) : showInputError(input, errorText, inputErrorClass, errorClass);
};
// включить кнопку
function enableButton(button, inactiveButtonClass) {
  button.classList.remove(inactiveButtonClass);
  button.disabled = false;
};
// выключить кнопку
function disableButton(button, inactiveButtonClass) {
  button.classList.add(inactiveButtonClass);
  button.disabled = true;
}
// проверка валидности для отображения кнопки
function inputValid(inputList) {
  return Array.from(inputList).every((input) => input.validity.valid);
};

// переключение кнопки
function toggleButton(inputList, button, inactiveButtonClass) {
  inputValid(inputList) ? enableButton(button, inactiveButtonClass) : disableButton(button, inactiveButtonClass);
};
