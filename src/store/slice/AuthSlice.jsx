import { createSlice } from "@reduxjs/toolkit";
import {
  // check_auth_async,
  login_user_post_async,
  register_user_post_async,
  reset_password_create_password_async,
  reset_password_request_otp_async,
  reset_password_verify_otp_async,
  verify_otp_async,
} from "../../services/authService";
import { asyncStatus } from "../../utils/async_status";
import { toast } from "react-toastify";
import { save_tokens_constant } from "../constants/constants";

const storedIndex = localStorage.getItem("active_sidebar_index");

const initialState = {
  userAuth: false,

  register_status: asyncStatus.IDLE,
  register_data: null,
  register_error: null,
  register_error_msg: null,

  otp_status: asyncStatus.IDLE,
  otp_data: null,
  otp_error: null,

  resend_otp_status: asyncStatus.IDLE,
  resend_otp_data: null,
  resend_otp_error: null,

  otpVerified: false,

  login_status: asyncStatus.IDLE,
  login_data: null,
  login_error: null,

  forgot_status: asyncStatus.IDLE,
  forgot_data: null,
  forgot_error: null,

  reset_otp_status: asyncStatus.IDLE,
  reset_otp_data: null,
  reset_otp_error: null,

  reset_status: asyncStatus.IDLE,
  reset_data: null,
  reset_error: null,

  check_auth_status: asyncStatus.IDLE,
  check_auth_data: null,
  check_auth_error: null,

  user_data: null,

  // activeIndex: localStorage.getItem("active_sidebar_index")
  //   ? parseInt(localStorage.getItem("active_sidebar_index"))
  //   : null,
  activeIndex: storedIndex !== null ? parseInt(storedIndex) : 0,

  selectedLeadIndex: null,
  // selectedIndexValue: JSON.parse(localStorage.getItem('selectedIndexValue')) || null,
  selectedIndexValue: JSON.parse(localStorage.getItem('selectedIndexValue')),
  selectedNameValue: null
};

