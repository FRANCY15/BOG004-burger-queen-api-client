import "../../assets/css/Orders.css";
import Navbar from "../shared/Navbar";
import React, { useState } from "react";
import MostrarMenu from "./MostrarMenu";

import FormClient from "./FormClient";

const Pedidos = () => {
  const [newOrder, setNewOrder] = useState([]);
  // let newOrder = []; // Variable de estado

  const agregarProducto = (item) => {
    let resultNewProducts = newOrder.push(item);
    setNewOrder(resultNewProducts);
    console.log(resultNewProducts);
  };

  const borrarProducto = (item) => {
    if (newOrder.includes(item)) {
     let resultEraserProducts = newOrder.splice(newOrder.indexOf(item), 1);
     setNewOrder(resultEraserProducts)
     console.log(resultEraserProducts);
    }
  };

  return (
    <>
      <Navbar />
      <MostrarMenu
        agregarProducto={agregarProducto}
        borrarProducto={borrarProducto}
      />
      <FormClient />
    </>
  );
};

export default Pedidos;
