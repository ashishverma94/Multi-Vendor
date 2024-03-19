import { createReducer, createAction } from "@reduxjs/toolkit";

const ProductCreateFail = createAction("ProductCreateFail");
const ProductCreateRequest = createAction("ProductCreateRequest");
const ProductCreateSuccess = createAction("ProductCreateSuccess");

const GetAllProductsShopFail = createAction("GetAllProductsShopFail") ;
const GetAllProductsShopRequest = createAction("GetAllProductsShopRequest");
const GetAllProductsShopSuccess = createAction("GetAllProductsShopSuccess");

const DeleteProductFail = createAction("DeleteProductFail");
const DeleteProductRequest = createAction("DeleteProductRequest");
const DeleteProductSuccess = createAction("DeleteProductSuccess");

const initialState = {
  isLoading: true, 
};

export const productReducer = createReducer(
  initialState,

  (builder) => { 
    builder  

      // ADD A PRODUCT
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

      // GET ALL PRODUCTS
      .addCase(GetAllProductsShopRequest,(state)=>{
        state.isLoading = true;
      })
      .addCase(GetAllProductsShopSuccess,(state,action)=>{
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(GetAllProductsShopFail,(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
      })

      // DELETE A PRODUCT
      .addCase(DeleteProductRequest,(state)=>{
        state.isLoading = true;
      })
      .addCase(DeleteProductSuccess,(state,action)=>{
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(DeleteProductFail,(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
      })
  }
);
