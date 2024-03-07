import { userReducer } from "./reducers/user";
import { configureStore } from "@reduxjs/toolkit";
import { sellerReducer } from "./reducers/seller";

const Store = configureStore({
  reducer: {
    user: userReducer,
    seller: sellerReducer,
  },
});

export default Store;
