import config from '../config'

const URL_CATEGORYS = `${config.URL_BACKEND_TOP}/categorys`;

function create(categoryObject) {
  const url = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorys'
    : 'https://ninetysflix.herokuapp.com/categorys';
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoryObject),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORYS}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  console.log(config.URL_BACKEND_TOP);
  return fetch(`${URL_CATEGORYS}?_embed=videos`)
    .then(async (serverResponse) => {

      if (serverResponse.ok) {
        console.log(serverResponse);
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};