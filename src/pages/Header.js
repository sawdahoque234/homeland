/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../img/logo.svg";
const Header = () => {
  const { pathname: p } = useLocation();
  let path = false;
  const { user, logout, admin } = useAuth();
  const dashboardPaths = [
    "/dashboard",
    "/dashboard/user/update-profile",
    "/dashboard/myorder",
    "/dashboard/review",
    "/dashboard/allusers",
    "/dashboard/allorders",
    "/dashboard/allproperties",
    "/dashboard/addproperties",
    "/dashboard/makeadmin",
    "/dashboard/payment/:orderId",
    "/dashboard/payment",
  ];
  const allPaths = [
    "/",
    "/properties",
    "/allreviews",
    "/contact",
    "/login",
    ...dashboardPaths,
  ];

  if (allPaths.includes(p)) {
    path = true;
  }

  const menuItem = (
    <>
      <Link to="/properties" className="">
        <a class="mr-5  hover:text-red-500 text-white text-xl z-10 ">
          Properties
        </a>
      </Link>
      <Link to="/allreviews" className="py-3">
        <a class="mr-5  hover:text-red-500 text-white text-xl z-10 ">Reviews</a>
      </Link>

      <Link to="/contact">
        <a class="mr-5  hover:text-red-500 text-white text-xl z-10">Contact</a>
      </Link>
      {user.email && (
        <Link to="/dashboard" className="">
          <a class="mr-5  hover:text-red-500 text-white text-xl z-10">
            Dashboard
          </a>
        </Link>
      )}

      {user?.email ? (
        <Link to="/">
          <button
            onClick={logout}
            class="inline-flex items-center bg-red-500 border-0 py-2 text-white  px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          >
            Log out
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button class="inline-flex items-center bg-red-500 border-0 py-2 text-white  px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            Log In
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      )}
    </>
  );

  return (
    <div className="bg-gray-700 text-white ">
      <div className={`navbar max-w-7xl mx-auto   ${path ? "" : "hidden"}`}>
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content   bg-gray-900 rounded-box w-40 gap-1"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" className="sm:py-4 mt-4">
            <a class="flex  w-[240px]  mb-4 md:mb-0" href="/">
              <img src={logo} alt="" />
            </a>
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal p-0 mr-2 hidden lg:flex items-center gap-3">
            {menuItem}
          </ul>
          <div className="dropdown dropdown-end">
            {user.email && (
              <label
                tabIndex="0"
                className="w-10 h-10 flex justify-center items-center bg-red-700 rounded-full uppercase  cursor-pointer "
              >
                {user?.displayName?.split(" ")[0]?.slice(0, 1)}
                {user?.displayName?.split(" ")[1]?.slice(0, 1)}
              </label>
            )}
            <ul
              tabIndex="0"
              class="dropdown-content menu menu-compact mt-3 p-2 shadow bg-[#21252c] rounded-box w-40"
            >
              <li>
                <Link
                  className={`hover:bg-black text-lg pt-4${
                    p === "/dashboard" && "border-[1px] border-info"
                  }`}
                  to="/dashboard"
                >
                  My Profile
                </Link>
              </li>

              {admin && (
                <>
                  <li>
                    <Link
                      className={`hover:bg-info text-lg ${
                        p === "/dashboard/allusers" &&
                        "border-[1px] border-info"
                      }`}
                      to="/dashboard/allusers"
                    >
                      All Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`hover:bg-info  text-left text-lg ${
                        p === "/dashboard/allorders" &&
                        "border-[1px] border-info"
                      }`}
                      to="/dashboard/allorders"
                    >
                      Manage All Orders
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link
                      className={`hover:bg-info text-left text-lg ${
                        p === "/dashboard/allproperties" &&
                        "border-[1px] border-info"
                      }`}
                      to="/dashboard/allproperties"
                    >
                      Manage Properties
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`hover:bg-info text-lg text-left  ${
                        p === "/dashboard/addproperties" &&
                        "border-[1px] border-info"
                      }`}
                      to="/dashboard/addproperties"
                    >
                      Add Properties
                    </Link>
                  </li>
                </>
              )}
              {!admin && (
                <>
                  <li>
                    <Link
                      className={`hover:bg-red-500 py-3 text-lg ${
                        p === "/dashboard/myorder" && "border-[1px] border-info"
                      }`}
                      to="/dashboard/myorder"
                    >
                      My Orders
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={`hover:bg-red-500 py-3 text-lg ${
                        p === "/dashboard/review" && "border-[1px] border-info"
                      }`}
                      to="/dashboard/review"
                    >
                      Add Review
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
