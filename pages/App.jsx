import { useState } from 'react'

import Layout from '../components/Layout'
import Input from '../components/Input'
import Output from '../components/Output'

export default function App(props) {

    const [inputValue, setInputValue] = useState()

    
   
    return (
        <Layout >
            <Input setInputValue={setInputValue} />
            <Output inputValue={inputValue}/>
            <div>Texto adicional</div>
        </Layout>
    )
}