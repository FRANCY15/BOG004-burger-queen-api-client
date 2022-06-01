import React from 'react'
import { useState } from 'react'
import { userToken } from '../Login/Login';
import Api from '../../utils/Api';

const NewOrder = (item) => {
  let newOrder = [];

  const [products, setProducts] = useState([]);
      
    let menu = []; 
    const token = userToken;
    
    React.useEffect(() => {
      traerInfo()
    }, [])

    const traerInfo = () => {
    fetch(`${Api}/products`, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        authorization: 'Bearer ' + token,
      },
    })
    .then((res)=> res.json())
    .then(data => menu = data)
    .then((menu) => {
      setProducts(menu)
    })
    .catch(error => {
      throw(error)
    })
    }
  const agregarProducto = (item) => {
    newOrder.push(item)
    console.log(newOrder)
  }

  const borrarProducto = (item) => {
    console.log('Soy el borrador')
  }

  return (
    <div className='btn-options'>
                  <button 
                  className='btn-add' 
                  key={menu.id}
                  onClick={() => {agregarProducto(menu)}}
                  >Agregar</button>
                  <button 
                  className='btn-delete' 
                  key={item.id}
                  onClick={() => {borrarProducto(menu)}}
                  >Eliminar</button>
                </div>
  )
}

export default NewOrder