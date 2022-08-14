import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
const OrderPage = () => {
  const { user } = useAuth();

  const { propertyId } = useParams();
  const { register, reset, handleSubmit } = useForm();
  const [property, setProperty] = useState([]);
  useEffect(() => {
    fetch(`https://protected-lake-49727.herokuapp.com/properties/${propertyId}`)
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);

  const onSubmit = (data) => {
    const order = {
      name: data.name,
      email: data.email,
      useraddress: data.useraddress,
      phone: data.phone,
      property: data.property,
      type: data.type,
      price: data.price,
      address: data.address,
      description: data.description,
    };
    data = order;
    data.status = "pending";
    fetch("https://protected-lake-49727.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Ordered proceed successfully!!!");
          reset();
        }
      });
  };

  return (
    <div>
      <div className=" flex py-20  flex-wrap justify-center">
        <div className="lg:w-1/3 border border-gray-100  w-2/3 p-4 mx-2">
          <div className="flex justify-center">
            <img
              alt="ecommerce"
              className=" lg:w-full  lg:h-auto h-64 rounded-lg"
              src={property.image}
            />
          </div>
          <h2 className="text-medium title-font text-gray-500 tracking-widest">
            {property.type} | {property.country}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {property.name}
          </h1>
          <p className="leading-relaxed  text-left">{property.description}</p>
          <div className=" ml-6  items-center">
            <span className="mr-3 text-lg text-red-700 font-bold ">
              {property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms |{" "}
              {property.surface} sq ft
            </span>
            <h3 className="text-lg font-bold text-green-700 py-4">
              Address:{property.address} | Build: {property.year}
            </h3>
            <span className="title-font font-medium text-2xl font-mono text-red-700">
              Price: {property.price} $
            </span>
          </div>
        </div>
        {/* //form.. */}
        <div className="lg:w-1/2 w-full py-6">
          <div className="mx-12">
            <p className="text-2xl mb-5 font-mono font-bold py-6">
              Please Complete your order
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      value={user.displayName}
                      {...register("name", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      value={user.email}
                      {...register("email", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="property"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Property
                    </label>
                    <input
                      value={property.name}
                      {...register("property", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="price" class="leading-7 text-sm text-gray-600">
                      Price
                    </label>
                    <input
                      value={property.price}
                      {...register("price", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>

              <div className="relative mb-4">
                <label for="address" className="leading-7 text-lg ">
                  Address
                </label>
                <input
                  type="address"
                  value={property.address}
                  {...register("address", { required: true })}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="nuseraddressame"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <input
                      {...register("useraddress", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="phone" class="leading-7 text-sm text-gray-600">
                      Phone
                    </label>
                    <input
                      type="number"
                      {...register("phone", { required: true })}
                      className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-lg ">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Buy Now
              </button>
              <Link to="/dashboard/myorder">
                <button className="text-white bg-red-500 border-0 py-2 px-6 mx-4 focus:outline-none  rounded text-lg">
                  Review Order
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
