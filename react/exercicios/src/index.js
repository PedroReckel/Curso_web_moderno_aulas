import React from 'react'
import ReactDOM from 'react-dom'

import Multi from './componentes/Multiplos' // Todo componente criado por mim tem que começar o letra maiuscula 

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana"/>
        <Multi.BoaNoite nome="Bia"/>
    </div>
, document.getElementById('root'))