function calculaImc(altura, peso) {
    imc = peso/(altura*altura)
    if(imc < 20) {
        console.log('Seu IMC é: ' + imc.toFixed())
        console.log('Você está abaixo do peso!')
    } else if (imc > 20.1 && imc < 24.9) {
        console.log('Seu IMC é: ' + imc.toFixed())
        console.log('Você está com o peso normal!')
    } else if (imc > 25 && imc < 29.9) {
        console.log('Seu IMC é: ' + imc.toFixed())
        console.log('Você está com sobre peso!')
    } else if (imc > 30 && imc < 39.9) {
        console.log('Seu IMC é: ' + imc.toFixed())
        console.log('Você está obeso!')
    } else {
        console.log('Seu IMC é: ' + imc.toFixed())
        console.log('Você esá com obsidade morbita')
    }
}

calculaImc(1.90, 90)