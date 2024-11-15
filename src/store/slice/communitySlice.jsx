import { createSlice } from "@reduxjs/toolkit";
import {
  create_community_async,
  get_all_topics_async,
  join_community_async,
  search_community_async,
} from "../../services/communityService";
import { asyncStatus } from "../../utils/async_status";
import { success_toast_message } from "../../utils/common/display_toast_container";

const initialState = {
  get_all_topics_status: asyncStatus.IDLE,
  get_all_topics_data: null,
  get_all_topics_error: null,

  create_community_status: asyncStatus.IDLE,
  create_community_data: null,
  create_community_error: null,

  search_community_status: asyncStatus.IDLE,
  search_community_error: null,
  search_community_data: null,

  search_community_query: "",

  join_community_status: asyncStatus.IDLE,
  join_community_error: null,
  join_community_data: null,
};

const communitySlice = createSlice({
  name: "community",
  initialState: initialState,
  reducers: {
    setCommunitySearch(state, { payload }) {
      state.search_community_query = payload;
    },
  },
  extraReducers: (builder) => {
    // ======================== >>>>>>>>>> Get ALl Cammunity

    builder.addCase(get_all_topics_async.pending, (state, { payload }) => {
      state.get_all_topics_status = asyncStatus.LOADING;
    });

    builder.addCase(get_all_topics_async.fulfilled, (state, { payload }) => {
      state.get_all_topics_status = asyncStatus.SUCCEEDED;
      state.get_all_topics_data = payload.data;
    });
    builder.addCase(get_all_topics_async.rejected, (state, actions) => {
      state.get_all_topics_status = asyncStatus.ERROR;
    });

    builder.addCase(create_community_async.pending, (state, { payload }) => {
      state.create_community_status = asyncStatus.LOADING;
      state.create_community_error = null;
      state.create_community_data = null;
    });

    builder.addCase(create_community_async.fulfilled, (state, { payload }) => {
      state.create_community_status = asyncStatus.SUCCEEDED;
      state.create_community_data = payload.data;
      state.create_community_error = null;
      success_toast_message(payload.message);
    });
    builder.addCase(create_community_async.rejected, (state, actions) => {
      state.create_community_status = asyncStatus.ERROR;
      state.create_community_data = null;
      state.create_community_error = actions.error.message;
    });

    builder.addCase(search_community_async.pending, (state, { payload }) => {
      state.search_community_status = asyncStatus.LOADING;
      state.search_community_error = null;
      state.search_community_data = null;
    });

    builder.addCase(search_community_async.fulfilled, (state, { payload }) => {
      state.search_community_status = asyncStatus.SUCCEEDED;
      state.search_community_data = payload.data;
      state.search_community_error = null;
    });
    builder.addCase(search_community_async.rejected, (state, actions) => {
      state.search_community_status = asyncStatus.ERROR;
      state.search_community_data = null;
      state.search_community_error = actions.error.message;
    });

    builder.addCase(join_community_async.pending, (state, { payload }) => {
      state.join_community_status = asyncStatus.LOADING;
      state.join_community_error = null;
      state.join_community_data = null;
    });

    builder.addCase(join_community_async.fulfilled, (state, { payload }) => {
      state.join_community_status = asyncStatus.SUCCEEDED;

      state.join_community_data = payload.data;
      const { search_community_data } = state;
      // let data = [];
      let a = search_community_data?.map((item) =>
        item._id === payload.data.community_id
          ? { ...item, joined: true } // or apply other modifications
          : item
      );
      // search_community_data.forEach((element) => {
      //   console.log(element._id, payload.data._id);
      //   if (element._id === payload.data._id) {
      //     data.push({ ...element, joined: true });
      //   } else {
      //     data.push(element);
      //   }
      // });
      // console.log("a", a);
      state.search_community_data = a;
      state.join_community_error = null;
    });
    builder.addCase(join_community_async.rejected, (state, actions) => {
      state.join_community_status = asyncStatus.ERROR;
      state.join_community_data = null;
      state.join_community_error = actions.error.message;
    });
  },
});

export const { setCommunitySearch } = communitySlice.actions;

export default communitySlice.reducer;
