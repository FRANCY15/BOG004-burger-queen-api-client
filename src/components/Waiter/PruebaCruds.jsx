import React from 'react'
import Navbar from '../shared/Navbar'
import MenuView from './MenuView'
import Orders from './Orders'
import OrdersApi from './OrdersApi'

const PruebaCruds = () => {
  return (
    <div>
        <Navbar/>
<<<<<<< HEAD
=======
        {/* // componente con nombre de cliente */}
        <hr />
        <OrdersApi/>       
        <hr />
        {/* componente resumen del pedido  */}
>>>>>>> bf6eefe (cambios vista mesero)
        <MenuView/>
        <hr />
        <OrdersApi/>       
    </div>
  )
}

export default PruebaCruds