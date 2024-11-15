import React from "react";
import "./main.css";
import { Container, Grid, Stack } from "@mui/material";
import Post from "../../../component/post/Post";
import { BsFillBookmarkFill } from "react-icons/bs";
import { main_color } from "../../../utils/color";
import useTheme from "../../../hooks/theme";
const Bookmarks = () => {
  const theme = useTheme();
  return (
    <div
      className="screen_position_container"
      style={{ backgroundColor: theme.bg_color }}
    >
      <Container>
        <Grid container mt={2} spacing={2}>
          <Grid item md={9} lg={9} sm={12} xs={12}>
            <Stack>
              {new Array(2).fill(" ").map((e) => (
                <Post
                  sideicon={<BsFillBookmarkFill color={main_color} size={25} />}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Bookmarks;
