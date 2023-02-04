import React from 'react'
import ReactDOM from 'react-dom'

import Saudacao from './componentes/Saudacao' // Todo componente criado por mim tem que começar o letra maiuscula 
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Pedro" sobrenome="Reckel">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Jonatas" />
            <Filho nome="Ester"   />
        </Pai>
    </div>
, document.getElementById('root'))