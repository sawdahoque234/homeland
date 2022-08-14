import React, { useState } from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const [success, setSuccess] = useState(false);
  const adminSubmit = (data) => {
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSuccess(true);
      });
  };
  return (
    <div>
      <section class="text-white  body-font">
        <div class="container py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 ">
              Make Admin
            </h1>
          </div>
          <form onSubmit={handleSubmit(adminSubmit)}>
            <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
              <div class="relative flex-grow w-full">
                <label for="email" class="leading-7 text-lg ">
                  Email
                </label>
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  {...register("email", { required: true })}
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                type="submit"
                class="text-white bg-red-500 border-0 py-1 px-12 focus:outline-none rounded text-sm"
              >
                Add Admin
              </button>
              <div className="text-green-500 text-2xl font-mono">
                {success && <p>Admin made successfully!</p>}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default MakeAdmin;
