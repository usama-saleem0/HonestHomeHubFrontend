import React, { useEffect, useState } from "react";
import { main_color } from "../../../utils/color";
import { Container, Grid, Stack } from "@mui/material";
import "../auth.css";
import Btn from "../../../component/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../component/input/Input";
import { reset_password_request_otp_async, reset_password_request_otp_asynce } from "../../../services/authService";
import { asyncStatus } from "../../../utils/async_status";
import logo from '../../../assets/new/logo1.png'
const ForgotPassworde = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [data, setdata] = useState({});
  const { forgot_status, forgot_data, forgot_error } = useSelector(
    (state) => state.authSlice
  );
  // console.log("forgot_data", forgot_data);
  const verifyHandle = () => {
    dispatch(reset_password_request_otp_asynce(data));
    // navigation("/verifyOtpPassword");
  };
  useEffect(() => {
    if (forgot_status === asyncStatus.SUCCEEDED) {
      navigation("/verifyOtpPassworde");
    }
  }, [, forgot_status]);
//   return (
//     <Stack
//       sx={{
//         // backgroundColor: main_color,
//         height: { md: "130vh", lg: "130vh", sm: "110vh", xs: "110vh" },
//       }}
//       className="main_container"
//     >
//       <Container maxWidth={"md"} sx={{ p: { md: 5, lg: 5, sm: 0, xs: 0 }, justifyContent: 'center', alignItems: 'center' }}>
//         <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} >
//           <Grid md={12} lg={12} sm={12} xs={12} display={'contents'} >
//             <Stack
//               sx={{
//                 // backgroundColor: "#FFFFFF",
//                 p: { md: 5, lg: 5, sm: 2, xs: 2 },
//                 borderRadius: { md: "20px", lg: "20px", sm: "20px", xs: "20px" },
//                 mt: 2,
//                 width: { md: '50%', lg: '50%', sm: '60%', xs: '80%' },
//               }}
//               className="blur-container"
//             >
//               <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
//                 <img width={150} height={150} src={logo} />
//               </Stack>
//               <Stack className="title">Forgot password</Stack>
//               <Stack className="otp_sub" sx={{ color: "#686868", mt: 1, fontSize: 10 }}>
//                 The Verification Email will be sent to the mailbox. please check it
//                 !
//               </Stack>
//               <Stack mt={2}>
//                 <Grid container spacing={0}>
//                   <Grid item md={12} lg={12} sm={12} xs={12}>
//                     <Input
//                       onChange={(e) => setdata({ ...data, email: e.target.value })}
//                       label="Email"
//                       placeholder="Enter Email Address"
//                     />
//                   </Grid>
//                   <Grid item md={12} lg={12} sm={12} xs={12} mt={3}>
//                     <Btn
//                       // loading={forgot_status === asyncStatus.LOADING}
//                       onClick={() => verifyHandle()}
//                       label={"Send"}
//                       style={{
//                         padding: "10px",
//                         backgroundColor: main_color,
//                         borderRadius: "8px",
//                         mt: 6,
//                         width: '100%',
//                         border: 'none',
//                         outline: 'none',
//                         color: 'white',
//                         cursor: 'pointer'
//                       }}
//                     />
//                   </Grid>
//                 </Grid>
//               </Stack>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Container>
//     </Stack>
//   );
return (
    <Stack
      // sx={{
      //   height: { md: "100vh", lg: "130vh", sm: "100vh", xs: "100vh" },
      // }}
      className="main_container-my forgot"
    >
      <Container maxWidth={"md"} sx={{ p: { md: 5, lg: 5, sm: 0, xs: 0 }, justifyContent: 'center', alignItems: 'center' }}>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} >
          <Grid md={12} lg={12} sm={12} xs={12} display={'contents'} >
            <Stack
              sx={{
                // backgroundColor: "#FFFFFF",
                p: { md: 5, lg: 5, sm: 2, xs: 2 },
                borderRadius: { md: "20px", lg: "20px", sm: "20px", xs: "20px" },
                mt: 2,
                width: { md: '50%', lg: '50%', sm: '60%', xs: '80%' },
              }}
              className="blur-container"
            >
              <Stack  className="AT">
              <Stack className="atlogo" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <img   className="thala" width={150} height={150} src={logo} />
              </Stack>
              <Stack className="titleing">Forgot password</Stack>
              <Stack className="otp_sub" sx={{ color: "#686868", mt: 1, fontSize: 15 }}>
                The Verification Email will be sent to the mailbox. please check it
                !
              </Stack>
              <Stack mt={2}>
                <Grid container spacing={0}className="byg" >
                  <Grid item md={12} lg={12} sm={12} xs={12} className="by">
                <div className="form-group-1  new">
                <Input
                      onChange={(e) => setdata({ ...data, email: e.target.value })}
                      label="Email"
                      placeholder="Enter Email Address"
                    />
                </div>
                  </Grid>
                  <Grid  className="nazar" item md={12} lg={12} sm={12} xs={12} mt={3}>
                  <div className="btn-singup">
                  <Btn
                      // loading={forgot_status === asyncStatus.LOADING}
                      onClick={() => verifyHandle()}
                      label={"Send"}
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
export default ForgotPassworde;