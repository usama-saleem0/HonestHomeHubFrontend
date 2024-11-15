import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiHandle } from "../config/apiHandle/apiHandle";
import { type_constants } from "../store/constants/constants";

export const get_all_topics_async = createAsyncThunk(
  type_constants.GET_ALL_TOPICS,
  async () => {
    try {
      const response = await apiHandle.get("/user/get-all-topics");
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log({ error });
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const create_community_async = createAsyncThunk(
  type_constants.CREATE_COMMUNITY,
  async (data) => {
    try {
      const response = await apiHandle.post("/user/create-community", data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log({ error });
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const search_community_async = createAsyncThunk(
  type_constants.SEARCH_COMMUNITY,
  async ({ search_community_query, userId }) => {
    console.log("-------------->", userId);
    try {
      const response = await apiHandle.get(
        `/search-community?searchQuery=${search_community_query}&user_id=${userId}`
      );
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log({ error });
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const join_community_async = createAsyncThunk(
  type_constants.JOIN_COMMUNITY,
  async (data) => {
    try {
      const response = await apiHandle.post("/user/join-community", data);
      const res_data = await response.data;
      return res_data;
    } catch (error) {
      console.log({ error });
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
