import React from 'react'

const CrudTableRow = ({el}) => {
  return (
    <tr>
        <td>{el.client}</td>
        <td>{el.dataEntry}</td>
        <td>{el.id}</td>
        <td>
            <button>Edit</button>
            <button>Delete</button>
        </td>
    </tr>
  )
}

export default CrudTableRow