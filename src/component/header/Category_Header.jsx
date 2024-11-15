import { Stack } from '@mui/material'
import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";


import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
const Category_Header = () => {
    return (
        <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'}>
            <Stack sx={{ fontSize: { md: 20, lg: 20, sm: 20, xs: 16 }, }}>Booking History</Stack>
            <Stack >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: 'fit-content',

                        borderRadius: 3,
                        bgcolor: '#E2E4E6',
                        color: 'black',
                        '& svg': {
                            m: 1.5,
                        },
                        '& hr': {
                            mx: 0.5,
                        },
                    }}
                >
                    <IoIosMail />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <FaRegEdit />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <MdOutlineDeleteOutline />
                    <Divider orientation="vertical" variant="middle" flexItem />
                    <FiPrinter />

                </Box>

            </Stack>
        </Stack >
    )
}

export default Category_Header