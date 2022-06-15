import React from 'react'
import { useNavigate } from 'react-router-dom'

const GenericNavbar = () => {
    const Navigate = useNavigate('');

    const cerrar = () => {
      localStorage.clear()
      Navigate("/")
    }
  
    return (
      <nav className='Navbar'>
          <h3>Burger Queen</h3>
          <button className="Navbar-btn" onClick={() => {cerrar()}}>LogOut</button>
      </nav>
    )
}

export default GenericNavbar