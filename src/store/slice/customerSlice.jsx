import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../utils/async_status";
import { toast } from "react-toastify";
import {
  create_customer_async_service,
  create_customer_job_async_service,
  create_req_async_service,
  get_admin_complete_job_tracking_by_id,
  get_all_vendor_profile_async_service,
  get_customer_job_byId_async_service,
  get_customer_profile_async_service,
  get_customer_schedule_async_service,
  get_recent_vendors_chats_async_service,
  get_schedules_by_job_id_new,
  getpaidvendorschedule,
  login_customer_async_service,
  respond_to_customer_schedule_async_service,
} from "../../services/customerService";

const initialState = {
  customer_status: asyncStatus.IDLE,
  customer_data: null,
  customer_error: null,

  customer_login_status: asyncStatus.IDLE,
  customer_login_data: null,
  customer_login_error: null,

  customer_job_status: asyncStatus.IDLE,
  customer_job_data: null,
  customer_job_error: null,

  customer_profile_status: asyncStatus.IDLE,
  customer_profile_data: null,
  customer_profile_error: null,

  get_vendor_profile_status: asyncStatus.IDLE,
  get_vendor_profile_data: null,
  get_vendor_profile_error: null,

  get_job_byId_status: asyncStatus.IDLE,
  get_job_byId_data: null,
  get_job_byId_error: null,

  get_vendors_recent_chat_status: asyncStatus.IDLE,
  get_vendors_recent_chat_data: null,
  get_vendors_recent_chat_error: null,

  get_customer_schedule_status: asyncStatus.IDLE,
  get_customer_schedule_data: null,
  get_customer_schedule_error: null,

  res_vendor_schedule_status: asyncStatus.IDLE,
  res_vendor_schedule_data: null,
  res_vendor_schedule_error: null,

  create_req_status: asyncStatus.IDLE,
  create_req_data: null,
  create_req_error: null,

  getpaidvendorschedule_status: asyncStatus.IDLE,
  getpaidvendorschedule_data: null,
  getpaidvendorschedule_error: null,

  get_admin_complete_job_tracking_by_id_status: asyncStatus.IDLE,
  get_admin_complete_job_tracking_by_id_data: null,
  get_admin_complete_job_tracking_by_id_error: null,

  JobDetails: null,
  PendingVendors: null,
  QuoteVendors: null,
  customerDetails: null,
  jobReview: null,
  selectedVendorProfiles: null,
  selectedVendors: null,
  vendorsForJob: null,
  FinalVendor: null,


  getschedulesbyjobidstatus: asyncStatus.IDLE,
  getschedulesbyjobiddata: null,
  getschedulesbyjobiderror: null,




};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    setCustomerIdle(state, { payload }) {
      state.customer_status = asyncStatus.IDLE;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      create_customer_async_service.pending,
      (state, { payload }) => {
        state.customer_status = asyncStatus.LOADING;
        state.customer_data = null;
        state.customer_error = null;
      }
    );

    builder.addCase(
      create_customer_async_service.fulfilled,
      (state, { payload }) => {
        state.customer_status = asyncStatus.SUCCEEDED;
        state.customer_data = payload.data;
        state.customer_error = null;
        toast.success("SignUp Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(
      create_customer_async_service.rejected,
      (state, actions) => {
        state.customer_status = asyncStatus.ERROR;
        state.customer_data = null;
        state.customer_error = actions.error.message;
        toast.error(actions.error.message, {
          position: "top-center",
        });
      }
    );
    // =====================>>>> login Customer  ================= //
    builder.addCase(
      login_customer_async_service.pending,
      (state, { payload }) => {
        state.customer_login_status = asyncStatus.LOADING;
        state.customer_login_data = null;
        state.customer_login_error = null;
      }
    );

    builder.addCase(
      login_customer_async_service.fulfilled,
      (state, { payload }) => {
        state.customer_login_status = asyncStatus.SUCCEEDED;
        state.customer_login_data = payload.data;
        state.customer_login_error = null;
        toast.success("Login Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(login_customer_async_service.rejected, (state, actions) => {
      state.customer_login_status = asyncStatus.ERROR;
      state.customer_login_data = null;
      state.customer_login_error = actions.error.message;
      toast.error(actions.error.message, {
        position: "top-center",
      });
    });
    // =====================>>>> Create Customer Job ================= //
    builder.addCase(
      create_customer_job_async_service.pending,
      (state, { payload }) => {
        state.customer_job_status = asyncStatus.LOADING;
        state.customer_job_data = null;
        state.customer_job_error = null;
      }
    );

    builder.addCase(
      create_customer_job_async_service.fulfilled,
      (state, { payload }) => {
        state.customer_job_status = asyncStatus.SUCCEEDED;
        state.customer_job_data = payload.data;
        state.customer_job_error = null;
        toast.success("Create Successfully", {
          position: "top-center",
        });
      }
    );
    builder.addCase(
      create_customer_job_async_service.rejected,
      (state, actions) => {
        state.customer_job_status = asyncStatus.ERROR;
        state.customer_job_data = null;
        state.customer_job_error = actions.error.message;
        toast.error(actions.error.message, {
          position: "top-center",
        });
      }
    );

    // =====================>>>> Get Customer Profile ================= //
    builder.addCase(
      get_customer_profile_async_service.pending,
      (state, { payload }) => {
        state.customer_profile_status = asyncStatus.LOADING;
        state.customer_profile_data = null;
        state.customer_profile_error = null;
      }
    );

    builder.addCase(
      get_customer_profile_async_service.fulfilled,
      (state, { payload }) => {
        state.customer_profile_status = asyncStatus.SUCCEEDED;
        state.customer_profile_data = payload.data;
        state.customer_profile_error = null;
      }
    );
    builder.addCase(
      get_customer_profile_async_service.rejected,
      (state, actions) => {
        state.customer_profile_status = asyncStatus.ERROR;
        state.customer_profile_data = null;
        state.customer_profile_error = actions.error.message;
      }
    );
    // =====================>>>> Get Vendor Profile ================= //

    builder.addCase(
      get_all_vendor_profile_async_service.pending,
      (state, { payload }) => {
        state.get_vendor_profile_status = asyncStatus.LOADING;
        state.get_vendor_profile_data = null;
        state.get_vendor_profile_error = null;
      }
    );

    builder.addCase(
      get_all_vendor_profile_async_service.fulfilled,
      (state, { payload }) => {
        state.get_vendor_profile_status = asyncStatus.SUCCEEDED;
        state.get_vendor_profile_data = payload.data;
        state.get_vendor_profile_error = null;
      }
    );
    builder.addCase(
      get_all_vendor_profile_async_service.rejected,
      (state, actions) => {
        state.get_vendor_profile_status = asyncStatus.ERROR;
        state.get_vendor_profile_data = null;
        state.get_vendor_profile_error = actions.error.message;
      }
    );

    // =====================>>>> Get Customer Profile ================= //

    builder.addCase(
      get_customer_job_byId_async_service.pending,
      (state, { payload }) => {
        state.get_job_byId_status = asyncStatus.LOADING;
        state.get_job_byId_data = null;
        state.get_job_byId_error = null;
      }
    );

    builder.addCase(
      get_customer_job_byId_async_service.fulfilled,
      (state, { payload }) => {
        state.get_job_byId_status = asyncStatus.SUCCEEDED;
        state.get_job_byId_data = payload.data;
        state.get_job_byId_error = null;
      }
    );
    builder.addCase(
      get_customer_job_byId_async_service.rejected,
      (state, actions) => {
        state.get_job_byId_status = asyncStatus.ERROR;
        state.get_job_byId_data = null;
        state.get_job_byId_error = actions.error.message;
      }
    );

    // =====================>>>> Get Vendors Recent Chat Profile ================= //

    builder.addCase(
      get_recent_vendors_chats_async_service.pending,
      (state, { payload }) => {
        state.get_vendors_recent_chat_status = asyncStatus.LOADING;
        state.get_vendors_recent_chat_data = null;
        state.get_vendors_recent_chat_error = null;
      }
    );

    builder.addCase(
      get_recent_vendors_chats_async_service.fulfilled,
      (state, { payload }) => {
        state.get_vendors_recent_chat_status = asyncStatus.SUCCEEDED;
        state.get_vendors_recent_chat_data = payload.data;
        state.get_vendors_recent_chat_error = null;
      }
    );
    builder.addCase(
      get_recent_vendors_chats_async_service.rejected,
      (state, actions) => {
        state.get_vendors_recent_chat_status = asyncStatus.ERROR;
        state.get_vendors_recent_chat_data = null;
        state.get_vendors_recent_chat_error = actions.error.message;
      }
    );

    // =====================>>>> Get Customer Schedule ================= //

    builder.addCase(
      get_customer_schedule_async_service.pending,
      (state, { payload }) => {
        state.get_customer_schedule_status = asyncStatus.LOADING;
        state.get_customer_schedule_data = null;
        state.get_customer_schedule_error = null;
      }
    );

    builder.addCase(
      get_customer_schedule_async_service.fulfilled,
      (state, { payload }) => {
        state.get_customer_schedule_status = asyncStatus.SUCCEEDED;
        state.get_customer_schedule_data = payload.data;
        state.get_customer_schedule_error = null;
      }
    );
    builder.addCase(
      get_customer_schedule_async_service.rejected,
      (state, actions) => {
        state.get_customer_schedule_status = asyncStatus.ERROR;
        state.get_customer_schedule_data = null;
        state.get_customer_schedule_error = actions.error.message;
      }
    );

    // =====================>>>> Response Vendor Schedule ================= //

    builder.addCase(
      respond_to_customer_schedule_async_service.pending,
      (state, { payload }) => {
        state.res_vendor_schedule_status = asyncStatus.LOADING;
        state.res_vendor_schedule_data = null;
        state.res_vendor_schedule_error = null;
      }
    );

    builder.addCase(
      respond_to_customer_schedule_async_service.fulfilled,
      (state, { payload }) => {
        state.res_vendor_schedule_status = asyncStatus.SUCCEEDED;
        state.res_vendor_schedule_data = payload.data;
        state.res_vendor_schedule_error = null;
      }
    );
    builder.addCase(
      respond_to_customer_schedule_async_service.rejected,
      (state, actions) => {
        state.res_vendor_schedule_status = asyncStatus.ERROR;
        state.res_vendor_schedule_data = null;
        state.res_vendor_schedule_error = actions.error.message;
      }
    );
    // =====================>>>> Create Request Schedule ================= //

    builder.addCase(create_req_async_service.pending, (state, { payload }) => {
      state.create_req_status = asyncStatus.LOADING;
      state.create_req_data = null;
      state.create_req_error = null;
    });

    builder.addCase(
      create_req_async_service.fulfilled,
      (state, { payload }) => {
        state.create_req_status = asyncStatus.SUCCEEDED;
        state.create_req_data = payload.data;
        state.create_req_error = null;
      }
    );
    builder.addCase(create_req_async_service.rejected, (state, actions) => {
      state.create_req_status = asyncStatus.ERROR;
      state.create_req_data = null;
      state.create_req_error = actions.error.message;
    });

    // =====================>>>> Get Paid Vendor Schedule ================= //

    builder.addCase(getpaidvendorschedule.pending, (state, { payload }) => {
      state.getpaidvendorschedule_status = asyncStatus.LOADING;
      state.getpaidvendorschedule_data = null;
      state.getpaidvendorschedule_error = null;
    });

    builder.addCase(getpaidvendorschedule.fulfilled, (state, { payload }) => {
      state.getpaidvendorschedule_status = asyncStatus.SUCCEEDED;

      console.log(payload, "lllllllllllllllllllllllllllllll");

      state.getpaidvendorschedule_data = payload;
      state.getpaidvendorschedule_error = null;
    });
    builder.addCase(getpaidvendorschedule.rejected, (state, actions) => {
      state.getpaidvendorschedule_status = asyncStatus.ERROR;
      state.getpaidvendorschedule_data = null;
      state.getpaidvendorschedule_error = actions.error.message;
    });

    // =====================>>>> Get ADMIN FULL JOB TRACKING ================= //

    builder.addCase(
      get_admin_complete_job_tracking_by_id.pending,
      (state, { payload }) => {
        state.get_admin_complete_job_tracking_by_id_status =
          asyncStatus.LOADING;
        state.get_admin_complete_job_tracking_by_id_data = null;
        state.get_admin_complete_job_tracking_by_id_error = null;
      }
    );

    builder.addCase(
      get_admin_complete_job_tracking_by_id.fulfilled,
      (state, { payload }) => {
        state.get_admin_complete_job_tracking_by_id_status =
          asyncStatus.SUCCEEDED;

        console.log(payload, "lllllllllllllllllllllllllllllll");

        // Destructure the payload
        const {
          JobDetails,
          PendingVendors,
          QuoteVendors,
          customerDetails,
          jobReview,
          selectedVendorProfiles,
          selectedVendors,
          vendorsForJob,
          FinalVendor,
        } = payload;

        // Set individual pieces of state
        state.JobDetails = JobDetails;
        state.PendingVendors = PendingVendors;
        state.QuoteVendors = QuoteVendors;
        state.customerDetails = customerDetails;
        state.jobReview = jobReview;
        state.selectedVendorProfiles = selectedVendorProfiles;
        state.selectedVendors = selectedVendors;
        state.vendorsForJob = vendorsForJob;

        state.FinalVendor = FinalVendor;

        state.get_admin_complete_job_tracking_by_id_error = null;
      }
    );
    builder.addCase(
      get_admin_complete_job_tracking_by_id.rejected,
      (state, actions) => {
        state.get_admin_complete_job_tracking_by_id_status = asyncStatus.ERROR;
        state.get_admin_complete_job_tracking_by_id_data = null;
        state.state.get_admin_complete_job_tracking_by_id_error =
          actions.error.message;
      }
    );


    // new
    builder.addCase(get_schedules_by_job_id_new.pending, (state, { payload }) => {
      state.getschedulesbyjobidstatus = asyncStatus.LOADING;
      state.getschedulesbyjobiddata  = null;
      state.getschedulesbyjobiderror = null;
    });

    builder.addCase(get_schedules_by_job_id_new.fulfilled, (state, { payload }) => {
      state.getschedulesbyjobidstatus = asyncStatus.SUCCEEDED;

      console.log(payload, "lllllllllllllllllllllllllllllll");

      state.getschedulesbyjobiddata  = payload.Schedules;
      state.getschedulesbyjobiderror = null;
    });
    builder.addCase(get_schedules_by_job_id_new.rejected, (state, actions) => {
      state.getschedulesbyjobidstatus = asyncStatus.ERROR;
      state.getschedulesbyjobiddata  = null;
      state.getschedulesbyjobiderror = actions.error.message;
    });




    // 
  },
});

export const { setCustomerIdle } = customerSlice.actions;

export default customerSlice.reducer;
