import React, { Component } from "react"

export default class Saudacao extends Component {

    // Não é possivel altear as propriedades recebidas de um componente
    // Para altear as propriedades é preciso usar o "State"  

    state = { // Eu posso configurar o estado inicial a partir daquilo que eu recebi nas propriedades
        tipo: this.props.tipo, 
        nome: this.props.nome
    }

    constructor(props) {
        // Precisa chamar o super dentro do construtor para que as propriedades possam ser enviadas para o super
        super(props)

        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
            </div>
        )
    } 

}