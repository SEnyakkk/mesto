import {Card} from './scripts/components/Card.js'
import {initialCards} from './scripts/utils/initialCards.js'
import {FormValidator} from './scripts/components/FormValidator.js'
import {PopupWithImage} from './scripts/components/PopupWithImage.js'
import { Section } from './scripts/components/Section.js'

// попап для профиля
const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.profile-popup');
const profileInfo = document.querySelector('.profile__info');
const infoTitle = profileInfo.querySelector('.profile__info-title');
const infoSubtitle = profileInfo.querySelector('.profile__info-subtitle');
const userData = popupProfile.querySelector('.form');
const inputTitle = userData.querySelector('.form__data_user_name');
const inputSubtitle = userData.querySelector('.form__data_user_job');
//попап для галереи
const elementAddButton = document.querySelector('.profile__add-button');
const popupElement = document.querySelector('.element-popup');
const userPlace = popupElement.querySelector('.form');
const inputPlace = userPlace.querySelector('.form__data_user_place');
const inputUrl = userPlace.querySelector('.form__data_user_url');
const elementsList = document.querySelector('.elements__list');
//template
const templateSelector = '.element-template';
//попап картинки
const popupZoom = document.querySelector('.popup_zoom');
const zoomImage = popupZoom.querySelector('.popup__figure-image');
const zoomText = popupZoom.querySelector('.popup__figure-caption');
const closeButtons = document.querySelectorAll('.popup__close-button');
const placeSubmitButton = userPlace.querySelector('.form__save')
const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__data',
  submitButtonSelector: '.form__save',
  inputErrorTemplate: '.popup__invalid_',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__data_invalid',
  errorClass: 'popup__invalid_visible'
};

const popupProfSelector = '.profile-popup';
const popupImageSelector = '.popup_zoom';
const elementsListSelector = '.elements__list';
const formValidators = {}
const popupImage = new PopupWithImage(popupImageSelector)
popupImage.setEventListener()

// const profPopup = new Popup(popupProfSelector);
// profPopup.setEventListener()


// const userDataValidation = new FormValidator(validationConfig, userData);
// userDataValidation.enableValidation();

// const userPlaceValidation = new FormValidator(validationConfig, userPlace);
// userPlaceValidation.enableValidation();



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

function createNewCard(item) {
  const card = new Card(item, templateSelector, popupImage.open);
  const cardElement = card.createCard();
  return cardElement;
}

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, templateSelector, popupImage.open);
    return card.createCard();
  }
}, elementsListSelector)

section.addCard()



//вставить карточку пользователя
const handleElementFormSubmit = function (evt) {
  evt.preventDefault();
  const userPlaceValue = {
    name : inputPlace.value,
    link : inputUrl.value};
    const card = createNewCard(userPlaceValue);
  elementsList.prepend(card);
  closePopup(popupElement);
};

function editProfile() {
  // openPopup(popupProfile);
  // profPopup.open();
  inputTitle.value = infoTitle.textContent;
  inputSubtitle.value = infoSubtitle.textContent;
  // userDataValidation.resetValidation()
  formValidators['profile-editform'].resetValidation()
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  infoTitle.textContent = inputTitle.value;
  infoSubtitle.textContent = inputSubtitle.value;
  closePopup(popupProfile);
};

function addElement() {
  profPopup.open();
  // openPopup(popupElement);
  userPlace.reset();
  // userPlaceValidation.resetValidation()
  formValidators['place-editform'].resetValidation()

};

// слушатели
// elementAddButton.addEventListener('click', addElement);
// profileEditButton.addEventListener('click', editProfile);
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
