// Teste 1

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)


// Teste 2

const motos = ['BMW S1000XR', 'Yamaha MT-09', 'Honda CB 500', 'BMW R1250GS']

motos.forEach(function(modelo, indice) {
    console.log(`${indice + 1}) ${modelo} `)
})

motos.forEach(modelo => console.log(modelo))

const armazenarMotos = motos => console.log(motos)
motos.forEach(armazenarMotos)