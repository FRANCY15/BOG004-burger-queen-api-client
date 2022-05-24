import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/login.css";
import Api from "../../utils/Api";
import userIcon from '../../assets/img/user'
import keyIcon from '../../assets/img/key'
import SelectorRol from "../SelectorRol/SelectorRol";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validarLogin = (e) => {
    e.preventDefault();

    const data = { email: user, password: password };

    if (!user.trim()) {
      console.log("Por favor ingrese un Usuario válido");
      return;
    }

    if (!password.trim()) {
      console.log("Por favor ingrese su contraseña");
      return;
    }

    fetch(`${Api}/login`, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => localStorage.setItem('userToken', response.accessToken))
      navigate('/SelectorRol')
      

    e.target.reset();
    setUser(" ");
    setPassword(" ");
  };

  return (
    <Fragment>
      <main className="login">
          <form className="LoginForm" onSubmit={validarLogin}>
            <h3>Burger Queen</h3>
            <h4>Enter your credentials to Login</h4>
            <div className="form-Input">
            <img src={userIcon} alt="IconUser" />
            <input
              type="email"
              id="email"
              placeholder="enter your email"
              onChange={(e) => setUser(e.target.value)}
            />
            </div>
            <div className="form-Input">
            <img src={keyIcon} alt="IconPassword" />
            <input
              type="password"
              id="password"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button className="btn-login" type="submit">
              Login
            </button>
          </form>
      </main>
    </Fragment>
  );
};

export default Login;
