const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)   // Criando um objeto tendo como prototipo o objeto pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}    // Possibilidade de verificar se uma determinada propriedade pertence ou não ao objeto que você esta percorrendo naquele momento