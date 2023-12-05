import ProductCard from "../components/ProductCard";
import data from "../data/data";

const Shop = () => {
  const product = data.map((item) => {
    return (
      <ProductCard
        key={item.id}
        title={item.title}
        image={`../images/${item.image}`}
        price={item.price}
      />
    );
  });

  return (
    <div className="flex flex-col items-end font-sans">
      <div className="text-gray-400 border w-full bg-gray-800 flex flex-col items-start pt-8 pb-8 px-6 space-y-8 justify-around shdow-xl">
        <h3 className="text-4xl font-bold tracking-wide">Explore Excellence</h3>
        <p className="text-xl w-2/4">
          From sleek tech to timeless classics, find the perfect blend of style
          and innovation. Elevate your lifestyle with our curated collection –
          because quality matters.
        </p>
      </div>
      <div className="flex flex-wrap w-3/4 border border-red-500 mt-16 mb-12 ">
        {product ? product : <h1>No products available from Db</h1>}
      </div>
    </div>
  );
};

export default Shop;
