const pessoa = {
    saudaco: 'Bom dia!',
    falar() {
        console.log(this.saudaco)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()  // Conflito de paraigmas: programação funcional de orientado a objetos

const pessoaDeFalar = pessoa.falar.bind(pessoa)
pessoaDeFalar() 