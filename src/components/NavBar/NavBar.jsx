import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinkClass = ({ isActive }) =>
    `text-${isActive ? "green-500" : "black"} 
     ${isActive ? "bg-white border-2 border-green-500" : ""} 
     transition-all duration-300 ease-in-out 
     hover:text-green-500 hover:border-green-500 hover:bg-white`;

  const Links = (
    <>
      <li>
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/listedBooks">
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink className={navLinkClass} to="/pageToRead">
          Pages To Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-3"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibes</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{Links}</ul>
        </div>
        <div className="navbar-end  mx-5 space-x-4">
          <button className="btn btn-info text-white">Sign In</button>
          <button className="btn btn-success text-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
