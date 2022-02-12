const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
let notasBaixas = []
for (i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
notasBaixas = notas.filter(function (nota) {  // Filter é uma função que vai filtrar os elementos de um array em cima de um determinado criterio. 
    return nota < 7
})   

console.log(notasBaixas)

notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)