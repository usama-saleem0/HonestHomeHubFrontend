import React from 'react';
import './select.css'
import { Stack } from '@mui/material';
import { lable_color } from '../../utils/color';
const Select_query = ({ options, value, onChange, label, spacingg, }) => {
  return (


    <Stack spacing={spacingg ? spacingg : 0.3}>
      <label
        // htmlFor={id}
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
      <select className='react-inp-style' value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option style={{
            fontSize: '13px'
          }} key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Stack>

  );
};

export default Select_query;
