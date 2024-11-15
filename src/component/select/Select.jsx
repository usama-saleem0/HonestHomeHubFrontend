import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { lable_color } from "../../utils/color";
import { useSelector } from "react-redux";

function Select_dropdown(props) {
  const { id, label, style, handleClick, defaultValue } = props;

  // const select_handle = (e) => {
  //   const value = e.target.value;
  //   // handleClick(value);
  // };
  const { get_all_topics_status, get_all_topics_data, get_all_topics_error } =
    useSelector((state) => state.community);
  return (
    <Stack spacing={1}>
      <label
        htmlFor={id}
        style={{
          color: lable_color,
          display: "block",
          fontSize: "18px",
          width: "100%",
          fontWeight: 500,
        }}
      >
        {label}
      </label>

      <select
        // className="inputStyle"
        onChange={(e) => handleClick(e)}
        name="topic_id"
        // defaultValue={defaultValue ? defaultValue : ""}
        style={{ padding: "20px 10px", borderRadius: "7px", ...style }}
      >
        <option selected disabled>
          Select topic
        </option>
        {get_all_topics_data?.map((e) => (
          <option value={e._id}>{e?.name}</option>
        ))}
        {/* <option value="">Gaming</option>
        <option value="">Sports</option> */}
        {/* {React.Children.toArray(
          dataaaa.data?.map((e, i) => {
            return <option value={e._id}>{e.instituteName}</option>;
          })
        )} */}
      </select>
    </Stack>
  );
}

export default Select_dropdown;
