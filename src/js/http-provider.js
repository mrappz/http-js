//Aquí se centraliza la lógica para hacer las peticiones

//Guardo la URL a la que voy a llamar
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
//Para traerme la lista de usuarios
const urlUsuarios = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dd124eju5/upload';
const cloudinaryUploadPreset = 'qh1vvnvo';

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


const obtenerUsuarios = async() =>{

    //Llamo a la URL del servicio
    const resp = await fetch(urlUsuarios);
    //Hago el parse del json, y me traigo la parte de data del json y la guardo en usuarios
    const {data:usuarios} = await resp.json();

    return usuarios;
}

const subirArchivo = async(archivoSubir)=>{
    //Creo el FormData para subir la imagen a Cloudinary, ver el Postman
    const formData = new FormData();
    formData.append('upload_preset',cloudinaryUploadPreset);
    formData.append('file',archivoSubir);

    try {
        //Llamo a la API para subir el archivo
        const resp = await fetch(cloudinaryUrl,{
            method: 'POST',
            body: formData
        });

        if (resp.ok){
            //si todo ha ido bien, espero la respuesta y obtengo la URL de la imagen subida
            const cloudResp = await resp.json();
            // console.log(cloudResp);
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
        
    } catch (error) {
        throw error;
    }
};

export {
    obtenerChiste, obtenerUsuarios, subirArchivo
};