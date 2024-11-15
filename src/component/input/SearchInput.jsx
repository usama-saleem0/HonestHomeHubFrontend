import React from "react";
import { Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./input.css";
import useTheme from "../../hooks/theme";

function SearchInput(props) {
  const { value, placeholder, id, onChange, className, style, iconClick } =
    props;
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" sx={{ borderRadius: '5px', border: '1px solid black', width: { md: '40%', lg: '40%', sm: '50%', xs: '80%' } }}  >
      <SearchIcon

        onClick={iconClick}
        style={{
          padding: "2px, 32px, 2px, 24px",
          color: "#000000",
          cursor: "pointer",
          fontSize: 20,
          marginLeft: 3

        }}

      />
      <input
        type="text"
        id={id}
        placeholder={"Search here..."}
        className={`inputStyle `}
        value={value}
        onChange={onChange}
        style={{
          padding: "2px, 32px, 2px, 24px",
          border: "none",
          outline: "none",
          width: "100%",
          ...style,
        }}
      />

    </Stack>
  );
}

export default SearchInput;
