import React, { useEffect, useState } from "react";
import Api from "../../utils/Api";
import { helpHttp } from "../helpers/helpHttp";
import CookTableRowOrders from "./CookTableRowOrders";
import "../../assets/css/TableOrders.css";
import GenericNavbar from "../shared/GenericNavbar";


const CookView = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  let url = `${Api}/orders`;

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setOrders(res.filter((element) => element.status === "pending"));
          setError(null);
        } else {
          setError(res);
        }
      });
  }, []);

  const updateOrders = () => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setOrders(res.filter((element) => element.status === "pending"));
        } else {
          setError(res);
        }
      });
  };

  return (
    <div>
      <GenericNavbar />
      <div className="styleCrudsOrders">
        <h3>This is the order pending</h3>
        <table className="Table-order">
          <thead>
            <tr>
              <th>Name Client</th>
              <th>Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="3">Not data</td>
              </tr>
            ) : (
              orders.map((element) => (
                <CookTableRowOrders
                  key={element.id}
                  el={element}
                  updateOrders={updateOrders}
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
