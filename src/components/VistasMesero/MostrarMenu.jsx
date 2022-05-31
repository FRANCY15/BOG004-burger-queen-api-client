import React from 'react'
import Api from '../../utils/Api';
import {userToken} from '../Login/Login'
import { useState } from 'react';


const MostrarMenu = () => {

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

    const [agregarProduct, setagregarProduct] = useState('');
    
    const agregarProducto = () => {
      console.log(agregarProduct)
    }
    const borrarProducto = () => {
      console.log(menu)
    }
  

    return (
        <>
          <div className='viewMenu'>
          {
            products.map(item => (
              <div className='optionsMenu'>
                <div className='bodyMenu'>
                  <h2>{item.type}</h2>
                  <h3>{item.name}</h3>
                  <h3>{item.price}</h3>
                  <img src={item.image} alt="Product" width="150px" height="100px"/>
                <div className='btn-options'>
                  <button 
                  onClick={() => {agregarProducto()}} className='btn-add' 
                  key={item.id}
                  onChange={(e) => {setagregarProduct(e.target.value)}} >Agregar</button>
                  <button 
                  onClick={() => {borrarProducto()}} className='btn-delete' key={item.id}>Eliminar</button>
                </div>
                </div>
              </div>
            ))
          }
          </div>
        </>
      )}

export default MostrarMenu