import { createReducer, createAction } from "@reduxjs/toolkit";

const GetAllOrdersUserFail = createAction("GetAllOrdersUserFail");
const GetAllOrdersUserRequest = createAction("GetAllOrdersUserRequest");
const GetAllOrdersUserSuccess = createAction("GetAllOrdersUserSuccess");

const GetAllOrdersShopFail = createAction("GetAllOrdersShopFail");
const GetAllOrdersShopRequest = createAction("GetAllOrderShoprRequest");
const GetAllOrdersShopSuccess = createAction("GetAllOrdersShopSuccess");

const initialState = {
  isLoading: true,
};

export const orderReducer = createReducer(
  initialState,

  (builder) => {
    builder
      // GET ALL ORDERS OF USER
      .addCase(GetAllOrdersUserRequest, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllOrdersUserSuccess, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(GetAllOrdersUserFail, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // GET ALL ORDERS OF SHOP
      .addCase(GetAllOrdersShopRequest, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllOrdersShopSuccess, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(GetAllOrdersShopFail, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })



  }
);


