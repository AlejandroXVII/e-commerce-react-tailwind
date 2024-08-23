import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  //Item details
  const [isOpenItemDetails, setIsOpenItemDetails] = useState(false);
  const [itemToShow, setItemToShow] = useState({});
  const openItemDetails = (dataItem) => {
    setItemToShow(dataItem);
    setIsOpenItemDetails(true);
  };
  const closeItemDetails = () => setIsOpenItemDetails(false);

  //Cart side menu
  const [cartItems, setCartItems] = useState([]);
  const [isOpenCartSideMenu, setIsOpenCartSideMenu] = useState(false);
  const openCartSideMenu = (event, dataItem) => {
    event.stopPropagation();
    setCartItems([...cartItems, dataItem]);
    setIsOpenCartSideMenu(true);
    setCount(count + 1);
  };
  const closeCartSideMenu = () => setIsOpenCartSideMenu(false);
  const handleCartItemDelate = (id) => {
    const newCartItems = cartItems.filter((item) => item.id != id);
    setCartItems(newCartItems);
  };

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
        handleCartItemDelate,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
