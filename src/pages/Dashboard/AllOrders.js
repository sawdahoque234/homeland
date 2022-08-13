import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const AllOrders = () => {
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState([]);
  const { handleSubmit, register } = useForm();

  // status****
  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orderId]);

  const handledelete = (order) => {
    const url = `http://localhost:5000/orders/${order}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Are You Sure deleted This????");
          const remaining = orders.filter((order) => order._id !== order);
          setOrders(remaining);
          window.location.reload();
        }
      });
  };
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div class="overflow-x-auto">
      {orders.length ? (
        <table class="table table-zebra text-xl w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">OrderId</th>
              <th className="text-lg">Type</th>
              <th className="text-lg ">Property Name</th>
              <th className="text-lg ">Price</th>
              <th className="text-lg ">Address</th>
              <th className="text-lg ">Action</th>
              <th className="text-lg ">Status</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <>
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{order?._id}</td>
                  <td>{order?.order?.type}</td>
                  <td>{order?.order?.name}</td>
                  <td>{order?.order?.price}</td>
                  <td>{order?.order?.address}</td>

                  <td>
                    <button
                      onClick={() => handledelete(order._id)}
                      className="inline-flex text-white bg-red-500 border-0 p-2  focus:outline-none hover:bg-indigo-600 rounded text-sm"
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <select
                        onClick={() => handleOrderId(order._id)}
                        {...register("status")}
                      >
                        <option value={order.status}>{order.status}</option>
                        <option value="approved">Approved</option>
                        <option value="ongoing">On Going</option>
                        <option value="done">Done</option>
                      </select>
                      <button
                        type="submit"
                        variant="contained"
                        style={{
                          marginRight: "10px",
                          backgroundColor: "salmon",
                          marginLeft: "5px",
                        }}
                      >
                        Confirm
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      ) : (
        <h1 className="text-4xl text-red-600 overflow-y-hidden">
          No Data found!!
        </h1>
      )}
    </div>
  );
};

export default AllOrders;
