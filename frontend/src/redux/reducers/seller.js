import { createReducer, createAction } from "@reduxjs/toolkit";

const LoadSellerRequest = createAction("LoadSellerRequest");
const LoadSellerSuccess = createAction("LoadSellerSuccess");
const LoadSellerFail = createAction("LoadSellerFail");

const initialState = {
  isAuthenticated: false,
};

export const sellerReducer = createReducer(
  initialState,

  (builder) => {
    builder

      .addCase(LoadSellerRequest, (state) => {
        state.isLoading = true;
      })

      .addCase(LoadSellerSuccess, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.seller = action.payload;
      })
      .addCase(LoadSellerFail, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  }
);

