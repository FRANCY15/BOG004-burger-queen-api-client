import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminColaborator from "./components/Admin/AdminColaborator";
import Login from "./components/Login/Login";
import SelectorRol from "./components/SelectorRol/SelectorRol";
import OrdersApi from "./components/Waiter/OrdersApi";
import PruebaCruds from "./components/Waiter/PruebaCruds";
import CookView from "./components/CookView/CookView";
import WaiterOrders from "./components/Waiter/WaiterOrders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SelectorRol" element={<SelectorRol />} />
      <Route path="/AdminColaborator" element={<AdminColaborator />} />
      <Route path="/PruebaCruds" element={<PruebaCruds />} />
      <Route path="/OrdersApi" element={<OrdersApi />} />
      <Route path="/CookView" element={<CookView />} />
      <Route path="/WaiterOrders" element={<WaiterOrders />} />
    </Routes>
  </BrowserRouter>
);
