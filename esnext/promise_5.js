// Tratamentos de erros:
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(v => console.log(v))
    .catch(err => console.log(`Erro Geral.: ${err}`)) // O ideal é colocar o catch na ultima posição  
    .then(() => console.log('Fim!')) // Dps do catch eu não vou ter mais dados 