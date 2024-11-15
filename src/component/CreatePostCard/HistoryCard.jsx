import { Grid, Stack } from '@mui/material'
import React from 'react'
import { CiMail } from 'react-icons/ci'
import { IoCallOutline } from 'react-icons/io5'

const HistoryCard = () => {
    return (
        <Stack>
            <Grid container alignItems={'center'} spacing={3} >
                <Grid item md={6} lg={6} sm={12} xs={12}>
                    <Stack>
                        <img style={{ borderRadius: '10px' }} src='https://img.freepik.com/premium-photo/silhouette-group-worker-civil-engineer-safety-uniform-install-reinforced-steel_33835-192.jpg' />

                    </Stack>
                </Grid>
                <Grid item md={6} lg={6} sm={12} xs={12}>
                    <Stack spacing={2}>
                        <Stack flexDirection={'row'} alignItems={'center'} >
                            <Stack sx={{ color: 'black', fontSize: 15 }}>Booking Date :</Stack>
                            <Stack sx={{ color: '#707070', fontSize: 15, ml: 2 }}>9/nov/2023</Stack>
                        </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'} >
                            <Stack sx={{ color: 'black', fontSize: 15 }}>Duration :</Stack>
                            <Stack sx={{ color: '#707070', fontSize: 15, ml: 2 }}>10 Days</Stack>
                        </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'} >
                            <Stack sx={{ color: 'black', fontSize: 15 }}>Deadline :</Stack>
                            <Stack sx={{ color: '#707070', fontSize: 15, ml: 2 }}>20/nov/2023</Stack>
                        </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'} >
                            <Stack sx={{ color: 'black', fontSize: 15 }}>Payment Method :</Stack>
                            <Stack sx={{ color: '#707070', fontSize: 15, ml: 2 }}>Debit</Stack>
                        </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'} >
                            <Stack sx={{ color: 'black', fontSize: 15 }}>Budget  :</Stack>
                            <Stack sx={{ color: '#707070', fontSize: 15, ml: 2 }}>$70</Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            <Stack  textAlign={"start"}>
                <Stack sx={{ color: 'black', fontSize: 17,fontWeight:'bold' }}>
                    Lorem Ipsum is simply dummy text
                </Stack>
                <Stack sx={{ color: '#8B8282', fontSize: 10,mt:2,mb:1,width:{md:'400px',lg:'400px',sm:'100%',xs:'100%'} }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Stack>
                <Stack
                    textAlign={"start"}
                    flexDirection={"row"} alignItems={'center'}
                    sx={{ gap: { md: 2, lg: 2, sm: 2, xs: 1 } }}

                >
                    <Stack flexDirection={"row"} alignItems={'center'} gap={0.5}>
                        <Stack>
                            <IoCallOutline size={10} />
                        </Stack>
                        <Stack sx={{ fontSize: 10, color: "#3A00FF" }}>

                            000 2111 1111
                        </Stack>
                    </Stack>
                    <Stack flexDirection={"row"} alignItems={'center'} gap={0.5}>
                        <Stack>
                            <CiMail size={10} />
                        </Stack>
                        <Stack sx={{ fontSize: 10, color: "#3A00FF" }}>

                            johnwick@gmail.com
                        </Stack>
                    </Stack>

                </Stack>
            </Stack>
        </Stack>
    )
}

export default HistoryCard