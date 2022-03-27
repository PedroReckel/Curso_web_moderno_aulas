require('./global')

console.log(meuAPP.saudacao())
console.log(meuAPP.nome)

meuAPP.nome = 'Eita!'    // Aqui no caso eu não poderei mudar, pois eu coloquei um 'Obeject.freeze' no meuAPP
console.log(meuAPP.nome)

// Não é bom transformar uma coisa em global, pois ela poderá ser modifcada em qualquer lugar do arquivo.