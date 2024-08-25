import { XMarkIcon } from "@heroicons/react/16/solid";

const OrderCard = ({ id, title, imageURL, price, handleDelate }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageURL}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">{price}</p>
        {handleDelate ? (
          <XMarkIcon
            onClick={() => handleDelate(id)}
            className="h-6 w-6 text-slate-600 cursor-pointer"
          />
        ) : null}
      </div>
    </div>
  );
};

export default OrderCard;
