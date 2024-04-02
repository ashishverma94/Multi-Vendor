import { userReducer } from "./reducers/user";
import { CartReducer } from "./reducers/cart";
import { EventReducer } from "./reducers/event";
import { sellerReducer } from "./reducers/seller";
import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/product";

const Store = configureStore({
  reducer: {
    user: userReducer,
    cart: CartReducer,
    events: EventReducer,
    seller: sellerReducer,
    products: productReducer,
  },
});

export default Store;
