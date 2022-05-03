function gerarNumerosEntre(min, max, numerosProibidos) {
    if (max > min) [max, min] = [min, max] // Ivertendo a valor das duas variaveis caso o usuario coloque o valor maior primeiro 
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtdeNumeros).fill()) {   // Aqui eu quero percorrer um FOR com a quantidade de elementos que eu recebi  
            numeros.push( await gerarNumerosEntre(1, 60, numeros))  // A cada loop ele vai chamar a função que vai gerar um numero aleatório e armazenar no array
            // Await sempre vai vir na frente de uma PROMISE
        }
        return numeros 
    } catch(e) {    
        if(tentativas > 10) {
            throw 'Não deu certo'
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)