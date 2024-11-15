import { Divider, Stack } from '@mui/material'
import React from 'react'
import { IoFilter } from "react-icons/io5";
import '../style.css'
import { useDispatch, useSelector } from 'react-redux';
import { main_color, vendor_color } from '../../../utils/color';
import { setSelectedLeadIndex } from '../../../store/slice/AuthSlice';
import AdminMatchingLeads from '../../CreatePostCard/AdminMatchingLeads';


const Admin_Drawer_Side_Content = () => {
    const dispatch = useDispatch()

    const { upcoming_status,
        upcoming_data,
        upcoming_error } = useSelector((state) => state.adminAuth)
    return (
        <div>
            <Stack >
                <Stack height={"80px"} sx={{ backgroundColor: vendor_color}}>
                    <Stack p={1}>
                        <Stack sx={{ fontSize: 20, fontWeight: 1000, color: 'white', textAlign: 'center', justifyContent: 'center', display: 'flex', mt: 2 }}>
                            Recent Chats
                        </Stack>
                    </Stack>
                </Stack>
                <Stack height={"35px"} sx={{ backgroundColor: "#D9D9D9" }}>
                    <Stack p={1}>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Stack sx={{ fontSize: 11, color: "#333333", fontWeight: 'bold' }}>Showing All {upcoming_data?.length} Results</Stack>
                            <Stack flexDirection={'row'} alignItems={'center'} gap={0.2}>
                                {/* <Stack>
                                    <IoFilter />
                                </Stack>
                                <Stack sx={{ fontSize: 11, color: vendor_color, fontWeight: 'bold' }}>Filter</Stack> */}
                            </Stack>
                        </Stack>

                    </Stack>
                </Stack>
            </Stack>
            {/* Matching Leads Render */}
            <Stack mt={1}  >
                <AdminMatchingLeads />
                <Divider />

            </Stack>
            {/* Matching Leads Render */}
        </div>
    )
}

export default Admin_Drawer_Side_Content