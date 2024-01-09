import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gradient-to-b from-gray-900 to-gray-700 border-b-4 border-violet-600 bg-gradient-to-r font-serif text-lg drop-shadow-xl ">
      <ul className="w-1/4 flex justify-around px-2 py-4 cursor-pointer ">
        <li>
          <NavLink
            className={(element) =>
              element.isActive
                ? "text-violet-500 font-bold text-xl"
                : "text-slate-300 text-xl hover:text-white"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(element) =>
              element.isActive
                ? "text-violet-500 font-bold text-xl"
                : "text-slate-300 text-xl hover:text-white"
            }
            to="/shop"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(element) =>
              element.isActive
                ? "text-violet-500 font-bold text-xl"
                : "text-slate-300 text-xl hover:text-white"
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
      <ul className="w-56 flex justify-around items-center">
        <li>
          <NavLink
            className={(element) =>
              element.isActive
                ? "text-violet-500"
                : "text-slate-300 hover:text-white"
            }
            to="/cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              className="w-10 h-8 hover:w-12 hover:h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(element) =>
              element.isActive
                ? "text-violet-500 font-bold text-xl"
                : "text-slate-300 text-xl hover:text-white"
            }
            to="/login"
          >
            login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
