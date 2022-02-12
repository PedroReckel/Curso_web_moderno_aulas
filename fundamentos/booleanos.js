let isAtivo = false            // ! -> Significa "Não" | !! -> Significa "Sim"
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// Retornam um valor verdadeiro
console.log('Os verdadeiros...')
console.log(!! 3)
console.log(!!-1)
console.log(!!' ') // Espaço pode ser considerado valor
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Retornam um valor falso
console.log('Os falsos...')  // Tudo sem um "valor" é falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra finalizar...')
console.log(!!('' || null || 0 || ' ')) // Pelo menos um desses tem que ser verdadeiro

let nome = 'Pedro'
console.log(nome || 'Desconhecido') // Se o cara não colocar o nome dele, o resultado vai ser desconhecido (falso). E se colocar o nome, será verdadeiro.