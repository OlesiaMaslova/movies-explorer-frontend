class MainApi {
    constructor(url, headers) { 
        this._url = url;
        this._headers = headers;
    }

    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        } else {
            return Promise.reject(new Error(`Ошибка ${res.status}: ${res.statusText}`));
        }
    }

    getUserInfo() {
            return fetch(`${this._url}/users/me`, {
                headers: this._headers,
            })
            .then(this._checkResponse);
    }

    updateUserInfo(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                email: data.email,
            })
        })
        .then(this._checkResponse);
}

    saveMovie(data) {
            return fetch(`${this._url}/movies`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    country: data.country,
                    director: data.director,
                    duration: data.duration,
                    year: data.year,
                    description: data.description,
                    image: data.image.url,
                    trailer: data.trailerLink,
                    nameRU: data.nameRU,
                    nameEN: data.nameEN,
                    thumbnail: data.image.formats.thumbnail.url,
                    movieId:data.id,
                  })
            }) 
            .then(this._checkResponse);
    }

    deleteMovie(data) {
        return fetch(`${this._url}/movies/${data._id}`, {
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._checkResponse);
    }

    getSavedMovies() {
        return fetch(`${this._url}/movies`, {
            headers: this._headers,
        })
        .then(this._checkResponse);
    }




}

export default MainApi;
