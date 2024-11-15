import React, { useEffect, useState } from "react";
import { main_color } from "../../../utils/color";
import { Container, Grid, Stack } from "@mui/material";
import "../auth.css";
import Btn from "../../../component/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../component/input/Input";
import { reset_password_request_otp_async } from "../../../services/authService";
import { asyncStatus } from "../../../utils/async_status";
import logo from '../../../assets/new/2222.png'

const ForgotPassword = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  
  const [data, setdata] = useState({});

  const { forgot_status, forgot_data, forgot_error } = useSelector(
    (state) => state.authSlice
  );

  // console.log("forgot_data", forgot_data);
  const verifyHandle = () => {
    dispatch(reset_password_request_otp_async(data));
    // navigation("/verifyOtpPassword");
  };

  useEffect(() => {
    if (forgot_status === asyncStatus.SUCCEEDED) {
      navigation("/verifyOtpPassword");
    }
  }, [, forgot_status]);

  return (
    <Stack
      sx={{
        // backgroundColor: main_color,
        height: { md: "130vh", lg: "130vh", sm: "110vh", xs: "110vh" },

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
                borderRadius: { md: "20px", lg: "20px", sm: "20px", xs: "20px" },
                mt: 2,
                width: { md: '50%', lg: '50%', sm: '60%', xs: '80%' },
              }}
              className="blur-container"
            >
              <Stack  className="AT">
              <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <img   className="thala" width={150} height={150} src={logo} />
              </Stack>
              <Stack className="titleing">Forgot password</Stack>
              <Stack className="otp_sub" sx={{ color: "#686868", mt: 1, fontSize: 15 }}>
                The Verification Email will be sent to the mailbox. please check it
                !
              </Stack>

              <Stack mt={2}>
                <Grid container spacing={0}>
                  <Grid item md={12} lg={12} sm={12} xs={12}>
                    <Input
                      onChange={(e) => setdata({ ...data, email: e.target.value })}
                      label="Email"
                      placeholder="Enter Email Address"
                    />
                  </Grid>
                  <Grid  className="nazar" item md={12} lg={12} sm={12} xs={12} mt={3}>
                    <Btn
                      // loading={forgot_status === asyncStatus.LOADING}
                      onClick={() => verifyHandle()}
                      label={"Send"}

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

export default ForgotPassword;
