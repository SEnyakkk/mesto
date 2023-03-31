const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


 // попап для профиля
const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.profile-popup');
const closeButton = popupProfile.querySelector('.popup__close-button');
const profileInfo = document.querySelector('.profile__info');
const infoTitle = profileInfo.querySelector('.profile__info-title');
const infoSubtitle = profileInfo.querySelector('.profile__info-subtitle');
const userData = popupProfile.querySelector('.form');
const inputTitle = userData.querySelector('.form__data_user_name');
const inputSubtitle = userData.querySelector('.form__data_user_job');

 const popupOpened = function () {
   popupProfile.classList.add('popup_opened');
   inputTitle.value = infoTitle.textContent;
   inputSubtitle.value = infoSubtitle.textContent;
 };

 const popupClosed = function () {
   popupProfile.classList.remove('popup_opened');
 };

 const handleFormSubmit = function (evt) {
  evt.preventDefault();
  infoTitle.textContent = inputTitle.value;
  infoSubtitle.textContent = inputSubtitle.value;
  popupClosed()
}

//попап для галереи
const addButton = document.querySelector('.profile__add-button');
const popupElement = document.querySelector('.element-popup');
const closeElButton = popupElement.querySelector('.popup__close-button');
const userPlace = popupElement.querySelector('.form');
const inputPlace = userPlace.querySelector('.form__data_user_place');
const inputUrl = userPlace.querySelector('.form__data_user_url');
const elementsList = document.querySelector('.elements__list');

const popupElOpened = function () {
  popupElement.classList.add('popup_opened');
  inputPlace.value = '';
  inputUrl.value = '';
};

const popupElClosed = function () {
  popupElement.classList.remove('popup_opened');
};

const handleElFormSubmit = function (evt) {
  evt.preventDefault();
  place = inputPlace.value;
  url = inputUrl.value;
  elementsList.prepend(createCard (place, url));
  popupElClosed()
}


//отрисовква элементов
function createCard (name, link) {
  const elementTemplate = document.querySelector('.element-template').content;
  const card = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  card.querySelector('.element__text').textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  setEventListeners(card);
  elementsList.append(card);
  return card
}
initialCards.forEach(card => (createCard(card.name, card.link)));

//удаление елемента
function handleDelete (evt) {
  const trash = evt.target.closest('.element');
  trash.remove()
}

//отметить элемент
function handleLike (evt) {
  const like = evt.target.closest('.element__group');
  like.classList.toggle('element__group_active');
}

//увеличить элемент
function handleZoom (evt) {
  const cardImage = evt.target.closest('.element__image');
  const popupZoom = document.querySelector('.popup_zoom');
  popupZoom.classList.add('popup_opened');
  const zoomImage = popupZoom.querySelector('.popup__figure-image');
  const zoomText = popupZoom.querySelector('.popup__figure-caption');
  zoomImage.src = cardImage.src;
  zoomImage.alt = cardImage.alt;
  zoomText.textContent = cardImage.alt;
  const closeZoomButton = popupZoom.querySelector('.popup__close-button');

  const popupZoomClosed = function () {
    popupZoom.classList.remove('popup_opened');
 };

  closeZoomButton.addEventListener('click', popupZoomClosed);
};




function setEventListeners (card) {
  card.querySelector('.element__delete').addEventListener('click', handleDelete);
  card.querySelector('.element__group').addEventListener('click', handleLike);
  card.querySelector('.element__image').addEventListener('click', handleZoom);
}


// слушатели
addButton.addEventListener('click', popupElOpened);
closeElButton.addEventListener('click', popupElClosed);
editButton.addEventListener('click', popupOpened);
closeButton.addEventListener('click', popupClosed);
userData.addEventListener('submit', handleFormSubmit);
userPlace.addEventListener('submit', handleElFormSubmit);
