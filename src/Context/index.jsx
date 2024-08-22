import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isOpenItemDetails, setIsOpenItemDetails] = useState(false);
  const [itemToShow, setItemToShow] = useState({});

  const openItemDetails = (dataItem) => {
    setItemToShow(dataItem);
    setIsOpenItemDetails(true);
  };
  const closeItemDetails = () => setIsOpenItemDetails(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isOpenItemDetails,
        openItemDetails,
        closeItemDetails,
        itemToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
