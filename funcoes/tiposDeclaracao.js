console.log(soma(3, 4)) // Em JS da para chamar uma variavel sem declarar ela, porem só como uma declaração normal

// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
} 

console.log(sub(3, 4))

// named funtion expression
const mult = function mult (x, y) {
    return x * y
}

console.log(mult(3, 4))