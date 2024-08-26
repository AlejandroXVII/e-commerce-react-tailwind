import { createContext, useState } from "react";
import { calTotalPrice } from "../utils";

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

  //Order
  const [order, setOrder] = useState([]);
  const addOrder = (items) => {
    const newOrder = {
      itemList: items,
      numberItems: items.length,
      date: new Date(),
      total: calTotalPrice(items),
    };
    setOrder([...order, newOrder]);
    setCartItems([]);
    setIsOpenCartSideMenu(false);
    //setCount(0);
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
        addOrder,
        order,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
