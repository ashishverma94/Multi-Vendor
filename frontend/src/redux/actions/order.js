import axios from "axios";
import { server } from "../../server.js";

// GET ALL ORDERS OF USER
export const getAllOrdersOfUser = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllOrdersUserRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-all-orders/${userId}`
    );
    dispatch({
      type: "GetAllOrdersUserSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "GetAllOrdersUserFail",
      payload: error.response.data,
    });
  }
};

// GET ALL ORDERS OF SHOP
export const getAllOrdersOfShop = (shopId) => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllOrdersShopRequest",
    });

    const { data } = await axios.get(
      `${server}/order/get-seller-all-orders/${shopId}`
    );
    dispatch({
      type: "GetAllOrdersShopSuccess",
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: "GetAllOrdersShopFail",
      payload: error.response.data,
    });
  }
};
