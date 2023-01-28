import $ from 'jquery'

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include') // Pegando a URL do elemento wm-include
        $.ajax({
            url,
            success(data) {
                $(e).html(data) // Jogando o dado de retorno dentro do elemento wm-include
                $(e).removeAttr('wm-include') // Retirando a propriedade wm-include para que não aja nenhuma interpretação errada dela

                loadIncludes(e) // Em cima do próprio elemento que eu acebei de obter eu vou de novo de forma recursiva chamar a própria função para que ele encontrar dentro dele outros elemento que possuem a propriedade wm-include
            }
        })
    })
}

loadIncludes()