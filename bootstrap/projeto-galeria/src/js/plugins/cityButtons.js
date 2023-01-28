import $ from 'jquery'

const duration = 300

function filterByCity(city) {
    $('[wm-city]').each(function(i, e) {
        const isTarget = $(this).attr('wm-city') === city // Validando qual o valor do atributo city
        if(isTarget) {   // Se ele for true, irá aparecer todas as fotos da cidade escolhida // Se for false (null) ele vai trazer todas as cidades 
            $(this).fadeIn(duration) 
        } else {
            $(this).fadeOut(duration)
        }
    })
}

$.fn.cityButtons = function() {
    const cities = new Set
    $('[wm-city]').each(function(i, e) {
        cities.add($(e).attr('wm-city'))
    })

    const btns = Array.from(cities).map(city => { // Transformando as cidades em array
        const btn = $('<buttom>').addClass(['btn', 'btn-info']).html(city) // Colocando as cidades dentro de botões
        btn.click(e => filterByCity(city))
        return btn    
    })

    const btnAll = $('<button>').addClass(['btn', 'btn-info']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll) // Adicionando o botão "todas" no array de botões
    
    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.appen(btns)

    cityButtons.html(btnGroup)
    return this
}