import { Divider, Stack } from '@mui/material'
import React from 'react'
import Get_Assistance from './Get_Assistance'
import { GoDotFill } from 'react-icons/go'
import { vendor_color } from '../../utils/color'
import { useDispatch, useSelector } from 'react-redux'
import { get_recent_vendors_chats_async_services } from '../../services/customerService'
import { useEffect } from 'react'
import { getTimeAgo } from '../../utils/common/check_date_time'
import { setSelectedLeadIndex } from '../../store/slice/AuthSlice';
import { useState } from 'react';


const Recent_Chat_List_Customers = () => {

    const dispatch = useDispatch()


    const [initialUserDetails, setInitialUserDetails] = useState(localStorage.getItem('userId'));

  useEffect(() => {
    // Set the initial userId when the component mounts
    setInitialUserDetails(localStorage.getItem('user_details'));
    // setInitialUserDetails(localStorage.getItem('user_details'));

    // Update storedUserId state when the value changes in local storage
    const handleStorageChange = () => {
      setInitialUserDetails(localStorage.getItem('user_details'));
    };

    // Listen for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

    // const { get_vendors_recent_chat_status,
    //     get_vendors_recent_chat_data,
    //     get_vendors_recent_chat_error } = useSelector((state) => state.customerAuth)

    //     const customerdetails = localStorage.getItem('user_details');
    //     console.log('cccccccccccccc', customerdetails)

    // useEffect(() => {
    //   const storedUserId = '658accf531fdde44bc3f16e1';
    //     dispatch(get_recent_vendors_chats_async_services(storedUserId))
    // }, [])




    const { get_vendors_recent_chat_status,
      get_vendors_recent_chat_data,
      get_vendors_recent_chat_error } = useSelector((state) => state.customerAuth)

      const customerdetails = localStorage.getItem('user_details');
      const retrievedObjects = JSON.parse(customerdetails);
      console.log('cccccccccccccc', retrievedObjects._id)
     

  useEffect(() => {
    const storedUserId = retrievedObjects._id;
      dispatch(get_recent_vendors_chats_async_services(storedUserId))
  }, [])

    const sendDataToParent = (elem, index) => {
      const nazar = JSON.parse(initialUserDetails)
      console.log('iiiiiiii',nazar._id)
        const storedUserId = nazar._id;
        dispatch(setSelectedLeadIndex(index));
        localStorage.setItem('user_details', JSON.stringify(elem?.userDetails))
        localStorage.setItem('userId', storedUserId)
      


        // console.log("elem", elem?.vendorDetails);

       
      
    }

    // console.log("get_vendors_recent_chat_data", get_vendors_recent_chat_data);

    return (
      <>
      {get_vendors_recent_chat_data?.map((elem, ind) => {
        console.log('check', elem);
        return elem?.recentChats?.map((e, i) => {
          
          // Check if userDetails exists before rendering
          if (e.userDetails) {
            const timeAgo = getTimeAgo(e.timestamp);
    
            return (
              <Stack key={i} className="unique-class-85">
                <Stack p={1} className="unique-class-86">
                  <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} className="unique-class-87">
                    <Stack flexDirection={'row'} alignItems={'center'} className="unique-class-88">
                      <Stack className="unique-class-89">
                        <GoDotFill color={vendor_color} className="unique-class-90" />
                      </Stack>
                      <Stack sx={{ color: '#000000', fontSize: 20, fontWeight: 1000, cursor: 'pointer' }} onClick={() => sendDataToParent(e, i + 1)} className="unique-class-91">
                        {e.userDetails.Name ? e.userDetails.Name : "Expert"}
                      </Stack>
                    </Stack>
                    <Stack sx={{ backgroundColor: vendor_color, borderRadius: '6px', p: 0.5, fontSize: 9, color: 'white', fontWeight: 'bold' }} className="unique-class-92">{timeAgo}</Stack>
                  </Stack>
                  <Stack ml={2} className="unique-class-93">
                    <Stack sx={{ color: '#000000', fontSize: 15, cursor: 'pointer'}} onClick={() => sendDataToParent(e, i + 1)} className="unique-class-94"> {e.message}</Stack>
                  </Stack>
                </Stack>
                <Divider sx={{ border: '1px solid brown' }} className="unique-class-95" />
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