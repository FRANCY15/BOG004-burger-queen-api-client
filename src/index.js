import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AdminColaborator from './components/Admin/AdminColaborator';
import Login from './components/Login/Login';
import SelectorRol from './components/SelectorRol/SelectorRol';
import CrudOrder from './components/VistasMesero/CrudOrder';
import FormClient from './components/VistasMesero/FormClient';
import ListarPedidos from './components/VistasMesero/ListarPedidos';
import Mostrarordenes from './components/VistasMesero/Mostrarordenes';
import NewOrder from './components/VistasMesero/NewOrder';
import Pedidos from './components/VistasMesero/Pedidos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={< Login/>} />
      <Route path="/SelectorRol" element={< SelectorRol/>} />
      <Route path='/CrudOrder' element={<CrudOrder/>}/>
      <Route path='/NewOrder' element={<NewOrder/>}/>
      <Route path='/FormClient' element={<FormClient/>}/>
      <Route path='/Mostrarordenes' element={<Mostrarordenes/>}/>
      <Route path="/Pedidos" element={< Pedidos/>} />
      <Route path="/ListarPedidos" element={< ListarPedidos/>} />
      <Route path="/AdminColaborator" element={< AdminColaborator/>} />
    </Routes>
  </BrowserRouter>
);

