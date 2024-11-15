import React, { useState } from 'react';
import './TimePicker.css';
import { Stack } from '@mui/material';

import { RxCrossCircled } from "react-icons/rx";

const TimePicker = ({setSelectedTimeValue}) => {
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState('');


    // console.log(selectedTimes);
    const renderTime = (e) => {
        const newTime = e.target.value;

        if (selectedTimes.length < 3 && newTime) {
            setSelectedTimes([...selectedTimes, newTime]);
            setSelectedTimeValue([...selectedTimes, newTime])
            setSelectedTime(''); // Clear the selected time for the next input
        }
    };

    const removeTime = (index) => {
        const updatedTimes = [...selectedTimes];
        updatedTimes.splice(index, 1);
        setSelectedTimes(updatedTimes);
        setSelectedTimeValue(updatedTimes)
    };

    return (
        <div className="time-picker-container">
            <Stack flexDirection={'row'} justifyContent={'space-between'} >

                <Stack sx={{ fontSize: 13, color: 'black', fontWeight: 'bold' }}>Select Your Availablity</Stack>
                <Stack flexDirection={'row'} alignItems={'center'} gap={0.3}>

                    <Stack sx={{ fontSize: 10, color: 'black', display: { xs: 'none', sm: 'block', md: 'block', lg: "block" } }} >Provide Three Different Time slot</Stack>
                    <Stack >
                        <input
                            type="time"
                            className="time-input"
                            value={selectedTime}
                            onChange={renderTime}
                        />
                    </Stack>
                </Stack>
            </Stack>

            <div  className="selected-times">
                {selectedTimes.map((time, index) => (
                    <Stack  key={index} flexDirection={'row'} alignItems={'center'} ml={1} gap={0.5}>
                        <div  >
                            {time}
                        </div>
                        <div>
                            <RxCrossCircled size={15} color='red' cursor={'pointer'} onClick={() => removeTime(index)} />
                        </div>
                    </Stack>
                ))}
            </div>
        </div>
    );
};

export default TimePicker;
