import React, { useEffect, useState } from "react";
import { main_color } from "../../../utils/color";
import { Container, Grid, Stack } from "@mui/material";
import "../auth.css";
import Btn from "../../../component/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../component/input/Input";
import { toast } from "react-toastify";
import { reset_password_create_password_async } from "../../../services/authService";
import { asyncStatus } from "../../../utils/async_status";
import {
  setIdleForgotOtpStatus,
  setIdleResetOtpStatus,
  setIdleResetPasswordStatus,
} from "../../../store/slice/AuthSlice";
import logo from '../../../assets/new/2222.png'
const ResetPassword = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [data, setdata] = useState({});

  const { reset_status, reset_data, reset_error, reset_otp_data } = useSelector(
    (state) => state.authSlice
  );

  const verifyHandle = () => {
    let obj = {
      newPassword: null,
      confirmPassword: null,
      otp: reset_otp_data?.otp,
      email: reset_otp_data?.email,
    };

    const { newpassword, confirm_password } = data;

    if (confirm_password !== newpassword) {
      toast.error("Confirm Password & New Password Should be Same ", {
        position: "top-center",
      });
    } else if (confirm_password === newpassword) {
    obj.newPassword = newpassword;
    obj.confirmPassword = newpassword;
    dispatch(reset_password_create_password_async(obj));
    }

  };

  useEffect(() => {
    if (reset_status === asyncStatus.SUCCEEDED) {
      navigation("/");
      dispatch(setIdleForgotOtpStatus(setIdleForgotOtpStatus));
      dispatch(setIdleResetOtpStatus(setIdleResetOtpStatus));
      dispatch(setIdleResetPasswordStatus(setIdleResetPasswordStatus));
    }
  }, [, reset_status]);

  // return (
  //   <Stack
  //     sx={{
  //       // backgroundColor: main_color,
  //       height: { md: "130vh", lg: "130vh", sm: "110vh", xs: "110vh" },
  //     }}
  //     className="main_container"
  //   >
  //     <Container maxWidth={"md"} sx={{ p: { md: 5, lg: 5, sm: 0, xs: 0 }, justifyContent: 'center', alignItems: 'center' }}>
  //       <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} >
  //         <Grid md={12} lg={12} sm={12} xs={12} display={'contents'} >
  //           <Stack
  //             sx={{
  //               // backgroundColor: "#FFFFFF",
  //               p: { md: 5, lg: 5, sm: 2, xs: 2 },
  //               borderRadius: "20px",
  //               mt: 2,
  //               width: { md: '50%', lg: '50%', sm: '60%', xs: '80%' },
  //             }}
  //             className="blur-container"
  //           >

  //             <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
  //               <img width={150} height={150} src={logo} />
  //             </Stack>
  //             <Stack className="title">Reset Password</Stack>
  //             <Stack mt={2}>
  //               <Grid container spacing={2}>
  //                 <Grid item md={12} lg={12} sm={12} xs={12}>
  //                   <Input
  //                     onChange={(e) =>
  //                       setdata({ ...data, newpassword: e.target.value })
  //                     }
  //                     label="New Password"
  //                   />
  //                 </Grid>
  //                 <Grid item md={12} lg={12} sm={12} xs={12}>
  //                   <Input
  //                     onChange={(e) =>
  //                       setdata({ ...data, confirm_password: e.target.value })
  //                     }
  //                     label="Confirm Password"
  //                   />
  //                 </Grid>
  //                 <Grid item md={12} lg={12} sm={12} xs={12}>
  //                   <Btn
  //                     loading={reset_status === asyncStatus.LOADING}
  //                     onClick={() => verifyHandle()}
  //                     label={"Send"}
  //                     fullWidth={true}
  //                     style={{
  //                       padding: "10px",
  //                       backgroundColor: main_color,
  //                       borderRadius: "8px",
  //                       mt: 6,
  //                       width: '100%',
  //                       border: 'none',
  //                       outline: 'none',
  //                       color: 'white',
  //                       cursor: 'pointer'

  //                     }}
  //                   />
  //                 </Grid>
  //               </Grid>
  //             </Stack>
  //           </Stack>
  //         </Grid>
  //       </Grid>
  //     </Container>
  //   </Stack>
  // );

  return (
    <Stack
      sx={{
        // backgroundColor: main_color,
        height: { md: "100vh", lg: "100vh", sm: "110vh", xs: "110vh" },
      }}
      className="main_container forgot"
    >
      <Container maxWidth={"md"} sx={{ p: { md: 5, lg: 5, sm: 0, xs: 0 }, justifyContent: 'center', alignItems: 'center' }}>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} >
          <Grid md={12} lg={12} sm={12} xs={12} display={'contents'} >
           
            <Stack
              sx={{
                // backgroundColor: "#FFFFFF",
                p: { md: 5, lg: 5, sm: 2, xs: 2 },
                borderRadius: "20px",
                mt: 2,
                width: { md: '50%', lg: '50%', sm: '60%', xs: '80%' },
              }}
              className="blur-container"
            >

            <Stack className="AT">

            <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <img  className="thala" width={100} height={100} src={logo} />
              </Stack>
              <Stack className="titleing">Reset Password</Stack>
              <Stack mt={2}>
                <Grid container spacing={2}>
                  <Grid item md={12} lg={12} sm={12} xs={12}>
                    <Input
                      onChange={(e) =>
                        setdata({ ...data, newpassword: e.target.value })
                      }
                      label="New Password"
                    />
                  </Grid>
                  <Grid item md={12} lg={12} sm={12} xs={12}>
                    <Input
                      onChange={(e) =>
                        setdata({ ...data, confirm_password: e.target.value })
                      }
                      label="Confirm Password"
                    />
                  </Grid>
                  <Grid   className="nazar" item md={12} lg={12} sm={12} xs={12}>

                      <div className="random_forgot_otp">
                        
                    <Btn 
                      loading={reset_status === asyncStatus.LOADING}
                      onClick={() => verifyHandle()}
                      label={"Send"}
                      fullWidth={true}

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
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );


};

export default ResetPassword;
