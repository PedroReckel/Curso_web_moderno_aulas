const nome = 'Pedro'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá 

    ${nome}!`

console.log(concatenacao ,template)

// Expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // Como colocar tudo em CAPS LOCK
console.log(`Ei... ${up('Cuidado')}!`)













// Os exemplos abaixo são do W3 Schools


// Template String permitem strings de várias linhas

let text =
`
The quick
brown fox
jumps over
the lazy dog
`
console.log(text)


let firstname = "John"
let lastname = "Doe"

let text2 = `Welcome ${firstname}, ${lastname}!
    It's a pleasure be with you`
console.log(text2)

let price = 10
let VAT = 0.25

let total = `Total: ${(price * (1 + VAT).toFixed(2))}`
console.log(total)


const raio = 5.6;
const area = `A área do circulo é ${(Math.PI * Math.pow(raio, 2))}`
console.log(area)