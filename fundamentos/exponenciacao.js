// Para ultilizar a exponenciaçao da maneira antiga:
let exp1 = Math.pow(2, 3)
console.log(exp1)

// O ES7 mudou isso, agora podemos utilizar o próprio, assim:
let exp2 = 2 ** 3
console.log(exp2)

// Representado por dois asteriscos (**) o operador nos trouxe outra possibilidade interessante que podemos chamar de atribuição exponencial, assim:

let base = 2
base **= 3 // Eleva o valor amarzenado na base à terceira potência.
console.log(base)

// E ainda podemos trabalhar com expoentes negativos, assim:
let exp3 = 2 ** -3 
console.log(exp3)