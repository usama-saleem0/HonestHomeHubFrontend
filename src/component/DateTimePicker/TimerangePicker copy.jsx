import { Stack } from '@mui/material';
import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import { IoMdAdd } from "react-icons/io";
import { lable_color, vendor_color } from '../../utils/color';

const TimeRangeSelector = ({ setSelectedTimeValue }) => {
    const [selectedRanges, setSelectedRanges] = useState([]);
    const [from, setfrom] = useState('');
    const [to, setTo] = useState('');

    const handleRangeSelect = () => {
        if (from && to) {
            // Check if the number of selected ranges is less than 3
            if (selectedRanges.length < 3) {
                const isRangeSelected = selectedRanges.some(range => range.from === from && range.to === to);

                if (!isRangeSelected) {
                    setSelectedRanges([...selectedRanges, { from, to }]);
                    setSelectedTimeValue([...selectedRanges, { from, to }])
                    setfrom('');
                    setTo('');
                }
            } else {
                // Notify the user that they cannot add more than 3 ranges
                // console.log("You cannot add more than 3 time ranges.");
            }
        }
    };

    // console.log(selectedRanges);

    return (
        <div >
            <Stack sx={{ fontSize: 16, color: lable_color, }}>Select Your Availablity</Stack>
            <Stack flexDirection={'row'} justifyContent={'space-between'} >

                <Stack >
                    <Stack flexDirection={'row'} alignItems={'center'} gap={0.4} >
                        <div>
                            <label style={{ fontSize: "13px", color: lable_color, fontWeight: 'bold' }}>
                                Start Time:
                                <TimePicker value={from} onChange={value => setfrom(value)} />
                            </label>
                        </div>
                        <div>
                            <label style={{ fontSize: "13px", color: lable_color, fontWeight: 'bold' }}>
                                End Time:
                                <TimePicker value={to} onChange={value => setTo(value)} />
                            </label>
                        </div>
                        <div style={{ background: vendor_color, color: "white", borderRadius: "3px", cursor: "pointer" }}>
                            <IoMdAdd onClick={handleRangeSelect} size={30} />
                        </div>
                    </Stack>
                </Stack>
            </Stack>

            <div>
                <Stack sx={{ fontSize: 13, color: lable_color, fontWeight: 'bold' }}>Selected Ranges:</Stack>
                <ul >
                    {selectedRanges.map((range, index) => (
                        <li key={index}>{`${range.from} to ${range.to}`}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TimeRangeSelector;
