const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(typeof Math);
console.log(area.toFixed(2));

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
Math.round(4.6); // retorna o número inteiro mais próximo
Math.ceil(4.9); // etorna o valor de x arredondado para cima para seu inteiro mais próximo
Math.floor(4.9); // retorna o valor de x arredondado para baixo para o número inteiro mais próximo
Math.trunc(4.9); // retorna a parte inteira de x
Math.sign(-4); // retorna se x for negativo, nulo ou positivo
Math.sign(-4); // retorna se x for negativo, nulo ou positivo
Math.pow(8, 2); // Retorna o valor de x à pontência de y
Math.sqrt(64); // retorna a raiz quadrada de x
Math.abs(-4.7); // retorna o valor absoluto (positivo) de x
Math.sin(90 * Math.PI / 180); // retorna o seno (um valor entre -1 e 1) do ângulo x (dado em radianos). Se quiser usar graus em vez de radianos, você deve converter graus em radianos Ângulo em radianos = Ângulo em graus x PI / 180.
Math.cos(0 * Math.PI / 180); // retorna o cosseno (um valor entre -1 e 1) do ângulo x (dado em radianos). Se quiser usar graus em vez de radianos, você deve converter graus em radianos Ângulo em radianos = Ângulo em graus x PI / 180.
Math.min(0, 150, 30, 20, -8, -200); // pode ser usado para encontrar o valor mais baixo ou mais alto em uma lista de argumentos
Math.max(0, 150, 30, 20, -8, -200); // pode ser usado para encontrar o valor mais baixo ou mais alto em uma lista de argumentos
Math.random() // retorna um número aleatório entre 0 (inclusivo) e 1 (exclusivo)
Math.log(1); // retorna o logaritmo natural de x.
Math.log2(8); // retorna o logaritmo de base 2 de x.
Math.log10(1000); // retorna o logaritmo de base 10 de x.


console.log(Math.floor(4.9))