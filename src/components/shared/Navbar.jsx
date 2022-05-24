import '../../assets/css/Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className='Navbar'>
        <h3>Burger Queen</h3>
        <Link to="/Pedidos" className="Navbar-btn">New order</Link>
        <Link to="/ListarPedidos" className="Navbar-btn">Order Status</Link>
        <button className="Navbar-btn">LogOut</button>
    </nav>
  )
}

export default Navbar