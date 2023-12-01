import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gradient-to-b from-gray-900 to-gray-700 border-b-4 border-violet-600 bg-gradient-to-r font-serif text-lg drop-shadow-xl rounded ">
      <ul className="w-1/4 flex justify-around px-2 py-4 cursor-pointer ">
        <li>
          <NavLink
            className={(element) =>
              element.isActive
                ? "text-violet-500 font-bold text-xl"
                : "text-slate-300 text-xl hover:text-white"
            }
            to="/home"
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
        <li>
          <NavLink
            className={(element) =>
              element.isActive
                ? "text-violet-500 font-bold text-xl"
                : "text-slate-300 text-xl hover:text-white"
            }
            to="/checkout"
          >
            Cart
          </NavLink>
        </li>
      </ul>
      <ul className="w-1/6 flex justify-around items-center">
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
        <li>
          <NavLink
            className={(element) =>
              element.isActive
                ? "text-violet-500 font-bold text-xl"
                : "text-slate-300 text-xl hover:text-white"
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
