import productImg from "../images/netflix-logo-png-2562.png";

export default function ProductCard(props: any) {
  return (
    <div className="flex flex-col h-96 w-96 p-4">
      <img
        src={props.img}
        alt="product-img"
        className="h-80 w-96 p-4 border mx-auto object-cover rounded-xl"
      />
      <div className="flex justify-between p-2 mt-4 text-lg">
        <h3>{props.title}</h3>
        <span>{props.price}</span>
      </div>
    </div>
  );
}
