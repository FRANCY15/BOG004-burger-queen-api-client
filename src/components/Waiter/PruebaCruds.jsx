import React, {useState} from "react";
import Navbar from "../shared/Navbar";
import MenuView from "./MenuView";
import OrdersApi from "./OrdersApi";
import "../../assets/css/pruebaCruds.css";

const PruebaCruds = () => {

  const [load, setLoad] = useState(false)

  return (
    <>
      <Navbar />
      <div className="styleCruds">
        <div className="contentCrud">
          <MenuView setLoading={setLoad} />
          <OrdersApi loading={load}/>
        </div>
      </div>
    </>
  );
};

export default PruebaCruds;