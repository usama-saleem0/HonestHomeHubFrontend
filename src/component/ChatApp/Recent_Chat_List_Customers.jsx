import { Divider, Stack } from '@mui/material'
import React from 'react'
import Get_Assistance from './Get_Assistance'
import { GoDotFill } from 'react-icons/go'
import { vendor_color } from '../../utils/color'
import { useDispatch, useSelector } from 'react-redux'
import { get_recent_vendors_chats_async_service } from '../../services/customerService'
import { useEffect } from 'react'
import { getTimeAgo } from '../../utils/common/check_date_time'
import { setSelectedLeadIndex } from '../../store/slice/AuthSlice';

const Recent_Chat_List_Customers = () => {

    const dispatch = useDispatch()

    const { get_vendors_recent_chat_status,
        get_vendors_recent_chat_data,
        get_vendors_recent_chat_error } = useSelector((state) => state.customerAuth)


    useEffect(() => {
        dispatch(get_recent_vendors_chats_async_service())
    }, [])

    const sendDataToParent = (elem, index) => {
        console.log(elem)
        dispatch(setSelectedLeadIndex(index));
        localStorage.setItem('user_details', JSON.stringify(elem?.userDetails))
        // console.log("elem", elem?.vendorDetails);
    }

    // console.log("get_vendors_recent_chat_data", get_vendors_recent_chat_data);

    return (
      <>
      {get_vendors_recent_chat_data?.map((elem, ind) => {
        console.log('check', elem);
        return elem?.recentChats?.map((e, i) => {
          console.log('eefefefe', elem);
    
          // Check if userDetails exists before rendering
          if (e.userDetails) {
            const timeAgo = getTimeAgo(e.timestamp);
    
            return (
              <Stack key={i} className="unique-class-96">
                <Stack p={1} className="unique-class-97">
                  <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} className="unique-class-98">
                    <Stack flexDirection={'row'} alignItems={'center'} className="unique-class-99">
                      <Stack className="unique-class-100">
                        <GoDotFill color={vendor_color} className="unique-class-101" />
                      </Stack>
                      <Stack sx={{ color: '#000000', fontSize: 20, fontWeight: 1000, cursor: 'pointer' }} onClick={() => sendDataToParent(e, i + 1)} className="unique-class-102">
                        {e.userDetails.Name ? e.userDetails.Name : "Expert"}
                      </Stack>
                    </Stack>
                    <Stack sx={{ backgroundColor: vendor_color, borderRadius: '6px', p: 0.5, fontSize: 9, color: 'white', fontWeight: 'bold' }} className="unique-class-103">{timeAgo}</Stack>
                  </Stack>
                  <Stack ml={2} className="unique-class-104">
                    <Stack sx={{ color: '#000000', fontSize: 15, cursor: 'pointer'}} onClick={() => sendDataToParent(e, i + 1)} className="unique-class-105"> {e.message}</Stack>
                  </Stack>
                </Stack>
                <Divider className="unique-class-106" />
              </Stack>
            );
          }
    
          return null; // If userDetails doesn't exist, return null
        });
      })}
    </>
    
      );
}

export default Recent_Chat_List_Customers