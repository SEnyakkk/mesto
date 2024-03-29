export class UserInfo {
  constructor(inputTitleSelector, inputSubtitleSelector, avatarSelector) {
    this._inputTitleSelector = document.querySelector(inputTitleSelector);
    this._inputSubtitleSelector = document.querySelector(inputSubtitleSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      username: this._inputTitleSelector.textContent,
      userjob: this._inputSubtitleSelector.textContent,
    }
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._inputTitleSelector.textContent = name;
    this._inputSubtitleSelector.textContent = about;
    this._avatarSelector.src = avatar;
    this._id = _id;
  }

  getid(id) {
    this._id = id
  }

  setid() {
    return this._id;
  }
}
