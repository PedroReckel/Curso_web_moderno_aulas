// console.log(global)

// A parir do uso do 'Global', qualquer arquivo meu vai ter acesso ao meuAPP
global.meuAPP = Object.freeze ({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})