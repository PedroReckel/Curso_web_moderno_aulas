// Função construtora:
function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    } 
}

const p1 = new Pessoa('Pedro')
p1.falar()


// Função factory:
function imprimirNome(nome) {
    return {
        falar: () => {
            console.log(`Meu nome é ${nome}`)
        }
    }
}

const p2 = imprimirNome('João')
p2.falar()


// Um construtor é basicamente uma função. Ela pode ser executada como uma função ou pode ser utilizada para instanciar um objeto utilizando a palavra reservada new.

// Podemos resumir uma função fábrica como um gerador de objetos.