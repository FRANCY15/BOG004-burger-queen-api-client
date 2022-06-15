import React, { useState } from "react";
import Api from "../../utils/Api";
import { helpHttp } from "../helpers/helpHttp";
import Clientorders from "./Clientorders";


const TableRowOrders = ({ el}) => {
  let { client, products } = el;

  const [statusOrder, setStatusOrder] = useState('delivering')
  let url = Api



    helpHttp()
    .patch(`${url}/orders/`+ products.id)
    console.log(products.id)
  //   {
  //     "status": "delivered",
  //     "dateProcessed": "2022-03-05 16:00"
  // }
  
  
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
              <option value="delivered">Delivered</option>
            </select>
          </td>
    </tr>
    </>
  );
};

export default TableRowOrders;