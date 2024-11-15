import { Avatar, Divider, Stack } from '@mui/material'
import React from 'react'
import './index.css'
import { main_color } from '../../utils/color'
import problem_image from '../../assets/Frame 75.png'

const Vendor_Details = () => {
    return (
        <Stack className='user_details unique-class-156' >
    <Stack sx={{ fontSize: 23, color: main_color, p: 2, fontFamily: 'sans-serif' }} className="unique-class-157">
        Customer Details
    </Stack>
    <Divider sx={{ border: '1px solid #B22234' }} className="unique-class-158" />
    <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'}  gap={2} className="unique-class-159">
        <Stack className="unique-class-160">
            <Avatar sx={{ width: 60, height: 60 }} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2BdsfTZeFHeksuXsnuaIrvzXx55kIpHLCQsW8TYi&s'} className="unique-class-161" />
        </Stack>
        <Stack className="unique-class-162">
            <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="unique-class-163">Smith</Stack>
            <Stack sx={{ fontSize: 13, fontWeight: 1000 }} className="unique-class-164">Email:Someone@gmail.com</Stack>
            <Stack sx={{ fontSize: 13, fontWeight: 1000 }} className="unique-class-165">Phone: 111-222-333</Stack>
        </Stack>
    </Stack>
    <Stack px={2}  flexDirection={'row'} alignItems={'center'} gap={1} mt={2} className="unique-class-166">
        <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="unique-class-167">Problem:</Stack>
        <Stack className="unique-class-168"> Plumbing Maintainance</Stack>
    </Stack>
    <Stack px={2} mt={1} className="unique-class-169">
        <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="unique-class-170">Images:</Stack>
        <Stack flexDirection={'row'} className="unique-class-171">
            <img src={problem_image} className="unique-class-172" />
            <img src={problem_image} className="unique-class-173" />
        </Stack>
    </Stack>
    <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} className="unique-class-174">
        <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="unique-class-175">Price: </Stack>
        <Stack className="unique-class-176">25$</Stack>
    </Stack>
    <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} className="unique-class-177">
        <Stack flexDirection={'row'} alignItems={'center'} gap={1} className="unique-class-178">
            <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="unique-class-179">Vendor Offer:   </Stack>
            <Stack className="unique-class-180">30$</Stack>
        </Stack>
        <Stack sx={{ textDecoration: 'underline', fontSize: 13, cursor: 'pointer' }} className="unique-class-181">see vendor profile</Stack>
    </Stack>
    <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} className="unique-class-182">
        <Stack sx={{ fontSize: 17, fontWeight: 1000 }} className="unique-class-183">Estimated Time: </Stack>
        <Stack className="unique-class-184"> 2.5hrs</Stack>
    </Stack>

    <Stack sx={{
        padding: 1,
        background: '#B22234', color: 'white',
        textAlign: 'center',
        textDecoration: 'underline',
        mt: 3,
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
    }} className="unique-class-185">See All Details</Stack>
</Stack>

    )
}

export default Vendor_Details 