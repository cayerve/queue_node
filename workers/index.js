//Aqui van a estar los consumers (workers)
//Se exportará un objeto lo que requira el bar.js y barEntrance.js
module.exports = {
    bar: require('./bar'),
    barEntrance: require('./barEntrance')
}