const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        describe: 'Este es el número hasta el que se realizará la tabla',
                        default: 10
                    })
                    .check((argv, options) => {
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un número';
                        }
                        if(isNaN(argv.h)){
                            throw 'Hasta tiene que ser un número';
                        }
                        return true;
                    })
                    .argv;


module.exports = argv; //No se va a necesitar exportar un objeto porque lo único que se necesita es la configuración de la constante argv