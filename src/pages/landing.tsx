import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="font-serif m-14 py-4 ">
      <div className="flex flex-col items-center justify-between text-6xl tracking-wide ">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-gray-100 to-gray-400">
          Your Ultimate E-commerce Destination
        </span>
        <div className="w-5/6 text-center pb-14 pt-14 text-2xl tracking-wide">
          <p className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-white to-gray-400">
            We offer world's top quality brands by prices you have never
            imagined. Yes it is genuine and it is available for everyone, no
            restrictions or limitations buy as you please.
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
