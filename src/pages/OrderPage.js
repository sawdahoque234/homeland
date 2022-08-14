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
    fetch(`http://localhost:5000/properties/${propertyId}`)
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
    fetch("http://localhost:5000/orders", {
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
      <section className=" overflow-hidden">
        <div className=" px-5 mt-12 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={property.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-medium title-font text-gray-500 tracking-widest">
                {property.type} | {property.country}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {property.name}
              </h1>

              <p className="leading-relaxed">{property.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className=" ml-6  items-center">
                  <span className="mr-3 text-xl ">
                    {property.bedrooms} bedrooms | {property.bathrooms}{" "}
                    bathrooms | {property.surface}
                  </span>
                  <h3 className="text-xl text-indigo-700 py-4">
                    Address:{property.address} | Build: {property.year}
                  </h3>
                  <span className="title-font font-medium text-2xl text-gray-900">
                    Price: {property.price} $
                  </span>
                </div>
              </div>
              <div className="flex"></div>
            </div>
          </div>
        </div>
      </section>
      <section className=" body-font relative">
        <div className="container px-5 mt-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto mx-auto w-full md:py-8 mt-8 md:mt-0">
            <p className="text-xl mb-5 text-green-600">
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
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Address
                    </label>
                    <input
                      type="address"
                      {...register("useraddress", { required: true })}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Property
                    </label>
                    <input
                      type="address"
                      value={property.name}
                      {...register("property", { required: true })}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="price" class="leading-7 text-sm text-gray-600">
                      Price
                    </label>
                    <input
                      type="number"
                      value={property.price}
                      {...register("price", { required: true })}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="message" className="leading-7 text-lg ">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black font-bold py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Order Now
              </button>
              <Link to="/dashboard/myorder">
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 mx-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Review Order
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
