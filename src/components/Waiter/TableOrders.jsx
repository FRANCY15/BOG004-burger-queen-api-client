import React from "react";
import TableRowOrders from "./TableRowOrders";

const TableOrders = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Esta es tu Orden</h3>
      <table>
        <thead>
          <tr>
            <th>Name Client</th>
            <th>Order</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Not data</td>
            </tr>
          ) : (
            data.map((el) => (
              <TableRowOrders
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrders;
