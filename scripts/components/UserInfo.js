export class UserInfo {
  constructor(inputTitleSelector, inputSubtitleSelector) {
    this._inputTitleSelector = document.querySelector(inputTitleSelector);
    this._inputSubtitleSelector = document.querySelector(inputSubtitleSelector);
  }

  getUserInfo() {
    return {
      username: this._inputTitleSelector.textContent,
      userjob: this._inputSubtitleSelector.textContent
    }
  }

  setUserInfo({username, userjob}) {
    this._inputTitleSelector.textContent = username;
    this._inputSubtitleSelector.textContent = userjob;
  }

}
