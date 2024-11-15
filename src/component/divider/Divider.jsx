import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerCom({ content }) {
  return (
    <Root>
      <Divider>{content}</Divider>
    </Root>
  );
}
