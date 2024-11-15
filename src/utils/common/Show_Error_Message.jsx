import React from "react";
import { Stack, SvgIcon, Typography } from "@mui/material";
import { BsExclamationCircle } from "react-icons/bs";
import { error_color_palette } from "../color";

export const Show_Error_Message = ({ message, style }) => {
  return (
    <>
      {message ? (
        <Stack
          spacing={1.2}
          alignItems="center"
          direction="row"
          sx={{
            border: `1px solid ${error_color_palette.border_color}`,
            backgroundColor: error_color_palette.bg_color,
            py: "15px",
            px: "10px",
            borderRadius: "5px",
            ...style,
          }}
        >
          <SvgIcon>
            <BsExclamationCircle
              size={21}
              color={error_color_palette.text_color}
            />
          </SvgIcon>
          <Typography color={error_color_palette.text_color}>
            {message}
          </Typography>
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
};
