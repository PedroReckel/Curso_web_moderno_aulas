// Teste próprio:

// Get day usando estrutura de seleção:

const diaSemana = (day) => {
    if (day == 0) {
        return 'Domingo'
    } else if (day === 1) {
        return 'Segunda-feira'
    } else if (day === 2) {
        return 'Terça-feira'
    } else if (day === 3) {
        return 'Quarta-feira'
    } else if (day === 4) {
        return 'Quinta-feira'
    } else if (day === 5) {
        return 'Sexta-feira'
    } else {
        return 'Sabado'
    }
}

console.log(diaSemana(new Date().getDay()))





// Get day usando array (Ghabriel me encinou)
let dia = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

console.log(dia[new Date().getDay()])