import React, { useState } from 'react';
import { Stack, Grid, TextField } from '@mui/material';

const ItemDatesTimes = ({ item, handleInputTodates, handleInputTime }) => {
    const [itemDates, setItemDates] = useState([{ date: '', times: '' }]);
  
    const handleTodatesChange = (e, dateIndex) => {
      const { value } = e.target;
      const updatedDates = [...itemDates]; // Create a copy of itemDates
      updatedDates[dateIndex] = { ...updatedDates[dateIndex], date: value }; // Update the specific date
      setItemDates(updatedDates); // Update state with the new array
      handleInputTodates(updatedDates); // Call parent function with updated dates
    };
  
    const handleTimeChange = (e, dateIndex) => {
      const { value } = e.target;
      const updatedDates = [...itemDates]; // Create a copy of itemDates
      updatedDates[dateIndex] = { ...updatedDates[dateIndex], times: value }; // Update the specific time
      setItemDates(updatedDates); // Update state with the new array
      handleInputTime(updatedDates); // Call parent function with updated dates
    };
  
    return (
      <>
      {itemDates.map((date, dateIndex) => (
          <React.Fragment key={`${item.id}_${dateIndex}`} className="class-244">
              <Grid container spacing={2} mt={3} className="class-245">
                  <Grid item md={6} lg={6} xs={12} sm={12} className="class-246">
                      <Stack sx={{ color: "black", fontSize: { md: 20, lg: 20, sm: 15, xs: 8 }, fontWeight: "bold" }} mt={3} className="class-247">
                          Select job date
                      </Stack>
                  </Grid>
                  <Grid item md={6} lg={6} xs={12} sm={12} className="class-248">
                      <TextField
                          label="Date"
                          type="date"
                          variant="outlined"
                          fullWidth
                          name={`to_date_${item.id}_${dateIndex}`}
                          value={date.date}
                          onChange={(e) => handleTodatesChange(e, dateIndex)} // Pass dateIndex to the handler
                          InputLabelProps={{
                              shrink: true,
                          }}
                          className="class-249"
                      />
                  </Grid>
              </Grid>
              <br className="class-250" />
              <Grid container spacing={2} className="class-251">
                  <Grid item md={6} lg={6} xs={12} sm={12} className="class-252">
                      <Stack sx={{ color: "black", fontSize: { md: 20, lg: 20, sm: 15, xs: 8 }, fontWeight: "bold" }} mt={3} className="class-253">
                          Select Your Availability
                      </Stack>
                  </Grid>
                  <Grid item md={6} lg={6} xs={12} sm={12} className="class-254">
                      <TextField
                          label="Availability"
                          type="time"
                          variant="outlined"
                          fullWidth
                          name={`time_${item.id}_${dateIndex}`}
                          value={date.times}
                          onChange={(e) => handleTimeChange(e, dateIndex)} // Pass dateIndex to the handler
                          InputLabelProps={{
                              shrink: true,
                          }}
                          className="class-255"
                      />
                  </Grid>
              </Grid>
          </React.Fragment>
      ))}
  </>
  
    );
  };
  


export default ItemDatesTimes