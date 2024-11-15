import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constants } from "../store/constants/constants";
import { apiHandle } from "../config/apiHandle/apiHandle";


export const create_vendor_async_service = createAsyncThunk(
    type_constants.CREATE_VENDOR,
    async (post_data) => {
        try {
            const response = await apiHandle.post(
                "/create-vendor",
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
export const login_vendor_async_service = createAsyncThunk(
    type_constants.LOGIN_VENDOR,
    async (post_data) => {
        try {
            const response = await apiHandle.post(
                "/login-vendor",
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


export const get_vendor_profile_by_id_async_service = createAsyncThunk(
    type_constants.GET_VENDOR_PROFILE,
    async (post_data) => {
        console.log('post_data', post_data);
        try {
            const response = await apiHandle.get(
                `/get-vendor-profile/${post_data}`,
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
export const get_matching_customer_async_service = createAsyncThunk(
    type_constants.GET_MATCHING_CUSTOMER,
    async (post_data) => {
        const storedUserId = localStorage.getItem('userId');
        const jsonString = localStorage.getItem('query');
        // const jsonZipCode = localStorage.getItem('userdetails');
        // const user_details = localStorage.getItem('userdetail');
        
// console.log(user_details , "hdjashfjfajlsf")

        const retrievedArray = JSON.parse(jsonString);
        try {
            const response = await apiHandle.post(
                "/get-matching-jobs",
                {  
                    //  ZipCode:jsonZipCode,
                    vendorId: storedUserId,
                    query: retrievedArray

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
export const create_customer_gig_async_service = createAsyncThunk(
    type_constants.CREATE_GIG,
    async (post_data) => {

        try {
            const response = await apiHandle.post(
                "/create-vendor-gig",
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
export const get_customer_gig_async_service = createAsyncThunk(
    type_constants.GET_GIG,
    async (post_data) => {
        // console.log('post_datapost_datapost_data', post_data);
        try {
            const response = await apiHandle.post(
                "/get-gig-by-id",
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








export const create_expert_gig_async_service1 = createAsyncThunk(
    type_constants.CREATE_GIG,
    async (post_data) => {

        try {
            const response = await apiHandle.post(
                "/create-expert-gig",
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
export const get_expert_gig_async_service1 = createAsyncThunk(
    type_constants.GET_GIG,
    async (post_data) => {
        // console.log('post_datapost_datapost_data', post_data);
        try {
            const response = await apiHandle.post(
                "/get-expert-gig-by-id",
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





export const get_recent_customer_chats_async_service = createAsyncThunk(
    type_constants.GET_RECENT_CUSTOMER_CHAT,
    async () => {
        const storedUserId = localStorage.getItem('userId');

        try {
            const response = await apiHandle.post(
                "/get-customers-recent-chat",
                {
                    current_vendor_id: storedUserId
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

export const create_schedule_async_service = createAsyncThunk(
    type_constants.CREATE_SCHEDULE,
    async (post_data) => {

        try {
            const response = await apiHandle.post(
                "/create-schedule",
                post_data
            );
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log(error);
            if (error?.response?.data) {
                throw Error("Create your Profile! ");
            } else {
                throw Error(error.message);
            }
        }
    }
);



export const create_payment_async_service = createAsyncThunk(
    type_constants.CREATE_PAYMENT,
    async (post_data) => {

        try {
            const response = await apiHandle.post(
                "/create-payment",
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

export const get_vendor_schedule_async_service = createAsyncThunk(
    type_constants.GET_VENDOR_SCHEDULE,
    async () => {

        const storedUserId = localStorage.getItem('userId');

        try {
            const response = await apiHandle.post(
                "/vendor-schedules",
                {
                    vendorId: storedUserId
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