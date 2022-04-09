const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')  //  \n é para colocar um enter depois que for retornado a string 
    process.exit()
} else {
    process.stdout.write('Informe o seu nome:')
    process.stdin.on('data', data => {    // Pegar o q o usário escreveu
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)  
        process.exit()
    })
}