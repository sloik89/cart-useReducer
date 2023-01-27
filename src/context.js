import React, { useEffect, useState, useContext, useReducer } from "react";
import cartItems from "./data";
import reducer from "./reducer";
const url = "https://course-api.com/react-useReducer-cart-project";
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems);
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
