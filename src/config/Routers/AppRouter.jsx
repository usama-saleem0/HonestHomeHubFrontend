import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { main_routes } from "../../utils/routelist";
import { useDispatch, useSelector } from "react-redux";
import Home from "../../screens/dashboard/dashboardScreens/Home";
import Dashboard from "../../screens/dashboard/Dashboard";
// import { check_auth_async } from "../../services/authService";
import { asyncStatus } from "../../utils/async_status";
import { save_tokens_constant } from "../../store/constants/constants";
import { setUserAuth } from "../../store/slice/AuthSlice";
import { LinearProgress, Stack, Typography } from "@mui/material";
import { Public_Routes } from "./PublicRoutes";
import { Private_Routes } from "./PrivateRoutes";
import { connectSocket } from "../../utils/socket_funcs";
import ScrolltotTop from "../../ScrolltoTop/ScrolltoTop";

const RouterApp = () => {
  const {
    userAuth,
    user_data,
    otpVerified,
    check_auth_error,
    check_auth_status,
  } = useSelector((state) => state.authSlice);
  // console.log("user_data", user_data);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const authTokens = localStorage.getItem(save_tokens_constant)
  //     ? JSON.parse(localStorage.getItem(save_tokens_constant))
  //     : null;

  //   if (check_auth_status === asyncStatus.IDLE) {
  //     if (authTokens) {
  //       dispatch(check_auth_async());
  //     } else {
  //       dispatch(setUserAuth(false));
  //     }
  //   }
  // }, []);

  // if (
  //   check_auth_status === asyncStatus.LOADING ||
  //   check_auth_status === asyncStatus.IDLE
  // ) {
  //   return <LinearProgress />;
  // }

  // if (check_auth_status === asyncStatus.ERROR) {
  //   return (
  //     <Stack>
  //       <Typography>{check_auth_error.message}</Typography>
  //     </Stack>
  //   );
  // }

  // if (check_auth_status === asyncStatus.SUCCEEDED) {
  useEffect(() => {
    connectSocket();
    //  console.log("run");
  }, []);

  return (
    <>
      <Router>
        <ScrolltotTop />
        <Routes>
          <Route element={<Public_Routes />}>
            {React.Children.toArray(
              main_routes.map((route) => {
                const { caption, linkTo, element, auth_required } = route;
                return (
                  !auth_required && <Route element={element} path={linkTo} />
                );
              })
            )}
          </Route>
          <Route element={<Private_Routes />}>
            {React.Children.toArray(
              main_routes.map((route) => {
                const { caption, linkTo, element, auth_required } = route;
                return (
                  auth_required && <Route element={element} path={linkTo} />
                );
              })
            )}
          </Route>

          {/* Initial Route (Home Page) */}
          {/* <Route
            path="/"
            element={
              userAuth && otpVerified ? (
                <Navigate to="/dashboard" />
              ) : (
                <Dashboard />
              )
            }
          /> */}

        </Routes>
      </Router>
    </>
  );
};
// };

export default RouterApp;
