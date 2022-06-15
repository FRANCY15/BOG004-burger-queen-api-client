import React, { useState } from "react";
import Clientorders from "../Waiter/Clientorders";



const CookTableRowOrders = ({ el}) => {
  let { client, products } = el;
  const [statusOrder, setStatusOrder] = useState('Pending')

  //Petición PATCH
  
  return (
    <>
    <tr>
      <td>{client}</td>
      <td><Clientorders products={products}/></td>
      <td>
          <label htmlFor="status">Order Status</label>
            <select
            type="text" 
            name="status"
            onChange={(e) => setStatusOrder(e.target.value)}
            value={statusOrder}
            >
              <option selected>{statusOrder}</option>
              <option value="delivering">Delivering</option>
            </select>
          </td>
    </tr>
    </>
  );
};

export default CookTableRowOrders;
