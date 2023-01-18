// Com promise:

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados   // Jogar os dados dentro da variavel resultado
            })
    
            res.on('end', () => {
                try {   // Se der certo
                    resolve(JSON.parse(resultado))  
                } catch(e) {  // Se dar errado
                    reject(e)
                }
            })
        })
    })
}

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])  // Eu posso mandar várias promises para essa função promise.all
    .then(turmas => [].concat(...turmas))  // Eu tenho uma matriz com três elementos que são arrays, aqui eu estou simplismente espalhar elas na chamada do método concat e no final eu vou ter apenas um unico array com todos os alunos 
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nome => console.log(nome))
    .catch(e => console.log(e.message))   // Sempre que eu estiver trabalhando com promise, se eu coloquei o then, é bom colocar o cath também!


getTurma('D').catch(e => console.log(e.message))  // Tentando acessar uma turma que não existe