import React from 'react'
import { useState, useEffect } from 'react'


const initialForm = {
    type: '',
    product: '',
    id: null
}

const CrudForm = () => {
    
    
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.type]: e.target.value
    })
    }

    const handleSubmit = (e) => {}
    
    const handleReset = (e) => {}

  return (
    <div>
        <h3>Agregar</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name='type' 
            placeholder='tipo' 
            onChange={handleChange} 
           />
            <input 
            type="text" 
            name='product' 
            placeholder='producto' 
            onChange={handleChange} 
           />
            <input type="submit" value='Enviar' />
            <input type="reset" value='Limpiar' onClick={handleReset}/>
        </form>
    </div>
  )
}

export default CrudForm