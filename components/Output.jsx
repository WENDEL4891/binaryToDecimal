import styles from './Output.module.css'
import { useState } from 'react'

export default function Output (props) {

    
    const getResult = result => {
        if (props.inputValue){
            let decimal = 0
            let fatorDeMultiplicacao = 128
            props.inputValue.split("").forEach((dgt, idx, bin) => {                               
                decimal += Number(dgt) * fatorDeMultiplicacao
                fatorDeMultiplicacao /= 2
            })
            return decimal.toString()
        } else {
            return ""
        }
    }    

    return (
        <div className="card">
            <h3>Decimal correspondente</h3>            
            <output id={
                getResult() ? styles.decimalElement : ""
            }>{getResult()}</output>
        </div>
    )
}

