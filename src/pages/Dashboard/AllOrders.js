import React, { useEffect, useState } from "react";
const AllOrders = () => {
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState([]);
  const [isUpdated, setIsUpdated] = useState("");
  useEffect(() => {
    fetch("https://protected-lake-49727.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orderId]);

  const handledelete = (order) => {
    const url = `https://protected-lake-49727.herokuapp.com/orders/${order}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Are You Sure Deleted This Product???");
          const remaining = orders.filter((order) => order._id !== order);
          setOrders(remaining);
          window.location.reload();
        }
      });
  };
  // // update
  const handleUpdateStatus = (id) => {
    fetch(
      `https://protected-lake-49727.herokuapp.com/orderStatus/update/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      // .then()

      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Order Approved");
          setIsUpdated(true);
          window.location.reload();
        } else {
          setIsUpdated(false);
        }
      });
  };

  return (
    <div class="overflow-x-auto">
      {orders.length ? (
        <table class="table table-zebra text-xl w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">OrderId</th>
              <th className="text-lg ">Property Name</th>
              <th className="text-lg ">Price</th>
              <th className="text-lg ">Action</th>
              <th className="text-lg ">Status</th>
              <th className="text-lg ">Payment</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <>
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{order?._id}</td>
                  <td>{order?.property}</td>
                  <td>{order?.price}</td>

                  <td>
                    <button
                      onClick={() => handledelete(order._id)}
                      className="inline-flex text-white bg-red-500 border-0 p-2  focus:outline-none hover:bg-indigo-600 rounded text-sm"
                    >
                      Cancel
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleUpdateStatus(order?._id)}
                      variant="outlined"
                      className="inline-flex text-white bg-blue-500 border-0 p-2  focus:outline-none rounded text-lg"
                    >
                      {order?.status === "Confirm" ? "Approved " : "Pending"}
                    </button>
                  </td>
                  <td>
                    <button
                      variant="outlined"
                      className="inline-flex text-black bg-green-500 border-0 p-2  focus:outline-none rounded text-sm"
                    >
                      {order?.payment ? "Paid" : "Unpaid"}
                    </button>
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
