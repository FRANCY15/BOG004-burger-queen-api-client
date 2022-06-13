import React, { useState } from "react";
import Api from "../../utils/Api";
import { helpHttp } from "../helpers/helpHttp";
import Clientorders from "../Waiter/Clientorders";



const CookTableRowOrders = ({ el}) => {
  let { client, products, id } = el;
  const [statusOrder, setStatusOrder] = useState('Pending')
  let url = `${Api}/orders/`+id;


const updateStatus = () => {
  helpHttp()
  .patch(url, )
}
  
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
