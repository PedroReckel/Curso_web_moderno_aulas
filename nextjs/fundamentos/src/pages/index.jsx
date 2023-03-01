import Navegador from "@/components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
        <Navegador texto="Estiloso" destino="/estiloso" cor="crimson"/>
        <Navegador texto="Exemplo" destino="/exemplo"/>
        <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
        <Navegador texto="Navegação #02" destino="/cliente/sp-2/321" cor="#9400d3"/>
        <Navegador texto="Componente com estado" destino="/estado" cor="pink"/>
        <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#42a9a9"/>
        <Navegador texto="Conteudo Estático" destino="/estatico" cor="#fa054a"/>
        <Navegador texto="Teste" destino="/teste" cor="#fff"/>
    </div>
  )
}