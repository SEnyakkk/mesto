console.log('Welcome to Mesto JS')

const editButton = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const profileInfo = document.querySelector('.profile__info');
const infoTitle = profileInfo.querySelector('.profile__info-title');
const infoSubtitle = profileInfo.querySelector('.profile__info-subtitle');
const userData = document.querySelector('.form');
const inputTitle = userData.querySelector('.form__data_username');
const inputSubtitle = userData.querySelector('.form__data_userjob');
const saveButton = userData.querySelector('.form__save')

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
}

editButton.addEventListener('click', popupOpened);
closeButton.addEventListener('click', popupClosed);
userData.addEventListener('submit', handleFormSubmit)



