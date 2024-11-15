import { Divider, Stack } from '@mui/material'
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { user_color, vendor_color } from '../../utils/color';
import { IoLocationSharp } from 'react-icons/io5';
import { setSelectedLeadIndex } from '../../store/slice/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { admin_upcomig_req_async } from '../../services/adminAuthService';
import { useEffect } from 'react';
import { getTimeAgo } from '../../utils/common/check_date_time';

const AdminMatchingLeads = () => {

    const dispatch = useDispatch()

    const { upcoming_status,
        upcoming_data,
        upcoming_error } = useSelector((state) => state.adminAuth)




    const sendDataToParent = (elem, index) => {
        dispatch(setSelectedLeadIndex(index));
        localStorage.setItem('user_details', JSON.stringify(elem.senderDetails));
        localStorage.setItem("type_for_details",elem.senderDetails?.type)
    
    }


    useEffect(() => {
        dispatch(admin_upcomig_req_async())
    }, [])



    return (
        <div className="classname-400">
        {upcoming_data?.map((e, i) => {
            const timeAgo = getTimeAgo(e.timestamp);
            return <Stack className="classname-401">
                <Stack p={1} onClick={() => sendDataToParent(e, i + 1)} sx={{ cursor: 'pointer' }} className="classname-402">
                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} className="classname-403">
                        <Stack flexDirection={'row'} alignItems={'center'} className="classname-404">
                            <Stack className="classname-405">
                                <GoDotFill color={e.senderDetails?.type === "customer" ? user_color : vendor_color} />
                            </Stack>
                            <Stack sx={{ color: '#000000', fontSize: 15, fontWeight: 1000 }} className="classname-406">{e.senderDetails?.Name}</Stack>
                        </Stack>
                        <Stack sx={{ backgroundColor: e.senderDetails?.type === "customer" ? user_color : vendor_color, borderRadius: '6px', p: 0.5, fontSize: 9, color: 'white', fontWeight: 'bold' }} className="classname-407">{timeAgo}</Stack>
                    </Stack>
                    <Stack ml={2} className="classname-408">
    
                        <Stack sx={{ color: '#000000', fontSize: 12, }} className="classname-409">{e.senderDetails?.type}</Stack>
                        <Stack ml={-0.3} flexDirection={'row'} alignItems={'center'} className="classname-410">
                            <Stack className="classname-411">
                                <IoLocationSharp size={13} color={e.senderDetails?.type === "customer" ? user_color : vendor_color} />
                            </Stack>
                            <Stack sx={{ fontSize: 10, color: '#333333', }} className="classname-412">{e.senderDetails?.Home_Address}</Stack>
                        </Stack>
                        <Stack ml={-0.2} flexDirection={'row'} alignItems={'center'} gap={0.5} className="classname-413">
                            <Stack sx={{ fontSize: 10, color: '#333333', fontWeight: 'bold' }} className="classname-414">
                                Additional Details
                            </Stack>
                            <Stack sx={{ fontSize: 10, color: '#333333', }} className="classname-415">/ Immediate / Urgent.</Stack>
                        </Stack>
                        <Stack ml={-0.3} flexDirection={'row'} alignItems={'center'} gap={0.5} className="classname-416">
                            <Stack sx={{ fontSize: 10, color: '#333333', fontWeight: 'bold' }} className="classname-417">
                                Last Message :
                            </Stack>
                            <Stack sx={{ fontSize: 10, color: '#333333', }} className="classname-418">{e.message}</Stack>
                        </Stack>
    
                    </Stack>
    
                </Stack>
                <Divider sx={{ borderColor: "#333333", border: '0px, 0px, 1px, 0px' }} className="classname-419" />
            </Stack>
        })}
    </div>
    
    )
}

export default AdminMatchingLeads