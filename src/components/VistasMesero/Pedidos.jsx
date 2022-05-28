import "../../assets/css/Orders.css";
import Navbar from "../shared/Navbar";

const Pedidos = () => {
  return (
    <div className="Orders">
      <Navbar />
      <section className="body-orders">
        <p>User : Fulanito de Tal</p>
        <form className="new-order">
          <label htmlFor="id">Id Order</label>
          <input type="text" name="id" id="order" disabled />
          <label htmlFor="client">Client</label>
          <input type="text" name="client" id="client" />
          <label htmlFor="table">Table</label>
          <input type="text" name="table" id="table" />
          </form>
          <form>
          <label htmlFor="">Food</label>
          <select name="Food" id="food">
            <option value=""></option>
          </select>
          <label htmlFor="">Drinks</label>
          <select name="drinks" id="drinks">
            <option value=""></option>
          </select>
        </form>
      </section>
      <section>
        <h2>You Order</h2>
        <table>
          <tr>
            <th>Menú</th>
            <th>Quantity</th>
            <th>Unit Value</th>
            <th>Total Value</th>
          </tr>

          <tr>
            <td></td>            
          </tr>

          <tr>
            <td></td>            
          </tr>

          <tr>
            <td></td>
          </tr>

          <tr>
            <td></td>
          </tr>
        </table>
        <tfoot>
          <tr>
            <th>
              Total Order
            </th>
            <th>
              $ 0000000
            </th>
          </tr>
        </tfoot>
        <button>Delete</button>
        <button>Send</button>
      </section>
    </div>
  );
};

export default Pedidos;
