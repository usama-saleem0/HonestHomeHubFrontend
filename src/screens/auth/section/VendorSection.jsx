import { Grid, Stack } from '@mui/material'
import React from 'react'
import Input from '../../../component/input/Input'
import { useState } from 'react';
import TimePicker from '../../../component/DateTimePicker/DateTimePicker';
import Btn from '../../../component/button/Button';
import useTheme from '../../../hooks/theme';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncStatus } from '../../../utils/async_status';
import { useNavigate } from 'react-router-dom';
import { create_vendor_async_service } from '../../../services/vendorService';
import { setVendorIdle } from '../../../store/slice/vendorSlice';

const VendorSection = ({ searchTerm }) => {
    const themes = useTheme();
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const { vendor_status,
        vendor_data,
        vendor_error } = useSelector((state) => state.vendorAuth)


    const [data, setData] = useState({
        availablity_times: null,
    });


    const setSelectedTimeValue = (value) => {
        console.log("value", value);
        setData({ ...data, availablity_times: value });
    }



    const submitHandle = () => {
        let obj = {
            ...data,
            type: "vendor",
            selected_queries: searchTerm
        }
        dispatch(create_vendor_async_service(obj))
    }

    useEffect(() => {
        if (vendor_status === asyncStatus.SUCCEEDED) {
            navigation('/dashboard')
            dispatch(setVendorIdle(setVendorIdle))
        }
    }, [, vendor_status])

    return (
        <Stack >

            <Grid container spacing={1} >

                <Grid item md={2} lg={2} sm={2} xs={2} ></Grid>
                <Grid item md={10} lg={10} sm={10} xs={10} >
                    <Grid container spacing={1} >
                        <Grid item md={6} lg={6} xs={12} sm={12} >
                            <Input
                                onChange={(e) =>
                                    setData({ ...data, First_Name: e.target.value })
                                }
                                label="First Name"
                            />
                        </Grid>
                        <Grid item md={6} lg={6} xs={12} sm={12} >
                            <Input
                                onChange={(e) =>
                                    setData({ ...data, Last_Name: e.target.value })
                                }
                                label="Last Name"
                            />
                        </Grid>
                        <Grid item md={6} lg={6} xs={12} sm={12} >
                            <Input
                                onChange={(e) =>
                                    setData({ ...data, email: e.target.value })
                                }
                                label="Email Address"
                            />
                        </Grid>
                        <Grid item md={6} lg={6} xs={12} sm={12} >
                            <Input
                                type="password"
                                onChange={(e) =>
                                    setData({ ...data, password: e.target.value })
                                }
                                label="Password"
                            />
                        </Grid>
                        <Grid item md={6} lg={6} xs={12} sm={12} >
                            <Input
                            type="number"
                                onChange={(e) =>
                                    setData({ ...data, experience: e.target.value })
                                }
                                label="Experience"
                            />
                        </Grid>
                        <Grid item md={6} lg={6} xs={12} sm={12} >
                            <Input
                                onChange={(e) =>
                                    setData({ ...data, location: e.target.value })
                                }
                                label="Location"
                            />
                        </Grid>
                        <Grid item md={12} lg={12} xs={12} sm={12} >
                            <TimePicker setSelectedTimeValue={setSelectedTimeValue} />
                        </Grid>
                        <Grid item md={12} lg={12} xs={12} sm={12} >
                            <textarea onChange={(e) =>
                                setData({ ...data, additional_details: e.target.value })
                            } style={{ backgroundColor: 'transparent', outline: 'none', borderRadius: '10px', padding: '10px' }}
                                rows={6}

                                placeholder='What would be helpful for the professionals to Know (1-2 Lines)'
                                className='placeholder_class'
                            />
                        </Grid>
                        <Stack mt={2} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                            <Btn onClick={submitHandle} label='Update Request' style={{ backgroundColor: themes.bg_color, border: 'none', outline: 'none', padding: "10px", borderRadius: '10px', color: 'white', cursor: "pointer" }} />
                        </Stack>
                    </Grid>
                </Grid>

            </Grid>
        </Stack>
    )
}

export default VendorSection