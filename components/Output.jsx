import styles from './Output.module.css'
import { useState } from 'react'

export default function Output (props) {

    const [result, setResult] = useState("")

    // const binarioArray = (
    //     props.valorPraConverter ?
    //     props.valorPraConverter.split("") :
    //     "nada"
    // )

    // console.log(binarioArray)

    



    return (
        <div className="card">
            <h3>Decimal correspondente</h3>
            <output id={styles.decimalElement}>{result}</output>
        </div>
    )
}

