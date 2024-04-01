import { createReducer, createAction } from "@reduxjs/toolkit";

const EventCreateFail = createAction("EventCreateFail");
const EventCreateRequest = createAction("EventCreateRequest");
const EventCreateSuccess = createAction("EventCreateSuccess");

const GetAllEventsFail = createAction("GetAllEventsFail") ;
const GetAllEventsRequest = createAction("GetAllEventsRequest");
const GetAllEventsSuccess = createAction("GetAllEventsSuccess");

const GetAllEventsShopFail = createAction("GetAllEventsShopFail") ;
const GetAllEventsShopRequest = createAction("GetAllEventsShopRequest");
const GetAllEventsShopSuccess = createAction("GetAllEventsShopSuccess");

const DeleteEventFail = createAction("DeleteEventFail");
const DeleteEventRequest = createAction("DeleteEventRequest");
const DeleteEventSuccess = createAction("DeleteEventSuccess");

const initialState = {
  isLoading: true, 
};

export const EventReducer = createReducer(
  initialState,

  (builder) => { 
    builder  

      // ADD A Event
      .addCase(EventCreateRequest, (state) => {
        state.isLoading = true;
      })

      .addCase( EventCreateSuccess, (state, action) => {
        state.isLoading = false;
        state.event = action.payload;
        state.success = true;
      })
      .addCase(EventCreateFail, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      })

      // GET ALL EVENTS
      .addCase(GetAllEventsRequest,(state)=>{
        state.isLoading = true;
      })
      .addCase(GetAllEventsSuccess,(state,action)=>{
        state.isLoading = false;
        state.allEvents = action.payload;
      })
      .addCase(GetAllEventsFail,(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
        console.log(action,state) ;
      })

      // GET ALL EVENTS BY SHOP
      .addCase(GetAllEventsShopRequest,(state)=>{
        state.isLoading = true;
      })
      .addCase(GetAllEventsShopSuccess,(state,action)=>{
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(GetAllEventsShopFail,(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
      })

      // DELETE A Event
      .addCase(DeleteEventRequest,(state)=>{
        state.isLoading = true;
      })
      .addCase(DeleteEventSuccess,(state,action)=>{
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(DeleteEventFail,(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
      })
  }
);
