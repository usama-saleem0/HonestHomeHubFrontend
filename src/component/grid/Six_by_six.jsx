import { Grid } from "@mui/material";
import React from "react";

const Six_by_six = (props) => {
  const {
    first_section,
    second_section,
    main_style,
    first_style,
    second_style,
  } = props;

  return (
    <Grid  container style={main_style} alignItems={"center"}  p={5} spacing={3}>
      <Grid
        // sx={{  }}
        sx={first_style}
        item
        md={6}
        sm={12}
        lg={6}
        xs={12}
      >
        {first_section}
      </Grid>
      <Grid sx={second_style} item md={6} sm={12} lg={6} xs={12}>
        {second_section}
      </Grid>
    </Grid>
  );
};

export default Six_by_six;
