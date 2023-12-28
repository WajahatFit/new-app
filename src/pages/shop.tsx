import ProductCard from "../components/ProductCard";
// import data from "../data/data";
import { useQuery } from "@apollo/client";
import {GET_PRODUCTS} from '../graphql/mutations'
import {useEffect, useRef, useState} from 'react'

const Shop = () => {
  
  const {data, error} =  useQuery(GET_PRODUCTS);
  const [productsList, setProductsList] = useState([]);
  const searchInput = useRef<HTMLInputElement>(null);
  const sortOptionRef = useRef<HTMLSelectElement>(null);

  // ts types 
  type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
  }

  if (error) {
    console.error("Error while fetching products: ", error);
    throw new Error("Error Fetching Products");
  }

  // this is the query
  const products = data?.products;
  console.log("this are the products", products);

  // useEffect to dispaly the query
  useEffect(() => {
    if (products) {
      setProductsList(products);
    }
  }, [data, error]);


  const handleSearch = () => {
    if(searchInput.current){
      const searchTerm = searchInput.current?.value.toLowerCase() || "";

      const filteredProductList = productsList.filter( (item : Product) => item.name.toLowerCase().includes(searchTerm));
      setProductsList(filteredProductList || [])
    }
  }

  const handleSort = () => {
    const sortOption = sortOptionRef?.current?.value;

    if(sortOption){
      const sortedProductList = [...productsList].sort((a: Product, b: Product) => {
        if(sortOption === "price"){
          return a.price - b.price;
        }
        return 0;
      })
      setProductsList(sortedProductList);
    }
  }

  return (
    <div className="flex flex-col items-start font-sans bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
      <div className="text-gray-400 border-2 w-full bg-gray-800 flex flex-col items-start pt-8 pb-8 px-6 space-y-8 justify-around shadow-xl">
        <h3 className="text-4xl font-bold tracking-wide">Explore Excellence</h3>
        <p className="text-xl w-2/4">
          From sleek tech to timeless classics, find the perfect blend of style
          and innovation. Elevate your lifestyle with our curated collection –
          because quality matters.
        </p>
      </div>
      <div className="flex flex-col items-start p-4 mt-20 w-full">
        <div className="flex items-center justify-around border-4 border-violet-600 h-16 w-56 mx-4">
          <label htmlFor="sort" className="text-gray-500 text-lg">
            Sort By
          </label>

          <select 
          id="sort" 
          ref= {sortOptionRef}
          onChange={handleSort}
          className="text-lg font-bold">
            <option value="price">Price</option>
          </select>
        </div>

        <div className="flex items-center justify-between border-4 border-violet-600 h-16 w-full mx-4">
          <input
            type="text"
            ref={searchInput}
            placeholder="Search by product name..."
            className="text-lg px-2 w-2/3 h-full focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap justify-between gap-8">
          {productsList &&
            productsList.map((item: any) => {
              console.log(item);
              return (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  // image={`../images/${item.image}`}
                  price={item.price}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
