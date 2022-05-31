import '../../assets/css/Orders.css'
import Navbar from "../shared/Navbar"
import React from 'react'
import MostrarMenu from './MostrarMenu'
import NewOrder from './NewOrder'
import FormClient from './FormClient'


const Pedidos = (props) => {


return(
  <>
    <Navbar/>
    <MostrarMenu/>
    <FormClient/>
    <NewOrder />
  </>
)}


export default Pedidos