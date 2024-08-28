import { createContext, useEffect, useState } from "react";
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
    setCount(0);
  };

  //Load all producst
  const [items, setItems] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState("");
  const [filteredItems, setFilteredItems] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(items);
      });
  }, []);

  //Search
  const updatePath = (path) => {
    setCurrentItems(items);
    setFilteredItems(items);
    if (path) {
      const filterCategoryItems = items?.filter((item) =>
        item.category.name.toLowerCase().includes(path.toLowerCase())
      );
      setCurrentItems(filterCategoryItems);
      setFilteredItems(filterCategoryItems);
    }
    setSearchByTitle("");
  };
  const filterItemsBySearch = () => {
    if (searchByTitle.length > 0) {
      setFilteredItems(
        currentItems?.filter((item) =>
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        )
      );
    }
  };
  useEffect(() => {
    updatePath(window.location.pathname.substring(1));
  }, [items]);

  useEffect(() => {
    filterItemsBySearch();
  }, [searchByTitle, items]);
  console.log(
    `current: ${currentItems?.length} filtered: ${filteredItems?.length}`
  );
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
        items,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        updatePath,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
