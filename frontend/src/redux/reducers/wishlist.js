import { createReducer, createAction } from "@reduxjs/toolkit";

const AddToWishlist = createAction("AddToWishlist");
const RemoveFromWishlist = createAction("RemoveFromWishlist");

const initialState = {
  wishlist: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  isLoading: true,
};

export const WishlistReducer = createReducer(
  initialState,

  (builder) => {
    builder
      .addCase(AddToWishlist, (state,action) => {
        const item = action.payload;
        const isItemExist = state.wishlist.find((i) => i._id === item._id);
        if (isItemExist) {
          return {
            ...state,
            wishlist: state.wishlist.map((i) => (i._id === isItemExist._id ? item : i)),
          };
        } else {
          return {
            ...state,
            wishlist: [...state.wishlist, item],
          };
        }
      })

      .addCase(RemoveFromWishlist, (state, action) => {
        return {
          ...state,
          wishlist: state.wishlist.filter((i) => i._id !== action.payload),
        };
      });
  }
);
