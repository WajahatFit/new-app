import React from "react";
import { NavLink } from "react-router-dom";
import ProductCart from "../components/ProductCart";

export default function Cart() {
  return (
    <div className="w-5/6 mx-auto mt-14 font-serif">
      <div className="mt-4 mb-4 h-7/8">
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-l from-gray-400 to-gray-600 font-bold">
            Your cart
          </h1>
          <p className="text-xl">
            Not ready to checkout?{" "}
            <NavLink to="/shop">
              <span className="hover:underline">Continue Shopping</span>
            </NavLink>{" "}
          </p>
        </div>
        <div className="flex justify-between mt-12">
          <div className="w-1/2 h-full space-y-4">
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>

          <div className="w-2/6 flex flex-col justify-around h-96">
            <h2 className="font-bold text-2xl tracking-wider">Order Summary</h2>
            <div className="flex flex-col h-2/3 justify-between text-xl">
              <div
                className="flex
           justify-between"
              >
                <span>Subtotal</span> <span>$200</span>
              </div>
              <div className="w-full border-t-4"></div>
              <div className="flex justify-between font-bold">
                <span className="">Total</span> <span>$200</span>
              </div>
              <NavLink to="/checkout">
                <button className="w-full py-4 bg-gray-800 text-white">
                  Proceed to checkout
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
