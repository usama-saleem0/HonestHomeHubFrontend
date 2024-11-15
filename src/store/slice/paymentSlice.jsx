import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../utils/async_status";
import { edit_schedule_by_id_async, save_and_post_async } from "../../services/paymentService ";
import { toast } from "react-toastify";

const initialState = {
  payment_status: asyncStatus.IDLE,
  payment_data: null,
  payment_error: null,

  edit_status: asyncStatus.IDLE,
  edit_data: null,
  edit_error: null,


};

const paymentSlice = createSlice({
  name: "payment",
  initialState: initialState,
  reducers: {
    setPaymentIdleStatus(state, { payload }) {
      state.payment_status = asyncStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    // ======================== >>>>>>>>>> Get ALl posts

    builder.addCase(save_and_post_async.pending, (state, { payload }) => {
      state.payment_status = asyncStatus.LOADING;
      state.payment_data = null;
      state.payment_error = null;
    });

    builder.addCase(save_and_post_async.fulfilled, (state, { payload }) => {
      state.payment_status = asyncStatus.SUCCEEDED;
      state.payment_data = payload.data;
      state.payment_error = null;
      toast.success("Payment Successfully", {
        position: "top-center",
      });
    });
    builder.addCase(save_and_post_async.rejected, (state, actions) => {
      state.payment_status = asyncStatus.ERROR;
      state.payment_data = null;
      state.payment_error = actions.error.message;
    });

    // ======================== >>>>>>>>>> Get ALl posts

    builder.addCase(edit_schedule_by_id_async.pending, (state, { payload }) => {
      state.edit_status = asyncStatus.LOADING;
      state.edit_data = null;
      state.edit_error = null;
    });

    builder.addCase(edit_schedule_by_id_async.fulfilled, (state, { payload }) => {
      state.edit_status = asyncStatus.SUCCEEDED;
      state.edit_data = payload.data;
      state.edit_error = null;
    });
    builder.addCase(edit_schedule_by_id_async.rejected, (state, actions) => {
      state.edit_status = asyncStatus.ERROR;
      state.edit_data = null;
      state.edit_error = actions.error.message;
    });

  },
});

export const { setPaymentIdleStatus } = paymentSlice.actions;

export default paymentSlice.reducer;
