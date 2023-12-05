import React from "react";
import { NavLink } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="h-full my-auto items-center pt-8 tracking-wide">
      <div className="shadow-lg rounded-md flex flex-col justify-betweens items-center space-y-12 pb-12">
        <h1 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-l from-gray-100 to-gray-400 text-center">
          About Us
        </h1>
        <p className="text-xl tracking-wide border-l-4 h-1/9 w-4/5 text-start pt-4 px-4 text-gray-300 leading-loose">
          Welcome to Ecommerce, where your shopping experience is our top
          priority. At Ecommerce, we strive to provide a seamless and enjoyable
          online shopping platform for our customers. With a passion for quality
          products and exceptional service, we aim to redefine the way you shop
          online.
        </p>
        <p className="text-xl text-gray-300 border-r-4 h-1/8 w-4/5 pt-4 px-4 leading-loose">
          Our commitment to innovation and customer satisfaction sets us apart.
          We believe in the power of a great shopping experience, and our team
          works tirelessly to bring you the latest trends and timeless classics,
          all in one place. From fashion and electronics to home decor and more,
          Ecommerce is your go-to destination for all your needs.
        </p>
        <p className="text-gray-300 text-xl border-l-4 h-1/8 w-4/5 pt-4 px-4 leading-loose">
          Join us on this exciting journey as we continue to enhance and expand
          our product offerings. Your feedback is invaluable to us, and we are
          dedicated to creating an online space that caters to your unique
          preferences. Thank you for choosing Ecommerce. Happy shopping!
        </p>
        <NavLink to="/products">
          <button className="border-t-4 border-gray-300 w-64 p-4 text-xl text-white hover:text-black hover:bg-gray-300 hover:font-bold">
            Shop All
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AboutPage;
