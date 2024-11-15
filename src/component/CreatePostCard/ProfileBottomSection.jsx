import { Container, Grid, Stack, Divider } from "@mui/material";
import React, { useEffect } from "react";
import Slider from "../Slider/Slider";
import { MdLeaderboard } from "react-icons/md";
import CreateGigModal from "../Community/CommunityModal";
import { useSelector } from "react-redux";
import VendorScheduledProjectCard from "./VendorScheduledProjectCard";
import CustomerScheduledProjectCard from "./CustomerScheduledProjectCard ";
import Drawers from "../drawer/Drawer_Side_Content";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Helpful from "../header/dropdown";
import logout from "../../../src/assets/logout.png";
import { main_color } from "../../utils/color";
import Insuranceh from "../Insurance/Insuranceh";

const ProfileBottomSection = () => {
  const { selectedIndexValue } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogoutHandle = () => {
    localStorage.clear();
    handleClose();
    navigate("/");
    // window.location.reload();
    // window.location.href = 'https://honesthomehub.com/';
  };

  return (
    <div className="classname-439 ">
      <div className="profile_section classname-555">
        {/* <Container  > */}
        <Grid container className="by-bhai">
          <Grid
            item
            md={12}
            lg={9}
            sm={12}
            xs={12}
            style={{ paddingRight: "5px" }}
            className="classname-556"
          >
            <div className="classname-557">
              <div
                style={{ display: "flex", justifyContent: "end", gap: "10px" }}
                className="classname-558"
              >
                <Helpful />
                <img
                  src={logout}
                  className="setting-button"
                  style={{ width: "5%" }}
                  onClick={LogoutHandle}
                />
              </div>

              <div className="classname-559">
                {" "}
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    color: main_color,
                  }}
                  className="classname-560"
                >
                  SCHEDULED PROJECTS
                </div>
              </div>
              <Divider
                sx={{ borderWidth: 1, borderColor: "black" }}
                className="classname-535"
              />
              <Stack className="classname-562">
                {/* <Stack sx={{ color: '#000000', fontSize: { md: 16, lg: 16, sm: 10, xs: 8 } }}> ipsumLorem dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et </Stack>
                        <Stack sx={{ color: '#000000', fontSize: { md: 16, lg: 16, sm: 10, xs: 8 } }}>lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus, </Stack> */}

                {/* mywork */}
                <Stack
                  sx={{
                    color: "#000000",
                    fontSize: { md: 16, lg: 16, sm: 10, xs: 8 },
                  }}
                  className="classname-537"
                ></Stack>
                <Stack
                  sx={{
                    color: "#000000",
                    fontSize: { md: 16, lg: 16, sm: 10, xs: 8 },
                  }}
                  className="classname-538"
                ></Stack>

                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={0.5}
                  mt={0.9}
                  className="classname-539"
                >
                  {/* <Stack><MdLeaderboard color='#FB8500' /></Stack> */}
                  {/* <Stack sx={{ color: '#000000', fontSize: { md: 15, lg: 15, sm: 10, xs: 10 }, fontWeight: 'bold' }}>3034 Completions</Stack> */}
                  {/* <Stack><MdLeaderboard color='#FB8500' /></Stack> */}
                  {/* <Stack sx={{ color: '#000000', fontSize: { md: 15, lg: 15, sm: 10, xs: 10 }, fontWeight: 'bold' }}>3034 Completions</Stack> */}
                  {/* <Stack><MdLeaderboard color='#FB8500' /></Stack> */}
                  {/* <Stack sx={{ color: '#000000', fontSize: { md: 15, lg: 15, sm: 10, xs: 10 }, fontWeight: 'bold' }}>3034 Completions</Stack> */}
                </Stack>

                {selectedIndexValue == "Vendor" ? (
                  <VendorScheduledProjectCard />
                ) : selectedIndexValue == "Customer" ? (
                  <CustomerScheduledProjectCard />
                ) : null}

                <Stack
                  mt={1}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  className="classname-564"
                >
                  <Stack
                    sx={{
                      color: "#000000",
                      fontSize: { md: 40, lg: 40, sm: 30, xs: 17 },
                      fontWeight: 1000,
                      mt: 1,
                    }}
                    className="classname-565"
                  >
                    Profile
                  </Stack>
                  <div className="vendor--profile--btn--h">
                    <Insuranceh />
                    <CreateGigModal />
                  </div>
                </Stack>
                <Stack className="classname-543">
                  <Slider />
                </Stack>
              </Stack>
            </div>
          </Grid>

          <Grid
            item
            md={12}
            lg={3}
            sm={12}
            xs={12}
            className="classname-569"
            style={{ marginTop: "37px" }}
          >
            <Stack className="classname-545">
              <Stack
                style={{ background: "transparent" }}
                className="side_scroll_handle_for_scheduled classname-546"
                mt={2}
              >
                {/* {new Array(5).fill(" ").map((e) => ( */}

                <Stack mt={1} className="classname-547">
                  <Drawers />
                  {/* {selectedIndexValue == "Vendor" ? <VendorScheduledProjectCard /> : selectedIndexValue == "Customer" ? <CustomerScheduledProjectCard /> : null} */}
                </Stack>
                {/* ))} */}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        {/* </Container> */}
      </div>
    </div>
  );
};

export default ProfileBottomSection;
