import {subirArchivo} from './http-provider'

const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () =>{

    const html =  `
        <h1 class="mt-5">Subir archivos</h1>
        <hr>
        <label>Selecciona una fotografía:</label>
        <input type="file" accept:"image/png, image/jpeg" />

        <img id="foto" class="img-thumbnail" src=""> 
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

const eventos = () =>{

    inputFile.addEventListener('change', (event) =>{

        const file = event.target.files[0];
        // console.log(file);
        //Como si todo va bien devuelvo la URL de la imagen, se la asigno al src de la imagen
        subirArchivo(file).then( url =>{
            imgFoto.src = url;
        })

    }
)};

export const init = () =>{
    crearInputFileHtml();
    eventos();
}