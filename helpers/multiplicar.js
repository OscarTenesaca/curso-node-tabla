const fs = require('fs');
const colors = require('colors');

const crearAchivo = async (num = 5, listar = false, hasta = 10) => {
    console.log(hasta)
    try {
        let salida = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${num} x ${index} = ${num * index}\n`;
        }
        if (listar) {
            console.log(colors.blue(`===== Tabla del ${num} ======== `));
            console.log(salida.yellow)
        } 
         fs.writeFileSync(`./salida/tabla-${num}.txt`, salida,)
        return `tabla-${num}.txt`;

    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    crearAchivo
}

