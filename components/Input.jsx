import styles from './Input.module.css'
import { useState } from 'react'

export default function Input(props) {

    const [finalValueInput, setFinalValueInput] = useState("")
    const [msg, setMsg] = useState("")
    const [msgClass, setMsgClass] = useState(styles.normal)

    
    const handleChange = event => {
        
        const value = event.target.value        
        const len = value.length        
        const last = value.charAt(len - 1)
        
        
        lockInvalidChar(event)

        limit8chars(event)
                       
        function lockInvalidChar() {
            
            const conditionForInput = (
                ( last == 0 )|
                ( last == 1 )|
                ( last == "" )
            )
            
            if (! conditionForInput){
                setMsgClass(styles.error)
                setMsg('Digite apenas 1 ou 0')
                event.target.value = value.slice(0, len  - 1)
                console.log(msg)
            } else {
                setMsgClass(styles.normal)
                setMsg('')
            }
        }
        
        function limit8chars(event) {            
            if (value.length === 9) {
                event.target.value = value.slice(0, len  - 1)
                setFinalValueInput(event.target.value)
                // console.log(event.target.value)
                setMsg("Apenas 8 dígitos")
                setMsgClass(styles.error)
            }
        }

        
        if ( event.target.value.length == 8 ) {
            // props.setValueInput(value)
            setFinalValueInput(value)
        } else {
            // props.setValueInput("")
            setFinalValueInput("")
        }
        
        
    }

    const handleSubmit = event => {
        
        event.preventDefault()
        setMsg('')        
        if ( finalValueInput ){
            props.setValueInput(finalValueInput)
        } else {
            setMsgClass(styles.error)
            setMsg("Informe o binário, com 8 dígitos.")
        }
    }
    
    return(
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label>

                </label>
                <h3 >Informe o binário, com 8 dígitos</h3>
                <input 
                    type="text"                                        
                    onChange={e=>handleChange(e)}                    
                    placeholder="Digite o binário aqui..."
                    id={styles.inputId}
                    name="inputId"
                />
                <input type="submit" value="converter" />                
                <div className={msgClass} >
                    {msg}
                </div>
            </form>
        </div>
    )
}

const check = e => {
    const inputElement = document.getElementById("inputElement")
    const value = inputElement.value
    const last = value[value.length-1]
    console.log(last)
}