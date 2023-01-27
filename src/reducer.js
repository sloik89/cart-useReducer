const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    console.log("jestem");
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE_ITEM") {
    console.log("jesem", action.payload);
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  return state;
};
export default reducer;
