import React from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import { Stack } from "@mui/material";
import { sideBarData } from "../../utils/routelist";
import Dashboard_Screen from "../../screens/dashboard/dashboardScreens/Dashboard";

const Template_Side_Drawer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "white", color: "black" }}
        className="body"
      >
        <div
          style={{
            backgroundColor: "white",
            color: "black",
          
          }}
        >
          <div
            style={{ backgroundColor: "white", color: "black" }}
            className="contrastbg"
          >
            <Routes>
              {React.Children.toArray(
                sideBarData.map((e, i) => {
                  <Route key={i} path={"/"} element={<Dashboard_Screen />} />;
                })
              )}
            </Routes>
            <Stack sx={{}}>
              <Routes>
                {React.Children.toArray(
                  sideBarData.map((e, i) => {
                    return (
                      <Route key={i} path={e.linkTo} element={e.element} />
                    );
                  })
                )}
              </Routes>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template_Side_Drawer;
