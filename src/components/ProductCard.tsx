import { NavLink } from "react-router-dom";

export default function ProductCard(props: any) {
  return (
    <div className="w-fit p-4 border-4">
      <NavLink to="/details">
        {/* <img
          src={props.img}
          alt="product-img"
          className="h-80 w-96 p-4 border-2 border-violet-400 mx-auto object-cover rounded-xl"
        /> */}
        <div className="flex justify-between p-2 text-lg h-80 w-96 p-4 mx-auto object-cover rounded-xl">
          <p className="mx-auto my-auto">{props.description}</p>
        </div>
        <div className="flex justify-between pt-4 text-xl">
          <span>{props.price}$</span>
          <h3 className="font-bold">{props.name}</h3>
        </div>
      </NavLink>
    </div>
  );
}
