export class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  // isResOk = (res) => res.ok ? res.json() : Promise.reject

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject)
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
      .then(res => res.ok ? res.json() : Promise.reject)
  }

  setAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject)
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
    .then(res => res.ok ? res.json() : Promise.reject)
  }

  addlike(cardid) {
    return fetch(`${this._url}/cards/${cardid}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._authorization
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject)
  }

  removelike(cardid) {
    return fetch(`${this._url}/cards/${cardid}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject)
  }

  removeCard(cardid) {
    return fetch(`${this._url}/cards/${cardid}`, {
      method: 'DELETE',
      headers: {
        authorization: this._authorization
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject)
  }

}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '03443a56-2e96-4faf-ad23-ecb69850558d',
    'Content-Type': 'application/json'
  }
});
