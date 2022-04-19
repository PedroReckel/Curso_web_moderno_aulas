// Não aceita repetição / não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Corinthians').add('Palmeiras').add('Flamengo').add('Vasco') // Ele vai mostrar o Vasco 1 vez, pois não aceita repetição!

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] 
const nomesSet = new Set(nomes)
console.log(nomesSet) 