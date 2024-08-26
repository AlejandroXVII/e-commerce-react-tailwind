import {
  CalendarIcon,
  ChevronRightIcon,
  ShoppingBagIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const OrdersCard = ({ amount, date, totalPrice, index }) => {
  return (
    <Link to={`/my-orders/${index}`}>
      <div className="flex justify-between items-center w-60 border border-black p-3 rounded-lg my-3 shadow">
        <div>
          <p className="flex items-center mb-3">
            <CalendarIcon className="w-5 h-5 mr-1" />
            {date.toLocaleDateString()}
          </p>
          <p className="flex items-center">
            <ShoppingBagIcon className="w-5 h-5 mr-1 font-light" />
            {amount}
          </p>
        </div>
        <p className="text-2xl font-semibold flex items-center">
          ${totalPrice} <ChevronRightIcon className="w-7 h-7 mr-1" />
        </p>
      </div>
    </Link>
  );
};

export default OrdersCard;
