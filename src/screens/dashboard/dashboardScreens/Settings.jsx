import React from "react";
import "./main.css";
import useTheme from "../../../hooks/theme";
const Settings = () => {
  const theme = useTheme();
  return (
    <div
      className="screen_position_container"
    >
      Settings
    </div>
  );
};

export default Settings;
