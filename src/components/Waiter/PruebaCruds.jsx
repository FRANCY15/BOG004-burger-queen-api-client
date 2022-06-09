import React from 'react'
import Navbar from '../shared/Navbar'
import MenuView from './MenuView'
import Orders from './Orders'
import OrdersApi from './OrdersApi'

const PruebaCruds = () => {
  return (
    <div>
        <Navbar/>
        <MenuView/>
        <hr />
        <OrdersApi/>       
    </div>
  )
}

export default PruebaCruds