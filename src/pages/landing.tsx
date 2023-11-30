import React from "react";
import { NavLink } from "react-router-dom";
import mainImg from "../images/undraw_web_shopping_re_owap.svg";
import pedia from "../images/tokopedia-38859.jpg";
import netflix from "../images/netflix-logo-png-2562.png";
import periscop from "../images/periscope-logo-png-1964.png";
import paypal from "../images/paypal-logo-png-2117.png";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="relative font-serif pt-24 space-y-40 h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
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
          <button className="border-2 px-12 py-4 text-xl text-white hover:text-black hover:bg-white hover:font-bold hover:border-black">
            Shop Now
          </button>
        </NavLink>
      </div>

      <div className="w-4/5 rounded-xl mx-auto h-2/4 border p-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <img src={mainImg} alt="ecommerce web" className="w-full h-full" />
      </div>

      <div>
        <img src={netflix} alt="netflix" />
        <img src={periscop} alt="periscop" />
        <img src={paypal} alt="paypal" />
        <img src={pedia} alt="takopedia" />
      </div>
    </div>
  );
};

export default Landing;
