import React from "react";

export default function ProductCart() {
  return (
    <div className="relative flex gap-4 h-52 border-b-2 pb-2">
      <div className="w-1/4 bg-gray-300">
        <img
          className="w-full "
          src="../images/netflix-logo-png-2562.png"
          alt="product-img"
        />
      </div>
      <div className="text-xl flex flex-col space-y-2 justify-between">
        <h3 className="font-bold">Product title</h3>
        <span>quantity:1</span>
        <p>$200</p>
      </div>
      <div className="absolute right-0 bottom-0">
        <span className="hover:underline hover:pointer">remove</span>
      </div>
    </div>
  );
}
