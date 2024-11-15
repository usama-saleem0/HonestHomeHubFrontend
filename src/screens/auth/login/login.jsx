import React, { useEffect, useState } from "react";
import { main_color } from "../../../utils/color";
import { Container, Grid, Stack } from "@mui/material";
import "../auth.css";
import Input from "../../../component/input/Input";
import PasswordInput from "../../../component/input/PasswordInput";
import Btn from "../../../component/button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncStatus } from "../../../utils/async_status";
import { setIdleLoginStatus } from "../../../store/slice/AuthSlice";
import logo from '../../../assets/logo.png'
import { login_user_post_async } from "../../../services/authService";

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({});

  const { login_status, login_data, login_error } = useSelector(
    (state) => state.authSlice
  );

  const loginHandle = () => {
    dispatch(login_user_post_async(data));


  };

  useEffect(() => {
    if (login_status === asyncStatus.SUCCEEDED) {
      navigation('/landingpage');
      dispatch(setIdleLoginStatus(setIdleLoginStatus));
    }
  }, [, login_status]);

  return (
    <Stack
      sx={{
      }}
      className="main_container"
    >
      <Container maxWidth={"md"} sx={{ p: { md: 5, lg: 5, sm: 0, xs: 0 }, justifyContent: 'center', alignItems: 'center' }}>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} >
          <Grid md={12} lg={12} sm={12} xs={12} display={'contents'} >
            <Stack
              sx={{
                // backgroundColor: "#FFFFFF",
                p: { md: 5, lg: 5, sm: 2, xs: 2 },
                mt: { xs: 2 },
                mb: { xs: 1 },
                borderRadius: { md: "20px", lg: "20px", sm: "20px", xs: '20px' },
                width: { md: '50%', lg: '50%', sm: '70%', xs: '90%' }
              }}
              className="blur-container"
            >
              <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <img width={150} height={150} src={logo} />
              </Stack>
              <Stack className="title">Log In</Stack>
              <Stack mt={5}>
                <Grid container spacing={2}>
                  <Grid item md={12} lg={12} sm={12} xs={12}>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      label="Email address or Phone Number"
                    />
                  </Grid>

                  <Grid item md={12} lg={12} sm={12} xs={12}>
                    <PasswordInput
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                      label="Password"
                      // checkDetails={"Remember me"}
                      forgot_password="Forgot Password"
                      forgotClick={() => navigation("/forgotPassword")}
                    />
                  </Grid>
                  <Grid item md={12} lg={12} sm={12} xs={12} mt={5}>
                    <Btn
                      loading={login_status === asyncStatus.LOADING}
                      onClick={() => loginHandle()}
                      label={"Log in"}
                      style={{
                        padding: "10px",
                        backgroundColor: main_color,
                        borderRadius: "8px",
                        mt: 6,
                        width: '100%',
                        border: 'none',
                        outline: 'none',
                        color: 'white',
                        cursor: 'pointer'

                      }}
                    />
                  </Grid>
                </Grid>

                <Stack
                  sx={{
                    textAlign: "center",
                    mt: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <p> Dont have an account?</p>{" "}
                  <p
                    onClick={() => navigation("/signup")}
                    style={{ color: main_color, cursor: "pointer" }}
                  >
                    {" "}
                    Sign Up
                  </p>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Login;
