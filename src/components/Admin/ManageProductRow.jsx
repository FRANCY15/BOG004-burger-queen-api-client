import React from 'react'
import '../../assets/css/TableOrders.css'

const ManageProductRow = ({product, setEditProduct, deleteProducts}) => {

    let {id, name, price, type, image} = product;
  
    return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{price}</td>
        <td><img className='img-table' src={image} alt="Product" /></td>
        <td>{type}</td>
        <td>
            <button onClick={() => setEditProduct(product)}>Edit Product</button>
            <button onClick={()=>{deleteProducts(id)}}>Delete Product</button>
        </td>

    </tr>
  )
}

export default ManageProductRow