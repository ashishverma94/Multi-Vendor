import axios from "axios";
import {server} from "../../server.js";

// CREATE PRODUCT
export const createProduct = (prodData) => async (dispatch) => {
  try {
    dispatch({
      type: "ProductCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/product/create-product`,
      prodData,
      config
    );

    dispatch({
      type: "ProductCreateSuccess",
      payload: data.product,
    });
  } catch (error)  {
    dispatch({
      type: "ProductCreateFail",
      payload: error.response.data,
    });
  }
};
