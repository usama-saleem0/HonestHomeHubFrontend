import { Divider, Stack } from '@mui/material'
import React from 'react'
import Get_Assistance from './Get_Assistance'
import { GoDotFill } from 'react-icons/go'
import { vendor_color } from '../../utils/color'
import { get_recent_customer_chats_async_service } from '../../services/vendorService'
import { useDispatch, useSelector } from 'react-redux'
import { getTimeAgo } from '../../utils/common/check_date_time'
import { useEffect } from 'react'

const Recent_Chat_List_Vendor = () => {

    const dispatch = useDispatch()

    const { get_customers_recent_chat_status,
        get_customers_recent_chat_data,
        get_customers_recent_chat_error } = useSelector((state) => state.vendorAuth)


    useEffect(() => {
        dispatch(get_recent_customer_chats_async_service())
    }, [])
    return (
        <>
        {
            get_customers_recent_chat_data?.map((elem, ind) => {
                // console.log(elem);
                return elem?.recentChats?.map((e, i) => {
                    const timeAgo = getTimeAgo(e.timestamp);
                    return (
                        <Stack key={i} className="unique-class-107">
                            <Stack p={1} className="unique-class-108">
                                <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} className="unique-class-109">
                                    <Stack flexDirection={'row'} alignItems={'center'} className="unique-class-110">
                                        <Stack className="unique-class-111">
                                            <GoDotFill color={vendor_color} className="unique-class-112" />
                                        </Stack>
                                        <Stack sx={{ color: '#000000', fontSize: 15, fontWeight: 1000 }} className="unique-class-113">{e.userDetails?.Name ? e.userDetails?.Name : "Expert"}</Stack>
                                    </Stack>
                                    <Stack sx={{ backgroundColor: vendor_color, borderRadius: '6px', p: 0.5, fontSize: 9, color: 'white', fontWeight: 'bold' }} className="unique-class-114">{timeAgo}</Stack>
                                </Stack>
                                <Stack ml={2} className="unique-class-115">
                                    <Stack sx={{ color: '#000000', fontSize: 12 }} className="unique-class-116">{e.message}</Stack>
                                </Stack>
                            </Stack>
                            <Divider className="unique-class-117" />
                        </Stack>
                    );
                })
            })
        }
    </>
    
    )
}

export default Recent_Chat_List_Vendor