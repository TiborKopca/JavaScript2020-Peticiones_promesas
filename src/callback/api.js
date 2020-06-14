
//https://rickandmortyapi.com/api/character
//SIN jQuery

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //llamar o instanciar la dependencia con require
const API = 'https://rickandmortyapi.com/api/character/';

function traerDatos(url_api, callback) {   //connection con api o devuelve error
    let xhttp = new XMLHttpRequest();            // instanciamos de XMLHttpRequest
    xhttp.open('GET', url_api, true);            //con true, activamos el asincronismo en xmlhttprequest
    xhttp.onreadystatechange = function (event) {   // escuchamos, si este cambio sucede
                                    // aqui creamos una validación para ver si ejecutamos nuestro callback
        if (xhttp.readyState === 4) {              // hay diferentes estados. El 4 es que ha sido completado el request
            if (xhttp.status === 200) {            //validadmos si es correcta la petición del servidor, response 200 = OK
                callback(null, JSON.parse(xhttp.responseText));  // ahora si todo esta bien
                                                    // parseamos el JSON y mandamos a través del callback los datos 
                                                    //null = no error?

            } else {                                //sino algo esta mal, mandamos un error con nuestro callback
                const error = new Error('Error' + url_api);
                return callback(error, null);               //callback return in case of error
            }
        }
    };
    xhttp.send();       //utilizamos el método send para hacer request
}
//callback hell?
traerDatos(API, function (error1, data1) { //callback function will resolve data from function 'traerDatos'
    if (error1) {                          //if exist some error, print it in console
        return console.error(error1);
    }
    traerDatos(API + data1.results[1].id, function (error2, data2){
        if (error2) {
            return console.error(error2);
        }
        traerDatos(data2.origin.url, function (error3, data3) {
            if (error3) { return console.error(error3) };
            //peticiones
            // hacemos las tres peticiones a la api
     //asi como vimos en otro ejemplo podemos encadenar lo callabacks para estas tres peticiones a la api
    //tres peticiones ok, pero no llegar al callbackHELL
            console.log(data1.info.count);  //id? is set to [0]-> id = 1
            console.log(data2.name);        //?
            console.log(data3.dimension);   //?
        });
    });
});
