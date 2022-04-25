let p = new Promise(function(resolve) {
    resolve(3)  // Uma promise só pode passar um unico valor! 
})

p.then(function(value){
    console.log(value)
})


new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

    .then(Array => Array[0])  // Vai pegar o primeiro elemento do array
    .then(primeiro => primeiro[0])  // Vai pegar a primeira letra do array
    .then(letra => letra.toLowerCase())  // Vai pegar a letra transformar para minuscula
    .then(console.log)   // Eu posso passar como referencia a função console.log