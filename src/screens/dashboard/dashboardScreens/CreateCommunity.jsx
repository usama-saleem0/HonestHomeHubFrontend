import React from "react";
import "./main.css";
import useTheme from "../../../hooks/theme";
import { Container, Grid, Stack } from "@mui/material";
import HomeSideCard from "../../../component/homeSideCard/homeSideCard";
import CreateCommunityCard from "../../../component/CreatePostCard/CreateCommunityCard";
import DiscoverCommunity from "../../../component/CreatePostCard/DiscoverCommunity";
const CreateCommunity = () => {
  const theme = useTheme();
  return (
    <div
      className="screen_position_container"
      style={{ backgroundColor: theme.bg_color, color: theme.text_color }}
    >
      <Container>
        <Grid container mt={2} spacing={2}>
          <Grid item md={9} lg={9} sm={12} xs={12}>
            <CreateCommunityCard />
            <Stack mb={1} mt={2}>
              <DiscoverCommunity />
            </Stack>
          </Grid>
          <Grid
            item
            md={2}
            lg={2}
            sm={12}
            xs={12}
            sx={{
              display: { sm: "none", xs: "none", md: "block", lg: "block" },
            }}
          >
            <HomeSideCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CreateCommunity;
