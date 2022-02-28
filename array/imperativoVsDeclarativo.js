const alunos = [
    { nome: 'João', nota: 7.86},
    { nome: 'Maria', nota: 8.6}
]

// Imperativo: É mais passo-a-passo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declativo: Não importa como, mas sim oq eu quero
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

// É melhor sempre usar o método declarativo!!!