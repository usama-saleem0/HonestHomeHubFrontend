import { Container, Grid, Stack, colors } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const LandingThirdh = () => {
  const navigation = useNavigate();

  const NavigateLogin = () => {
    navigation("/mainsection");
  };
  const NavigateSignUp = () => {
    navigation("/mainSectiontwo");
  };
  return (
    <Stack className="honest-11111">
      <Container className="sec1 main-container honest-50">
        {/* <Stack sx={{ height: { md: "100vh", lg: '100vh', xl: "100vh", sm: '100vh', xs: '80vh' } }} ></Stack> */}
        <div className="padding_container honest-51">
          <div className="landing-bottom-card-cont">
            <div className="landing-bottom-card">
              <h3 className="honest-57">
                No More Getting Ripped Off On Home Services
              </h3>
              <p className="hero_subtitle honest-58">
                We connect you with three quotes and store them in an easily
                manageable way.
              </p>
            </div>
            <div className="landing-bottom-card">
              <h3 className="honest-59">
                Feel Comfortable During Your Home Service
              </h3>
              <p className="hero_subtitle honest-60">
                Each vendor has a profile page with a selfie and
                history/interests to make you feel more comfortable during the
                home service.
              </p>
            </div>

            <div className="landing-bottom-card">
              <h3 className="honest-61">
                Be Completely Hands Off With An Expert
              </h3>
              <p className="hero_subtitle honest-62">
                Post a job and sit back with the help of an expert to decide
                between quotes.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Stack>
  );
};

export default LandingThirdh;
