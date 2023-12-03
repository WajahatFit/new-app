import React from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  return (
    <div className="flex">
      <div className="border w-full h-2/4 bg-black"></div>
      <ProductCard />
    </div>
  );
};

export default Product;
