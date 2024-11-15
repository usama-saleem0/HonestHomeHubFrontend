import { Stack } from '@mui/material'
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import GroupAvatars from '../avatar/GroupAvatar';

const StickyNotesCard = () => {
    return (
        <Stack sx={{ textAlign: 'start' }} >
            <Stack sx={{ fontSize: 15, color: 'black' }}>To-Do</Stack>
            <Stack sx={{ backgroundColor: '#FDEFD4', p: 2, borderRadius: '10px',mt:2 }}>

                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack sx={{ fontSize: 12, color: 'black' }} >Today</Stack>
                    <Stack sx={{backgroundColor:'white',borderRadius:50,p:1}}>
                        <MdOutlineArrowOutward size={12} />
                    </Stack>
                </Stack>
                <Stack sx={{ fontSize: 15, color: 'black',mb:2,mt:1 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                </Stack>

                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack sx={{ fontSize: 12, color: 'black' }} >00.00 am  to  00.00 am</Stack>
                    <Stack>
                        <GroupAvatars />
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ backgroundColor: '#C8EAF8', p: 2, borderRadius: '10px',mt:2 }}>

                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack sx={{ fontSize: 12, color: 'black' }} >Today</Stack>
                    <Stack sx={{backgroundColor:'white',borderRadius:50,p:1}}>
                        <MdOutlineArrowOutward size={12} />
                    </Stack>
                </Stack>
                <Stack sx={{ fontSize: 15, color: 'black',mb:2,mt:1 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                </Stack>

                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack sx={{ fontSize: 12, color: 'black' }} >00.00 am  to  00.00 am</Stack>
                    <Stack>
                        <GroupAvatars />
                    </Stack>
                </Stack>
            </Stack>
            <Stack sx={{ backgroundColor: '#F8D2D3', p: 2, borderRadius: '10px',mt:2 }}>

                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack sx={{ fontSize: 12, color: 'black' }} >Today</Stack>
                    <Stack sx={{backgroundColor:'white',borderRadius:50,p:1}}>
                        <MdOutlineArrowOutward size={12} />
                    </Stack>
                </Stack>
                <Stack sx={{ fontSize: 15, color: 'black',mb:2,mt:1 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                </Stack>

                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Stack sx={{ fontSize: 12, color: 'black' }} >00.00 am  to  00.00 am</Stack>
                    <Stack>
                        <GroupAvatars />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default StickyNotesCard