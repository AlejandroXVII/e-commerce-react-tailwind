import { XMarkIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

const CartSideMenu = () => {
  let context = useContext(ShoppingCartContext);
  return (
    <aside
      className={`${
        context.isOpenCartSideMenu ? "flex" : "hidden"
      } flex-col fixed right-0 top-[80px] border bg-white border-black rounded-lg w-[380px] h-[calc(100vh-80px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => context.closeCartSideMenu()}>
          <XMarkIcon className="h-6 w-6 text-slate-600 cursor-pointer" />
        </div>
      </div>
      <div className="p-6 flex flex-col gap-3 overflow-y-scroll">
        {context.cartItems.map((item) => (
          <OrderCard
            key={item.id}
            title={item.title}
            imageURL={item.images}
            price={item.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CartSideMenu;
