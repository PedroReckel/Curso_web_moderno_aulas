import Layout from "../components/Layout"
import Cliente from "../core/Cliente"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import { useState } from "react"

export default function Home() {
  
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 21, '4'),
  ]
  
  function clienteSelecionado(Cliente: Cliente) {
    console.log(`Alterando ${Cliente.nome}`)
  }

  function clienteExcluido(Cliente: Cliente) {
    console.log(`Excluindo ${Cliente.nome}`)
  }

  function salvarcliente(cliente: Cliente) {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to bg-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
      {visivel === 'tabela' ? ( 
      <>
        <div className="flex justify-end">
          <Botao cor="green" className="mb-4" 
            onClick={() => setVisivel('form')}>
            Novo cliente
          </Botao>
        </div>
          <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          />
      </>      
      ) : (
        <Formulario 
          cliente={clientes[3]} 
          clienteMudou={salvarcliente}
          cancelado={() => setVisivel('tabela')}
        />
      )}
      </Layout>
    </div>
  )
}