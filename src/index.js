import {obtenerChiste} from './js/http-provider'

//Guardo la URL a la que voy a llamar
//const jokeUrl = 'https://api.chucknorris.io/jokes/random';

//Para llamar a una URL se le llama con fetch y devuelve una promesa con la respuesta a la llamada a la URL
// fetch (jokeUrl).then( (resp) =>{
//     //Para ver el resultado se hace lo siguiente, se llama a json de la respuesta y devuelve otra promesa
//     resp.json().then( ({id,value}) =>{
//         console.log(id);
//         console.log(value);
//     })
//     // console.log(resp);
// });

// //Así se resume mucho
// fetch(jokeUrl)
//     .then( (resp) => resp.json())   //Primera promesa del fetch
//     .then(({id,value}) => console.log(id,value));             //Segunda promesa del json

obtenerChiste().then(console.log);