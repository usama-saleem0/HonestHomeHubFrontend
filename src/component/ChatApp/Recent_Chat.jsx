import { Divider, Stack } from '@mui/material'
import React from 'react'
import Get_Assistance from './Get_Assistance'
// import Recent_Chat_List from './Recent_Chat_List_Vendor'
import './index.css'
import Recent_Chat_List_Vendor from './Recent_Chat_List_Vendor'
import { useSelector } from 'react-redux'
import Recent_Chat_List_Customers from './Recent_Chat_List_Customers'
import Expert_Advertisement from '../CreatePostCard/ExpertAdvertisement'


const Recent_Chat = () => {
    const { selectedIndexValue } = useSelector((state) => state.authSlice)
    const customer = localStorage.getItem('user_details');
    console.log('cust',selectedIndexValue);

    

    return (
        <Stack className="unique-class-118">
            {selectedIndexValue == "Vendor" ? <Stack mt={1} className="unique-class-124">
                <Divider className="unique-class-126" />
            </Stack> : selectedIndexValue == "Customer" ? <Stack mt={1} className="unique-class-127">


            <Get_Assistance className="unique-class-120" />

            {/* <Expert_Advertisement/> */}



            </Stack> : null}
    {/* <Stack className="unique-class-119">
        <Get_Assistance className="unique-class-120" />
    </Stack> */}
    {/* <Stack sx={{ mt: 2 }} className="unique-class-121">
        <Stack sx={{ color: '#000000', fontSize: 13, fontWeight: 1000 }} className="unique-class-122">Recent Chats</Stack>
        <Stack className='side_scroll_handle_for_scheduled unique-class-123' sx={{ borderLeft: { lg: 1, md: 0, sm: 0, xs: 0 }, background:'transparent' }}>
            {selectedIndexValue == "Vendor" ? <Stack mt={1} className="unique-class-124">
                <Recent_Chat_List_Vendor className="unique-class-125" />
                <Divider className="unique-class-126" />
            </Stack> : selectedIndexValue == "Customer" ? <Stack mt={1} className="unique-class-127">
                <Recent_Chat_List_Customers className="unique-class-128" />
            </Stack> : null}
        </Stack>
    </Stack> */}
</Stack>

    )
}

export default Recent_Chat