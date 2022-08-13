/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900">
        <div class=" px-12 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left lg:text-center -mb-10 -mx-4">
            <div class="lg:w-1/5 md:w-1/3 w-full px-3 mx-auto ">
              <nav
                class="list-none mb-10 cursor-pointer text-xl"
                data-aos-duration="2000"
                data-aos="fade-right"
              >
                <li className="py-2">
                  <a class="text-white hover:text-red-500 font-bold text-2xl ">
                    Homeland.
                  </a>
                </li>
                <p className="text-white">
                  We provide best service in the world .Feel free to connect
                  with me.
                </p>
              </nav>
            </div>

            <div class="lg:w-1/5 md:w-1/3 w-full px-3 mx-auto">
              <nav class="list-none mb-10 cursor-pointer text-xl">
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Facebook</a>
                </li>
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Twitter</a>
                </li>
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Instagram</a>
                </li>
                <li className="py-2">
                  <a class="text-white hover:text-red-500 "> Blog</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/5 md:w-1/3 w-full px-3">
              <nav class="list-none mb-10 cursor-pointer text-xl">
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Partnership</a>
                </li>
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Our Agent</a>
                </li>
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Get Discount</a>
                </li>
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Our Service</a>
                </li>
              </nav>
            </div>

            <div class="lg:w-1/5 md:w-1/3 w-full px-3 mx-auto">
              <nav class="list-none mb-10 cursor-pointer text-xl">
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Privecy</a>
                </li>
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Help Center</a>
                </li>
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">
                    Terms & Condition
                  </a>
                </li>
                <li className="py-2">
                  <a class="text-white hover:text-red-500 ">Need Support</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-200">
          <div class="container px-5 py-4 flex flex-wrap mx-auto ">
            <p class="text-white text-xl text-center sm:text-justify">
              2022 All rights reserved —
              <a
                href="https://twitter.com/knyttneve"
                class="text-white ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Homeland.
              </a>
            </p>
            <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a class="text-blue-500">
                <svg
                  fill="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-indigo-600">
                <svg
                  fill="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-yellow-500">
                <svg
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-blue-800">
                <svg
                  fill="white"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-8 h-8"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div class=""></div>
      </footer>
    </div>
  );
};

export default Footer;
