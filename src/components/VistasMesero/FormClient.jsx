import React from 'react'

const FormClient = () => {
  return (
    <div>
        <form >
            <label htmlFor="client">Client</label>
            <input type="text" name='client'/>
            <label htmlFor="client">Table</label>
            <input type="text" name='table'/>
        </form>
    </div>
  )
}

export default FormClient