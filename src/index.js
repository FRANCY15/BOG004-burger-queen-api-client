import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import SelectorRol from './components/SelectorRol/SelectorRol';
import ListarPedidos from './components/VistasMesero/ListarPedidos';
import Pedidos from './components/VistasMesero/Pedidos';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={< Login/>} />
      <Route path="/SelectorRol" element={< SelectorRol/>} />
      <Route path="/Pedidos" element={< Pedidos/>} />
      <Route path="/ListarPedidos" element={< ListarPedidos/>} />
    </Routes>
  </BrowserRouter>
);

