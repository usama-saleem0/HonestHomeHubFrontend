import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import "./RequestCard.css";
import Btn from "../button/Button";
import { main_color } from "../../utils/color";
import useTheme from "../../hooks/theme";
const RequestCardComp = () => {
  const theme = useTheme();

  return (
    <Stack flexDirection={"row"}>
      <Avatar
        alt="Remy Sharp"
        className="avatarr"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZOOwgZCtafWlGHkSlYjG278BQU7PEAQVvI1011y9&s"
        // src="https://pbs.twimg.com/media/F0ijTkHWYAM232V.jpg"
      />
      <Stack alignItems={"start"} ml={2}>
        <Typography
          textAlign={"start"}
          sx={{
            color: theme.text_color,
            fontSize: 13,
            fontWeight: 1000,
          }}
        >
          Brooke
        </Typography>
        <Typography
          textAlign={"start"}
          sx={{
            color: "#767676",
            fontSize: 10,
          }}
        >
          Chem Engineer, Programmer, Amazon research scientist
        </Typography>
        <Btn
          sx={{ padding: "5px", fontSize: 7, backgroundColor: "#676363" }}
          label={"Follow"}
        />
      </Stack>
    </Stack>
  );
};

export default RequestCardComp;
