import { NavLink } from "react-router-dom";
import React from "react";

export default function Payment() {
  return (
    <div className="h-screen w-5/6 mx-auto mt-14 mb-14 font-serif">
      <div className="relative mt-4 mb-4 h-5/6 ">
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-l from-gray-400 to-gray-600 font-bold">
            Payment
          </h1>
          <div>
            <h3 className="text-3xl">
              <span className="tracking-wider">Payment Details</span>{" "}
            </h3>
          </div>
        </div>
        <div className="flex justify-between mt-12">
          <div className="w-1/2 h-full">
            <form action="" className="space-y-8 ">
              <div className="flex justify-between">
                <input
                  className="w-full p-2 border-2 border-gray-500"
                  type="text"
                  placeholder="Cardholder Full Name"
                  id="cardholder-name"
                  required
                />
              </div>
              <input
                className="border-2 border-gray-500 p-2 w-full"
                type="tel"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                maxLength={19}
                placeholder="Card Number"
                id="ccn"
                required
              />
              <div className="flex justify-between gap-6">
                <input
                  className="border-2 border-gray-500 p-2 w-1/2"
                  type="month"
                  placeholder="Expiry date"
                />
                <input
                  className="border-2 border-gray-500 p-2 w-1/2"
                  type="text"
                  maxLength={3}
                  placeholder="CVV"
                  id="CVV"
                  required
                />
              </div>
              <input
                className="border-2 border-gray-500 p-2 w-full"
                type="text"
                placeholder="Full Billing Address"
                id="address"
                required
              />
              <button className="w-full py-4 bg-gray-800 text-white">
                <NavLink to="/payment">PAY NOW</NavLink>
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 absolute bottom-0 space-y-4">
          <h2 className="w-full text-4xl font-bold border-b-2 border-gray-500 pb-4 ">
            Order Information
          </h2>
          <p className="text-xl text-gray-400 pt-4">Return Policy</p>
          <p className="text-xl text-gray-400">
            This is our return policy so you better read it before purchasing
            any product from our online stores.
          </p>
        </div>
      </div>
    </div>
  );
}
