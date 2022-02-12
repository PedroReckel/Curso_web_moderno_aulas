function rand({min = 0, max = 1000}) {  // Aqui eu vou passar um objeto para essa função e ao inves de acessar "obj.min" e "obj.max" eu quero que ele já tire de dentro do objeto o atributo MIN e o MAX e me entregue esses dois atributos prontos sem precisar acessar de dentro do objeto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))