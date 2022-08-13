import React from "react";
import { useForm } from "react-hook-form";

const AddProperties = () => {
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/properties", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert(" Property added successfully!!!");
          reset();
        }
        console.log(result);
      });
  };
  return (
    <div>
      <section className="  relative">
        <div className="container  mt-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-full bg-white flex flex-col p-10  md:ml-auto mx-auto w-full md:py-8 mt-8 md:mt-0">
            <p className="text-2xl mb-5 text-green-600">Add New Property</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="name" class="leading-7 text-sm text-gray-600">
                      Property
                    </label>
                    <input
                      {...register("name", { required: true })}
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
                      {...register("price", { required: true })}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="address"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Address
                    </label>
                    <input
                      {...register("address")}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label for="type" class="leading-7 text-sm text-gray-600">
                      Type
                    </label>
                    <input
                      type="type"
                      {...register("type", { required: true })}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="bedrooms"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      {...register("bedrooms")}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="bathroomsrooms"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      {...register("bathrooms")}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="bedrooms"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Surface
                    </label>
                    <input
                      type="number"
                      {...register("surface", { required: true })}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="bathroomsrooms"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Build
                    </label>
                    <input
                      type="number"
                      {...register("year", { required: true })}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="bedrooms"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Country
                    </label>
                    <input
                      {...register("country", { required: true })}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-1/2">
                  <div class="relative">
                    <label
                      for="bathroomsrooms"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Image
                    </label>
                    <input
                      {...register("image", { required: true })}
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>

              <div className="relative mb-4">
                <label for="message" className="leading-7 text-lg ">
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black font-bold py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Order Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProperties;
