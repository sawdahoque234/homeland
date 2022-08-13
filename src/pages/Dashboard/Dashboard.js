import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  AiFillProfile,
  AiOutlinePlusCircle,
  AiOutlineComment,
} from "react-icons/ai";
import useAdmin from "./../../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  const { pathname } = useLocation();
  return (
    <div>
      <div class="drawer bg-gray-800 drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content px-2 lg:px-4 py-1">
          <div className=" border-[#21252c] ">
            <Outlet />
          </div>
        </div>
        <div class="drawer-side ">
          <label for="dashboard-drawer" class="drawer-overlay "></label>
          <ul class="menu p-10 overflow-y-auto w-80 bg-gray-900 text-white ">
            <li
              className={`${
                pathname === "/dashboard" && "border-b-2 border-white "
              }`}
            >
              <Link to="/dashboard" className="my-4 text-2xl font-medium">
                <AiFillProfile />
                My Profile
              </Link>
            </li>

            {!isAdmin && (
              <>
                <li
                  className={`${
                    pathname === "/dashboard/myorder" &&
                    "border-b-2 border-white "
                  }`}
                >
                  <Link to="myorder" className="my-4 text-2xl font-medium">
                    <AiOutlinePlusCircle /> My order
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/dashboard/review" &&
                    "border-b-2 border-white"
                  }`}
                >
                  <Link to="review" className="my-2 text-2xl font-medium">
                    <AiOutlineComment />
                    Add Review
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li
                  className={`${
                    pathname === "/dashboard/allusers" &&
                    "border-b-2 border-primary"
                  }`}
                >
                  <Link to="allusers" className="mt-2 text-2xl font-medium">
                    All Users
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/dashboard/allrders" &&
                    "border-b-2 border-primary"
                  }`}
                >
                  <Link to="allorders" className="mt-2 text-2xl font-medium">
                    Manage Orders
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/dashboard/allproperties" &&
                    "border-b-2 border-primary"
                  }`}
                >
                  <Link
                    to="allproperties"
                    className="mt-2 text-2xl font-medium"
                  >
                    Manage Properties
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/dashboard/addproperties" &&
                    "border-b-2 border-primary"
                  }`}
                >
                  <Link
                    to="addproperties"
                    className="my-2 text-2xl font-medium"
                  >
                    Add Properties
                  </Link>
                </li>
                <li
                  className={`${
                    pathname === "/dashboard/makeadmin" &&
                    "border-b-2 border-primary"
                  }`}
                >
                  <Link to="makeadmin" className="my-2 text-2xl font-medium">
                    Make Admin
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
