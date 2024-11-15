import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "./select.css";
import { lable_color } from "../../utils/color";
import { Stack } from "@mui/material";

export const CountrySelect = ({ sethandlePhoneNumber }) => {
  // const [phone, setPhone] = useState("");
  // sethandlePhoneNumber(phone);

  return (
    <Stack spacing={1}>
      <label
        htmlFor={""}
        style={{
          color: lable_color,
          display: "block",
          fontSize: "18px",
          width: "100%",
          fontWeight: 400,
        }}
      >
        Phone number
      </label>
      <PhoneInput
        defaultCountry="pk"
        // value={phone}
        onChange={(phone) => sethandlePhoneNumber(phone)}
      />
    </Stack>
  );
};
