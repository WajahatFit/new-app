import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-indigo-500 text-white font-serif text-lg drop-shadow-xl">
      <ul className="w-1/4 flex justify-between px-2 py-4 cursor-pointer ">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
