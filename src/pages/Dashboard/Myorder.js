import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Myorder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handledelete = (order) => {
    const url = `http://localhost:5000/orders/${order}`;
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
  return (
    <div class="overflow-x-auto">
      {orders.length ? (
        <table class="table table-zebra text-xl w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-lg ">Property Name</th>
              <th className="text-lg ">Price</th>
              <th className="text-lg ">Address</th>
              <th className="text-lg ">Payment</th>
              <th className="text-lg ">Order Status</th>
              <th className="text-lg ">Action</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <>
              <tbody>
                <tr>
                  <th>{index + 1}</th>
                  <td>{order?.property}</td>
                  <td>{order?.price}</td>
                  <td>{order?.address}</td>
                  <td>
                    {order.payment ? (
                      "Paid"
                    ) : (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-success btn-xs">
                          Pay Now
                        </button>
                      </Link>
                    )}
                  </td>
                  <td>{order.status}</td>
                  <td>
                    <button
                      onClick={() => handledelete(order._id)}
                      className="inline-flex text-white bg-red-500 border-0 p-2  focus:outline-none hover:bg-indigo-600 rounded text-sm"
                    >
                      Cancel
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

export default Myorder;
