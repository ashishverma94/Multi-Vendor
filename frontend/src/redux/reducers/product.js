import { createReducer, createAction } from "@reduxjs/toolkit";

const ProductCreateFail = createAction("ProductCreateFail");
const ProductCreateRequest = createAction("ProductCreateRequest");
const ProductCreateSuccess = createAction("ProductCreateSuccess");

const initialState = {
  isLoading: true, 
};

export const productReducer = createReducer(
  initialState,

  (builder) => { 
    builder  

      .addCase(ProductCreateRequest, (state) => {
        state.isLoading = true;
      })

      .addCase( ProductCreateSuccess, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
        state.success = true;
      })
      .addCase(ProductCreateFail, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })
     
  }
);
