/*
Entendiendo la petición que hacemos a la API a través de 'callbacks'
Utilizando NPM + NODEjs

Resolver la petición a la API pero con Promesas
Siguiendo la estructura de NPM y marcando los git, cuando vayamos avanzando en nuestro código 
que solo se vera con 'npm run'.

Para cumplir con la tarea, tenéis que recoger la idea de las promesas y hacer exactamente lo 
mismo que en el ejemplo que hice yo de la API, pero yo lo hice con los 'callbacks'.
Eliminamos los 'callbacks', de la ecuación y los sustituimos por las promesas.

2020 @ Tibor Kopca
*/
'use strict'


let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //llamar o instanciar la dependencia con require
const API_URL = 'https://rickandmortyapi.com/api/';
const CHARACTER_URL = 'character/:id'           //"1"      

function getCharacterData(id) {                  //connection con api o devuelve error
    let xhttp = new XMLHttpRequest();            // instanciamos de XMLHttpRequest
    const URL = `${API_URL}${CHARACTER_URL.replace(':id', id)}`
    xhttp.open('GET', URL, true);            //con true, activamos el asincronismo en xmlhttprequest
    xhttp.send();                           //utilizamos el método send para hacer request
    
    xhttp.onreadystatechange = function (event) {   // escuchamos, si este cambio sucede
       
        return new Promise((resolve, reject) => {

            if (xhttp.readyState === 4) {              // hay diferentes estados. El 4 es que ha sido completado el request
                if (xhttp.status === 200) {            //validadmos si es correcta la petición del servidor, response 200 = OK

                    resolve(JSON.parse(xhttp.responseText));    //devuelve objeto completo

                } else {
                    const error = new Error('Error' + URL);
                    console.log("errorXMLHTTPRequest")
                    return reject(error);
                };
            }
        }
        )
            .then((response) => console.log(`Hola mi nombre es ${response.name}, mi especie es ${response.species}, soy originario de ${response.origin.name}.`))    //no ; !!!
            .catch((err) => console.log(err));
    };
}

getCharacterData(1)

