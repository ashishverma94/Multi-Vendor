// ADD TO CART
export const addToCart = (data) => async (dispatch, getState) => {
  dispatch({
    type: "AddToCart",
    payload: data,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};

// REMOVE FROM CART
export const removeFromCart = (data) => async (dispatch, getState) => {
  dispatch({
    type: "RemoveFromCart",
    payload: data._id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cart));
  return data;
};
