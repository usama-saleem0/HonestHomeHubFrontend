import React, { useState } from "react";
import {
  Stack,
  IconButton,
  InputAdornment,
  Typography,
  Checkbox,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./input.css"; // assuming you have your custom styles here
import { lable_color, main_color } from "../../utils/color";

function PasswordInput(props) {
  const {
    id,
    placeholder,
    label,
    onChange,
    required,
    className,
    width,
    style,
    name,
    key,
    spacingg,
    checkDetails,
    setIsCheckedhandle,
    forgotClick,
    forgot_password,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = (event) => {
  //   setIsChecked(event.target.checked);
  //   setIsCheckedhandle(event.target.checked);
  // };

  return (
    <Stack spacing={spacingg ? spacingg : 0.3}>
      <Stack flexDirection={"row"} alignItems={"center"}>
        <label
          htmlFor={id}
          style={{
            color: lable_color,
            display: "block",
            fontSize: "12px",
            width: "100%",
            fontWeight: 400,
          }}
        >
          {label}
        </label>
        <InputAdornment position="end">
          <IconButton
            edge="end"
            aria-label="toggle password visibility"
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <VisibilityOff sx={{ fontSize: 10, mt: 0.6 }} />
            ) : (
              <Visibility sx={{ fontSize: 10, mt: 0.6 }} />
            )}{" "}
            {showPassword ? (
              <label
                htmlFor={id}
                style={{
                  color: lable_color,
                  display: "block",
                  fontSize: 10,
                  width: "100%",
                  fontWeight: 400,
                }}
              >
                hide
              </label>
            ) : (
              <label
                htmlFor={id}
                style={{
                  color: lable_color,
                  display: "block",
                  fontSize: 10,
                  width: "100%",
                  fontWeight: 400,
                }}
              >
                show
              </label>
            )}
          </IconButton>
        </InputAdornment>
      </Stack>
      <input
        key={key}
        name={name}
        type={showPassword ? "text" : "password"}
        width={width}
        id={id}
        placeholder={placeholder}
        className="inputStyle"
        onChange={onChange}
        required={required}
        style={{ padding: "7px", borderRadius: "7px", backgroundColor: 'transparent', ...style }}
      />

      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <p
            color="textSecondary"
            style={{
              fontSize: 8,
              marginTop: -5,
              // marginBottom: 5,
              color: "#666666",
            }}
          >
            {/* Use 8 or more characters with a mix of letters, numbers & symbols */}
          </p>
        </Stack>
        <Stack
          sx={{
            color: main_color,
            fontSize: 10,
            textDecoration: "underline",
            cursor: "pointer",
            mt: -1
          }}
          onClick={forgotClick}
        >
          {forgot_password}
        </Stack>
      </Stack>
      {/* <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack >

        </Stack>
        
      </Stack> */}
    </Stack>
  );
}

export default PasswordInput;
