const tecnologias = new Map()
tecnologias.set('React', { framework: false })
tecnologias.set('Angular', { framework: true })

console.log(tecnologias.React) // retornará undefined
console.log(tecnologias.get('React'))
console.log(tecnologias.get('React').framework)

const chavesVariadas = new Map ([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // Dentro desse map, tem o numero 123?
console.log(chavesVariadas.delete(123)) // Deletando o numero 123 que tem no map
console.log(chavesVariadas.has(123)) // Não tem mais, pq eu deletei!
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b') // Não posso ter repetição na chave, porem no valor sim!
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)