import axios from "axios";
import { server } from "../../server.js";

// CREATE EVENT
export const createEvent = (prodData) => async (dispatch) => {
  try {
    dispatch({
      type: "EventCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/event/create-event`,
      prodData,
      config
    );

    dispatch({
      type: "EventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "EventCreateFail",
      payload: error.response.data,
    });
  }
};

// GET ALL EVENTS BY SHOP
export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllEventsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/event/get-all-events-shop/${id}`
    );
    dispatch({
      type: "GetAllEventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "GetAllEventsShopFail",
      payload: error.response.data,
    });
  }
};

// GET ALL EVENTS
export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllEventsRequest",
    });

    const { data } = await axios.get(`${server}/event/get-all-events`);
    dispatch({
      type: "GetAllEventsSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "GetAllEventsFail",
      payload: error.response,
    });
  }
};

// DELETE EVENT OF A SHOP
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteEventRequest",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      { withCredentials: true }
    );
    dispatch({
      type: "DeleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteEventFail",
      payload: error.response.data,
    });
  }
};
