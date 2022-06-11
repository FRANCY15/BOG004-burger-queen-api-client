import React, { useEffect, useState } from "react";
import Api from "../../utils/Api";
import { helpHttp } from "../helpers/helpHttp";
import "../../assets/css/MenuView.css";
import useCouter from "../counterHooks/useCouter";

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
          res = res.map((item) => {
            return {...item, qty: 0};
          });
          setProducts(res);
        } else {
          setProducts(null);
        }
      });
  }, []);

  const {countqty , incrementQty, decrementQty} = useCouter(); 
   

  const agregarProducto = (item) => {
    // item.qty = item.qty + 1;
    // primero buscar si el item ya existe en newOrder, entonces debe actualizar el que ya esta
    // dentro de newOrder
    if(products.find(({id})=> id === item.id)){
      let findProduct = products.findIndex(({id})=> id === item.id);
      products[findProduct].qty ++
    }else{
      products.push({...item, qty: 1});
      setProducts(products)
    }
   
    //si no existe, solo lo empuja al arreglo de newOrder
    newOrder.push(item);
    incrementQty();
    console.log(newOrder);
  };

  const borrarProducto = (item) => {
    let delProduct = products.findIndex(({id})=> id === item.id);
    if(products[delProduct].qty > 1){
      products[delProduct].qty--;

    }else{
      products.splice(delProduct, 1);
    }
    // newOrder.map((el) => {
    //   if(el.id === item.id){
    //     newOrder.splice(newOrder.indexOf(el), 1);
    //     decrementQty();
    //   }
    // })
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
              
              <h2>{item.name}</h2>
              {/* <img src={item.image} alt="" /> */}
              <h3>Price: $ {item.price}</h3>
            
              <div className="btn-options">
                <button
                  className="btn-add"
                  onClick={() => {
                    agregarProducto(item); 
                  }}
                >
                  +
                </button>

                <h3>{item.qty}</h3>

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
