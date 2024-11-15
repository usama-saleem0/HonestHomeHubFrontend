import { createSlice } from "@reduxjs/toolkit";

import { asyncStatus } from "../../utils/async_status";
import {
  search_post_async,
  vote_post_async,
} from "../../services/newsFeedService";

const initialState = {
  search_post_status: asyncStatus.IDLE,
  search_post_data: null,
  search_post_error: null,

  vote_status: asyncStatus.IDLE,
  vote_data: null,
  vote_error: null,
};

const newsFeedSlice = createSlice({
  name: "newsFeed",
  initialState: initialState,
  reducers: {
    // setCommunitySearch(state, { payload }) {
    //   state.search_community_query = payload;
    // },
  },
  extraReducers: (builder) => {
    // ======================== >>>>>>>>>> Get ALl posts

    builder.addCase(search_post_async.pending, (state, { payload }) => {
      state.search_post_status = asyncStatus.LOADING;
      state.search_post_data = null;
      state.search_post_error = null;
    });

    builder.addCase(search_post_async.fulfilled, (state, { payload }) => {
      state.search_post_status = asyncStatus.SUCCEEDED;
      state.search_post_data = payload.data;
      state.search_post_error = null;
    });
    builder.addCase(search_post_async.rejected, (state, actions) => {
      state.search_post_status = asyncStatus.ERROR;
      state.search_post_data = null;
      state.search_post_error = actions.error.message;
    });
    // ======================== >>>>>>>>>> Vote

    builder.addCase(vote_post_async.pending, (state, { payload }) => {
      state.vote_status = asyncStatus.LOADING;
      state.vote_data = null;
      state.vote_error = null;
    });

    builder.addCase(vote_post_async.fulfilled, (state, { payload }) => {
      state.vote_status = asyncStatus.SUCCEEDED;
      state.vote_data = payload.data;
      const { search_post_data } = state;
      // let data = [];
      let updatedSearchPostData = search_post_data?.map((item) => {
        let score = item.score;

        if (item._id === payload.data.post_id) {
          if (payload.data.vote === "upvote") {
            score++;
          } else if (payload.data.vote === "downvote") {
            score--;
          } else if (payload.data.vote === "") {
            if (item.vote === "upvote") {
              score--;
            } else if (item.vote === "downvote") {
              score++;
            }
          }
          return { ...item, vote: payload.data.vote, score };
        }

        return item;
      });

      state.search_post_data = updatedSearchPostData;
      state.vote_error = null;
    });
    builder.addCase(vote_post_async.rejected, (state, actions) => {
      state.vote_status = asyncStatus.ERROR;
      state.vote_data = null;
      state.vote_error = actions.error.message;
    });
  },
});

// export const { setCommunitySearch } = newsFeedSlice.actions;

export default newsFeedSlice.reducer;
