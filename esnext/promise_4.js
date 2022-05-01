function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]  // Ivertendo a valor das duas variaveis caso o usuario coloque o valor maior primeiro 
    return new Promise(resolve => {
        setTimeout(function() {
            const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
            resolve(aleatorio)
        }, tempo)
    })
}


// Gerando varios numeros aleatórios:
function gerarVariosNumeros() {
    // Usar o Promise.all é uma forma de paralelismo. Quando vc tem várias coisas a serem feitas em paralelo, exemplo: Fazer uma requisição para pegar os dados de clientes, produtos, filiais, fornecedor, etc. Só quando chegar todas as respostas é que vc vai fazer alguma coisa com elas.
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),     
    ])
}

console.time('promise')

gerarVariosNumeros()
    // .then(console.log)
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })