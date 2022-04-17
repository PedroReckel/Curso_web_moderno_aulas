// Operador ... res(juntar)/spread(espalhar)
// Usar rest com parâmetro de função

// Usar spread com objeto
const funcionario = { nome: 'Pedro', salario: 1800.00 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// Usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)