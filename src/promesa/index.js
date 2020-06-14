//ESTRUCTURA DE UNA PROMESA, ECMAScript6

const PROMESA_1 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('correcto')
        } else {
            reject('incorrecto');
        };
    })
}

const PROMESA_2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('correcto')
        } else {
            reject('incorrecto');
        };
    })
}

// PROMESA_1()
//     .then((response)=> console.log(response))
//     .catch((err) => console.error(err));

Promise.all([PROMESA_1(), PROMESA_2()])     //de esta manera se pueden resolver multiples promises
    .then((response) => console.log('Resultados', response))
    .catch((err) => console.error(err));


