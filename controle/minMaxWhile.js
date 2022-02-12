function imprimirValorEspecificoEntre (max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao

while (opcao != -1) {
    opcao = imprimirValorEspecificoEntre(-3, 20)
    console.log(`A escolha feita foi ${opcao}`)
    if (opcao == -1) {
        console.log(`Finalmente chegou!!`)
    }
}