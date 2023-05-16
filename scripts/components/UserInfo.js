export class UserInfo {
  constructor(inputTitleSelector, inputSubtitleSelector) {
    this.inputTitleSelector = document.querySelector(inputTitleSelector);
    this.inputSubtitleSelector = document.querySelector(inputSubtitleSelector);
  }

  getUserInfo() {
    return {
      username: this._inputTitleSelector.textContent,
      userjob: this._inputSubtitleSelector.textContent
    }
  }

  setUserInfo(data) {
    this._inputSubtitleSelector.textContent = data.username;
    this._inputTitleSelector.textContent = data.userjob;
  }

}
