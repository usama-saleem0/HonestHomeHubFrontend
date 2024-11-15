import React, { useEffect } from "react";
import "./createpost.css";
import {
  Avatar,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import useTheme from "../../hooks/theme";
import person from "../../assets/personpng.png";
import CommunityCard from "../Community/CommunityCard";
import { useDispatch, useSelector } from "react-redux";
import { search_community_async } from "../../services/communityService";
import { asyncStatus } from "../../utils/async_status";
const DiscoverCommunity = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {
    search_community_status,
    search_community_error,
    search_community_data,
    search_community_query,
  } = useSelector((state) => state.community);
  const { userAuth, user_data } = useSelector((state) => state.authSlice);
  useEffect(() => {
    dispatch(
      search_community_async({
        search_community_query,
        userId: userAuth ? user_data?._id : "",
      })
    );
  }, []);
  // console.log("search_community_data", search_community_data);
  return (
    <div
      className="containerCard"
      style={{ backgroundColor: theme.card_bg_color }}
    >
      <Stack sx={{ fontSize: 22, color: theme.text_color, fontWeight: "bold" }}>
        {" "}
        Discover Community
      </Stack>
      <Stack sx={{ fontSize: 13, color: theme.text_color }}>
        Community you might like
      </Stack>
      {/* <Stack mt={2}> */}
      {search_community_status === asyncStatus.LOADING ||
      search_community_status === asyncStatus.IDLE ? (
        <Stack
          display={"flex"}
          my={10}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress sx={{ color: "#FE9316" }} />
        </Stack>
      ) : search_community_status === asyncStatus.ERROR ? (
        <Stack
          display={"flex"}
          my={10}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography fontSize={14} color={"red"}>
            {search_community_error}
          </Typography>
        </Stack>
      ) : (
        search_community_data?.map((e) => {
          const {
            community_image_url,
            followers,
            title,
            description,
            _id,
            joined,
          } = e;
          return (
            <CommunityCard
              title={title}
              id={_id}
              description={description}
              image_url={community_image_url}
              followers={followers}
              joined={joined}
            />
          );
        })
      )}
      {/* </Stack> */}
    </div>
  );
};

export default DiscoverCommunity;
