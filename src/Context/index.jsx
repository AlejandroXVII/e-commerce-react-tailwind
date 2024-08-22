import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isOpenItemDetails, setIsOpenItemDetails] = useState(false);
  const [itemToShow, setItemToShow] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [isOpenCartSideMenu, setIsOpenCartSideMenu] = useState(false);

  const openItemDetails = (dataItem) => {
    setItemToShow(dataItem);
    setIsOpenItemDetails(true);
  };
  const closeItemDetails = () => setIsOpenItemDetails(false);

  const openCartSideMenu = (event, dataItem) => {
    event.stopPropagation();
    setCartItems([...cartItems, dataItem]);
    setIsOpenCartSideMenu(true);
    setCount(count + 1);
  };
  const closeCartSideMenu = () => setIsOpenCartSideMenu(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isOpenItemDetails,
        openItemDetails,
        closeItemDetails,
        itemToShow,
        cartItems,
        setCartItems,
        isOpenCartSideMenu,
        openCartSideMenu,
        closeCartSideMenu,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
