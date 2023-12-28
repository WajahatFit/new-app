import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductDetails() {
  return (
    <div className="h-screen w-5/6 border-2 mx-auto font-sans">
      <div className="flex h-4/5 w-full my-40 justify-around ">
        <div className="h-3/4 w-2/4 bg-gray-400">Image</div>
        <div className="flex flex-col items-start space-y-8 h-2/4 w-2/5">
          <div className="flex flex-col justify-around h-3/5">
            <h2 className="text-4xl font-bold">Title of the product</h2>
            <span className="text-3xl">99$</span>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              veniam unde pariatur, numquam voluptatibus quaerat corporis minima
              praesentium quas tempore doloribus velit ipsum, cumque magnam fuga
              nulla dolore possimus blanditiis.
            </p>
          </div>

          <div className="border-2 w-2/5 flex justify-between p-2 text-2xl">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>

          <div className="flex items-start gap-12 w-full text-xl">
            <button className="w-2/5 pointer p-4 bg-gray-900 text-white">
              <NavLink to="/cart">Add to Cart </NavLink>
            </button>

            <button className="w-2/5 pointer p-4 bg-violet-500 text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
