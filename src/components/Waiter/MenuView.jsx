import React, { useEffect, useState } from "react";
import Api from "../../utils/Api";
import { userToken } from "../Login/Login";
import { helpHttp } from "../helpers/helpHttp";

export const newOrder = [];
const MenuView = () => {
  const [products, setProducts] = useState([]);
  // const [newOrder, setNewOrder] = useState([]);

  let menu = [];
  

  useEffect(() => {
    helpHttp()
      .get(`${Api}/products`)
      .then((res) => {
        if (!res.err) {
          setProducts(res);          
        } else {
          setProducts(null);         
        }       
      });
  }, []);
  
  // let newOrder = []; // Variable de estado

  const agregarProducto = (item) => {
    newOrder.push(item);
    //   setNewOrder(resultNewProducts);
    console.log(newOrder);
  };

  const borrarProducto = (item) => {
    if (newOrder.includes(item)) {
      newOrder.splice(newOrder.indexOf(item), 1);
      //    setNewOrder(resultEraserProducts)
      console.log(newOrder);
    }
  };

  return (
      
    <>
      <div className="viewMenu">
        {products.map((item) => (
          <div className="optionsMenu" key={item.id}>
            <div className="bodyMenu">
              <h2>{item.type}</h2>
              <h3>{item.name}</h3>
              <h3>{item.price}</h3>
            
              <div className="btn-options">
                <button
                  className="btn-add"
                  onClick={() => {
                    agregarProducto(item);
                  }}
                >
                  Agregar
                </button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    borrarProducto(item);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div>
            {
              mostrarOrden([newOrder])
            }
          </div> */}
    </>
  );
};

export default MenuView;
