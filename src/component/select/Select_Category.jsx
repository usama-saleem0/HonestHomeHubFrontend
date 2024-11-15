import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Select_Category({ handleChange }) {
  // const [selectOne, setSelectOne] = React.useState("");

  // const handleChange = (event) => {
  //   setSelectOne(event.target.value);
  // };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="privacy"
          defaultValue={"Booking Summary"}
          onChange={handleChange}
          label="Age"
        >
          {/* <MenuItem disabled>Select Privacy</MenuItem> */}
          <MenuItem value={"Booking Summary"}>Booking Summary</MenuItem>
          <MenuItem value={"Customer Profile"}>Customer Profile</MenuItem>
          <MenuItem value={"New Order"}>New Order</MenuItem>
          <MenuItem value={"Communications"}>Communications</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
