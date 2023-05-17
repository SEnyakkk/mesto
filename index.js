import {Card} from './scripts/components/Card.js'
import {initialCards} from './scripts/utils/initialCards.js'
import {FormValidator} from './scripts/components/FormValidator.js'
import {PopupWithImage} from './scripts/components/PopupWithImage.js'
import { Section } from './scripts/components/Section.js'
import { UserInfo } from './scripts/components/UserInfo.js'
import { PopupWithForm } from './scripts/components/PopupWithForm.js'

const profileEditButton = document.querySelector('.profile__edit-button');

const elementAddButton = document.querySelector('.profile__add-button');

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__data',
  submitButtonSelector: '.form__save',
  inputErrorTemplate: '.popup__invalid_',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__data_invalid',
  errorClass: 'popup__invalid_visible'
};

const templateSelector = '.element-template';
const popupProfSelector = '.profile-popup';
const popupElementSelector = '.element-popup';
const popupImageSelector = '.popup_zoom';
const elementsListSelector = '.elements__list';
const inputTitleSelector = '.profile__info-title';
const inputSubtitleSelector = '.profile__info-subtitle';

const userInfo = new UserInfo(inputTitleSelector, inputSubtitleSelector)

const popupProfile = new PopupWithForm(popupProfSelector, (items) => {
  userInfo.setUserInfo(items);
});
popupProfile.setEventListener();

const popupElement = new PopupWithForm(popupElementSelector, (items) => {
  section.addItem(items);
});
popupElement.setEventListener();

const popupImage = new PopupWithImage(popupImageSelector)
popupImage.setEventListener();

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, templateSelector, popupImage.open);
    return card.createCard();
  }
}, elementsListSelector)
section.addCard();

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

elementAddButton.addEventListener('click', () => {
  formValidators['place-editform'].resetValidation()
  popupElement.open()
});

profileEditButton.addEventListener('click', () => {
  // popupProfile.setInputValues(userInfo.getUserInfo())
  formValidators['profile-editform'].resetValidation()
  popupProfile.open()
});

// function createNewCard(item) {
//   const card = new Card(item, templateSelector, popupImage.open);
//   const cardElement = card.createCard();
//   return cardElement;
// }

//вставить карточку пользователя
// const handleElementFormSubmit = function (evt) {
//   evt.preventDefault();
//   const userPlaceValue = {
//     name : inputPlace.value,
//     link : inputUrl.value};
//     const card = createNewCard(userPlaceValue);
//   elementsList.prepend(card);
//   closePopup(popupElement);
// };



// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   infoTitle.textContent = inputTitle.value;
//   infoSubtitle.textContent = inputSubtitle.value;
//   closePopup(popupProfile);
// };

// function addElement() {
  // profPopup.open();
  // openPopup(popupElement);
  // userPlace.reset();
  // userPlaceValidation.resetValidation()
  // formValidators['place-editform'].resetValidation()
// };

// слушатели




// userData.addEventListener('submit', handleProfileFormSubmit);
// userPlace.addEventListener('submit', handleElementFormSubmit);

// closeButtons.forEach((button) => {
//   const popup = button.closest('.popup');
//   button.addEventListener('click', () => closePopup(popup));
// });

// //закрыть все
// function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   popup.removeEventListener('mousedown', closePopupOverlay);
//   document.removeEventListener('keydown', closePopupEsc);
// };

// function closePopupOverlay (evt) {
//   if (evt.target === evt.currentTarget) {
//     closePopup(evt.target);
//   };
// };

// function closePopupEsc(evt) {
//   const key = evt.key;
//    if (key === 'Escape') {
//     const activPopup = document.querySelector('.popup_opened');
//     closePopup(activPopup);
//   };
// };

// //открыть все
// function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   popup.addEventListener('mousedown', closePopupOverlay);
//   document.addEventListener('keydown', closePopupEsc);
// };

//увеличить элемент
// function openZoomPopup(link, name) {
//   zoomImage.src = link;
//   zoomImage.alt = name;
//   zoomText.textContent = name;
//   openPopup(popupZoom);
// }

// initialCards.forEach((item) => {
//   const card = createNewCard(item);
//   elementsList.prepend(card);
// })

// function editProfile() {
//   // openPopup(popupProfile);
//   // profPopup.open();
//   inputTitle.value = infoTitle.textContent;
//   inputSubtitle.value = infoSubtitle.textContent;
//   // userDataValidation.resetValidation()
//   formValidators['profile-editform'].resetValidation()
// };
