import React from "react";
import "./main.css";
import useTheme from "../../../hooks/theme";
const Profile = () => {
  const theme = useTheme();
  return (
    <div
      className="screen_position_container"
      style={{ backgroundColor: theme.bg_color, color: theme.text_color }}
    >
      Profile
    </div>
  );
};

export default Profile;
