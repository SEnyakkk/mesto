import '../pages/index.css';
import { Card } from '../scripts/components/Card.js'
import { FormValidator } from '../scripts/components/FormValidator.js'
import { PopupWithImage } from '../scripts/components/PopupWithImage.js'
import { Section } from '../scripts/components/Section.js'
import { UserInfo } from '../scripts/components/UserInfo.js'
import { PopupWithForm } from '../scripts/components/PopupWithForm.js'
import { PopupDelet } from '../scripts/components/PopupDelet.js'
import { api } from '../scripts/components/Api.js'
import {
  profileEditButton,
  elementAddButton,
  avatarEditButton,
  validationConfig,
  popupDeletSelector,
  popupAvatarSelector,
  templateSelector,
  popupProfSelector,
  popupCardSelector,
  popupImageSelector,
  elementsListSelector,
  inputTitleSelector,
  inputSubtitleSelector,
  avatarSelector
} from '../scripts/utils/constants.js'

Promise.all([api.getInfo(), api.getInitialCards()])
  .then(([dataUser, dataCard]) => {
    dataCard.forEach(card => card.myid = dataUser._id)
    userInfo.setUserInfo(dataUser);
    userInfo.getid(dataUser._id)
    section.addCard(dataCard.reverse());
  })
  .catch(console.error);

//сбор с полей ввода
const userInfo = new UserInfo(inputTitleSelector, inputSubtitleSelector, avatarSelector)

//редактирование информации пользователя
const popupProfile = new PopupWithForm(popupProfSelector, (items) => {
  api.setUserInfo(items)
    .then(res => {
      userInfo.setUserInfo(res);
      popupProfile.close();
    })
    .catch(console.error)
    .finally(() => popupProfile.renderLoading())
});
popupProfile.setEventListener();

//добавление карточек
const popupCard = new PopupWithForm(popupCardSelector, (items) => {
  api.addCard(items)
    .then((dataCard) => {
      dataCard.myid = userInfo.setid();
      section.addItem(createNewCard(dataCard));
      popupCard.close()
    })
    .catch(console.error)
    .finally(() => popupCard.renderLoading())
});
popupCard.setEventListener();

//увеличение карточки
const popupImage = new PopupWithImage(popupImageSelector)
popupImage.setEventListener();

//редактирование аватарки
const popupAvatar = new PopupWithForm(popupAvatarSelector, (url) => {
  api.setAvatar(url)
    .then(res => {
      userInfo.setUserInfo(res);
      popupAvatar.close()
    })
    .catch(console.error)
    .finally(() => popupAvatar.renderLoading())

});
popupAvatar.setEventListener();

//подтвержденеи удаления карточки
const popupDelet = new PopupDelet(popupDeletSelector, (item, cardid) => {
  api.removeCard(cardid)
    .then(() => {
      item.deletCard()
      popupDelet.close()
    })
    .catch(console.error)
    .finally(() => popupDelet.renderLoading())
});
popupDelet.setEventListener();

// Инстанцирование класса Card
const createNewCard = (items) => {
  const card = new Card(items, templateSelector, popupImage.open, popupDelet.open,
    (isLiked, cardid) => {
      isLiked ?
        api.removelike(cardid)
          .then(res => {
            card.toggleLike(res.likes)
          })
          .catch() :
        api.addlike(cardid)
          .then(res => {
            card.toggleLike(res.likes)
          })
          .catch(console.error);
    });
  return card.createCard();
}

//секция для отрисовки карточек
const section = new Section((items) => {
  section.addItem(createNewCard(items));
},
  elementsListSelector);

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
  popupCard.open()
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


