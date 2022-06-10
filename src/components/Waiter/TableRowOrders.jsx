import React, { useState } from "react";
import Clientorders from "./Clientorders";


const TableRowOrders = ({ el}) => {
  let { client, products } = el;
  const [statusOrder, setStatusOrder] = useState('Pending')
  
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
              <option defaultValue={statusOrder}>Elija una opción</option>
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
            </select>
          </td>
    </tr>
    </>
  );
};

export default TableRowOrders;
