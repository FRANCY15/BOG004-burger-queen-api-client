import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import FormOrders from "./FormOrders";
import Api from "../../utils/Api";
import Loader from "../Loader/Loader";
import Message from "../Loader/Message";


const OrdersApi = () => {
  const [dbOrders, setdbOrders] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = `${Api}/orders`;

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setdbOrders(res);
          setError(null);
        } else {
          setdbOrders(null);
          setError(res);
        }
        setLoading(false);
      });
  }, []);

  const createData = (data) => {
    console.log("esto es data", data);
    api
      .post(url, {
        body: data
      })
      .then((res) => {
        console.log("esto es res",res);
        if (!res.err) {
          setdbOrders([...dbOrders, res]);
        } else {
          setError(res);
        }
      });
  };

  const updateData = (data) => {
    let newData = dbOrders.map((el) => (el.id === data.id ? data : el));
    setdbOrders(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure you want to delete the record? idClient: '${id}'`
    );

    if (isDelete) {
      let newData = dbOrders.filter((el) => el.id !== id);
      setdbOrders(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      
      <h2>Orders Api</h2>
      
      <FormOrders
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}:${error.statusText}`}
          bgColor="#dc3545"
        />
      )}
    </div>
  );
};

export default OrdersApi;
