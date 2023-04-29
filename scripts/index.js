import {Card} from './Card.js'
import {initialCards} from './initialCards.js'

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
const cl = console.log


//увеличить элемент
function openZoomPopup(link, name) {
  zoomImage.src = link;
  zoomImage.alt = name;
  zoomText.textContent = name;
  openPopup(popupZoom);
}

//открыть все
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
};


initialCards.forEach((item) => {
  const card = new Card(item, templateSelector, openZoomPopup);
  elementsList.prepend(card.createCard());
})



//отрисовква элементов
// function createCard (name, link) {
//   const card = elementTemplate.querySelector('.element').cloneNode(true);
//   const cardImage = card.querySelector('.element__image');
//   card.querySelector('.element__text').textContent = name;
//   cardImage.src = link;
//   cardImage.alt = name;
//   setEventListeners(card);
//   return card
// };

// initialCards.forEach(card => elementsList.prepend(createCard(card.name, card.link)));

//вставить карточку пользователя
const handleElementFormSubmit = function (evt) {
  evt.preventDefault();
  const userPlaceValue = {
    name : inputPlace.value,
    link : inputUrl.value};
  const card = new Card(userPlaceValue, templateSelector, openZoomPopup);
  elementsList.prepend(card.createCard());
  closePopup(popupElement);
  // disableButton(placeSubmitButton, 'form__save_disabled')
  placeSubmitButton.classList.add('form__save_disabled');
  placeSubmitButton.disabled = true;
};

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//закрыть все
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
};

function closePopupOverlay (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  };
};

function closePopupEsc(evt) {
  const key = evt.key;
   if (key === 'Escape') {
    const activPopup = document.querySelector('.popup_opened');
    closePopup(activPopup);
  };
};

function editProfile() {
  openPopup(popupProfile);
  inputTitle.value = infoTitle.textContent;
  inputSubtitle.value = infoSubtitle.textContent;
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  infoTitle.textContent = inputTitle.value;
  infoSubtitle.textContent = inputSubtitle.value;
  closePopup(popupProfile);
};

function addElement() {
  openPopup(popupElement);
  userPlace.reset();
};

// слушатели
elementAddButton.addEventListener('click', addElement);
profileEditButton.addEventListener('click', editProfile);
userData.addEventListener('submit', handleProfileFormSubmit);
userPlace.addEventListener('submit', handleElementFormSubmit);
