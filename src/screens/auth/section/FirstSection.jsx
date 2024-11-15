import { Container, Grid, Stack } from '@mui/material'
import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { user_color } from '../../../utils/color';
import { IoAttach } from "react-icons/io5";
import '../auth.css'
import { Progress_Bar } from '../../../component/proress/ProgressBar';
import Btn from '../../../component/button/Button';
import { MultiImageUploadComponent } from '../../../component/uploadImage/MultiImagesUpload';

const FirstSection = ({ onFirstClick, setDataSectionOne }) => {

    const [progressValue, setProgressValue] = useState(0);

    const [data, setData] = useState({});


    const handleSelectedImages = (value) => {

        setProgressValue(value.totalValue)
        setDataSectionOne({
            images: value.images,
            ...data
        })
    };

    return (
        <div>

            <Grid container >
                <Grid item md={2} lg={2} xs={1} sm={1}  >
                    <Stack sx={{ backgroundColor: 'blue' }}>

                    </Stack>
                </Grid>
                <Grid item md={10} lg={10} xs={11} sm={11}  >
                    <Stack sx={{ p: 1 }}>
                        <Stack sx={{ flexDirection: 'row', gap: 1, alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
                            <Stack><FaCheckCircle color={user_color} size={15} /></Stack>
                            <Stack sx={{ color: user_color, fontSize: { md: 15, lg: 15, sm: 12, xs: 8 } }}>We've Posted Your Request</Stack>
                        </Stack>

                        <Stack sx={{ color: 'black', fontSize: { md: 20, lg: 20, sm: 15, xs: 13 }, fontWeight: 1000, mt: 1, textAlign: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>Describe Your Request in Detail</Stack>
                        <Stack sx={{ color: 'black', fontSize: { md: 13, lg: 13, sm: 8, xs: 6 }, mt: 1, textAlign: 'center', justifyContent: 'center' }}>Add more details to get faster and more accurate quotes</Stack>

                        <Stack sx={{ alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                            <textarea
                                onChange={(e) =>
                                    setData({ ...data, details: e.target.value })
                                }
                                style={{ backgroundColor: 'transparent', outline: 'none', borderRadius: '10px', padding: '10px' }}
                                rows={6}

                                placeholder='What would be helpful for the professionals to Know (1-2 Lines)'
                                className='placeholder_class'
                            />
                        </Stack>
                        <Stack sx={{ flexDirection: 'row', gap: 0.1, alignItems: 'center', mt: 1, textAlign: 'start' }}>
                            <Stack><IoAttach color={"black"} size={20} /></Stack>
                            <Stack sx={{ color: "black", fontSize: { md: 10, lg: 10, sm: 10, xs: 8 } }}>Attach file and photo</Stack>
                        </Stack>
                        <Stack flexDirection={'row'} sx={{}} >
                            <MultiImageUploadComponent selectedImagesHandle={handleSelectedImages} />
                        </Stack>
                        <Stack>
                            <Progress_Bar progressValue={progressValue} />
                        </Stack>
                        <Stack mt={2} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>
                            <Btn  onClick={onFirstClick} label='Update Request' style={{ backgroundColor:  user_color, border: 'none', outline: 'none', padding: "10px", borderRadius: '10px', color: 'white', cursor: "pointer" }} />
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}

export default FirstSection