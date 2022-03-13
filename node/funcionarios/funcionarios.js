const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const apenasChineses = funcionarios => funcionarios.pais === 'China'
const apenasMulheres = funcionarios => funcionarios.genero === 'F'
const menorSalario = (acumulador, valor) => {
    return acumulador + valor
}

axios.get(url).then(Response => {       // Oq estou fazendo aqui?      // Eu estou fazendo uma requisição em cima dessa url e no final eu vou obter o conteudo desse arquivo no meu código
    const funcionarios = Response.data
    console.log(funcionarios)
})