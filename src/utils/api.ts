import { ApiOptions, ApiResponse } from "../interfaces/interfaces";

class Api {
    private _url: string;
    private _apiKey: string;

    constructor(options: ApiOptions) {
        this._url = options.url;
        this._apiKey = options.apiKey;
    };

    getLatestRates(): Promise<ApiResponse> {
        return fetch(`${this._url}/latest.json?app_id=${this._apiKey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
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
    apiKey: process.env.REACT_APP_API_KEY as string
})

export default api;