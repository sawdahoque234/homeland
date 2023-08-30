import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    fetch("https://homelandserver-isqzp4rxt-sawdahoque234.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your review added successfully!!!");
          reset();
        }
      });
  };
  return (
    <div>
      <section>
        <div className="container px-5 mt-12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-full bg-black p-6 flex flex-col md:ml-auto mx-auto w-full md:py-8 mt-8 md:mt-0">
            <p className="text-xl mb-5 text-white">Please Add Your Review</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-lg text-white">
                  Name
                </label>
                <input
                  type="name"
                  {...register("name", { required: true })}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-lg text-white">
                  Email
                </label>
                <input
                  type="email"
                  value={user.email}
                  {...register("email", { required: true })}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black font-bold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative mb-4">
                <label for="message" className="leading-7 text-lg text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black font-bold py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
