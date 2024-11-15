import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const Public_Routes = () => {
  const { userAuth, user_data, otpVerified, check_auth_status } = useSelector(
    (state) => state.authSlice
  );
  return !userAuth ? <Outlet /> : <Navigate to="/" />;
};
