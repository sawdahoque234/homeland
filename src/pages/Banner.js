import React from "react";
import { Link } from "react-router-dom";
import image from "../img/house-banner.png";

const Banner = () => {
  return (
    <div>
      <section className="bg-gray-700 text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6 lg:w-full">
              <span className="text-red-500">Rent</span> Your Dream House With
              Us.
            </h1>
            <p className="max-w-[480px] mb-8 text-xl">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>
            <div className="flex justify-center">
              <Link to="/properties">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  See More
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img
              className=" flex justify-end rounded"
              alt="hero"
              src={image}
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
