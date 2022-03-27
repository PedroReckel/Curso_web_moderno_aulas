const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// A função abaixo retorna a mulher chinesa com o menor salário.

axios.get(url).then(Response => {       // Oq estou fazendo aqui?      // Eu estou fazendo uma requisição em cima dessa url e no final eu vou obter o conteudo desse arquivo no meu código
    const funcionarios = Response.data
    const apenasChineses = func => func.pais === 'China'
    const apenasMulheres = func => func.genero === 'F'
    const menorSalario = (funcionario, funcioinarioAtual) => {
        return funcionario.salario < funcioinarioAtual.salario ? funcionario : funcioinarioAtual
    }
    const resultado = funcionarios.filter(apenasChineses).filter(apenasMulheres).reduce(menorSalario)
    console.log(resultado)
})

// A funçao abaixo retorna o funcionario brasiliero com o maior salario.

axios.get(url).then(Response => {
    const funcionarios = Response.data
    const apenasBrasileiros = func => func.pais === 'Brazil'
    const maiorSalario = (funcionario, funcioinarioAtual) => {
        return funcionario.salario > funcioinarioAtual.salario ? funcionario : funcioinarioAtual
    }
    const resultado = funcionarios.filter(apenasBrasileiros).reduce(maiorSalario)
    console.log(resultado)
})