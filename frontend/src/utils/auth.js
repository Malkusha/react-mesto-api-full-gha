export const BASE_URL = 'https://api.pashkusha.nomoreparties.co';

export function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => res.ok ? res.json : Promise.reject(`Ошибка: ${res.status}`))
};

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};

export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}

 