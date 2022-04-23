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

// Recurso do ES8
// Objetivo de simplificar o uso de promises..
let obterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // Retorna um objeto 

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))