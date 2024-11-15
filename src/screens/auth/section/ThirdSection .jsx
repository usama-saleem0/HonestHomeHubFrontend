import { Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { user_color } from '../../../utils/color';
import '../auth.css'
import Btn from '../../../component/button/Button';
import { useNavigate } from 'react-router-dom';

const ThirdSection = ({ lastHandle }) => {
    const navigation = useNavigate()


    return (
        <div>

            <Grid container alignItems={'center'} justifyContent={'center'} alignContent={'center'} height={'40vh'}>
                <Grid item md={2} lg={2} xs={1} sm={1}  >
                    <Stack sx={{ backgroundColor: 'blue' }}></Stack>
                </Grid>
                <Grid item md={10} lg={10} xs={11} sm={11} alignItems={'start'}  >
                    <Stack sx={{ p: 1, mt: 1,alignItems:'center' }}>


                        <Stack sx={{ color: 'black', fontSize: { md: 20, lg: 20, sm: 15, xs: 15 }, fontWeight: 700, mt: 1, fontFamily: 'system-ui' }}>THANKS FOR STARTING YOUR HOME SERVICE PROCESS</Stack>
                        <Stack sx={{ color: 'black', fontSize: { md: 35, lg: 35, sm: 20, xs: 20 }, mt: 1, fontWeight: 1000, fontFamily: 'system-ui' }}>WE ARE GLAD TO ASSIST YOU</Stack>



                        <Stack mt={2} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                            <Btn onClick={() => lastHandle()} label='Go To Dashboard' style={{ backgroundColor: user_color, border: 'none', outline: 'none', padding: "10px", borderRadius: '10px', color: 'white', cursor: "pointer" }} />
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default ThirdSection 