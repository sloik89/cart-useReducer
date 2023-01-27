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
  if (action.type === "INCREASE") {
    const tempArr = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempArr };
  }
  if (action.type === "DECREASE") {
    const tempArr = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    return { ...state, cart: tempArr };
  }
  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        console.log(price, amount);
        const finalPrice = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += finalPrice;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = total.toFixed(2);
    return { ...state, total, amount };
  }
  return state;
};
export default reducer;
