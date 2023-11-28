import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-indigo-500 text-white font-serif text-lg drop-shadow-xl ">
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
