import React, { useState } from "react";
import { Container, Grid, Stack } from "@mui/material";
import "../../../auth/auth.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from '../../../../assets/logo_new.png'
import PasswordInput from "../../../../component/input/PasswordInput";
import Input from "../../../../component/input/Input";
import Btn from "../../../../component/button/Button";
import { main_color } from "../../../../utils/color";
import { admin_login_post_async } from "../../../../services/adminAuthService";
import { useEffect } from "react";
import { asyncStatus } from "../../../../utils/async_status";



const AdminLogin = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const { login_status,
        login_data,
        login_error } = useSelector((state) => state.adminAuth)

    const [data, setData] = useState({});

    const loginHandle = () => {
        dispatch(admin_login_post_async(data))

    };


    useEffect(() => {
        if (login_status === asyncStatus.SUCCEEDED) {
            localStorage.setItem('userId', login_data?.user_id)
            navigation('/Admin_Dashboard')
            window.location.reload()
        }
    }, [, login_status])


    return (
        <Stack
            sx={{
                height: '100vh'
            }}
            className="main_container"
        >
            <Container maxWidth={"md"} sx={{ p: { md: 5, lg: 5, sm: 0, xs: 0 }, justifyContent: 'center', alignItems: 'center' }}>
                <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Grid md={12} lg={12} sm={12} xs={12} display={'contents'} >
                        <Stack
                            sx={{

                                p: { md: 5, lg: 5, sm: 2, xs: 2 },

                                borderRadius: { md: "20px", lg: "20px", sm: "20px", xs: '20px' },
                                width: { md: '50%', lg: '50%', sm: '70%', xs: '80%' },
                                mt: { xs: 4 }
                            }}
                            className="blur-container"
                        >
                            {/* <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                <img width={150} height={150} src={logo} />
                            </Stack> */}
                            <Stack className="title">Log In</Stack>
                            <Stack mt={5}>
                                <Grid container spacing={2}>
                                    <Grid item md={12} lg={12} sm={12} xs={12}>
                                        <Input
                                            onChange={(e) =>
                                                setData({ ...data, email: e.target.value })
                                            }
                                            label="Email address "
                                        />
                                    </Grid>

                                    <Grid item md={12} lg={12} sm={12} xs={12}>
                                        <PasswordInput
                                            onChange={(e) =>
                                                setData({ ...data, password: e.target.value })
                                            }
                                            label="Password"
                                        />
                                    </Grid>
                                    <Grid item md={12} lg={12} sm={12} xs={12} mt={5}>
                                        <Btn

                                            onClick={() => loginHandle()}
                                            label={"Log in"}
                                            style={{
                                                padding: "10px",
                                                backgroundColor: main_color,
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
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Stack>
    );
};

export default AdminLogin;
