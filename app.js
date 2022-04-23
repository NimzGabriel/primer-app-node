const { boolean } = require('yargs');
const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                description: 'Número de tabla a crear'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)) {
                    throw 'ERROR: La base tiene que ser un número.'
                }
                return true;
            })
            .option('l', {
                alias: 'listar',
                default: false,
                type: boolean,
                demandOption: true,
                description: 'Muestra detalles adicionales'
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: false,
                description: 'Hasta que número imprimir la tabla'
            })
            .argv;

console.clear();
/* console.log(argv.h); */

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(tabla => console.log(tabla))
    .catch(err => console.log(err));