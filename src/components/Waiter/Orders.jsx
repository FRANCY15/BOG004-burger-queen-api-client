import React, { useState } from "react";
import FormOrders from "./FormOrders";
import TableOrders from "./TableOrders";

const dataMenu = [
  {
    id: 1,
    name: "Sandwich de jamón y queso",
    price: 1000,
    image:
      "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
    type: "Desayuno",
    dateEntry: "2022-03-05 15:14:10",
  },
  {
    id: 2,
    name: "Café americano",
    price: 500,
    image:
      "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
    type: "Desayuno",
    dateEntry: "2022-03-05 15:14:10",
  },
  {
    id: 3,
    name: "Agua 500ml",
    price: 500,
    image:
      "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
    type: "Almuerzo",
    dateEntry: "2022-03-05 15:14:10",
  },
];

const dataOrders = [
  {
    id: 1,
    userId: 1,
    client: "Jude Milhon",
    products: [
      {
        qty: 1,
        product: {
          id: 1,
          name: "Sandwich de jamón y queso",
          price: 1000,
          image:
            "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
          type: "Desayuno",
          dateEntry: "2022-03-05 15:14:10",
        },
      },
      {
        qty: 1,
        product: {
          id: 2,
          name: "Café americano",
          price: 500,
          image:
            "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
          type: "Desayuno",
          dateEntry: "2022-03-05 15:14:10",
        },
      },
    ],
    status: "pending",
    dataEntry: "2022-03-05 15:00",
  },
  {
    id: 2,
    userId: 2,
    client: "Katie Bouman",
    products: [
      {
        qty: 2,
        product: {
          id: 2,
          name: "Café americano",
          price: 500,
          image:
            "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/coffe.jpg",
          type: "Desayuno",
          dateEntry: "2022-03-05 15:14:10",
        },
      },
      {
        qty: 1,
        product: {
          id: 3,
          name: "Agua 500ml",
          price: 500,
          image:
            "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/water.jpg",
          type: "Almuerzo",
          dateEntry: "2022-03-05 15:14:10",
        },
      },
    ],
    status: "delivered",
    dataEntry: "2022-03-05 15:00",
    dateProcessed: "2022-03-05 16:00",
  },
];

const Orders = () => {
  const [dbOrders, setdbOrders] = useState(dataOrders);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setdbOrders([...dbOrders, data]);
  };

  const updateData = (data) => {
    let newData = dbOrders.map((el) => (el.id === data.id ? data : el));
    setdbOrders(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Are you sure you want to delete the record? idClient: '${id}'`
    );

    if (isDelete) {
      let newData = dbOrders.filter((el) => el.id !== id);
      setdbOrders(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>Orders</h2>
      <FormOrders
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <TableOrders
        data={dbOrders}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default Orders;
