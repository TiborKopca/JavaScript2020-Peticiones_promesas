//FUNCTION-> esta hace de callback
function sumar(num1, num2){
    return num1 + num2;
}
//CALLBACK function
function calcular(num1, num2, callback){
    return callback(num1, num2);
}
console.log(calcular(10,30, sumar)); //2 numbers and function as an argument
//najskor sa spusti calcular, ktora po vykonani svojej funkcie zavola dalsiu funkciu v poradi=>
//ta je definovana ako callback a je to hociktora ktora sa nachadza na mieste argrumentu

//--------------------------------------------------------------------------------------------
//CALLBACK function
function fecha(callback){
    console.log(new Date());   

    setTimeout(function(){
        let date = new Date();
        callback(date);         //passes data to next function -> to 'imprimirFecha(dateNow)'
    }, 3000);                   //after 3s will be returned another time to print in console
}
//FUNCTION-> esta hace de callback
function imprimirFecha(dateNow){
    console.log(dateNow);
}
fecha(imprimirFecha);  //first will be executed 'fecha' which can pass some data to next 'imprimirFecha'
// insertamos dentro de la función fecha, un argumento que es otra función que espera el callback