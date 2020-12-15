import { useState } from 'react'

import Layout from '../components/Layout'
import Input from '../components/Input'
import Output from '../components/Output'

export default function App(props) {

    const [valueInput, setValueInput] = useState()

    
    return (
        <Layout >
            <Input setValueInput={setValueInput} />
            <Output valorPraConverter={valueInput}/>        
        </Layout>
    )
}