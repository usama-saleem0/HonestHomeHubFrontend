import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constants } from "../store/constants/constants";
import { apiHandle } from "../config/apiHandle/apiHandle";

export const search_post_async = createAsyncThunk(
  type_constants.SEARCH_POST,
  async ({ user_id, query, page, postPerPage }) => {
    try {
      const response = await apiHandle.get(
        `/get-post-by-search?user_id=${user_id}&query=${query}&page=${page}&postPerPage=${postPerPage}`
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

export const vote_post_async = createAsyncThunk(
  type_constants.VOTE_POST,
  async (obj) => {
    try {
      const response = await apiHandle.post(`/user/vote-post`, obj);
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
