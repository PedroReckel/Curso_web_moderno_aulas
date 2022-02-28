// Minha propria versão de reduce:
Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 0; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))


// Propria versão de reduce usando o array dos exemplos anteriores:
Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 0; i < this.length; i++) {
        acumulador = callback(this[i], i, this)
    }
    return acumulador
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const som = (total, valor) => total + valor
const soNota = alunos.map(a => a.nota)
console.log(soNota.reduce2(som))