import { NavLink } from "react-router-dom";
import mainImg from "../images/undraw_web_shopping_re_owap.svg";
import pedia from "../images/tokopedia-38859.jpg";
import netflix from "../images/netflix-logo-png-2562.png";
import periscop from "../images/periscope-logo-png-1964.png";
import paypal from "../images/paypal-logo-png-2117.png";

const Landing = () => {
  return (
    <div className="font-serif h-full w-screen pt-20 mb-20 flex flex-col justify-around">
      <div className="flex flex-col items-center justify-between text-6xl tracking-wide mb-12">
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-gray-400 to-gray-600">
          Your Ultimate E-commerce Destination
        </span>
        <div className="w-3/5 text-center mb-14 pt-14 text-2xl tracking-wide">
          <p className="bg-clip-text text-transparent bg-gradient-to-r bg-gradient-to-r from-gray-500 to-gray-400">
            At Ecommerce, we are not just selling products we're crafting an
            immersive shopping experience tailored to your needs.
          </p>
        </div>
        <NavLink to="/shop">
          <button className="border-t-4 border-violet-600 w-64 p-4 text-xl text-gray-400 hover:text-black hover:bg-gray-300 hover:font-bold">
            Shop Now
          </button>
        </NavLink>
      </div>
      <div className="w-5/6 mx-auto h-56 border-r-4 border-violet-600 bg-gradient-to-r from-gray-700 via-gray-900 to-black mb-8">
        {/* <img src={} alt="ecommerce web" className="w-full h-full" /> */}
      </div>

      <div className="h-52 border-l-4 border-violet-600">
        <div className="w-5/6 mx-auto flex justify-around items-center h-full">
          <img className="h-16" src={netflix} alt="netflix" />
          <img className="h-16" src={periscop} alt="periscop" />
          <img className="h-24" src={paypal} alt="paypal" />
          <img
            className="h-28 mix-blend-multiply"
            src={pedia}
            alt="takopedia"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
