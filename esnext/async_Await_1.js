function esperarPor (tempo = 2000) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}

// Sem usar Async Await:
esperarPor(2000)
    .then(() => console.log('Executando promise 1...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 2...'))
    .then(esperarPor)
    .then(() => console.log('Executando promise 3...'))

// A ideia por tras do Async Await é vc ter um código que pareça sincrono embora ele seja um código assincrono.
// Ivês dele chamar a função THEN ele vai ficar parado esperando a execução e só vai para a próxima linha quando ele terminar a execução.
// Quando vc marca uma função como sincrona vc tem a capacidade de esperar dentro dela que um determinado promise seja resolvido sem usar o metodo THEN. 
function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

// Usando Async Await:
async function executar() {
    let valor = await retornarValor()
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)
    return valor + 3
}

executar().then(console.log) // Quando eu vou sair do código assincrono eu tenho que acessar o valor à partir do THEN 