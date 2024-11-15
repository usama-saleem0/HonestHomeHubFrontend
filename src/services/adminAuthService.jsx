import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constants } from "../store/constants/constants.jsx";
import { apiHandle } from "../config/apiHandle/apiHandle.js";


export const admin_login_post_async = createAsyncThunk(
  type_constants.ADMIN_LOGIN,
  async (post_data) => {

    // console.log(post_data);
    try {
      const response = await apiHandle.post("/admin-login", post_data);
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
export const admin_register_post_async = createAsyncThunk(
  type_constants.ADMIN_REGISTER,
  async (post_data) => {

    // console.log(post_data);
    try {
      const response = await apiHandle.post("/admin-register", post_data);
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
export const admin_upcomig_req_async = createAsyncThunk(
  type_constants.GET_UPCOMING_REQ,
  async () => {

    // console.log(post_data);
    try {
      const response = await apiHandle.get("/get-upcoming-req");
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

