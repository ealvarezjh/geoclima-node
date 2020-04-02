const colors = require('colors');
const argv = require('./config/yargs').argv;
const { getLugarLtdLong } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const getInfo = async( direccion ) => {

    try {
        
        let coords = await getLugarLtdLong(direccion);
        let temp = await getClima(coords.lat, coords.lon);

        return `El clima de ${ coords.direccion } es de ${ temp }.`.gray;
            
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`.red;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);