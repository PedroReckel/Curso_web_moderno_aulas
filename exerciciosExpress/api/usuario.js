const salvar = (req, res) => {
    res.send('Usuario > salvar')
}

const obter = (req, res) => {
    res.send('Usuario > Obter')
}

module.exports = { salvar , obter}