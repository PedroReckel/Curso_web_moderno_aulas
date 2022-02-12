// Exemplo 1
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)  // Para cada elemento do array que ele encontrar, ele vai disparar a função imprimir
fabricantes.forEach(fabricante => console.log(fabricante))




// Exemplo 2
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const imprimir = function (nota) {
    console.log(`Primeira nota: ${nota}`)
}

notas.forEach(imprimir)