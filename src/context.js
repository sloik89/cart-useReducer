import React, { useEffect, useState, useContext, useReducer } from "react";
import cartItems from "./data";
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
  const [state, dispatch] = useReducer(initialState);
  return (
    <AppContext.Provider
      value={{
        cart,
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
