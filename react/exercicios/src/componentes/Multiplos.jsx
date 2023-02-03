import React from "react"

// Quando eu coloco "Default" normalmente eu coloco um função se nome (Anônima) que é retornada por padrão quando esse módulo for importado

// Quando eu coloco simplismente "Export" e eu não coloco o nome da função vai dar erro, então no momento que eu estiver exportando e dizar qual é nome dessa função ou determidana variável que eu quero exportar.

const BoaTarde = props => <h1>Boa tarde {props.nome}</h1>

const BoaNoite = props => <h1>Boa noite {props.nome}</h1>

export default { BoaTarde, BoaNoite } 