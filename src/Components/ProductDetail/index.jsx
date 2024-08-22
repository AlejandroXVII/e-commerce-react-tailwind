import { XMarkIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  let context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isOpenItemDetails ? "flex" : "hidden"
      } flex-col fixed right-0 top-[80px] border bg-white border-black rounded-lg w-[380px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => context.closeItemDetails()}>
          <XMarkIcon className="h-6 w-6 text-slate-600 cursor-pointer" />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={context.itemToShow.images}
          alt=""
        />
      </figure>
      <p className="flex flex-col p-6 gap-3">
        <span className="font-medium text-2xl">
          ${context.itemToShow.price}
        </span>
        <span className="font-medium text-xl">{context.itemToShow.title}</span>
        <span className="font-light text-sm">
          {context.itemToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
