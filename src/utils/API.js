class API {
    constructor(options) {
      this._URL = options.URL;
      this._headers = options.headers;
      this._credentials = options.credentials;
    }
  
    _handleRes(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getFilms(login) {
      return fetch(`${ this._URL }${login}`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._handleRes);
    }
  }
  
  const api = new API({
    URL: 'https://developer.github.com/v3/search',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default api;