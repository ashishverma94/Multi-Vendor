import { userReducer } from "./reducers/user";
import { EventReducer } from "./reducers/event";
import { configureStore } from "@reduxjs/toolkit";
import { sellerReducer } from "./reducers/seller";
import { productReducer } from "./reducers/product";

const Store = configureStore({
  reducer: {
    user: userReducer,
    events: EventReducer,
    seller: sellerReducer,
    products: productReducer,
  },
});

export default Store;
