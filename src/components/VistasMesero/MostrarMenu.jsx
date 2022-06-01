import React from 'react'
import Api from '../../utils/Api';
import {userToken} from '../Login/Login'
import { useState } from 'react';


const MostrarMenu = () => {

    const [products, setProducts] = useState([]);
    const [agregProduct, setAgregProduct] = useState([]);
    let newOrder = [];

    
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

    // const mostrarOrden = (arrayProducts) => {
    //   newOrder.map((item)=>{
    //     <table>
    //       <tr>
    //         <th>
    //           <td>{item.id}</td>
    //           <td>{item.name}</td>
    //           <td>{item.price}</td>
    //         </th>
    //       </tr>
    //     </table>
    //   })
    // }
    
    const borrarProducto = (item) => {
      newOrder.pop(item.id)
      console.log(newOrder)
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
                  className='btn-add' 
                  key={item.id}
                  onClick={() => {agregarProducto(item)}}
                  >Agregar</button>
                  <button 
                  className='btn-delete' 
                  key={item.id}
                  onClick={() => {borrarProducto(item)}}
                  >Eliminar</button>
                </div>
                </div>
              </div>
            ))
          }
          </div>
          {/* <div>
            {
              mostrarOrden([newOrder])
            }
          </div> */}
        </>
      )}

export default MostrarMenu