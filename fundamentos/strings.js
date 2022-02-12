const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o 4° caractere da palavra 
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // Retorna o valor na tabela ASCII
console.log(escola.indexOf('3')) // Retorna qual valor é o 3° caractere

console.log(escola.substring(1)) // Vai pular o 1° caractere
console.log(escola.substring(0, 3)) // Vai começar no 0 e terminar antes do 3° caractere

console.log('Escola '.concat(escola).concat("!")) 
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // Substituir o 3° caractere por "e"

console.log('Ana,Maria,Pedro'.split(',')) // convertendo string em array e utilizando ',' para usar com separador para gerar um array