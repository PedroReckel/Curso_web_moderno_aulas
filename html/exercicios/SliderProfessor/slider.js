function mover(elem, inicio, fim, passo, callback) {
    const novaPosicao = inicio - passo
    if(novaPosicao >= fim) {
        elem.style.left = novaPosicao + 'px'
        setTimeout(() => mover(elem, novaPosicao, fim, passo, callback), 7) 
    } else {
        callback()
    }
}

function slider() {
    const elementos = document.querySelectorAll('[wm-slider] > p')
    const sliders = Array.from(elementos)  // Transformar todos os elementos da tag p em elementos do array
    exibirSlide(sliders, sliders[0])
}

function exibirSlide(slides, slide) {
    slide.style.display = 'block'
    const inicio = innerWidth // Essa propriedade vai me dar a largura da página
    const fim = -slide.clientWidth

    slide.style.left = `${inicio}px`

    mover(slide, inicio, fim, 2, () => {
        slide.style.display = 'none'
        exibirSlide(slides, getProximo(slides, slide))
    })
}

function getProximo(lista, atual) {
    const i = lista.indexOf(atual) + 1
    return i < lista.length ? lista[i] : lista[0]
}

slider()