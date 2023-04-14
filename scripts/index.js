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
const elementTemplate = document.querySelector('.element-template').content;
const card = elementTemplate.querySelector('.element');
const cardText = card.querySelector('.element__text');
//попап картинки
const popupZoom = document.querySelector('.popup_zoom');
const zoomImage = popupZoom.querySelector('.popup__figure-image');
const zoomText = popupZoom.querySelector('.popup__figure-caption');
const closeButtons = document.querySelectorAll('.popup__close-button');
const placeSubmitButton = userPlace.querySelector('.form__save')

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//открыть все
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
};

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

const handleElementFormSubmit = function (evt) {
  evt.preventDefault();
  const place = inputPlace.value;
  const url = inputUrl.value;
  elementsList.prepend(createCard (place, url));
  closePopup(popupElement);
  disableButton(placeSubmitButton, 'form__save_disabled')
};


//отрисовква элементов
function createCard (name, link) {
  const card = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  card.querySelector('.element__text').textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  setEventListeners(card);
  return card
};

initialCards.forEach(card => elementsList.prepend(createCard(card.name, card.link)));

//удаление елемента
function handleDelete (evt) {
  const trash = evt.target.closest('.element');
  trash.remove();
};

//отметить элемент
function handleLike (evt) {
  const like = evt.target.closest('.element__group');
  like.classList.toggle('element__group_active');
};

//увеличить элемент
function handleZoom (evt) {
  const cardImage = evt.target.closest('.element__image');
  openPopup(popupZoom);
  zoomImage.src = cardImage.src;
  zoomImage.alt = cardImage.alt;
  zoomText.textContent = cardImage.alt;
};

function setEventListeners (card) {
  card.querySelector('.element__delete').addEventListener('click', handleDelete);
  card.querySelector('.element__group').addEventListener('click', handleLike);
  card.querySelector('.element__image').addEventListener('click', handleZoom);
};

// слушатели
elementAddButton.addEventListener('click', addElement);
profileEditButton.addEventListener('click', editProfile);
userData.addEventListener('submit', handleProfileFormSubmit);
userPlace.addEventListener('submit', handleElementFormSubmit);
