export const URL = 'http://api.omaslovadiploma.nomoredomains.club';

const checkResponse = (response) => {
    return response.ok? response.json() : Promise.reject(new Error(`Ошибка ${response.status}: ${response.statusText}`))
 }

export const register = ({name, email, password}) => {
    return fetch(`${URL}/signup`, {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:'POST',
        body: JSON.stringify({name, email, password})
    })
    .then(res => checkResponse(res));
}

export const authorize = ({email, password}) => {
    return fetch(`${URL}/signin`, {
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        method:'POST',
        body: JSON.stringify({email, password})
    })
    .then(res => checkResponse(res));
}

export const checkToken = (jwt) => {
    return fetch(`${URL}/users/me`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        },
        method:'GET',
    })
    .then(res => checkResponse(res));
}
