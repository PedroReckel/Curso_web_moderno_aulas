const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 6', function () {   // A função será executada de 5 em 5 segundos, porém apenas durante a hora 15 de um sabado
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval

// Criando regras
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 6)] // De segunda a sabado
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})