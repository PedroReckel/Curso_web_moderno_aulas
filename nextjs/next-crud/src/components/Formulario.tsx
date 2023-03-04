import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "../core/Cliente"
import Botao from "./Botao"

interface FormularioProps {
    cliente: Cliente
    cancelado?: () => void
    clienteMudou?: (cliente: Cliente) => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id // Se o cliente não estiver setado e tentar acessar o id dele
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    
    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} className='mb-5'/>
            ): false}
            <Entrada texto="Nome" valor={nome} className='mb-5' valorMudou={setNome}/>
            <Entrada texto="Idade" tipo="number" valor={idade} valorMudou={setIdade}/>
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2"
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}