// Eu criei uma função que recebe dois parametros e retorna uma promessa. Nessa promessa eu coloquei um setTimeout para ele dar um delay simulando um tempo maior de processamento.
// Quando essa promessa for atendida ele vai chamar essa função resolve

function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))   // Eu posso chamar quantas vezes eu quiser a função then para gerar um encadeamento de operação em cima daquilo que eu recebo como resposta de uma promise
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))    // A forma que eu tenho para tratar um erro (reject) em uma promise é usando a função catch   