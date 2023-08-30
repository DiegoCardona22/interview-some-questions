// Ajax es una tecnica de programacion que nos permite hacer peticiones HTTP desde el navegador
// Fetch es una API que nos permite hacer peticiones HTTP desde el navegador
// Axios es una libreria que nos permite hacer peticiones HTTP desde el navegador

// Fetch
const publicApiPokemon = 'https://pokeapi.co/api/v2/pokemon/';
let dataApi = {};

const getPokemon = () => {
  return fetch(publicApiPokemon)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log('Error: ', error);
    }); 
}

getPokemon().then((data) => {
  dataApi = data;
  console.log(dataApi);
});


// Ajax
const xhr = new XMLHttpRequest();
xhr.open('GET', publicApiPokemon, true);

xhr.onload = function() {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};

xhr.send();

// Axios
axios.get(publicApiPokemon)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log('Error: ', error);
  });


