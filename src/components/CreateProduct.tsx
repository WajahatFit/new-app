import React, { useState } from "react";
import { CREATE_PRODUCT } from "../graphql/mutations";
import { useMutation } from "@apollo/client";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createProduct({
      variables: {
        name,
        price: price,
        description,
      },
    });

    // Clear the form after submission
    setName("");
    setPrice(0);
    setDescription("");
  };

  return (
    <div className="font-sans w-full h-full py-8 flex flex-col items-center">
      <h2 className="p-4 text-4xl">Create a New Product</h2>
      <form onSubmit={handleSubmit} className="w-4/6 mt-12 text-2xl mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border-2 border-gray-500 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-lg font-medium text-gray-700"
          >
            Product Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            className="mt-1 p-2 border-2 border-gray-500 w-full"
            required
          />
        </div>
        <div className="my-4">
          <label
            htmlFor="description"
            className="block text-lg p-2 text-gray-700"
          >
            Product Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border-2 border-gray-500 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-violet-700 text-white p-4 w-full hover:bg-black hover:text-white"
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
        {error && <p className="text-red-500">{error.message}</p>}
      </form>
    </div>
  );
};

export default ProductForm;
