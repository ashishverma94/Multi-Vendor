import axios from "axios";
import { server } from "../../server.js";

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
  } catch (error) {
    dispatch({
      type: "ProductCreateFail",
      payload: error.response.data,
    });
  }
};

// GET ALL PRODUCTS
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllProductsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    dispatch({
      type: "GetAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "GetAllProductsShopFail",
      payload: error.response.data,
    });
  }
};

// DELETE PRODUCT OF A SHOP
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteProductRequest",
    });

    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      { withCredentials: true }
    );
    dispatch({
      type: "DeleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteProductFail",
      payload: error.response.data,
    });
  }
};

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllProductsRequest",
    });

    const { data } = await axios.get(`${server}/product/get-all-products`);
    dispatch({
      type: "GetAllProductsSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "GetAllProductsFailed",
      payload: error.response.data.message,
    });
  }
};