const userAuthSlice = createSlice({
  name: "user_auth",
  initialState: initialState,
  reducers: {
    setIndexValue: (state, action) => {
      state.selectedIndexValue = action.payload;
      // Save to local storage
      localStorage.setItem('selectedIndexValue',JSON.stringify(action.payload));
    },
    setIndexNameValue: (state, action) => {
      state.selectedNameValue = action.payload;
    },
    setIdleStatus(state, actions) {
      state.register_status = asyncStatus.IDLE;
    },
    setIdleOtpStatus(state, actions) {
      state.otp_status = asyncStatus.IDLE;
    },
    setIdleLoginStatus(state, actions) {
      state.login_status = asyncStatus.IDLE;
    },
    setIdleForgotOtpStatus(state, actions) {
      state.forgot_status = asyncStatus.IDLE;
    },
    setIdleResetOtpStatus(state, actions) {
      state.reset_otp_status = asyncStatus.IDLE;
    },
    setIdleResetPasswordStatus(state, actions) {
      state.reset_status = asyncStatus.IDLE;
    },
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
      localStorage.setItem("active_sidebar_index", action.payload.toString());
    },
    setUserAuth: (state, { payload }) => {
      state.check_auth_status = asyncStatus.SUCCEEDED;
      state.userAuth = payload;
    },
    setSelectedLeadIndex: (state, action) => {
      state.selectedLeadIndex = action.payload;
    },
    setFalseIndex: (state, action) => {
      state.selectedLeadIndex = null
    },
  },
  extraReducers: (builder) => {
    // ===================== Register Slice ==================== //

    builder.addCase(register_user_post_async.pending, (state, { payload }) => {
      state.register_status = asyncStatus.LOADING;
    });

    builder.addCase(
      register_user_post_async.fulfilled,
      (state, { payload }) => {
        localStorage.setItem(
          save_tokens_constant,
          JSON.stringify(payload.tokens.access_token)
        );
        state.register_status = asyncStatus.SUCCEEDED;
        state.userAuth = payload.success;
        state.register_data = payload.data;
        toast.success("Signup Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(register_user_post_async.rejected, (state, actions) => {
      state.register_status = asyncStatus.ERROR;
      state.userAuth = false;
      state.register_error_msg = actions.error.message;
      toast.error(actions.error.message, {
        position: "top-center",
      });
    });

    // ======================== >>>>>>>>>> Verify Otp

    builder.addCase(verify_otp_async.pending, (state, { payload }) => {
      state.otp_status = asyncStatus.LOADING;
    });

    builder.addCase(verify_otp_async.fulfilled, (state, { payload }) => {
      state.otp_status = asyncStatus.SUCCEEDED;
      state.otpVerified = true;
      state.userAuth = payload.success;
      state.otp_data = payload.data;
      toast.success("Verify Successfully", {
        position: "top-center",
      });
    });
    builder.addCase(verify_otp_async.rejected, (state, actions) => {
      state.otp_status = asyncStatus.ERROR;
      state.userAuth = true;

      toast.error(actions.error.message, {
        position: "top-center",
      });
    });



    // ======================== >>>>>>>>>> Login

    builder.addCase(login_user_post_async.pending, (state, { payload }) => {
      state.login_status = asyncStatus.LOADING;
    });

    builder.addCase(login_user_post_async.fulfilled, (state, { payload }) => {
      state.login_status = asyncStatus.SUCCEEDED;
      state.login_data = payload.data;
      localStorage.setItem(
        save_tokens_constant,
        JSON.stringify(payload.tokens.access_token)
      );
      // state.userAuth = true;
      state.user_data = payload.data;
      toast.success("Login Successfully", {
        position: "top-center",
      });
    });
    builder.addCase(login_user_post_async.rejected, (state, actions) => {
      state.login_status = asyncStatus.ERROR;
      // state.userAuth = false;

      toast.error(actions.error.message, {
        position: "top-center",
      });
    });
    // ======================== >>>>>>>>>> Check Auth

    // builder.addCase(check_auth_async.pending, (state, { payload }) => {
    //   state.check_auth_status = asyncStatus.LOADING;
    // });

    // builder.addCase(check_auth_async.fulfilled, (state, { payload }) => {
    //   state.check_auth_status = asyncStatus.SUCCEEDED;
    //   state.check_auth_data = payload.data;
    //   //  localStorage.getItem(
    //   //   save_tokens_constant,
    //   //   JSON.stringify(payload.tokens.access_token)
    //   // );
    //   localStorage.getItem(save_tokens_constant)
    //   state.userAuth = true;
    //   state.user_data = payload.data;
    // });
    // builder.addCase(check_auth_async.rejected, (state, actions) => {
    //   state.check_auth_status = asyncStatus.ERROR;
    //   state.check_auth_error = actions.error.message;
    //   state.userAuth = false;
    // });

    // ======================== >>>>>>>>>> forgot Password request

    builder.addCase(
      reset_password_request_otp_async.pending,
      (state, { payload }) => {
        state.forgot_status = asyncStatus.LOADING;
      }
    );

    builder.addCase(
      reset_password_request_otp_async.fulfilled,
      (state, { payload }) => {
        state.forgot_status = asyncStatus.SUCCEEDED;
        state.forgot_data = payload.data;
        toast.success("Send OTP Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(
      reset_password_request_otp_async.rejected,
      (state, actions) => {
        state.forgot_status = asyncStatus.ERROR;
        toast.error(actions.error.message, {
          position: "top-center",
        });
      }
    );
    // ======================== >>>>>>>>>> forgot Password OTP Verify

    builder.addCase(
      reset_password_verify_otp_async.pending,
      (state, { payload }) => {
        state.reset_otp_status = asyncStatus.LOADING;
      }
    );

    builder.addCase(
      reset_password_verify_otp_async.fulfilled,
      (state, { payload }) => {
        state.reset_otp_status = asyncStatus.SUCCEEDED;
        state.reset_otp_data = payload.data;
        toast.success("OTP Verify Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(
      reset_password_verify_otp_async.rejected,
      (state, actions) => {
        state.reset_otp_status = asyncStatus.ERROR;
        toast.error(actions.error.message, {
          position: "top-center",
        });
      }
    );
    // ======================== >>>>>>>>>> Reset Password

    builder.addCase(
      reset_password_create_password_async.pending,
      (state, { payload }) => {
        state.reset_status = asyncStatus.LOADING;
      }
    );

    builder.addCase(
      reset_password_create_password_async.fulfilled,
      (state, { payload }) => {
        state.reset_status = asyncStatus.SUCCEEDED;
        state.reset_data = payload.data;
        toast.success("Password Change Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(
      reset_password_create_password_async.rejected,
      (state, actions) => {
        state.reset_status = asyncStatus.ERROR;
        toast.error(actions.error.message, {
          position: "top-center",
        });
      }
    );
  },
});

export const {
  setIdleStatus,
  setIdleOtpStatus,
  setIdleLoginStatus,
  setIdleForgotOtpStatus,
  setIdleResetOtpStatus,
  setIdleResetPasswordStatus,
  setActiveIndex,
  setUserAuth,
  setSelectedLeadIndex,
  setIndexValue,
  setIndexNameValue,
  setFalseIndex
} = userAuthSlice.actions;

export const selectSelectedLeadIndex = (state) => state.leads.selectedLeadIndex;
export const selectActiveIndex = (state) => state.sidebar.activeIndex;
export default userAuthSlice.reducer;
