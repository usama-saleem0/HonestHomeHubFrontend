import { Avatar, Divider, Stack } from '@mui/material'
import React from 'react'
import './index.css'
import { main_color, user_color, vendor_color } from '../../utils/color'
import problem_image from '../../assets/Frame 75.png'

const User_Details = () => {
    const checkType = localStorage.getItem("type_for_details")

    const user_details = localStorage.getItem('user_details');
    const retrievedObject = JSON.parse(user_details);
    console.log('redasddfsdfsd',retrievedObject);   

    return (
        
        <Stack className='user_detailsss unique-class-137' >
        <Stack sx={{ fontSize: 23, color: main_color, p: 1, fontFamily: 'sans-serif', fontWeight: 'bold' }} className="unique-class-138">
            Details
        </Stack>
        <Divider sx={{ border: '2px solid #002758' }} className="unique-class-139" />
        <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} sx={{ mt: 1 }} gap={2} className="unique-class-140">
            <Stack className="unique-class-141">
                <Avatar sx={{ width: 80, height: 80 }} src={retrievedObject?.Profile_Image} className="unique-class-142" />
            </Stack>
            <Stack className="unique-class-143">
                <Stack sx={{ fontSize: 22, fontWeight: 1000 }} className="unique-class-144">{retrievedObject.Name}</Stack>
                <Stack sx={{ fontSize: 20, fontWeight: 1000 }} className="unique-class-145">Email: {retrievedObject.email}</Stack>
                <Stack sx={{ fontSize: 20, fontWeight: 1000 }} className="unique-class-146">Phone: {retrievedObject.Phone_Number}</Stack>
            </Stack>
        </Stack>
        <br/>
        <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} sx={{ mt: 1 }} className="unique-class-147">
            <Stack sx={{ fontSize: 20, fontWeight: 1000 }} className="unique-class-148">Address:</Stack>
            <Stack sx={{ fontSize: 18, fontWeight: 500 }} className="unique-class-149"> {retrievedObject.Home_Address}</Stack>
        </Stack>
        <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} className="unique-class-150">
            <Stack sx={{ fontSize: 20, fontWeight: 1000 }} className="unique-class-151">type: </Stack>
            <Stack sx={{ fontSize: 18, fontWeight: 500 }} className="unique-class-152">{retrievedObject.type}</Stack>
        </Stack>
        <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} className="unique-class-153">
            <Stack sx={{ fontSize: 20, fontWeight: 1000 }} className="unique-class-154">ZipCode: </Stack>
            <Stack sx={{ fontSize: 18, fontWeight: 500 }} className="unique-class-155">{retrievedObject.zipCode}</Stack>
        </Stack>
        {/* <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1}>
            <Stack sx={{ fontSize: 17, fontWeight: 1000 }}>Estimated Time: </Stack>
            <Stack> 2.5hrs</Stack>
        </Stack> */}
    
        {/* <Stack sx={{
            padding: 1,
            background: checkType === "customer" ? user_color : checkType === "vendor" ? vendor_color : null, color: 'white',
            textAlign: 'center',
            textDecoration: 'underline',
            mt: 1.5,
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            height: "3vh"
        }}></Stack> */}
    </Stack>
    
    )
}

export default User_Details




