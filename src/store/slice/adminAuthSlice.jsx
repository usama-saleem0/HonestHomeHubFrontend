import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../utils/async_status";
import { toast } from "react-toastify";
import { save_tokens_constant } from "../constants/constants";
import { admin_login_post_async, admin_register_post_async, admin_upcomig_req_async } from "../../services/adminAuthService";


const initialState = {
  userAuth: false,

  login_status: asyncStatus.IDLE,
  login_data: null,
  login_error: null,


   admin_register_status: asyncStatus.IDLE,
   admin_register_data: null,
   admin_register_error: null,

 


  upcoming_status: asyncStatus.IDLE,
  upcoming_data: null,
  upcoming_error: null,

};

const adminAuthSlice = createSlice({
  name: "admin_auth",
  initialState: initialState,
  reducers: {
    // setIdleStatus(state, actions) {
    //   state.register_status = asyncStatus.IDLE;
    // },

  },
  extraReducers: (builder) => {
    // ======================== >>>>>>>>>> Login

    builder.addCase(admin_login_post_async.pending, (state, { payload }) => {
      state.login_status = asyncStatus.LOADING;
    });

    builder.addCase(admin_login_post_async.fulfilled, (state, { payload }) => {
      state.login_status = asyncStatus.SUCCEEDED;
      state.login_data = payload.data;
      localStorage.setItem(
        save_tokens_constant,
        JSON.stringify(payload.tokens.access_token)
      );
      state.user_data = payload.data;
      toast.success("Login Successfully", {
        position: "top-center",
      });
    });
    builder.addCase(admin_login_post_async.rejected, (state, actions) => {
      state.login_status = asyncStatus.ERROR;
      toast.error(actions.error.message, {
        position: "top-center",
      });
    });
    // ======================== >>>>>>>>>> Register

    builder.addCase(admin_register_post_async.pending, (state, { payload }) => {
      state.admin_register_status = asyncStatus.LOADING;
    });

    builder.addCase(admin_register_post_async.fulfilled, (state, { payload }) => {
      state.admin_register_status = asyncStatus.SUCCEEDED;
      state.admin_register_data = payload.data;
      // state.user_data = payload.data;
      toast.success("Register Successfully", {
        position: "top-center",
      });
    });
    builder.addCase(admin_register_post_async.rejected, (state, actions) => {
      state.admin_register_status = asyncStatus.ERROR;
      toast.error(actions.error.message, {
        position: "top-center",
      });
    });
    // ======================== >>>>>>>>>> Get Upcoming Req

    builder.addCase(admin_upcomig_req_async.pending, (state, { payload }) => {
      state.upcoming_status = asyncStatus.LOADING;
    });

    builder.addCase(admin_upcomig_req_async.fulfilled, (state, { payload }) => {
      state.upcoming_status = asyncStatus.SUCCEEDED;
      state.upcoming_data = payload.data;

    });
    builder.addCase(admin_upcomig_req_async.rejected, (state, actions) => {
      state.upcoming_status = asyncStatus.ERROR;
    });

  },
});

// export const {
// } = userAuthSlice.actions;

export default adminAuthSlice.reducer;
