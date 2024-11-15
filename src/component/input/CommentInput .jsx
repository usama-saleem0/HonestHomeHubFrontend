import React from "react";
import { Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./input.css"; // Assuming you have your custom styles here
import { main_color } from "../../utils/color";
import useTheme from "../../hooks/theme";

function CommentInput(props) {
  const { value, placeholder, id, onChange, className, style } = props;
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" spacing={1} width={"100%"}>
      <input
        type="text"
        id={id}
        placeholder={"Add a Comment"}
        className={`commentinputStyle `}
        value={value}
        onChange={onChange}
        style={{
          padding: "10px 10px",
          borderBottomLeftRadius: "7px",
          borderTopLeftRadius: "7px",
          backgroundColor: "#EDEDED",
          border: "none",
          outline: "none",
          width: "100%",
          ...style,
        }}
      />
      <Stack
        className="Comment_text"
        style={{
          backgroundColor: "#FE9316",
          padding: "10px 10px",
          color: "white",
          marginLeft: -10,
          cursor: "pointer",
          borderTopRightRadius: 7,
          borderBottomRightRadius: 7,
        }}
      >
        Comment
      </Stack>
    </Stack>
  );
}

export default CommentInput;
