import React from "react";
import { NavLink } from "react-router-dom";

export default function Contact() {
  return (
    <div className="border-4 w-5/6 mx-auto mt-14 mb-14 font-serif">
      <div className="mt-4 mb-4 h-5/6">
        <div className="flex flex-col space-y-8">
          <h1 className="text-5xl bg-clip-text text-transparent bg-gradient-to-l from-gray-400 to-gray-600 font-bold">
            Contact
          </h1>
          <div>
            <h3 className="text-3xl">
              <span className="tracking-wider">Contact Details</span>{" "}
            </h3>
          </div>
        </div>
        <div className="flex justify-between mt-12">
          <div className="w-1/2 h-full">
            <form action="" className="space-y-6 ">
              <div className="flex justify-between gap-6">
                <input
                  className="w-full p-2 border-2 border-gray-500"
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  required
                />
                <input
                  className="w-full p-2 border-2 border-gray-500"
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  required
                />
              </div>
              <select id="cars" className="border-2 border-gray-500 p-2 w-full">
                <option value="">subject</option>
                <option value="refund">Refund</option>
                <option value="bugs">payment issues</option>
                <option value="opel">other</option>
              </select>
              <div className="flex justify-between gap-6">
                <textarea
                  className="border-2 border-gray-500 p-2 w-full"
                  placeholder="enter details of your query"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-gray-800 text-white text-lg">
                <NavLink to="/payment">Submit</NavLink>
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 mt-24 mb-8">
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
