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
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
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
