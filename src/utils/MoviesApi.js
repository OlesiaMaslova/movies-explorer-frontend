class MoviesApi {
    constructor(url) { 
        this._url = url;
    }

    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getMovies() {
        return fetch(`${this._url}`, {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        })
        .then(this._checkResponse);
    }
}

export default MoviesApi;
