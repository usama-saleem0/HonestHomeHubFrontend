import React from "react";
import { Button, Stack } from "@mui/material";
import "./button.css";
import useTheme from "../../hooks/theme";
import { vendor_color } from "../../utils/color";

function GigButton(props) {
  const {
    onClick,
    className,
    title,
    startIcon,
    style,
    icons,
    color,
    borderColor,
    padding,
  } = props;
  const theme = useTheme();

  return (
    <Stack
      onClick={onClick}
      sx={{
        border: `1px solid ${borderColor}`,
        p: 1,
        borderRadius: "5px",
        cursor: "pointer",
      }}
      flexDirection={"row"}
      alignItems={"center"}
    >
      <Stack>{startIcon}</Stack>
      <button
        style={{
          borderRadius: "10px",
          backgroundColor: "#0874B7",
          border: "none",
          outline: "none",
          color: color,
          fontSize: "15px",
          cursor: "pointer",
          padding: padding,
          ...style,
        }}
      >
        {title}
      </button>
    </Stack>
  );
}

export default GigButton;
