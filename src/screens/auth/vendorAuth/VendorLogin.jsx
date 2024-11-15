import { Grid, Stack } from '@mui/material'
import React from 'react'
import Btn from '../../../component/button/Button';
import PasswordInput from '../../../component/input/PasswordInput';
import Input from '../../../component/input/Input';
import { useState } from 'react';
import useTheme from '../../../hooks/theme';
import "../auth.css";
import { useDispatch, useSelector } from 'react-redux';
import { asyncStatus } from '../../../utils/async_status';
import { setVendorLoginIdle } from '../../../store/slice/vendorSlice';
import { useNavigate } from 'react-router-dom';
import { login_vendor_async_service } from '../../../services/vendorService';
import { useEffect } from 'react';
import { user_color, vendor_color } from '../../../utils/color';
import { get_customer_job_byId_async_service } from '../../../services/customerService';

const VendorLogin = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const navigation = useNavigate()

    const [data, setData] = useState({});

    const {
        vendor_login_status,
        vendor_login_data,
        vendor_login_error
    } = useSelector((state) => state.vendorAuth)


    const loginHandle = () => {
        dispatch(login_vendor_async_service(data));
        dispatch(get_customer_job_byId_async_service())

        
    };

    useEffect(() => {
        if (vendor_login_status === asyncStatus.SUCCEEDED) {
            navigation('/dashboard')
            // window.location.reload()
            dispatch(setVendorLoginIdle(setVendorLoginIdle))
        }
    }, [, vendor_login_status])

   
    return (
        <div>
            <Grid container >
                <Grid item md={2} lg={2} xs={1} sm={1}  >
                    <Stack sx={{ backgroundColor: 'blue' }}></Stack>
                </Grid>
                <Grid item md={10} lg={10} xs={11} sm={11}  >


                    <Stack mt={5}>
                        <Grid container spacing={2}>
                            <Grid item md={12} lg={12} sm={12} xs={12}>
                                <Input
                                    onChange={(e) =>
                                        setData({ ...data, email: e.target.value })
                                    }
                                    label="Email address or Phone Number"
                                />
                            </Grid>

                            <Grid item md={12} lg={12} sm={12} xs={12}>
                                <PasswordInput
                                    onChange={(e) =>
                                        setData({ ...data, password: e.target.value })
                                    }
                                    label="Password"
                                // checkDetails={"Remember me"}
                                // forgot_password="Forgot Password"
                                // forgotClick={() => navigation("/forgotPassword")}
                                />
                            </Grid>
                            <Grid item md={12} lg={12} sm={12} xs={12} mt={7}>
                                <Btn
                                    // loading={login_status === asyncStatus.LOADING}
                                    onClick={() => loginHandle()}
                                    label={"Log in"}
                                    style={{
                                        padding: "10px",
                                        backgroundColor: vendor_color,
                                        borderRadius: "8px",
                                        mt: 6,
                                        width: '100%',
                                        border: 'none',
                                        outline: 'none',
                                        color: 'white',
                                        cursor: 'pointer'

                                    }}
                                />
                            </Grid>
                        </Grid>


                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default VendorLogin