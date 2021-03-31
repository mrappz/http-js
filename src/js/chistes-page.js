//Importo el obtener chiste
import {obtenerChiste} from './http-provider'


//Elementos del HTML
const body = document.body;
let btnOtro,olList; // No se inicializan porque primero se tiene que ejecutar creaChistesHtml para que cree los elementos


const crearChistesHtml = () =>{

    const html = ` 
    <h1 class="mt-5">Chistes</h1>
    <hr />
    <button class="btn btn-primary">Otro chiste</button>
    <ol class="mt-2 list-group">      
    </ol>`;

    //Me creo un div para contener todo lo demás
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);
};


//Eventos

//Esta función enlaza los componentes de html creados dinámicamente con los eventos
const eventos = () =>{
    //Ahora asocio las variables de antes con los elementos Html ya creados
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    //Ahora defino los eventos
    btnOtro.addEventListener('click',async () =>{
        //Para evitar que se pulse mientras no se trae el chiste deshabilito el botón
        btnOtro.disabled = true;        
        //Obtengo un chiste
        dibujarChiste (await obtenerChiste());
        //Una vez obtenido lo vuelvo a habilitar
        btnOtro.disabled = false;  
    });

}

const dibujarChiste = (chiste) =>{
    //Creo el li
    const olItem = document.createElement('li');
    //Le asigno el HTML poniendo el id del chiste y el valor
    olItem.innerHTML = `<img src="${chiste.icon_url}"> </img> - <b>${chiste.id}</b>: ${chiste.value}`;
    //Le añado la clase de bootstrap
    olItem.classList.add('list-group-item');
    //Añado el li a la lista ordenada
    olList.append(olItem);
}


export const init = () =>{
    crearChistesHtml();
    eventos();
};