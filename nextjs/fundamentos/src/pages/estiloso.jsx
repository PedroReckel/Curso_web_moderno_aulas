import styles from '../styles/Estiloso.module.css'
import Layout from '@/components/Layout'

export default function Estiloso() {
     return (
        <Layout titulo="Exemplo de css modulaziado">
            <div className={styles.roxo}>
                <h1>Estilo usando css Módulos</h1>
            </div>
        </Layout>
     )
}