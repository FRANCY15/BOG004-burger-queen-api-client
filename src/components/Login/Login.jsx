import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/login.css";
import Api from "../../utils/Api";
import userIcon from '../../assets/img/user'
import keyIcon from '../../assets/img/key'
import SelectorRol from "../SelectorRol/SelectorRol";
import ListarPedidos from "../VistasMesero/ListarPedidos";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [invalidData, setInvalidData] = useState(null)
  const Navigate = useNavigate();
    
  const validarLogin = (e) => {
    e.preventDefault();

    const data = { email: user, password: password };

    fetch(`${Api}/login`, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(res => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      console.log('RESPONSE',response)
      if(response.accessToken && response.user.roles.admin === false ){
          Navigate('/SelectorRol')
      }else if(response.accessToken && response.user.roles.admin === true){
          Navigate('/AdminColaborator')
      }else{
        setInvalidData(response)
      }
    })    
    
      

    e.target.reset();
    setUser(" ");
    setPassword(" ");
    setInvalidData(null);
  };

  return (
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
              data-testid="login-email-input"
            />
            </div>
            <div className="form-Input">
            <img src={keyIcon} alt="IconPassword" />
            <input
              type="password"
              id="password"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
              data-testid="login-password-input"
            />
            </div>
            <button className="btn-login" type="submit" data-testid="login-btn">
              Login
            </button>
                {
                  invalidData && (
                    <div className="alert alert-danger" data-testid="login-error-message">
                      {invalidData}
                    </div>
                  )
                }
          </form>
      </main>
  );
};

export default Login;
