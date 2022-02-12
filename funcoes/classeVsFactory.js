class Pessoa {
    constructor(nome) {
        this.nome = nome  // Depois de eu ter colocado o this.nome, eu tornei a variavel publíca 
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa(`João`)
p1.falar()



const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa(`João`)
p2.falar()