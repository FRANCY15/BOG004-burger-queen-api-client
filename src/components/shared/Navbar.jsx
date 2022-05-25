import '../../assets/css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const Navigate = useNavigate('');

  const cerrar = () => {
    localStorage.clear()
    Navigate("/")
  }

  return (
    <nav className='Navbar'>
        <h3>Burger Queen</h3>
        <Link to="/Pedidos" className="Navbar-btn">New order</Link>
        <Link to="/ListarPedidos" className="Navbar-btn">Order Status</Link>
        <button className="Navbar-btn" onClick={() => {cerrar()}}>LogOut</button>
    </nav>
  )
}

export default Navbar