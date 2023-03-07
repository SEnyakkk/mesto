console.log('Welcome to Mesto JS')

const editButton = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const closeButton = popupElement.querySelector('.popup__close-button');
const profileInfo = document.querySelector('.profile__info');
const infoTitle = profileInfo.querySelector('.profile__info-title');
const infoSubtitle = profileInfo.querySelector('.profile__info-subtitle');
const userData = document.querySelector('.form');
const inputTitle = userData.querySelector('.form__info-title');
const inputSubtitle = userData.querySelector('.form__info-subtitle');
const saveButton = userData.querySelector('.form__save')

const popupOpened = function () {
  popupElement.classList.toggle('popup__is-open');
  inputTitle.value = infoTitle.textContent;
  inputSubtitle.value = infoSubtitle.textContent;
};

const saveData = function (e) {
  e.preventDefault();
  popupElement.classList.toggle('popup__is-open');
  infoTitle.textContent = inputTitle.value;
  infoSubtitle.textContent = inputSubtitle.value;
}

editButton.addEventListener('click', popupOpened);
closeButton.addEventListener('click', popupOpened);
saveButton.addEventListener('click', saveData)



