import React, { useEffect, useRef, useState } from 'react';
import Calendar from 'calendar-js';
import axios from 'axios';
import { baseURL } from '../../config/apiHandle/apiHandle';

const MyCalendar = () => {
    const calendarRef = useRef(null);
    const [calendarData, setCalendarData] = useState(null);
    const [timeRange, setTimeRange] = useState('weekly');

    useEffect(() => {
        fetchData();
    }, [timeRange]);

    useEffect(() => {
        if (calendarData) {
            renderCalendar();
        }
    }, [calendarData]);

    const fetchData = () => {
        axios.get(`${baseURL}/getallreviews`)
            .then((response) => {
                console.log("REVIEWS", response.data);
                // Process the response data to format it for the calendar
                const formattedData = processResponseData(response.data.Reviews, timeRange);
                setCalendarData(formattedData);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderCalendar = () => {
        // Clear previous calendar if exists
        calendarRef.current.innerHTML = '';

        // Create a new Calendar instance
        const calendar = new Calendar(calendarRef.current, {
            data: calendarData,
            // Customize calendar options as needed
        });

        return () => {
            // Cleanup - destroy calendar instance
            calendar.destroy();
        };
    };

    const processResponseData = (responseData, selectedTimeRange) => {
        // Process the response data based on the selected time range
        // For demonstration, let's assume responseData is an array of objects with 'date' and 'value' properties
        const data = {};
        responseData.forEach(item => {
            const date = new Date(item.date);
            const key = date.toISOString().split('T')[0]; // Use date as the key
            data[key] = item.value;
        });
        return data;
    };

    const handleButtonClick = (selectedTimeRange) => {
        setTimeRange(selectedTimeRange);
    };

    return (
        <div>
            <div>
                <button onClick={() => handleButtonClick('weekly')}>Weekly</button>
                <button onClick={() => handleButtonClick('monthly')}>Monthly</button>
                <button onClick={() => handleButtonClick('yearly')}>Yearly</button>
            </div>
            <div ref={calendarRef}></div>
        </div>
    );
};

export default MyCalendar;
