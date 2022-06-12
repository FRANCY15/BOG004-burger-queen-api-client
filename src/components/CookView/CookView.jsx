import React, {useEffect, useState} from "react";
import Api from "../../utils/Api";
import { helpHttp } from "../helpers/helpHttp";
import Navbar from "../shared/Navbar";
import CookTableRowOrders from './CookTableRowOrders'

import '../../assets/css/TableOrders.css'

const CookView = ({ setDataToEdit, deleteData }) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  console.log(data)

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
            {data?.length === 0 ? (
              <tr>
                <td colSpan="3">Not data</td>
              </tr>
            ) : (
              data?.map((el) => ( el.status === 'delivered' ? ' ' : 
                <CookTableRowOrders
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

export default CookView;
