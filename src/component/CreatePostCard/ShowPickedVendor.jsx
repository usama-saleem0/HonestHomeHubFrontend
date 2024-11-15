import { Stack } from '@mui/material'
import React, { useEffect,useRef  } from 'react'
import { main_color, user_color, vendor_color } from '../../utils/color'
import { IoLocationSharp } from 'react-icons/io5'
import { GoClock } from "react-icons/go";
import { RiToolsFill } from "react-icons/ri";
import { MdPlumbing } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { get_customer_schedule_async_service, respond_to_customer_schedule_async_service } from '../../services/customerService';
// import { RxCross1 } from "react-icons/rx";
// import { FaCheck } from "react-icons/fa";
import  RxCross1  from "../../../src/assets/cross.png";
import  FaCheck  from "../../../src/assets/right.png";
import { asyncStatus } from '../../utils/async_status';
import { apiHandle } from '../../config/apiHandle/apiHandle';
import { useNavigate } from 'react-router-dom';
import PaymentModal from '../Community/PaymentModal';
import { setSelectedLeadIndex } from '../../store/slice/AuthSlice';
import { socket } from '../../config/apiHandle/apiHandle'
import GigButton from "../button/GigBtn";
import { useState } from 'react';
import InstallmentModal from '../Community/InstallmentModal';
import cross from '../../../src/assets/new/cross.png'
import VendorPopup from './ViewVendorProfile';
import axios from 'axios';
const ShowPickedVendor = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [save_status, setsave_status] = useState({
        status: null
    })
    const [set_index, setSet_index] = useState()
    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(dateObject);
      };
      const formatTime = (timeString) => {
        const timeObject = new Date(`2000-01-01T${timeString}`);
        return timeObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      };
    const { get_customer_schedule_status,
        get_customer_schedule_data,
        get_customer_schedule_error,
        res_vendor_schedule_status,
        res_vendor_schedule_data,
        res_vendor_schedule_error } = useSelector((state) => state.customerAuth)
    useEffect(() => {
        dispatch(get_customer_schedule_async_service())
    }, [])
    socket.on('requestFromUser', (data) => {
        console.log('ahtisham:', data);
        // Handle the response from the server (if needed)
    });
    socket.on('requestResponse', (data) => {
        console.log('samjho ho gya :', data);
        // Handle the response from the server (if needed)
    });
    // console.log("get_customer_schedule_data", get_customer_schedule_data);
    const AcceptHanlde = (id) => {
        // console.log(id);
        dispatch(respond_to_customer_schedule_async_service({
            scheduleId: id,
            response: "accepted"
        }))
        // dispatch(get_customer_schedule_async_service())
    }
    const RejectHanlde = (id) => {
        dispatch(respond_to_customer_schedule_async_service({
            scheduleId: id,
            response: "rejected"
        }))
        // dispatch(get_customer_schedule_async_service())
        // console.log(id);
    }
    const parent_check_status = (value) => {
        setsave_status({ ...save_status, status: value })
    }
    const sendDataToParent = (elem, index) => {
        console.log(elem)
        dispatch(setSelectedLeadIndex(index));
        localStorage.setItem('user_details', JSON.stringify(elem?.vendorDetails))
        console.log("elem", elem?.vendorDetails);
    }
    // console.log('parent_Value', save_status)
    // console.log('index value', set_index)
    // const initiatePayment = async () => {
    //     try {
    //         const obj = {
    //             amount: 150,
    //             customerId: "6579c7b345ba4a149883544d",
    //             vendorId: "6579c76f45ba4a149883543f",
    //             scheduleId: "6579c82d45ba4a1498835562",
    //         };
    //         // Make the API request to initiate payment
    //         const response = await apiHandle.post("/create-payment", obj);
    //         // Extract the paymentId from the response
    //         const paymentId = response.data.paymentId;
    //         // Log the paymentId (you can remove this in production)
    //         console.log("Payment initiated. Payment ID:", paymentId);
    //         // Redirect to the success route
    //         navigate('http://localhost:5000/success');
    //     } catch (error) {
    //         console.error('Error initiating payment:', error);
    //         // Handle the error (e.g., show an error message to the user)
    //     }
    // };
    useEffect(() => {
        if (res_vendor_schedule_status === asyncStatus.SUCCEEDED) {
            dispatch(get_customer_schedule_async_service())
            console.log(get_customer_schedule_async_service(),"sheduleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        }
    }, [, res_vendor_schedule_status])
    console.log(get_customer_schedule_data,"DATATATATATATATATATATTSTSTSTSSSSSS")
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => {
      setIsOpen(true);
    };
    const closePopup = () => {
      setIsOpen(false);
    };
    const [pickedvendor, setpickedvendor] = useState(true)
    const handleClick =(Vendor_id,Customer_id,scheduleId)=>{
        console.log("Selected Person",Vendor_id, Customer_id,scheduleId)
        // alert(id)
        const messageData = {
            sender: Customer_id, // Assuming storedUserId is the vendorId
            receiver: Vendor_id, // Assuming receivedObject._id is the customerId
            message: `You have been selected for the Job`,
          };
          // Emit chat message event with sender, receiver, and message
          socket.emit('send_message', messageData);
          const formData={
            SheduleID: scheduleId,
          }
          axios.post(`https://honesthome-backend-6d8f37871a1b.herokuapp.com/postpickedvendor`, formData)
          .then((res) => {
            console.log("PICKED VENDOR POSTED");
          })
          .catch((error) => {
            console.error("Error posting picked vendor:", error);
          });
    }
    return (
        <div className="classname-4410">
        {/* <button onClick={openPopup}>Picked Vendors</button> */}
<div className='classname-441 customer_shedule'>
{get_customer_schedule_data?.map((e, i) => (
 e.Picked_Vendor ==='yes' &&
    <Stack key={i} sx={{ backgroundColor: '#FFFFFF', p: 1, borderRadius: "10px", position: 'relative', mt: 1 }}
    className='classname-442 customer_shedule1'>
                     <Stack className='classname-443 backimage'>
                     <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #002758' }}>
                         <Stack sx={{ fontSize: 24, color: '#002758', fontWeight: 'bold' }} className='classname-444 customer_shedule3'>{e.Name}</Stack>
                     </div>
                     <Stack flexDirection={'row'} alignItems={'center'} mt={0.5} className='classname-445 customer_shedule10'>
                         <Stack className='classname-446 customer_shedule11'>
                             <IoLocationSharp size={22} color={user_color} />
                         </Stack>
                         <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-447 customer_shedule12'>{e.Home_Address}</Stack>
                     </Stack>
                     <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-448 customer_shedule13'>
                         <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-449 customer_shedule14'>
                             <Stack className='classname-450 customer_shedule15'>
                                 <GoClock size={22} color={user_color} />
                             </Stack>
                             <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-451 customer_shedule16'>{e.time ? formatTime(e.time) : '00:00'}</Stack>
                         </Stack>
                     </Stack>
                     <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-452 customer_shedule20'>
                         <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-453 customer_shedule21'>
                             <Stack className='classname-454 customer_shedule21'>
                                 <GoClock size={22} color={user_color} className='classname-455 customer_shedule22' />
                             </Stack>
                             <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-456 customer_shedule23'>{e.date === '2000-01-01' ? '---' : formatDate(e.date)}</Stack>
                         </Stack>
                     </Stack>
                     <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-457 customer_shedule24'>
                         <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-458 customer_shedule25'>
                             <Stack className='classname-459 customer_shedule26'>
                                 <IoLocationSharp size={22} color={user_color} />
                             </Stack>
                             <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-460 customer_shedule27'>
                                 Status:
                             </Stack>
                             <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} className='classname-461 customer_shedule28'>{e.status}</Stack>
                         </Stack>
                     </Stack>
                     <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-462 customer_shedule29'>
                         <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-463 customer_shedule30'>
                             <Stack className='classname-464 customer_shedule31'>
                                 <IoLocationSharp size={22} color={user_color} />
                             </Stack>
                             <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-465 customer_shedule32'>
                                 Note:
                             </Stack>
                             <Stack sx={{ fontSize: 18, color: '#002758' }} className='classname-466 customer_shedule33'>{e.shedule_descriptions ? e.shedule_descriptions : '--'}</Stack>
                         </Stack>
                     </Stack>
                 </Stack>
    </Stack>
))}
</div>
</div>
    )
}
export default ShowPickedVendor