import React from "react";
import productImg from "../images/netflix-logo-png-2562.png";

export default function ProductCard() {
  return (
    <div className="h-32 w-24 border mx-auto">
      <img src={productImg} alt="product-img" className="object-contain" />
    </div>
  );
}
