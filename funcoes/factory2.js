function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('sabão', 3.80))
console.log(criarProduto('Escova de dente', 5.50)) 