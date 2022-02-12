for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log('No final do loop a contagem deu:', i)

// Variables declared with VAR inside a { } block can be accessed from outside the block:






// Mais exemplos de escopo
// Usando LET
let x = 10
console.log(x)
                                // Usando o LET vc vai meio que "Prender" a variavel dentro do bloco para não funcionar fora dele    
{
    let x = 2
    console.log(x)
}

console.log(x)



// Usando VAR
var y = 20
console.log(y)

{
    var y = 5
    console.log(y)
}

console.log(y)