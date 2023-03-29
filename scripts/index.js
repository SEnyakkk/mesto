/* // попап для профиля
const editButton = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const profileInfo = document.querySelector('.profile__info');
const infoTitle = profileInfo.querySelector('.profile__info-title');
const infoSubtitle = profileInfo.querySelector('.profile__info-subtitle');
const userData = document.querySelector('.form');
const inputTitle = userData.querySelector('.form__data_user_name');
const inputSubtitle = userData.querySelector('.form__data_user_job');

const popupOpened = function () {
  popupElement.classList.add('popup_opened');
  inputTitle.value = infoTitle.textContent;
  inputSubtitle.value = infoSubtitle.textContent;
};

const popupClosed = function () {
  popupElement.classList.remove('popup_opened');

};

const handleFormSubmit = function (e) {
  e.preventDefault();
  infoTitle.textContent = inputTitle.value;
  infoSubtitle.textContent = inputSubtitle.value;
  popupClosed()
} */

//галерея при открытии страницы

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

const elementTemplate = document.querySelector('.element-template').content;
const elementsList = document.querySelector('.elements__list');
const elementDelete = elementTemplate.querySelector('.element__delete')

initialCards.forEach(createCard);

function createCard (name, link) {
  const card = elementTemplate.querySelector('.element').cloneNode(true);
  const cardImage = card.querySelector('.element__image');
  cardImage.src = link;
  cardImage.alt = name;
  card.querySelector('.element__text').textContent = name;
  card.querySelector('.element__image').src = link;
  setEventListeners(card)
  elementsList.append(card)

  return card
}

function handleDelete (evt) {
  const trash = evt.target.closest('.element')
  trash.remove()
}

function setEventListeners (card) {
  card.querySelector('.element__delete').addEventListener('click', handleDelete);
}




//initialCards.forEach(element => elementsItem.prepend(createCard(element.link, element.name)));



// слушатели
/* editButton.addEventListener('click', popupOpened);
closeButton.addEventListener('click', popupClosed);
userData.addEventListener('submit', handleFormSubmit)
 */
