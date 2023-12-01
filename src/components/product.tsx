import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from '../graphql/mutations'; // Import your actual GraphQL mutation

// Define a Product type for TypeScript
type Product = {
  name: string;
  price: number;
  description: string;
};

const NewProductForm: React.FC = () => {
  const [productData, setProductData] = useState<Product>({
    name: '',
    price: 0,
    description: '',
  });

  // Import the actual GraphQL mutation
  const [createProductMutation] = useMutation(CREATE_PRODUCT);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Execute the GraphQL mutation
      const { data } = await createProductMutation({
        variables: {
          // Pass the product data as variables to the mutation
          name: productData.name,
          price: productData.price,
          description: productData.description,
        },
      });

      console.log('Product created:', data);

      // Reset the form after successful submission
      setProductData({ name: '', price: 0, description: '' });
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* ... (Same as previous code) */}
      </form>
    </div>
  );
};

export default NewProductForm;
