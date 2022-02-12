// Com o . vc acessa os membros de um objeto ou função sempre a partir de uma função ponto

console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()


// Com o THIS usando a notação ponto criar tanto atributos quanto funções que serão expostas para fora dessa função quando ela for estaciada 