import '../pages/index.css';
import { Card } from '../scripts/components/Card.js'
import { initialCards } from '../scripts/utils/initialCards.js'
import { FormValidator } from '../scripts/components/FormValidator.js'
import { PopupWithImage } from '../scripts/components/PopupWithImage.js'
import { Section } from '../scripts/components/Section.js'
import { UserInfo } from '../scripts/components/UserInfo.js'
import { PopupWithForm } from '../scripts/components/PopupWithForm.js'
import { PopupDelet } from '../scripts/components/PopupDelet.js';

//кнопки
const profileEditButton = document.querySelector('.profile__edit-button');
const elementAddButton = document.querySelector('.profile__add-button');
const avatarEditButton = document.querySelector('.profile__avatar-edit')

//селкторы валидации
const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__data',
  submitButtonSelector: '.form__save',
  inputErrorTemplate: '.popup__invalid_',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__data_invalid',
  errorClass: 'popup__invalid_visible'
};

//селекторы
const popupDeletSelector = '.delete-popup'
const popupAvatarSelector = '.avatar-popup';
const templateSelector = '.element-template';
const popupProfSelector = '.profile-popup';
const popupElementSelector = '.element-popup';
const popupImageSelector = '.popup_zoom';
const elementsListSelector = '.elements__list';
const inputTitleSelector = '.profile__info-title';
const inputSubtitleSelector = '.profile__info-subtitle';

//сбор с полей ввода
const userInfo = new UserInfo(inputTitleSelector, inputSubtitleSelector)

//редактор профиля
const popupProfile = new PopupWithForm(popupProfSelector, (items) => {
  userInfo.setUserInfo(items);
});
popupProfile.setEventListener();

//добавление карточек
const popupElement = new PopupWithForm(popupElementSelector, (items) => {
  section.addItem(createNewCard(items));
});
popupElement.setEventListener();

//увеличение карточки
const popupImage = new PopupWithImage(popupImageSelector)
popupImage.setEventListener();

//редактирование аватарки
const popupAvatar = new PopupWithForm(popupAvatarSelector, (url) => {
  document.querySelector('.profile__avatar').src = url.avatar;
});
popupAvatar.setEventListener();

//подтвержденеи удаления карточки
const popupDelet = new PopupDelet(popupDeletSelector, (item) => {
  item.deletCard();
  popupDelet.close()
});
popupDelet.setEventListener();

// Инстанцирование класса Card
const createNewCard = (items) => {
  const card = new Card(items, templateSelector, popupImage.open, popupDelet.open);
  return card.createCard();
}

//секция для отрисовки карточек
const section = new Section({
  renderer: (items) => {
    section.addItem(createNewCard(items));}
  }, elementsListSelector)
section.addCard(initialCards);

const formValidators = {}
// Включение валидации
const enableValidation = (validationConfig) => {
  const formList = Array.from(document.forms)
  formList.forEach((formElement) => {
    const validator = new FormValidator(validationConfig, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(validationConfig);

//слушатель добавления карточки
elementAddButton.addEventListener('click', () => {
  formValidators['place-editform'].resetValidation()
  popupElement.open()
});

//слушатель редактирования полльзователя
profileEditButton.addEventListener('click', () => {
  popupProfile.setInputValues(userInfo.getUserInfo())
  formValidators['profile-editform'].resetValidation()
  popupProfile.open()
});

//слушатель редактирования аватарки
avatarEditButton.addEventListener('click', () => {
  formValidators['avatar-editform'].resetValidation();
  popupAvatar.open()
});
