import React from 'react'
import './Button.css'

export default props => {
    let classes = 'button '
    // Se a propriedade operation for passada para o botão ele vai adicionar a classe operation se não vai retornar vazia
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        // Sempre que eu tiver uma empressão com chaves dentro de uma arquivo jsx lá dentro eu posso colocar código JavaScript
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    ) 
}