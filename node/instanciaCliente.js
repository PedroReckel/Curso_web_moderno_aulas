const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorB.inc()                                     // O node faz cache

console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorB.inc()
console.log(contadorC.valor, contadorD.valor)