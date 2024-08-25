import { XMarkIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { calTotalPrice } from "../../utils";
import { Link } from "react-router-dom";
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
            id={item.id}
            title={item.title}
            imageURL={item.images}
            price={item.price}
            handleDelate={context.handleCartItemDelate}
          />
        ))}
      </div>
      <div className="mt-auto mb-6 pt-6 px-6">
        <p className="w-full flex justify-between  font-medium">
          <span>Total:</span>
          <span className="text-lg font-bold">
            {calTotalPrice(context.cartItems)}
          </span>
        </p>{" "}
        <Link to="/my-orders/last">
          <button
            onClick={() => context.addOrder(context.cartItems)}
            className="bg-black text-white w-full py-3 rounded-lg"
          >
            Add Order
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CartSideMenu;
