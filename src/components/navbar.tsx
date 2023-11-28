import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between text-white bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 font-serif text-lg drop-shadow-xl rounded ">
      <ul className="w-1/4 flex justify-around px-2 py-4 cursor-pointer ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Products</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/checkout">Cart</NavLink>
        </li>
      </ul>
      <ul className="w-1/6 flex justify-around items-center">
        <li>
          <NavLink to="/auth">login</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
