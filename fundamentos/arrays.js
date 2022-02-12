const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores)
console.log(valores[0], valores[3])
console.log(valores[4]) 

valores [4] = 10 // Adicionando um novo campo no array
console.log(valores)
console.log(valores.length) // Numero de campos no array (.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // Retirar ultimo valor do array e rotonar ele

// Apagando valores do array do índice 0:
delete valores [0]
valores.push("5.5")
console.log(valores)  

console.log(typeof valores)