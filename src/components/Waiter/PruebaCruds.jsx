import React from "react";
import Navbar from "../shared/Navbar";
import MenuView from "./MenuView";
import OrdersApi from "./OrdersApi";
import "../../assets/css/pruebaCruds.css";

const PruebaCruds = () => {
  return (
    <>
      <Navbar />
      <div className="styleCruds">
        <div className="contentCrud">
          <MenuView />
        
          <OrdersApi />
        </div>
      </div>
    </>
  );
};

export default PruebaCruds;