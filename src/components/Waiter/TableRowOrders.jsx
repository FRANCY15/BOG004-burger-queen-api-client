import React from "react";
import Clientorders from "./Clientorders";


const TableRowOrders = ({ el, setDataToEdit, deleteData }) => {
  let { client, products,  id } = el;
  
  // console.log("este es products", products[0].product.name);
  return (
    <tr>
      <td>{client}</td>
      <td><Clientorders products={products}/></td>
      <td></td>
      <td>
        <button>Send</button>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TableRowOrders;
