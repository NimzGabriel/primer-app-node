const fs = require('fs');
require('colors');

async function crearArchivoTabla( base, listar = false, hasta = 10 ) {
    try {
        let salida = '';
        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
        }
    
        fs.writeFileSync(`./salida/tabla_${base}.txt`, salida);
    
        if(listar) {
            console.log(`Creando la tabla del ${base} ...\n`.grey);
        }

        return `tabla_${base}.txt creada exitosamente.\n`.green;

    } catch(err) {
        let msj = "Ocurrio un error".red;
        throw msj + err;
    }
}

module.exports = {
    crearArchivoTabla
}