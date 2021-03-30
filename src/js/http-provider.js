//Aquí se centraliza la lógica para hacer las peticiones

//Guardo la URL a la que voy a llamar
const jokeUrl = 'https://api.chucknorris.io/jokes/random';

const obtenerChiste = async() =>{

    try{
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw 'No se ha podido realizar la petición';

        const {id,icon_url, value} = await resp.json(); //Me quedo solo con el id, el icon_url y el value
        return {id,icon_url, value}; //Devuelvo estos tres valores
        
    }
    catch (err){
        //Al lanzar esto no se va a ejecutar el then de la promesa, por que tengo que poner el catch en la promesa
        throw err;
    }
};

export {
    obtenerChiste
};