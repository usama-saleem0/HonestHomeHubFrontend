import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./select.css";

export default function Select_selected_queries({ setSelect_Queries, option_First }) {
  // const [selectOne, setSelectOne] = React.useState("");

  const handleChange = (event) => {
    setSelect_Queries(event.target.value);
  };

  // console.log(selectOne)
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: '97%' }} className="listts">
        {/* <InputLabel id="demo-simple-select-standard-label">Select</InputLabel> */}
        <Select
        className="query"
          fullWidth={true}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // defaultValue={"public"}
          name="privacy"
          defaultValue={"public"}
          onChange={handleChange}
         

       

        >
          {/* <MenuItem disabled>Select Privacy</MenuItem> */}
          <MenuItem value={"public"}>{option_First}</MenuItem>
          <MenuItem value={"Heating, Ventilation, Air Conditioning"}>Heating, Ventilation, Air Conditioning </MenuItem>
          <MenuItem value={"Water Heater"}>Water Heater </MenuItem>
          <MenuItem value={"Roofing"}>Roofing</MenuItem>
          <MenuItem value={"Plumbing"}>Plumbing</MenuItem>
          <MenuItem value={"Remodeling"}>Remodeling</MenuItem>

          <MenuItem value={"Landscaping"}>Landscaping</MenuItem>
          <MenuItem value={"Cleaning"}>Cleaning</MenuItem>
          <MenuItem value={"Fencing"}>Fencing</MenuItem>
          <MenuItem value={"Handyman"}>Handyman</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
