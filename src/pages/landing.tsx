import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="font-serif m-14 py-4 ">
      <div className="flex flex-col items-center justify-between text-6xl tracking-wide ">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-gray-100 to-gray-400">
          Your Ultimate E-commerce Destination
        </span>
        <div className="w-4/5 text-center pb-14 pt-14 text-2xl tracking-wide">
          <p className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-white to-gray-400">
            At Ecommerce, we are not just selling products we're crafting an
            immersive shopping experience tailored to your needs.
          </p>
        </div>
        <NavLink to="/products">
          <button className="border-2  p-4 text-xl text-white hover:text-black hover:bg-white hover:font-bold hover:border-black">
            Shop Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Landing;
