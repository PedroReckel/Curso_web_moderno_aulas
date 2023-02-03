import React from "react"

// Três jeitos de colocar duas ou mais tags dentro de um componente:

// Tags dentro de uma array
export default props => 
    [
        <h1>Bom dia, {props.nome}!</h1>,
        <h2>Até breve!</h2>
    ]

// Tags dentros de uma DIV  
// export default props => 
//     <div>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </div>

// Tags dentro da tag React.Fragment OBS: Para usar precisa importar a propriedade { ReactFragment } 
// export default props => 
//     <React.Fragment>
//         <h1>Bom dia, {props.nome}!</h1>
//         <h2>Até breve!</h2>
//     </React.Fragment>