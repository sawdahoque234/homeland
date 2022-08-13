import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JwJJWDWruHMZxwUglXbLhGZiMaU9YsolRgee685pDwFLGfda9wr10ov7SXgdvH8aZ6bVmadQbJqAOpcCqt8MAxS00HfxccRBH"
);
const Payment = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [orders, setOrders] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [orderId]);

  return (
    <div className="text-white">
      <div class="card w-96 bg-base-100 shadow-lg">
        <div class="card-body pt-4">
          <h2 class="card-title text-success">Hello, {order.name}</h2>
          <p className="text-neutral font-bold">
            Your order:{" "}
            <span className="text-orange-600 font-bold">{order.price}</span>
          </p>
        </div>
      </div>

      <div class="card w-96 bg-base-100 shadow-lg mt-6">
        <div class="card-body pt-4">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
