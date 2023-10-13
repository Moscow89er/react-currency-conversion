class Api {
    constructor(options) {
        this._url = options.url;
        this._headers = options.headers;
    };

    convert(value, from, to) {
        return fetch(`${this._url}/convert/${value}/${from}/${to}`, {
            method: 'GET',
            headers: this._headers
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(`Ошибка: ${response.status}`);
        })
    }
}

const api = new Api ({
    url: 'https://openexchangerates.org/api',
    headers: {
        'Authorization': `Token ${process.env.REACT_APP_API_KEY}`,
        'Content-Type': 'application/json'
    } 
})

export default api;