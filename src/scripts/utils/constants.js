//кнопки
export const profileEditButton = document.querySelector('.profile__edit-button');
export const elementAddButton = document.querySelector('.profile__add-button');
export const avatarEditButton = document.querySelector('.profile__avatar-edit')

//селкторы валидации
export const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__data',
  submitButtonSelector: '.form__save',
  inputErrorTemplate: '.popup__invalid_',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__data_invalid',
  errorClass: 'popup__invalid_visible'
};

//селекторы
export const popupDeletSelector = '.delete-popup'
export const popupAvatarSelector = '.avatar-popup';
export const templateSelector = '.element-template';
export const popupProfSelector = '.profile-popup';
export const popupCardSelector = '.element-popup';
export const popupImageSelector = '.popup_zoom';
export const elementsListSelector = '.elements__list';
export const inputTitleSelector = '.profile__info-title';
export const inputSubtitleSelector = '.profile__info-subtitle';
export const avatarSelector = '.profile__avatar';
