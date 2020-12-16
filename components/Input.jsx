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
        lockMoreThan8chars(event)
                       
        function lockInvalidChar() {
            
            const conditionForInput = (
                ( last == 0 )|
                ( last == 1 )|
                ( last == "" )
            )
            
            if (! conditionForInput){
                setMsg('Digite apenas 1 ou 0')
                setMsgClass(styles.error)
                event.target.value = value.slice(0, len  - 1)                
            } else {
                setMsg('')
                setMsgClass(styles.normal)
            }
        }
        
        function lockMoreThan8chars(event) {            
            if (value.length === 9) {
                event.target.value = value.slice(0, len  - 1)
                setMsg("Apenas 8 dígitos")
                setMsgClass(styles.error)
                // setFinalValueInput(event.target.value)
            }
        }       
        
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        const inputValue = document.getElementsByName("inputName")[0].value        
        if (inputValue.length != 8) {
            setMsg("Digite um binário com 8 dígitos")
            setMsgClass(styles.error)
            props.setInputValue("")
        } else {
            props.setInputValue(inputValue)
            setMsg("")
            setMsgClass(styles.normal)
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
                    name="inputName"
                />
                <input type="submit" value="converter" />                
                <div className={msgClass} >
                    {msg}
                </div>
            </form>
        </div>
    )
}