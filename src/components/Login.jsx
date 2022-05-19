import React from 'react'
import logoBurgerQueen from '../img/logoBurgerQueen.png'

const Login = () => {

  


  return (
    <main className='container'>
      <section className='imgPrincipal'>
        <h1 className='BurgerQueenText'>Burger Queen</h1>
        <img className='logoBurgerQueen' src={logoBurgerQueen} alt="logoBurgerQueen" />
      </section>
      <section className='sectionForm'>
        <form className='LoginForm'>
          <h3>Welcome!</h3>
          <h4>Enter your credentials to Login</h4>
          <label>E-mail:</label>
          <input type='email' id='email' placeholder='enter your email'/>
          <label>Password:</label>
          <input type='password' id='password' placeholder='enter your password'/>
          <button className='btn-login'>Login</button>
        </form>
      </section>
    </main>
  )
}


export default Login