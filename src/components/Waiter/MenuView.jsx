import React, { useEffect, useState } from "react";
import Api from "../../utils/Api";
import { helpHttp } from "../helpers/helpHttp";
import "../../assets/css/MenuView.css";

export const newOrder = [];

const MenuView = () => {
  const [products, setProducts] = useState([]);
  const [option, setOption] = useState('');
  const [typeMn, setTypeMn] = useState([]);  

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

  const agregarProducto = (item) => {
    item = {
      qty: 1,
      ...item
    }
    newOrder.push(item);
    console.log(newOrder);
  };

  const borrarProducto = (item) => {
    newOrder.map((el) => {
      if(el.id === item.id){
        newOrder.splice(newOrder.indexOf(el), 1);
      }
    })
      console.log(newOrder);
  }

  const elegirMenu = () => {
    if(option === 'Almuerzo'){
        let resultado = products.filter((product) => product.type === "Almuerzo");
        setTypeMn(resultado)
        
    }else if(option === 'Desayuno'){
        let resultado = products.filter((product) => product.type === "Desayuno");
        setTypeMn(resultado)
    }
  }

  return (
    <>
        <label htmlFor="SelectMenu">Seleccionar Menu</label>
        <select onChange={(e) => setOption(e.target.value)} onClick={()=>{elegirMenu()}} name="opciones">
          <option defaultValue={setOption}>Elija una opción</option>
          <option key="Alm" value="Almuerzo">
            Almuerzo
          </option>
          <option key="Des" value="Desayuno">
            Desayuno
          </option>
        </select>
        <hr />
      <div className="viewMenu">
        {typeMn.map((item) => (
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
                  +
                </button>
                <button
                  className="btn-delete"
                  onClick={() => {
                    borrarProducto(item);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuView;
