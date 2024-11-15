import React, { useEffect, useState } from "react";
import { main_color } from "../../../utils/color";
import { Container, Grid, Stack } from "@mui/material";
import "../auth.css";
import Btn from "../../../component/button/Button";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import {
   
  reset_password_verify_otp_async,reset_password_verify_otp_asynce,
} from "../../../services/authService";
import { asyncStatus } from "../../../utils/async_status";
import { hideEmailMethod } from "../../../utils/common/hide_email";
import logo from '../../../assets/new/2222.png'

const VerifyOtpPassworde = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { reset_otp_status, forgot_data } = useSelector(
    (state) => state.authSlice
  );

  const [otp, setOtp] = useState();
  console.log(forgot_data);

  // const verifyHandle = () => {
  //   navigation("/resetPassworde")
  //   dispatch(
  //     reset_password_verify_otp_asynce({
  //       email: forgot_data,
  //       otp: otp,
  //     })
  //   );
  // };




  const verifyHandle = async () => {
    try {
      const result = await dispatch(
        reset_password_verify_otp_asynce({
          email: forgot_data,
          otp: otp,
        })
      );
  
      // Assuming reset_password_verify_otp_asyncv returns { success: true } upon success
      if (result.payload && result.payload.success) {
        // Navigate to /resetPasswordv
        navigation("/resetPassworde");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  // useEffect(() => {
  //   if (reset_otp_status === asyncStatus.SUCCEEDED) {
  //     navigation("/resetPassword");
  //   }
  // }, [, reset_otp_status]);

  // return (
  //   <Stack
  //     sx={{
  //       // backgroundColor: main_color,
  //       height: { md: "130vh", lg: "130vh", sm: "110vh", xs: "110vh" },
  //     }}
  //     className="main_container"
  //   >
  //     <Container maxWidth={"sm"} sx={{ p: { md: 5, lg: 5, sm: 2, xs: 2 } }}>
  //       <Stack
  //         sx={{
  //           // backgroundColor: "#FFFFFF",
  //           p: { md: 5, lg: 5, sm: 2, xs: 2 },
  //           borderRadius: {md:"20px",lg:"20px",sm:"20px",xs:"20px"},
  //           mt: 2,
  //         }}
  //         className="blur-container"

  //       >
  //         <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
  //         <img width={150} height={150} src={logo} />
  //         </Stack>
  //         <Stack className="title">OTP Verification</Stack>
  //         <Stack
  //           flexDirection={"row"}
  //           alignItems={"center"}
  //           // textAlign={"center"}
  //           // justifyContent={"center"}
  //         >
  //           <Stack sx={{ color: "#686868",textAlign:'start',fontSize:10 }}>
  //             Enter the OTP you received at 
  //           </Stack>
  //           <Stack
  //             className="otp_sub"
  //             sx={{ color: "black", ml: 0.3, fontWeight: "bold", color: "#686868",textAlign:'start',fontSize:10 }}
  //           >
  //             {forgot_data}
  //           </Stack>
  //         </Stack>
  //         <Stack mt={2}>
  //           <Grid container spacing={0}>
  //             <Grid item md={12} lg={12} sm={12} xs={12}>
  //               <Stack alignItems={"center"}>
  //                 <OtpInput
  //                   isInputNum={true}
  //                   value={otp}
  //                   inputStyle={"otp"}
  //                   onChange={(e) => setOtp(e)}
  //                   numInputs={4}
  //                   renderSeparator={<span>&nbsp; &nbsp;</span>}
  //                   renderInput={(props) => <input {...props} />}
  //                 />
  //               </Stack>
  //             </Grid>
  //             <Grid item md={12} lg={12} sm={12} xs={12} mt={4}>
  //               <Btn
  //                 // loading={reset_otp_status === asyncStatus.LOADING}
  //                 onClick={() => verifyHandle()}
  //                 label={"Verify"}
  //                 // fullWidth={true}
  //                 style={{
  //                   padding: "10px",
  //                   backgroundColor: main_color,
  //                   borderRadius: "8px",
  //                   mt: 6,
  //                   width: '100%',
  //                   border: 'none',
  //                   outline: 'none',
  //                   color: 'white',
  //                   cursor: 'pointer'

  //                 }}
  //               />
  //             </Grid>
  //           </Grid>
  //         </Stack>
  //       </Stack>
  //     </Container>
  //   </Stack>
  // );




  return (
    <Stack
      sx={{
        // backgroundColor: main_color,
        height: { md: "130vh", lg: "130vh", sm: "110vh", xs: "110vh" },
      }}
      className="main_container forgot"
    >
      <Container maxWidth={"sm"} sx={{ p: { md: 5, lg: 5, sm: 2, xs: 2 } }} className="forgot_container">
        <Stack
          sx={{
            // backgroundColor: "#FFFFFF",
            p: { md: 5, lg: 5, sm: 2, xs: 2 },
            borderRadius: {md:"20px",lg:"20px",sm:"20px",xs:"20px"},
            mt: 2,
          }}
          className="blur-container"

        >
         <Stack className="ATing">
         <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <img className="thala" width={150} height={150} src={logo} />
          </Stack>
          <Stack className="titleing">OTP Verification</Stack>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            // textAlign={"center"}
            // justifyContent={"center"}
          >
            <Stack sx={{ color: "#686868",textAlign:'start',fontSize:15 }}>
              Enter the OTP you received at: {forgot_data} 
            </Stack>
            {/* <Stack
              className="otp_sub"
              sx={{ color: "black", ml: 0.3, fontWeight: "bold", color: "#686868",textAlign:'start',fontSize:10 }}
            >
              {forgot_data}
            </Stack> */}
          </Stack>
          <Stack mt={2}>
            <Grid container spacing={0}>
              <Grid item md={12} lg={12} sm={12} xs={12}>
                <Stack alignItems={"center"}>
                  <OtpInput
                    isInputNum={true}
                    value={otp}
                    inputStyle={"otp"}
                    onChange={(e) => setOtp(e)}
                    numInputs={4}
                    renderSeparator={<span>&nbsp; &nbsp;</span>}
                    renderInput={(props) => <input {...props} />}
                  />
                </Stack>
              </Grid>
              <Grid  className="nazar" item md={12} lg={12} sm={12} xs={12} mt={4}>
               
               
               <div className="random_forgot_otp">
               <Btn
                  // loading={reset_otp_status === asyncStatus.LOADING}
                  onClick={() => verifyHandle()}
                  label={"Verify"}
                  // fullWidth={true}
                  style={{
                        
                        
                    backgroundColor:'#1AC1F3',
                    height:'50px',
                    width:'100px',
                    borderRadius:'10px',
                    color:'white',
                    fontWeight:'400',
                    border:'1px solid #1AC1F3'

                
                
                
                
                }}
                 
                 
                />
               </div>
               
                
              </Grid>
            </Grid>
          </Stack>
         </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default VerifyOtpPassworde;
