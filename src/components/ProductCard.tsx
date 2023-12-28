import { NavLink } from "react-router-dom";

export default function ProductCard(props: any) {
  return (
    <div className="flex flex-col h-96 w-96 p-4">
      <NavLink to="/details">
        {/* <img
          src={props.img}
          alt="product-img"
          className="h-80 w-96 p-4 border-2 border-violet-400 mx-auto object-cover rounded-xl"
        /> */}

        <div className="flex justify-between p-2 text-lg h-80 w-96 p-4 border-2 border-violet-400 mx-auto object-cover rounded-xl">
          <h3 className="font-bold">{props.name}</h3>
          <span>{props.price}$</span>
          <p>{props.description}</p>
        </div>
      </NavLink>
    </div>
  );
}
