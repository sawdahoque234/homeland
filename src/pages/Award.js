import React from "react";

const Award = () => {
  return (
    <div>
      <section class="text-white bg-gray-900 pt-12">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <p class="text-3xl font-bold mb-3">Happy Clients</p>
              <h2 class=" font-bold sm:text-4xl text-4xl text-red-500 ">
                2.7K
              </h2>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <p class="text-3xl font-bold mb-3">Subscribes</p>
              <h2 class=" font-bold sm:text-4xl text-4xl text-red-500">1.8K</h2>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <p class="text-3xl font-bold mb-3">Annual Revenue</p>
              <h2 class=" font-bold sm:text-4xl text-4xl text-red-500 ">
                135m
              </h2>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <p class="text-3xl font-bold mb-3">Total Review</p>
              <h2 class=" font-bold sm:text-4xl text-4xl text-red-500 ">
                1246+
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Award;
