const novoElemento = (tagName, className) => {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira') // Com o "this" eu consigo fazer com que o elemento fique visivel fora da função

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda) // Caso o elemento barreira não seja reverso o corpo vai vir primeiro que a borda
    this.elemento.appendChild(reversa ? borda : corpo) // Caso o elemento barreira seja reversa a borda vai vir primeiro que o corpo

    this.setAltura = altura => corpo.style.height = `${altura}px`
}

// const b1 = new Barreira(true)  // Para um constructor se efetivo a função deve ser instanciada com a palavra reservada "function"
// b1.setAltura(300)
// document.querySelector('[wm-flappy]').appendChild(b1.elemento)

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturaInferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])  // Vai retornar a largura do elemento, por exemplo: 100
    this.setX = x => this.elemento.style.left = `${x}px` // Setar o elemento com o valor da largura que eu peguei na linha anterior
    this.getLargura = () => this.elemento.clientWidth // Pegar a largura do elemento

    this.sortearAbertura()
    this.setX(x)
}

const b2 = new ParDeBarreiras(700, 200, 400)
document.querySelector('[wm-flappy]').appendChild(b2.elemento)