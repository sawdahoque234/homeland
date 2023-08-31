import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";

const stripePromise = loadStripe(
  "pk_test_51JwJJWDWruHMZxwUglXbLhGZiMaU9YsolRgee685pDwFLGfda9wr10ov7SXgdvH8aZ6bVmadQbJqAOpcCqt8MAxS00HfxccRBH"
);
const Payment = () => {
  const { orderId } = useParams();
  const { user } = useAuth();
  const [order, setOrder] = useState({});
  useEffect(() => {
    fetch(`https://homelandserver.onrender.com/order/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orderId]);

  return (
    <div className="text-white">
      <div class="card w-96 bg-base-100 shadow-lg text-left mt-10">
        <div class="card-body pt-4">
          <h2 class="card-title text-success">Hello, {order.name}</h2>
          <p className="text-neutral font-bold">Your order:{order.property} </p>
          <p className="text-neutral font-bold">Price:{order.price} </p>
          <p className="text-neutral font-bold">Address:{order.address} </p>
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
