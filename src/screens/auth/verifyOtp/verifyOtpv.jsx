import React, { useEffect, useState } from "react";
import { main_color } from "../../../utils/color";
import { Container, Grid, Stack } from "@mui/material";
import "../auth.css";
import Btn from "../../../component/button/Button";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import {
  resend_otp_async,
  verify_otp_async,
} from "../../../services/authService";
import { setIdleOtpStatus } from "../../../store/slice/AuthSlice";
import { asyncStatus } from "../../../utils/async_status";
import { toast } from "react-toastify";
const VerifyOtpv = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const {
    otp_status,
    otp_data,
    otp_error,
    resend_otp_status,
    resend_otp_data,
    resend_otp_error,
  } = useSelector((state) => state.authSlice);

  const [otp, setOtp] = useState();
  console.log(otp_status, otp_data, otp_error);
  const verifyHandle = () => {
    dispatch(verify_otp_async({ otp_code: otp }));
  };

  const resendOtpHandle = () => {
    dispatch(resend_otp_async());
  };

  useEffect(() => {
    if (otp_status === asyncStatus.SUCCEEDED) {
      navigation("/dashboard");
      dispatch(setIdleOtpStatus(setIdleOtpStatus));
    }
  }, [, otp_status]);

  return (
    <Stack
      sx={{
        backgroundColor: main_color,
        height: { md: "130vh", lg: "130vh", sm: "110vh", xs: "110vh" },
      }}
    >
      <Container maxWidth={"sm"} sx={{ p: { md: 5, lg: 5, sm: 0, xs: 0 } }}>
        <Stack
          sx={{
            backgroundColor: "#FFFFFF",
            p: { md: 5, lg: 5, sm: 2, xs: 2 },
            borderRadius: "20px",
            mt: 2,
          }}
        >
          <Stack className="title" sx={{ justifyContent: 'center', alignItems: 'center' }}>Logo</Stack>
          <Stack className="title">OTP Verification</Stack>

          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            textAlign={"center"}
            justifyContent={"center"}
          >
            <Stack className="otp_sub" sx={{ color: "#686868" }}>
              Enter the OTP you received at
            </Stack>
            <Stack
              className="otp_sub"
              sx={{ color: "black", ml: 0.3, fontWeight: "bold" }}
            >
              jo*****@gmail.com
            </Stack>
          </Stack>
          <Stack mt={10}>
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
                <Stack
                  onClick={resendOtpHandle}
                  sx={{
                    color: "#0D4587",
                    textDecoration: "underline",
                    cursor: "pointer",
                    mr: 8,
                    mt: 0.5,
                  }}
                  alignItems={"flex-end"}
                >
                  Resend OTP
                </Stack>
              </Grid>
              <Grid item md={12} lg={12} sm={12} xs={12}>
                <Btn
                  loading={otp_status === asyncStatus.LOADING}
                  onClick={() => verifyHandle()}
                  label={"Verify"}
                  fullWidth={true}
                  sx={{
                    p: 1,
                    backgroundColor: "#0D4587",
                    borderRadius: "8px",
                    mt: 20,
                  }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default VerifyOtpv;
