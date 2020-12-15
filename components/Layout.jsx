import Head from 'next/head'

import styles from './Layout.module.css'

const Layout = props => {
    return (
        <div className={styles.containerLayout}>
            <Head>
                <title>Conversão de Binário para Decimal</title>
            </Head>
            <h1 id={styles.tituloLayout}>Binário para Decimal</h1>
            
            <div id={styles.containerChildren}>
                {props.children}
            </div>

            
            <h4 id={styles.rodapeLayout}>Direitos reservados</h4>            
        </div>
    )
}

export default Layout