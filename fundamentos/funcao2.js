// Armazenado uma função em uma variavel
const imprimirSoma = function (a , b) {
    console.log(a + b)
}

imprimirSoma(4 , 4)

// Armazenando uma função arrow wm uma variavel (Encurtando a sintaxe)
const soma = (a , b) => {
    return a + b
}

console.log(soma(5 , 5))

// Retorno implícito (Encurtando mais ainda)
const subtracao = (a, b) => a - b
console.log(subtracao(2 , 3))