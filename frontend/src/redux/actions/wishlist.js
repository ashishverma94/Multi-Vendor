// ADD TO WISHLIST
export const addToWishlist = (data) => async (dispatch, getState) => {
    dispatch({
      type: "AddToWishlist",
      payload: data,
    });
  
    localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlist));
    return data;
  };
  
  // REMOVE FROM WISHLIST
  export const removeFromWishlist = (data) => async (dispatch, getState) => {
    dispatch({
      type: "RemoveFromWishlist",
      payload: data._id,
    });
    localStorage.setItem("wishlistItems", JSON.stringify(getState().wishlist.wishlist));
    return data;
  };
  