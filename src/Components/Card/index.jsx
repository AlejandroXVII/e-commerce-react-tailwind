import { CheckIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ data }) => {
  let context = useContext(ShoppingCartContext);

  const renderIcon = () => {
    const isInCart = context.cartItems.includes(data);

    if (isInCart) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => {
            event.stopPropagation();
            context.handleCartItemDelate(data.id);
          }}
        >
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => {
            context.openCartSideMenu(event, data);
          }}
        >
          <PlusIcon className="h-6 w-6 text-slate-600" />
        </div>
      );
    }
  };
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60"
      onClick={() => context.openItemDetails(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images[0]}
          alt={data.tittle}
        />
        {renderIcon()}
        <p className="flex justify-between">
          <span className="text-sm font-light">{data.title}</span>
          <span className="text-lg font-medium">${data.price}</span>
        </p>
      </figure>
    </div>
  );
};

export default Card;
