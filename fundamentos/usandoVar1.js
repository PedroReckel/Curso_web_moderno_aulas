// Uma variavel dentro de um bloco onde não é uma function, fora do bloco essa variavel vai ser visivel
{
    {
        {
            {
                {var sera = 'será???'}
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) // Se eu chamar esse variavel fora da function vai dar problema


// Criando uma variavel dentro de uma function, elá só é visivel dentro da function
// Variaveis só tem dois escopos possiveis, ou ela é do nível global(visivel na sua aplicação inteira) ou do nível local (visvel apenas dentro da function)