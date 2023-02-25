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
    </div>
  )
}