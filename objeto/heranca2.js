// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'   // Não faça isso em casa!

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}    // Para eu referenciar que o pai tem como prototipo o avo eu tenho que usar o __proto__
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}KM/H de ${this.velMax}KM/H`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324    // Shadowing
}

const volvo = {
    modelo: 'V40',
    velMax: 200,
    status() {
        return `${this.modelo}: ${super.status()}`   // 
    }
}

Object.setPrototypeOf(ferrari, carro)  // Para definir a relação de prototipo eu tenho que usar setPrototypeOf
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())