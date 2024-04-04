import { createReducer, createAction } from "@reduxjs/toolkit";

const LoadUserFail = createAction("LoadUserFail");
const LoadUserRequest = createAction("LoadUserRequest");
const LoadUserSuccess = createAction("LoadUserSuccess");

const UpdateUserInfoFailed = createAction("UpdateUserInfoFailed");
const UpdateUserInfoRequest = createAction("UpdateUserInfoRequest");
const UpdateUserInfoSuccess = createAction("UpdateUserInfoSuccess");

const UpdateUserImageFailed = createAction("UpdateUserImageFailed");
const UpdateUserImageRequest = createAction("UpdateUserImageRequest");
const UpdateUserImageSuccess = createAction("UpdateUserImageSuccess");

const UpdateUserAddressFailed = createAction("UpdateUserAddressFailed");
const UpdateUserAddressRequest = createAction("UpdateUserAddressRequest");
const UpdateUserAddressSuccess = createAction("UpdateUserAddressSuccess");

const DeleteUserAddressFailed = createAction("DeleteUserAddressFailed");
const DeleteUserAddressRequest = createAction("DeleteUserAddressRequest");
const DeleteUserAddressSuccess = createAction("DeleteUserAddressSuccess");

const ClearErrors = createAction("ClearErrors");
const ClearMessages = createAction("ClearMessages");

const initialState = {
  isAuthenticated: false,
};

export const userReducer = createReducer(
  initialState,

  (builder) => {
    builder

      .addCase(LoadUserRequest, (state) => {
        state.loading = true;
      })

      .addCase(LoadUserSuccess, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(LoadUserFail, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      // UPDATE USER INFO
      .addCase(UpdateUserInfoRequest, (state) => {
        state.loading = true;
      })
      .addCase(UpdateUserInfoSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(UpdateUserInfoFailed, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE USER IMAGE
      .addCase(UpdateUserImageRequest, (state) => {
        state.loading = true;
      })
      .addCase(UpdateUserImageSuccess, (state, action) => {
        state.loading = false;
        state.avatar = action.payload;
      })
      .addCase(UpdateUserImageFailed, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE USER ADDRESS
      .addCase(UpdateUserAddressRequest, (state) => {
        state.loading = true;
      })
      .addCase(UpdateUserAddressSuccess, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.successMessage;
        state.user = action.payload.user;
      })
      .addCase(UpdateUserAddressFailed, (state, action) => {
        state.loading = false;
        state.error =  action.payload;
      })
  
      // DELETE USER ADDRESS
      .addCase(DeleteUserAddressRequest, (state) => {
        state.loading = true;
      })
      .addCase(DeleteUserAddressSuccess, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.successMessage;
        state.user = action.payload.user;
      })
      .addCase(DeleteUserAddressFailed, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
   
      // DEFAULT 
      .addCase(ClearErrors, (state) => {
        state.error = null;
      })
      .addCase(ClearMessages, (state) => {
        state.successMessage = null;
      });
  }
);

// export const userReducer = createReducer(initialState, {
//   LoadUserRequest: (state) => {
//     state.loading = true;
//   },
//   LoadUserSuccess: (state, action) => {
//     state.isAuthenticated = true;
//     state.loading = false;
//     state.user = action.payload;
//   },
//   LoadUserFail: (state, action) => {
//     state.loading = false;
//     state.error = action.payload;
//     state.isAuthenticated = false;
//   },
// });
