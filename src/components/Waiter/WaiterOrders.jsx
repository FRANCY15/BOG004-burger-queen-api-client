import React, {useEffect, useState} from "react";
import Api from "../../utils/Api";
import { helpHttp } from "../helpers/helpHttp";
import Navbar from "../shared/Navbar";
import TableRowOrders from '../Waiter/TableRowOrders'

import '../../assets/css/TableOrders.css'

const WaiterOrders = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  let url = `${Api}/orders`;

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setData(res);
          setError(null);
        } else {
          setError(res);
        }
      });
  }, []);

  let orderDelivering = data.filter(data => data.status === 'delivering');
  // console.log('DELIVERING',orderDelivering)


  return (
    <div>
      <Navbar/>
      <div className="styleCrudsOrders">
        <h3>Esta es tu Orden</h3>
        <table className="Table-order">
          <thead>
            <tr>
              <th>Name Client</th>
              <th>Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orderDelivering?.length === 0 ? (
              <tr>
                <td colSpan="3">Not data</td>
              </tr>
            ) : (
              orderDelivering?.map((el) => ( el.status === 'delivered' ? ' ' : 
                <TableRowOrders
                  key={el.id}
                  el={el}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WaiterOrders;
