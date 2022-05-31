import React from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import { useState } from 'react'



const CrudOrder = () => {
  
    const [db, setdb] = useState([])
    const [dataToEdit, setdataToEdit] = useState(null)
    
    const createOrder = (data) => {}

    const updateOrder = (data) => {}

    const deleteOrder = (id) => {}
  
    return (
    <div>
        <h2>New Order</h2>
        <CrudForm 
        createOrder={createOrder} 
        updateOrder={updateOrder} 
        dataToEdit={dataToEdit}
        setdataToEdit={setdataToEdit}
        />
        <CrudTable 
        data={db} 
        setdataToEdit={setdataToEdit}
        deleteOrder={deleteOrder}/>
    </div>
  )
}

export default CrudOrder