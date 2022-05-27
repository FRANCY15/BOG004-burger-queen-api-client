import '../../assets/css/Orders.css'
import Navbar from "../shared/Navbar"
import Api from '../../utils/Api'
import { useState, useEffect } from 'react'
import {userToken} from '../Login/Login'


const Pedidos = () => {

const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [image, setImage] = useState('');
const [type, setType] = useState('');
const [client, setClient] = useState('');
const [products, setProducts] = useState('');

const getProducts = () => {

  const token = userToken;
  let data;
  fetch(`${Api}/products`, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        authorization: 'Bearer ' + token,
      },
    })
    .then((res)=> {
      return(res.json())
    })
    .then(response => {
      data = (response)
    })
    .catch(error => console.error('este es el error',error))

    console.log(data)

    const arrayProducts = data.map((product)=> 
        <tr>
          <th scope="row">{product.Id}</th>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.image}</td>
      </tr>
    )
    setProducts(arrayProducts)
}
useEffect(() => {
  getProducts();
}, []);


  return (
      <div className="Orders">
        <Navbar/>
        <section className='body-orders'>
          <form className='new-order'>
            <label htmlFor="id">Id Order</label>
            <input type="text" name="id" id="order" disabled />
            <label htmlFor="client">Client</label>
            <input type="text" name="client" id="client" />
            <label htmlFor="client">Table</label>
            <input type="text" name="table" id="table" />
            <label htmlFor="">Food</label>
            <select name="food" id="food">
              <option value=""></option>
            </select>
            <label htmlFor="">Drinks</label>
            <select name="drinks" id="drinks">
              <option value=""></option>
            </select>
          </form>
          <h2>Your Order</h2>
          <table>
            <thead>
              <tr>
                <th>Menu</th>
                <th>Quantity</th>
                <th>Unit value</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {products}
              </tr>
            </tbody>
          <tfoot>
              <th>Total Order</th>
              <th></th>
              <th></th>
              <th>$0000000000000</th>
          </tfoot>
          </table>
        </section>
      </div>
    
  )
}

export default Pedidos