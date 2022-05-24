import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/SelectorRol.css'
import mesero from '../../assets/img/camarero.png'
import cocinero from '../../assets/img/cocinero.png'


const SelectorRol = () => {

  return (
    <div className='SelectorRol'>
      <nav className='Navbar'>
        <h3>Burger Queen</h3>
      </nav>

      <section className='SelectorRol-body'>
        <Link to="/Pedidos" className="btn" id="Mesero" >Mesero
          <img src={mesero} alt="LogoMesero" />
        </Link>

        <Link to="/ListarPedidos" className="btn" id="Cocinero" >Cocinero
          <img src={cocinero} alt="LogoCocinero" />
        </Link>
        
      </section>
    </div>
    
  )
}

export default SelectorRol;