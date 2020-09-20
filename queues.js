//Se crean las colas con bull y se le asociará un worker
//Se va a añadir a la cola desde el endpoint
const {config:{redis}}=require('./config')
const {bar: barWorker, barEntrance: barEntranceWorker} = require('./workers')
//Aqui se crea la cola
const Queue=require('bull')
const bar = new Queue('bar', {redis})
const barEntrance = new Queue('bar-entrance', {redis})
//Esto es para crear un "worker" (consumidor)
bar.process((job,done)=>{
    barWorker(job, done)
})
barEntrance.process((job,done) => barEntranceWorker(job,done))
//bar.add({name: 'Carlos'})
module.exports = {bar, barEntrance}
