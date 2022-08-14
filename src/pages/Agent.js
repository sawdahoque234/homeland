import React from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
const Agent = () => {
  return (
    <div>
      <section>
        <div class=" mx-auto bg-gray-900 text-white py-12">
          <h1 className="py-8 text-3xl  mb-6 lg:text-[50px] font-bold font-mono text-center">
            Meet Our Agent
          </h1>

          <div class="flex flex-wrap -m-4 ">
            <div
              class="lg:w-1/4 lg:mb-0 mb-6 w-2/3 mx-auto shadow-lg border-gray-500 sm:mx-14 bg-gray-800 rounded border md:mx-auto "
              data-aos-duration="2000"
              data-aos="fade-up-right"
            >
              <div class="h-full text-center py-2 ">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={img1}
                />
                <p class="leading-relaxed px-4">
                  HlW! I am Jerry. I have working during 15 years in Real state
                  Market Place .Please feel free to connect me.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>
                <h2 class=" font-mono  text-2xl">Miss Jerry</h2>
                <p class=" font-bold">Senior Agent</p>
                <p className="flex justify-center py-4">
                  {" "}
                  <span className=" font-bold text-2xl ">
                    {" "}
                    <FaTwitter />
                  </span>
                  <span className="mx-3 font-bold text-2xl ">
                    {" "}
                    <FaFacebook />
                  </span>
                  <span className=" font-bold text-2xl  ">
                    <FaLinkedin />
                  </span>
                </p>
              </div>
            </div>
            <div
              class="lg:w-1/4 lg:mb-0 mb-6 w-2/3 mx-auto shadow-lg border-gray-500 sm:mx-14 bg-gray-800  rounded border md:mx-auto "
              data-aos-duration="2000"
              data-aos="fade-up-right"
            >
              <div class="h-full text-center py-2 ">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={img2}
                />
                <p class="leading-relaxed px-4">
                  HlW! I am Jerry. I have working during 10 years in Real state
                  Market Place .Please feel free to connect me.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>
                <h2 class=" font-mono  text-2xl">Mr Jhone</h2>
                <p class=" font-bold">Senior Agent</p>
                <p className="flex justify-center py-4">
                  {" "}
                  <span className=" font-bold text-2xl ">
                    {" "}
                    <FaTwitter />
                  </span>
                  <span className="mx-3 font-bold text-2xl ">
                    {" "}
                    <FaFacebook />
                  </span>
                  <span className=" font-bold text-2xl  ">
                    <FaLinkedin />
                  </span>
                </p>
              </div>
            </div>

            <div
              class="lg:w-1/4 lg:mb-0 p-3 w-2/3 mx-auto sm:mx-14 shadow-lg md:mx-auto border-gray-500 bg-gray-800 rounded border"
              data-aos-duration="2000"
              data-aos="fade-up-left"
            >
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={img3}
                />
                <p class="leading-relaxed px-4">
                  Hi! I am Smith. I have working during 5 years in Real state
                  Market Place .Please feel free to connect me.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>
                <h2 class=" font-mono  text-2xl">Mr. Smith</h2>

                <p class=" font-bold"> Agent</p>
                <p className="flex justify-center py-4">
                  {" "}
                  <span className=" font-bold text-2xl ">
                    {" "}
                    <FaTwitter />
                  </span>
                  <span className="mx-3 font-bold text-2xl ">
                    {" "}
                    <FaFacebook />
                  </span>
                  <span className=" font-bold text-2xl  ">
                    <FaLinkedin />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agent;
