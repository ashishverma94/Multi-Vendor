import { createReducer, createAction } from "@reduxjs/toolkit";

const AddToCart = createAction("AddToCart");
const RemoveFromCart = createAction("RemoveFromCart");

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  isLoading: true,
};

export const CartReducer = createReducer(
  initialState,

  (builder) => {
    builder
      .addCase(AddToCart, (state,action) => {
        const item = action.payload;
        const isItemExist = state.cart.find((i) => i._id === item._id);
        if (isItemExist) {
          return {
            ...state,
            cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i)),
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, item],
          };
        }
      })

      .addCase(RemoveFromCart, (state, action) => {
        return {
          ...state,
          cart: state.cart.filter((i) => i._id !== action.payload),
        };
      });
  }
);
