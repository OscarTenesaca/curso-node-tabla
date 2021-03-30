const argv = require('yargs')
    .option('n', {
        alias: 'num',
        type: 'number',
        demandOption: true,
        describe: 'el numero de la tabla de multiplicacion'
    })
    .check((argv, options) => {
        // console.log('yargs', argv);
        if (isNaN(argv.n)) {
            throw 'la base tiene que ser un numero';
        }
        return true;
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: 10,
        describe: 'muestra la tabla de multiplicacion en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: true,
        describe: 'muestra el limite hasta donde multiplicar'
    })
    .check((argv, options) => {
        // console.log('yargs', argv);
        if (isNaN(argv.h)) {
            throw 'el limite tiene que ser un numero';
        }
        return true;
    })
    .argv;

    module.exports = argv ;
    