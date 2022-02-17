const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))  
console.log(Object.values(pessoa))  
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,   // Torna ela visivel caso vc dê um Object.keys
    writable: false,    // Torna ela não modificavel
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}    // A varievel A vai ser sobrescrevida
const obj = Object.assign(dest, o1, o2)  // É uma forma de concatenar os Objetos

Object.freeze(obj)
obj.c = 1234
console.log(obj)