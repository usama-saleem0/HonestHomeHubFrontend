import React, { useEffect } from "react";
import "./main.css";
import { Container, Grid, Stack } from "@mui/material";
// import CreatePostCard from "../../../component/CreatePostCard/ProfileCard";
import HomeSideCard from "../../../component/homeSideCard/homeSideCard";
import Post from "../../../component/post/Post";
import { RxCross1 } from "react-icons/rx";
import useTheme from "../../../hooks/theme";
import { useDispatch, useSelector } from "react-redux";
import { search_post_async } from "../../../services/newsFeedService";

const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { search_post_status, search_post_data, search_post_error } =
    useSelector((state) => state.newsFeed);
  const { userAuth, user_data } = useSelector((state) => state.authSlice);
  useEffect(() => {
    dispatch(
      search_post_async({
        user_id: userAuth ? user_data._id : "",
        query: "",
        page: "1",
        postPerPage: "5",
      })
    );
  }, []);
  console.log("aaaaaaaa", search_post_data);
  return (
    <div
      className="screen_position_container"
      style={{ backgroundColor: theme.bg_color }}
    >
      <Container>
        <Grid container mt={2} spacing={2}>
          <Grid item md={9} lg={9} sm={12} xs={12}>
            {/* <CreatePostCard /> */}
            <Stack mb={1}>
              {search_post_data?.map((e) => {
                return (
                  <Post
                    data={e}
                    sideicon={<RxCross1 color={theme.text_color} />}
                  />
                );
              })}
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

export default Home;
