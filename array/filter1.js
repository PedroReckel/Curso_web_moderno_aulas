const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const getCaro = (value) => {
    return value.preco > 500
}

const getFragil = (value) => {
    return value.fragil     // Aqui não precisa de verdadeiro ou falso
}

const resultado = produtos.filter(getCaro).filter(getFragil)
console.log(resultado)