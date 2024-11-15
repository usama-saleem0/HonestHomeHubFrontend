import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
const TimePickerCom = () => {
  const [time, setTime] = useState('12:00');

  const handleTimeChange = (newTime) => {
    setTime(newTime);
  };

  console.log("time",time);

  return (
    <TimePicker
      onChange={handleTimeChange}
      value={time}
      format="h:mm a"
      style={{
        padding: '10px 10px',
        borderBottomLeftRadius: '7px',
        borderTopLeftRadius: '7px',
        backgroundColor: '#EDEDED',
        border: 'none',
        outline: 'none',
      }}
    />
  );
};

export default TimePickerCom;
