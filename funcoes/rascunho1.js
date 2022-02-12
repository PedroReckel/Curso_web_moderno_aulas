const pessoa = {
    nome: 'Pedro',
    sobrenome: 'Reckel',
    idade: 20,
    nomeCompleto: function () {
        return this.nome + ' ' + this.sobrenome
    } 
}

console.log(pessoa.nomeCompleto())