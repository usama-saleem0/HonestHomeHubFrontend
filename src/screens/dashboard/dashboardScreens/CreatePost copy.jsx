import React from "react";
import "./main.css";
import useTheme from "../../../hooks/theme";
const CreatePost = () => {
  const theme = useTheme();
  return (
    <div
      className="screen_position_container"
      style={{ backgroundColor: theme.bg_color, color: theme.text_color }}
    >
      {" "}
      CreatePost
    </div>
  );
};

export default CreatePost;
