export class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = options.headers.authorization;
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject)
  }

  getCards() {
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
