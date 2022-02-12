var numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)

// Embora tenham o mesmo nome, como eles estão em escopos diderentes os dois valores poderão se coexistir

// Variaveis definidas com a palavra reservada "VAR" tem ecopo global e função e vairiaveis definidas com a apalvra reservada "LET" tem escopo global, função e de bloco.