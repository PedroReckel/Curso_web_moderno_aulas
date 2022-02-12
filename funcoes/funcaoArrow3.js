let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)  

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)  
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) 

comparaComThisArrow(global)
comparaComThisArrow(module.exports) 


// Quem é mais forte, uma ARROW function ou um BIND? Resposta: A ARROW function!!
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)


// module.exports é equivalente ao this na função arrow...

// Assim, quando se usa o this na função arrow, esse "this" faz referência ao modulo em que foi chamado, em outras palavras... ao contexto em que foi chamado.

// Na função tradicional, o this por padrão equivale ao global quando se está no server-side (back-end) e equivale ao window quando está no client-side (front-end). Por isso a comparação de (this === global) deu true quando chamado na função tradicional.

// Se você quiser com que o this faça referência a outra coisa, você terá que usar o bind