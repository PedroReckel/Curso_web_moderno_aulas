/*
V ou V -> V
V ou F -> V
F ou V -> V
F ou F -> F

V e V -> V
V e F -> F
F e V -> F
F e F -> F

!V -> F
!F -> V
*/

function compras(trabalho1, trabalho2) {
    const compraSorvete = trabalho1 || trabalho2
    const compraTv50 = trabalho1 && trabalho2
    const compraTv32 = trabalho1 != trabalho2  // != Siginifica "Não igual"
    const ficarEmCasa = !compraSorvete // ! Siginifica Não logico

    return {compraSorvete, compraTv50, compraTv32, ficarEmCasa}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))