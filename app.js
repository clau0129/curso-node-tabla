
const {crearArchivo} = require( './helpers/multiplicar');
const argv = require('./config/yargs');


require('colors');


console.clear();


// console.log(process.argv);
// console.log(argv); //Para ver cómo funciona yargs

// console.log('base: yargs', argv.base);

//Este código no es muy funcional ya que hay muchos inconvenientes
//process.argv contiene los argumentos de la aplicación
//const [,,arg3 = 'base=5'] = process.argv;
//Como los argumentos son String y necesitamos el valor del tercer argumento
//es necesario hacer un split para obtener el valor de la base
//Se documentan para hacer lo mismo y de una mejor manera con yargs
// const [, base = 5] = arg3.split('=');
// console.log(base);


//const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, ' CREADO '))
    .catch( err => console.log(err));


