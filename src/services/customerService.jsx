import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constants } from "../store/constants/constants";
import { apiHandle } from "../config/apiHandle/apiHandle";


export const create_customer_async_service = createAsyncThunk(
    type_constants.CREATE_CUSTOMER,
    async (post_data) => {
        try {
            const response = await apiHandle.post(
                "/create-customer",
                post_data
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);
export const login_customer_async_service = createAsyncThunk(
    type_constants.LOGIN_CUSTOMER,
    async (post_data) => {
        try {
            const response = await apiHandle.post(
                "/login-customer",
                post_data
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);
export const create_customer_job_async_service = createAsyncThunk(
    type_constants.CREATE_CUSTOMER_JOB,
    async (post_data) => {
        console.log(post_data,"TS API_GTI");
        try {
            const response = await apiHandle.post(
                "/create-customer-job",
                post_data
                
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);
export const get_customer_profile_async_service = createAsyncThunk(
    type_constants.GET_CUSTOMER_PROFILE,
    async (post_data) => {
        try {
            const response = await apiHandle.get(
                `/get-customer-profile/${post_data}`,
                post_data
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);
export const get_all_vendor_profile_async_service = createAsyncThunk(
    type_constants.GET_ALL_VENDOR_PROFILE,
    async (post_data) => {
        console.log(post_data);
        const storedUserId = localStorage.getItem('userId');
        try {
            const response = await apiHandle.post(
                "/get-all-matching-vendors",
                {
                    customerId: storedUserId
                }
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);
export const get_customer_job_byId_async_service = createAsyncThunk(
    type_constants.GET_CUSTOMER_JOB_BY_ID,
    async () => {
        const storedUserId = localStorage.getItem('userId');

        try {
            const response = await apiHandle.post(
                "/get-customer-job-by-id",
                {
                    user_id: storedUserId
                }
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);
export const get_recent_vendors_chats_async_service = createAsyncThunk(
    type_constants.GET_RECENT_VENDORS_CHAT,
    async () => {
        const storedUserId = localStorage.getItem('userId');

        try {
            const response = await apiHandle.post(
                "/get-vendors-recent-chat",
                {
                    current_customer_id: storedUserId
                }
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);


export const get_recent_vendors_chats_async_services = createAsyncThunk(
    type_constants.GET_RECENT_VENDORS_CHAT,
    async (currentCustomerId) => {
        const storedUserId = localStorage.getItem('userId');

        try {
            const response = await apiHandle.post(
                "/get-vendors-recent-chat",
                {
                    current_customer_id: currentCustomerId
                }
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);




export const get_customer_schedule_async_service = createAsyncThunk(
    type_constants.GET_CUSTOMER_SCHEDULE,
    async () => {

        const storedUserId = localStorage.getItem('userId');

        try {
            const response = await apiHandle.post(
                "/customer-schedules",
                {
                    customerId: storedUserId
                }
            );
            const res_data = await response.data;
            // console.log("res_data",res_data);
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);
export const respond_to_customer_schedule_async_service = createAsyncThunk(
    type_constants.RESPONSE_TO_VENDOR_SCHEDULE,
    async (post_data) => {
        try {
            const response = await apiHandle.post(
                "/respond-to-schedule",
                post_data
            );
            const res_data = await response.data;
            // console.log("res_data",res_data);
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);
export const create_req_async_service = createAsyncThunk(
    type_constants.CREATE_REQUEST,
    async (post_data) => {
        try {
            const response = await apiHandle.post(
                "/create-req",
                post_data,
                console.log(post_data,"9999999999999999999999999999999999999999")
            );
            const res_data = await response.data;
            // console.log("res_data",res_data);
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);


// ts


export const getpaidvendorschedule = createAsyncThunk(
    type_constants.getpaidvendorschedule,
    async (id) => {

        console.log(id,"GETPAID VENDOR")
         

        try {
            const response = await apiHandle.get(
                `/getpaidvendorschedule/${id}`
            );
           
            const { PaidSchedule } = response.data; // Destructure the PaidSchedule
            console.log("res_datats", PaidSchedule);
            return PaidSchedule;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);











export const get_admin_complete_job_tracking_by_id = createAsyncThunk(
    'get_admin_complete_job_tracking_by_id',
    async (id) => {

        console.log(id,"GETPAID VENDOR")
         

        try {
            const response = await apiHandle.get(
                `/get_vendor_customer_job_details/${id}`
            );
           
          response.data; // Destructure the PaidSchedule
            console.log("res_datats",  response.data);
            return  response.data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);







export const get_schedules_by_job_id_new = createAsyncThunk(
    'get_schedules_by_job_id_new',
    async (post_data) => {
        try {
            const response = await apiHandle.get(
                `/getschedulesbyjobid/${post_data}`,
                post_data
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);