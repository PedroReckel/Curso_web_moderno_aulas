// Função sem retorno:
function imprimirSoma(a , b) {
    console.log(a + b)
}

imprimirSoma(2 , 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7, 8)
imprimirSoma()

// Função com retorno:
function soma(a , b = 1) {  // Aqui já posso até considerear B com igual a um caso eu não declare o valor de B
    return a + b
}

console.log(soma(2 , 3))
console.log(soma(2)) // Como aqui por exemplo
console.log(soma())