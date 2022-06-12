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

const FormOrders = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);


 
  const handleChange = (e) => {
    setForm({
            // ...form,
      [e.target.name]: e.target.value,
     
    "userId": userId,
    "products":  newOrder,
    "status": 'pending',
    "dateEntry": new Date()
    });
  };

  const handleSubmit = (e) => {
   
    e.preventDefault();
    if (!form) {
      alert("Datos incompletos");
      return;
    }
    console.log("este es form.id", form.id);
    createData(form);
    handleReset();
    window.confirm('Está seguro de enviar la orden?')
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
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
      <h3>{dataToEdit ? "Edit info Client" : "Client Information"}</h3>
     
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
            onChange={handleChange}
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
              <tbody>
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
