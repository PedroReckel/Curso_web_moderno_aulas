function getInteiroAleatorioEntre (max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao  // somente iniciada a variável, sem valor inicial!

do {
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log(`Opção escolida foi ${opcao}`)
} while (opcao != -1)