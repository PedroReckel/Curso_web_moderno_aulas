const funcs = []

for (let i = 0; i < 10; i++) { // O I como tem escopo de bloco ele vai ter o seu espaço na memoria
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()