import { Divider, Stack } from '@mui/material'
import React from 'react'
import { GoDotFill } from "react-icons/go";
import { user_color } from '../../utils/color';
import { IoLocationSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../../config/apiHandle/apiHandle'
import { useEffect } from 'react';
import { get_all_vendor_profile_async_service } from '../../services/customerService';
import { setSelectedLeadIndex } from '../../store/slice/AuthSlice';
import { useParams } from 'react-router-dom';
import ViewVendorProfileModal from '../Community/ViewVendorProfileModal ';


const MatchingLeadsCustomer = () => {

    const dispatch = useDispatch()
    const { searchTerm } = useParams();

    const { get_vendor_profile_status,
        get_vendor_profile_data,
        get_vendor_profile_error } = useSelector((state) => state.customerAuth)

    const storedUserQuery = localStorage.getItem('user_query');
    // console.log(storedUserQuery);

    useEffect(() => {
        dispatch(get_all_vendor_profile_async_service(storedUserQuery));

        console.log("MATCHIG VENDOTSDSDSKDJKSDJLDJLKSDJ ")

       
    
    }, [])

    socket.on('requestResponse', (data) => {
        console.log('Request response received:', data);
        // Handle the response from the server (if needed)
    });

    // console.log("get_vendor_profile_data", get_vendor_profile_data);

    const sendDataToParent = (elem, index) => {
        dispatch(setSelectedLeadIndex(index));
        localStorage.setItem('user_details', JSON.stringify(elem?.VendorInfo))
        console.log("elemsdas", elem?.VendorInfo);
    }


   

    return (
        <div className="classname-500">
        {get_vendor_profile_data?.map((e, i) => {
            return <Stack key={i}>
                <Stack p={1} style={{ paddingRight: '10px', borderBottom: '1px solid #01BAF2' }} className='classname-501'>
                    <Stack onClick={() => sendDataToParent(e, i + 1)} sx={{ cursor: 'pointer' }} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Stack flexDirection={'row'} alignItems={'center'}>
                            <Stack>
                                <GoDotFill color={user_color} />
                            </Stack>
                            <Stack sx={{ color: '#000000', fontSize: 20, fontWeight: 1000 }} className='classname-502'>{e.VendorInfo?.Name}</Stack>
                        </Stack>
                        <Stack></Stack>
                    </Stack>
                    <Stack onClick={() => sendDataToParent(e, i + 1)} sx={{ cursor: 'pointer' }} ml={2} className='classname-503'>
                        <Stack flexDirection={'row'} alignItems={'center'} sx={{ fontSize: 14, color: '#000000' }}>
                            {e.VendorInfo?.selected_queries?.map((vendorSelectedQuery, i) => {
                                const jobDetails = e?.CustomersJobs;
                                const get_query = jobDetails.selected_queries === vendorSelectedQuery ? jobDetails.selected_queries : null;
                                return <Stack sx={{ color: 'black', fontSize: 12 }} flexDirection={'row'} alignItems={'start'} className='classname-504'>{get_query}</Stack>
                            })}
                        </Stack>
                        <Stack ml={-0.3} flexDirection={'row'} alignItems={'center'}>
                            <Stack>
                                <IoLocationSharp size={13} color={user_color} />
                            </Stack>
                            <Stack sx={{ fontSize: 10, color: '#333333' }} className='classname-505'>{e.VendorInfo?.Home_Address}</Stack>
                        </Stack>
                        <Stack ml={-0.2} flexDirection={'row'} alignItems={'center'} gap={0.5}>
                            <Stack sx={{ fontSize: 10, color: '#333333', fontWeight: 'bold' }}>ZipCode</Stack>
                            <Stack sx={{ fontSize: 10, color: '#333333' }}>/ {e.VendorInfo?.zipCode}</Stack>
                        </Stack>
                    </Stack>
                    <Stack  className='hello-bhai'   style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Stack ml={2} sx={{ cursor: 'pointer' }} style={{ backgroundColor: '#01BAF2', padding: '10px 50px 10px 50px', borderRadius: '5px', color: 'white', fontSize: '20px', fontWeight: 'bold' }} className='classname-506' onClick={() => sendDataToParent(e, i + 1)}>
                            Chat Now
                        </Stack>
                        <Stack ml={2} sx={{ cursor: 'pointer' }} style={{ backgroundColor: 'white', padding: '10px 20px 10px 20px', borderRadius: '5px', color: 'white', fontSize: '20px', border: '1px solid #002758' }} className='classname-507'>
                            <ViewVendorProfileModal get_profile_data={e} />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>;
        })}
    </div>
    
    )
}

export default MatchingLeadsCustomer