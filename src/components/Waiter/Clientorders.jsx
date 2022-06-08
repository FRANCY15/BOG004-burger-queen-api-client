import React, { useState } from "react";

const ordersDefault = [
    {
        name: 'P1',
        qty: 1,
        price: 5
    },
    {
        name: 'P2',
        qty: 1,
        price: 5
    },
    {
        name: 'P3',
        qty: 1,
        price: 5
    }
]

const Clientorders = ({products}) => {
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', products)
  const [orders, setOrders] = useState(products);
  let ordersclient = orders?.map((entry) => (
      
        <tr key={entry.id}>
            <td>{entry.product.name}</td>
            <td>{entry.qty}</td>
            <td>{entry.product.price}</td>
        </tr>
        
  ));
  // setOrders([...orders]);

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
