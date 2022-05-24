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
        <button>
          <img src={mesero} alt="LogoMesero" />
          <Link to="/Pedidos" id="Mesero" >Mesero</Link>
        </button>
        <button>
        <img src={cocinero} alt="LogoCocinero" />
          <Link to="/ListarPedidos" id="Cocinero" >Cocinero</Link>
        </button>
        
      </section>
    </div>
    
  )
}

export default SelectorRol;