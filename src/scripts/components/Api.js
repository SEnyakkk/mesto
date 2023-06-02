export class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  // _request(endpoint, options, url = this._url) {
  //   return fetch(`${url}endpoint`, options).then(this._isResOk)  //endpoint не получается передать нормально, что-то с синтаксисом.
  // }

  _isResOk = (res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      // this._request('/users/me' {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._isResOk)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._isResOk)
  }

  setUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.username,
        about: data.userjob
      })
    })
      .then(this._isResOk)
  }

  setAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
      .then(this._isResOk)
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.userplace,
        link: data.userurl
      })
    })
      .then(this._isResOk)
  }

  addlike(cardid) {
    return fetch(`${this._url}/cards/${cardid}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._isResOk)
  }

  removelike(cardid) {
    return fetch(`${this._url}/cards/${cardid}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._isResOk)
  }

  removeCard(cardid) {
    return fetch(`${this._url}/cards/${cardid}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
      .then(this._isResOk)
  }

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '03443a56-2e96-4faf-ad23-ecb69850558d',
    'Content-Type': 'application/json'
  }
});
