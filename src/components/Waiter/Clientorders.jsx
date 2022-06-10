import React, { useState } from "react";


const Clientorders = ({products}) => {

  const [orders, setOrders] = useState(products);
  let ordersclient = orders?.map((entry) => (
      
        <tr key={entry.id}>
            <td>{entry.product.name}</td>
            <td>{entry.qty}</td>
            <td>{entry.product.price}</td>
        </tr>
        
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Qty</th>
          <th scope="col">Price</th>
          
        </tr>
      </thead>
      <tbody>{ordersclient}</tbody>
    </table>
  );
};

export default Clientorders;
