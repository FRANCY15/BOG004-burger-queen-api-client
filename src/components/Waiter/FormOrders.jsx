import React, { useEffect, useState } from "react";
import { userId } from "../Login/Login";
import { newOrder } from './MenuView';
import '../../assets/css/FormOrders.css'


const initialForm = {
  "userId": userId,
  "client": "",
  "products": [],
  "status": "",
  "dateEntry": ""
};

const FormOrders = ({createData}) => {
  const [form, setForm] = useState(initialForm);
  // const [updateNewOrder, setUpdateNewOrder] = useState(false);
 
  const handleChange = (e) => {
    setForm({
            "userId": userId,
            "products":  newOrder,
            "status": 'pending',
            "dateEntry": new Date(),
      [e.target.name]: e.target.value,
      });

  };
  
  const reset = () => {
    let table = document.getElementsById('Table-dataOrder');
    table.innerHTML = '';
}

  const handleSubmit = (e) => {
   
    e.preventDefault();
    if (!form) {
      alert("Datos incompletos");
      return;
    }
    createData(form);
    window.confirm('Está seguro de enviar la orden?')
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    reset()
  };
 

  let ordersclient = newOrder.map((entry) => (
    <tr key={entry.id}>
      <td>{entry.product.name}</td>
      <td>${entry.product.price}</td>
      <td>{entry.product.type}</td>
      <td>{entry.qty}</td>
      <td></td>
    </tr>
));
  

  return (
    <div>     
      <form className="Form-order" onSubmit={handleSubmit} >
            <label htmlFor="client">Name Client</label>
            <input 
            type="text" 
            name="client" 
            placeholder='Name Client' 
            onChange={handleChange}
            value={form.client}
            />
            <label htmlFor="table">User id</label>
            <input 
            type="text" 
            name="table"
            value={form.userId}
            disabled
            />
            <table className="Table-order">
              <thead>
                <th>Product</th>
                <th>Price</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Total</th>
              </thead>
              <tbody id="Table-dataOrder">
                {ordersclient}
              </tbody>
            </table>
            <input type="submit" value="Register"
            onClick={handleSubmit}/>
            <input type="reset" value="Clear"
            onClick={handleReset}/>
        </form>
    </div>
  );
};

export default FormOrders;
