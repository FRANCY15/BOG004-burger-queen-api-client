import React from 'react'
import { userToken } from '../Login/Login';
import Api from '../../utils/Api';
import { useState } from 'react';
import Navbar from '../shared/Navbar';
import '../../assets/css/Orders.css'

const Mostrarordenes = () => {

    const [order, setOrder] = useState([]);
    let listOrders = []; 
    const token = userToken;
    
    React.useEffect(() => {
      traerInfo()
    }, [])

    const traerInfo = () => {
        fetch(`${Api}/orders`, {
          method: "GET", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            authorization: 'Bearer ' + token,
          },
        })
        .then((res)=> res.json())
        .then(data => listOrders = data)
        .then((listOrders) => {
          setOrder(listOrders)
        })
        .catch(error => {
          throw(error)
        })
        }

  return (
    <>
    <Navbar/>
    <div>
        <table className='table-resume-orders'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Client</th>
                    <th>Status</th>
                    <th>Products</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    order.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.dataEntry}</td>
                            <td>{item.client}</td>
                            <td>{item.status}</td>
                            <td></td>
                            <td>
                                <button className='btn-edit'>Editar</button>
                                <button className='btn-delete'>Borrar</button>
                            </td>
                        </tr>
                    ))     
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Mostrarordenes