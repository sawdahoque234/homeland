/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../img/house.avif";
import img2 from "../img/apat.jpg";
import img3 from "../img/shop.jpg";
const Type = () => {
  return (
    <div>
      <section>
        <div className="bg-gray-900 text-white px-5 py-12 mx-auto">
          <h1
            className="py-8 mb-6  lg:text-[58px]  text-4xl font-bold font-mono text-center"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Our Best Property Types !
          </h1>
          <div className="flex flex-wrap -m-4">
            <Link
              to="/properties"
              className="p-4 md:w-1/3 w-full md:mx-auto sm:mx-10"
            >
              <div className="h-full border-2 border-red-400 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                  className="lg:h-64 md:h-48 w-full object-cover object-center"
                  src={img1}
                  alt="blog"
                />
                <div className="p-4">
                  <h2 className="tracking-widest  text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="text-4xl text-white mb-3 ">House</h1>
                </div>
              </div>
            </Link>
            <Link
              to="/properties"
              className="p-4 md:w-1/3 w-full md:mx-auto sm:mx-10"
            >
              <div className="h-full border-2 border-red-400 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                  className="lg:h-64 md:h-48 w-full object-cover object-center"
                  src={img2}
                  alt="blog"
                />
                <div className="p-4">
                  <h2 className="tracking-widest title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="text-4xl text-white mb-3">Apartment</h1>
                </div>
              </div>
            </Link>
            <Link
              to="/properties"
              className="p-4 md:w-1/3 w-full md:mx-auto sm:mx-10"
            >
              <div className="h-full border-2 border-red-400 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  data-aos="zoom-in-up"
                  data-aos-duration="2000"
                  className="lg:h-64 md:h-48 w-full object-cover object-center"
                  src={img3}
                  alt="blog"
                />
                <div className="p-4">
                  <h2 className="tracking-widest  title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="text-4xl text-white mb-3">Shop</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Type;
