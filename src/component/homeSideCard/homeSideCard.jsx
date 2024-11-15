import React from "react";
import "./homeSide.css";
import { Avatar, Stack, Typography } from "@mui/material";
import RequestCardComp from "../RequestCard/RequestCardComp";
import useTheme from "../../hooks/theme";
const HomeSideCard = () => {
  const theme = useTheme();
  return (
    <div
      className="container_side_bar"
      style={{ backgroundColor: theme.card_bg_color, position: "fixed" }}
    >
      <Stack flexDirection={"row"} justifyContent={"start"} mb={2}>
        <Typography
          variant="p"
          className="add_feed"
          sx={{ color: theme.text_color }}
        >
          Add to your feed
        </Typography>
      </Stack>
      <Stack gap={2}>
        {new Array(5).fill(" ").map((e) => (
          <RequestCardComp />
        ))}
      </Stack>
    </div>
  );
};

export default HomeSideCard;
