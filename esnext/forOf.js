for (let letra of 'COD3R') {  // Loop FOR OF retorna i valor!
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) { // Loop FOR IN retorna o indice!
    console.log(i) 
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) {  // Retornará só as chaves
    console.log(chave)
}

for (let valor of assuntosMap.values()) {  // Retornará só os valores
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}