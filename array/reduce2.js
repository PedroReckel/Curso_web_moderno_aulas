const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.bolsista))

// Desafio 1: Todos os alunos são bolsistas?

const todosBolsistas = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
    return resultado && bolsista
})

console.log('Todos os alunos são bolsistas? ', todosBolsistas)


// Desafio 2: Algum aluno é bolsista?

const algumBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
    return resultado || bolsista
})

console.log('Tem algum bolsista? ',algumBolsista)