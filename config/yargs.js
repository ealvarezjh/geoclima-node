let opt = {
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}

const argv = require('yargs')
    .options(opt)
    .help()
    .argv;

module.exports = {
    argv
}