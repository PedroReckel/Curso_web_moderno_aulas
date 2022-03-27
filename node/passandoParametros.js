module.exports = function (...nomes) {  // Argumento variavel, ou seja, vo poder passar quantos nome eu quiser
    return nomes.map(nome => `Deus te abençoe ${nome}!`)
}
