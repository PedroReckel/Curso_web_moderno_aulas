const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {  // Quando quero saber qual valor tem na posição I do meu array
    console.log(i, notas[i])  
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}