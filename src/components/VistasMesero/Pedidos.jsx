import '../../assets/css/Orders.css'
import Navbar from "../shared/Navbar"


const Pedidos = () => {
  return (
      <div className="Orders">
        <Navbar/>
        <section className='body-orders'>
          <form className='new-order'>
            <label htmlFor="id">Id Order</label>
            <input type="text" name="id" id="order" disabled />
            <label htmlFor="client">Name</label>
            <input type="text" name="client" id="client" />
            <label htmlFor="">Food</label>
            <select name="food" id="food">
              <option value=""></option>
            </select>
          </form>
        </section>
      </div>
    
  )
}

export default Pedidos