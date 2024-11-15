import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constants } from "../store/constants/constants.jsx";
import { apiHandle } from "../config/apiHandle/apiHandle.js";


export const save_and_post_async = createAsyncThunk(
  type_constants.SAVE_PAYMENT,
  async (post_data) => {

    // console.log(post_data);
    try {
      const response = await apiHandle.post("/save-payment-details", post_data);
      const res_data = await response.data;


      return res_data;
    } catch (error) {
      console.log("error", { error });
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
export const edit_schedule_by_id_async = createAsyncThunk(
  type_constants.EDIT_SCHEDULE,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/edit-schedule", post_data);
      const res_data = await response.data;

      // console.log("res_data", res_data)
      // console.log("post_data", post_data)

      return res_data;
    } catch (error) {
      console.log("error", { error });
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);


