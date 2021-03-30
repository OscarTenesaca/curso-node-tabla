

const { crearAchivo } = require('./helpers/multiplicar');
const  argv   = require('./config/yargs');
require('colors');


console.clear();

// console.log(process.argv);

console.log('num: yargs', argv.num , argv.listar, argv.hasta);
// console.log(argv)

crearAchivo(argv.n, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));




