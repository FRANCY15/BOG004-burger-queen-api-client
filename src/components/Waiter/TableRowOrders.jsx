import React from "react";
import Clientorders from "./Clientorders";


const TableRowOrders = ({ el}) => {
  let { client, products } = el;
  
  // console.log("este es products", products[0].product.name);
  return (
    <tr>
      <td>{client}</td>
      <td><Clientorders products={products}/></td>
      <td></td>
    </tr>
  );
};

export default TableRowOrders;
