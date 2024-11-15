import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constants } from "../store/constants/constants.jsx";
import { apiHandle } from "../config/apiHandle/apiHandle.js";
 

// ... (rest of your code)


export const register_user_post_async = createAsyncThunk(
  type_constants.REGISTER_USER,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/register", post_data);
      const res_data = await response.data;

      return res_data;
    } catch (error) {
      console.log("error", { error });
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const verify_otp_async = createAsyncThunk(
  type_constants.VERIFY_OTP,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/verify-otp", post_data);
      const res_data = await response.data;

      return res_data;
    } catch (error) {
      console.log("error", error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const reset_password_verify_otp_async = createAsyncThunk(
  type_constants.VERIFY_OTP_RESET,
  async (post_data) => {
    const response = await apiHandle.post("/reset-password-otp-verify", post_data);
    
    
    const res_data = response.data;
    console.log("Response data:", res_data);
    console.log("Full response from the server:",res_data.success)
   
    if(res_data.success==true){

     
    }
    

    return res_data;
  }
);

// 
export const verify_otp_asynce = createAsyncThunk(
  type_constants.VERIFY_OTP,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/verify-otp", post_data);
      const res_data = await response.data;

      return res_data;
    } catch (error) {
      console.log("error", error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);

export const reset_password_verify_otp_asynce = createAsyncThunk(
  type_constants.VERIFY_OTP_RESET,
  async (post_data) => {
    const response = await apiHandle.post("/reset-password-otp-verifye", post_data);
    
    
    const res_data = response.data;
    console.log("Response data:", res_data);
    console.log("Full response from the server:",res_data.success)
   
    if(res_data.success==true){

     
    }
    

    return res_data;
  }
);

// 



// //

export const verify_otp_asyncv = createAsyncThunk(
  type_constants.VERIFY_OTP,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/verify-otp", post_data);
      const res_data = await response.data;

      return res_data;
    } catch (error) {
      console.log("error", error);
      if (error?.response?.data) {
        throw Error(error.response.data.message);
      } else {
        throw Error(error.message);
      }
    }
  }
);
// navigation("/resetPasswordv")

// export const reset_password_verify_otp_asyncv = createAsyncThunk(
//   type_constants.VERIFY_OTP_RESET,
//   async (post_data) => {
//     try {
//       const response = await apiHandle.post(
//         "/reset-password-otp-verifyv",
//         post_data
//       );
      
//       const res_data = await response.data;
//       console.log(res_data, "response otpptptptptpt");
//       return res_data;
   
//     } catch (error) {
//       console.log("error", error);
//       if (error?.response?.data) {
//         throw Error(error.response.data.message);
//       } else {
//         throw Error(error.message);
//       }
//     }
//   }
// );




// export const reset_password_verify_otp_asyncv = createAsyncThunk(
//   type_constants.VERIFY_OTP_RESET,
//   async (post_data) => {
     
//       const response = await apiHandle.post(
//         "/reset-password-otp-verifyv",
//         post_data
//       )
      
//       console.log(response, "full response from the server")

//       const res_data = await response.data
//       console.log(res_data, "response otpptptptptpt")
//       return res_data;
   
//     } 
// )



export const reset_password_verify_otp_asyncv = createAsyncThunk(
  type_constants.VERIFY_OTP_RESET,
  async (post_data) => {
    const response = await apiHandle.post("/reset-password-otp-verifyv", post_data);
    
    
    const res_data = response.data;
    console.log("Response data:", res_data);
    console.log("Full response from the server:",res_data.success)
   
    if(res_data.success==true){

     
    }
    

    return res_data;
  }
);



  



////











export const login_user_post_async = createAsyncThunk(
  type_constants.LOGIN_USER,
  async (post_data) => {
    try {
      const response = await apiHandle.post("/login", post_data);
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

// export const check_auth_async = createAsyncThunk(
//   type_constants.CHECK_AUTH,
//   async () => {
//     try {
//       const response = await apiHandle.get("/check-auth");
//       const res_data = await response.data;
//       return res_data;
//     } catch (error) {
//       console.log(error);
//       if (error?.response?.data) {
//         throw Error(error.response.data.message);
//       } else {
//         throw Error(error.message);
//       }
//     }
//   }
// );

export const reset_password_request_otp_async = createAsyncThunk(
  type_constants.FORGOT_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-req",
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

export const reset_password_create_password_async = createAsyncThunk(
  type_constants.RESET_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-create",
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













export const reset_password_request_otp_asyncv = createAsyncThunk(
  type_constants.FORGOT_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-reqv",
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

export const reset_password_create_password_asyncv = createAsyncThunk(
  type_constants.RESET_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-createv",
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












export const reset_password_request_otp_asynce = createAsyncThunk(
  type_constants.FORGOT_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-reqe",
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

export const reset_password_create_password_asynce = createAsyncThunk(
  type_constants.RESET_PASSWORD,
  async (post_data) => {
    try {
      const response = await apiHandle.post(
        "/reset-password-createe",
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
