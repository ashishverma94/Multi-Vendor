import axios from "axios";
import { server } from "../../server";

// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data.message,
    });
  }
};

// load seller
export const loadSeller = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadSellerRequest",
    });
    const { data } = await axios.get(`${server}/shop/getseller`, {
      withCredentials: true,
    });
    dispatch({
      type: "LoadSellerSuccess",
      payload: data.seller,
    });
  } catch (error) {
    dispatch({
      type: "LoadSellerFail",
      payload: error.response.data.message,
    });
  }
};

// user update info
export const updateUserInformation =
  (email, password, phoneNumber, name) => async (dispatch) => {
    try {
      dispatch({
        type: "UpdateUserInfoRequest",
      });

      await axios.put(
        `${server}/user/update-user-info`,
        {
          email,
          password,
          phoneNumber,
          name,
        },
        { withCredentials: true }
      );

      dispatch({
        type: "UpdateUserInfoSuccess",
        payload: data.user,
      });
    } catch (err) {
      dispatch({
        type: "UpdateUserInfoFailed",
        payload: err.response,
      });
    }
  };

// user update image
export const updateUserImage = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "UpdateUserImageRequest",
    });

    await axios
      .put(`${server}/user/update-avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((res) => {
        dispatch({
          type: "UpdateUserInfoSuccess",
          payload: res?.data?.user,
        });
      });
  } catch (err) {
    dispatch({
      type: "UpdateUserImageFailed",
      payload: err.response,
    });
  }
};

// user update address
export const updateUserAddress =
  (country, state, address1, address2, addressType) => async (dispatch) => {
    try {
      dispatch({
        type: "UpdateUserAddressRequest",
      }); 

      const { data } = await axios.put(
        `${server}/user/update-user-address`,
        {
          country,
          state,
          address1,
          address2,
          addressType,
        },
        { withCredentials: true }
      );

      dispatch({
        type: "UpdateUserAddressSuccess",
        payload: {
          successMessage: "User address updated!",
          user: data.user,
        },
      });
    } catch (err) {
      dispatch({
        type: "UpdateUserAddressFailed",
        payload: err.response?.data?.message,
      });
    }
  };
  
// delete user address
export const deleteUserAddress = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteUserAddressRequest",
    });

    const { data } = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "DeleteUserAddressSuccess",
      payload: {
        loading: false,
        successMessage: "Address deleted successfully!",
        user: data.user,
      },
    });
  } catch (err) {
    dispatch({
      type: "DeleteUserAddressFailed",
      payload: err.response.data.message,
    });
  }
};
