import { Popup } from "./Popup.js";
import { PopupWithForm } from "./PopupWithForm.js";

export class PopupDelet extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector('.form');
    this._submitButton = this._form.querySelector('.form__save');
    this._submitText = this._submitButton.value;
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true, 'Удаление...')
      this._submitForm(this._item, this._cardid );
    })
  }

  // renderLoading(isLoading, loadingText = 'Удаление...') { // возможно это дублиование кода, есть другие варианты:
  //   if (isLoading) {                                      // наследование от PopupWithForm, но это не по чек листу
  //     this._submitButton.value = loadingText;             // и не получится наследовать super.setEventListener();
  //   } else {                                              // вариант с прототипом вероятно будет лучше всего.
  //     this._submitButton.value = this._submitText;
  //   }
  // }

  open = ({ item, cardid }) => {
    super.open();
    this._item = item;
    this._cardid = cardid;
  }
}
