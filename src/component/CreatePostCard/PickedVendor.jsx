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
// import cross from '../../../src/assets/new/icons8-multiply-48.png'
import VendorPopup from './ViewVendorProfile';
import axios from 'axios';
import cross from '../../../src/assets/new/icons8-multiply-48.png'
import { toast } from 'react-toastify';


const PickedVendor = () => {

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



   
 
    
    
  
    const [pickedvendor, setpickedvendor] = useState(true)

    // const handleClick =(Vendor_id,Customer_id,scheduleId)=>{

    

    //     console.log("Selected Person",Vendor_id, Customer_id,scheduleId)
    //     // alert(id)

    //     const messageData = {
    //         sender: Customer_id, 
    //         receiver: Vendor_id, 
    //         message: `You have been selected for the Job`,
    //       };
         
    //       socket.emit('send_message', messageData);


    //       const formData={

    //         SheduleID: scheduleId,


    //       }

    //       axios.post(`http://localhost:5000/postpickedvendor`, formData)
    //       .then((res) => {
    //         console.log("PICKED VENDOR POSTED");
    //       })
    //       .catch((error) => {
    //         console.error("Error posting picked vendor:", error);
    //       });





    // }


    const handleClick = async (Vendor_id, Customer_id, scheduleId) => {
        console.log("Selected Person", Vendor_id, Customer_id, scheduleId);
    
        const messageData = {
            sender: Customer_id,
            receiver: Vendor_id,
            message: `You have been selected for the Job`,
        };
    
        socket.emit('send_message', messageData);
    
        const formData = {
            SheduleID: scheduleId,
        };
    
        try {
            const res = await axios.post(`https://honesthome-backend-6d8f37871a1b.herokuapp.com/postpickedvendor`, formData);
            console.log("PICKED VENDOR POSTED");
            toast.success("Vendor Selected Successfully!")
            window.location.reload()
        } catch (error) {
            console.error("Error posting picked vendor:", error);
        }
    };
    
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
      setIsOpen(true);
    };
  
    const closePopup = () => {
      setIsOpen(false);
    };



    
    const [isOpen1, setIsOpen1] = useState(false);

    const openPopup1 = () => {
      setIsOpen1(true);
    };
  
    const closePopup1 = () => {
      setIsOpen1(false);

    };


    const togglePopup = () => {
        setIsOpen(!isOpen);
      };
    



    return (


        <div className="classname-4402">

                        <button onClick={togglePopup} className='showpickedvendor'>
                            Select Vendor
             
             
                        </button>

{/*         
        {
            isOpen1 &&
        

            <table>
            <thead>
                <tr>
                   
                    <th>Name</th>
                    <th>Select the Vendor</th>
                </tr>
            </thead>
            <tbody>
                {get_customer_schedule_data?.map((item, index) => (
                    <tr key={index}>
                       
                        <td>{item.Name}</td>
                        <td>
                            <button onClick={() => handleClick(item.vendorId , item.customerId , item.scheduleId)} className='yes-button'>
                            yes
                            </button>
                            </td>
                    </tr>
                ))}
            </tbody>
        </table>

      
        

                } */}


{isOpen && (
        <div className="popup-container">
          <div className="popup">
            <div className="popup-inner">
             
                <div className='AHTI_USTAD'>

              {/* <button onClick={togglePopup}>Close</button> */}
              <img src={cross} onClick={togglePopup} style={{width:'25px'}}/>

                </div>
                <h1 style={{textAlign:'center'}}>Select Vendor</h1>
                
            <table>
            <thead>
                <tr>
                   
                    <th>Name</th>
                    <th>Select the Vendor</th>
                </tr>
            </thead>
            <tbody>
                {get_customer_schedule_data?.map((item, index) => (
                    <tr key={index}>
                       
                        <td>{item.Name}</td>
                        <td>
                            <button onClick={() => handleClick(item.vendorId , item.customerId , item.scheduleId)} className='yes-button'>
                            yes
                            </button>
                            </td>
                    </tr>
                ))}
            </tbody>
        </table>

            </div>
          </div>
        </div>
      )}
    </div>
    













    //     <div>
    //         {
    //             get_customer_schedule_data?.map((e, i) => {
    //                 console.log(e)
    //                 return <> <Stack sx={{ backgroundColor: main_color, p: 1, borderRadius: "10px", position: 'relative', mt: 1 }}>
    //                     <Stack sx={{ flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
    //                         <Stack sx={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{e.Name}</Stack>
    //                         {/* <Stack sx={{ fontSize: 10, color: 'white', textDecoration: 'underline' }}>
    //                             View Details
    //                         </Stack> */}
    //                         {e.status === "pending" ? <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} textAlign={'end'} gap={0.2}>

    //                             <Stack
    //                                 onClick={() => AcceptHanlde(e.scheduleId)}
    //                                 style={{ backgroundColor: user_color, color: 'white', padding: '3px', width: '40px', height: '30px', alignItems: 'center', textAlign: 'center', borderRadius: '5px', cursor: 'pointer' }}>
    //                                 <FaCheck size={20} />
    //                             </Stack>
    //                             <Stack
    //                                 onClick={() => RejectHanlde(e.scheduleId)}
    //                                 style={{ backgroundColor: 'red', color: 'white', padding: '3px', width: '40px', height: '30px', alignItems: 'center', textAlign: 'center', borderRadius: '5px', cursor: 'pointer' }}>
    //                                 <RxCross1 size={20} />
    //                             </Stack>
    //                         </Stack> : <Stack>
    //                             {
    //                                 e.Paystatus === "Paid" && e.scheduleId === e.scheduleId ? <Stack></Stack> :
    //                                 <GigButton
    //                                 onClick={() => sendDataToParent(e, i + 1)}
    //     // borderColor={user_color}
    //     // color={theme.text_color}
    //     // padding="10px 20px 10px 20px"
    //     style={{
    //       backgroundColor: user_color,
    //       color: "white",
    //       padding: "10px 20px 10px 20px"
    //     }}
    //     title="Chat Now "
    //   />

    //                                     // <PaymentModal parent_check_status={parent_check_status} set_selected_index={setSet_index} get_schedule_data={e} save_index={i} />
    //                             }
    //                         </Stack>
    //                         }
    //                     </Stack>
    //                     <Stack flexDirection={'row'} alignItems={'center'} mt={0.5}>
    //                         <Stack>
    //                             <IoLocationSharp size={22} color={user_color} />
    //                         </Stack>
    //                         <Stack sx={{ fontSize: 18, color: 'white', }} ml={1}>{e.Home_Address}</Stack>
    //                     </Stack>
    //                     <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
    //                         <Stack flexDirection={'row'} alignItems={'center'} gap={0.3}>
    //                             <Stack>
    //                                 <GoClock size={22} color={user_color} />
    //                             </Stack>
    //                             <Stack sx={{ fontSize: 18, color: 'white', }} ml={1}>{e.time}</Stack>
    //                         </Stack>
    //                         <Stack sx={{ backgroundColor: user_color, p: 1, position: 'absolute', right: 0, bottom: 0, borderTopLeftRadius: 50, textAlign: 'center', alignItems: 'center' }}>
    //                             <Stack>
    //                                 <Stack sx={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>4.5
    //                                 </Stack>
    //                                 <Stack sx={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Rating</Stack>
    //                             </Stack>
    //                         </Stack>
    //                     </Stack>
    //                     <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
    //                         <Stack flexDirection={'row'} alignItems={'center'} gap={0.3}>
    //                         <Stack>
    //                             <IoLocationSharp size={22} color={user_color} />
    //                         </Stack>
    //                             <Stack sx={{ fontSize: 18, color: 'white', fontWeight: 'vold' }}>
    //                                 Status:
    //                             </Stack>
    //                             <Stack sx={{ fontSize: 18, color: 'white', }} >{e.status}</Stack>
    //                         </Stack>
    //                     </Stack>
                       
    //                 </Stack>

    //                 </>
    //             })
    //         }

    //     </div>


    // <div>
    //         {get_customer_schedule_data?.map((e, i) => (
    //             <Stack key={i} sx={{ backgroundColor: main_color, p: 1, borderRadius: "25px", position: 'relative', mt: 1 }}>
    //                 <Stack sx={{ flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
    //                     <Stack sx={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{e.Name}</Stack>
    //                     {e.status === "pending" ? (
    //                         <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'} textAlign={'end'} gap={0.2}>
    //                             <Stack
    //                                 onClick={() => AcceptHanlde(e.scheduleId)}
    //                                 style={{ backgroundColor: user_color, color: 'white', padding: '3px', width: '40px', height: '30px', alignItems: 'center', textAlign: 'center', borderRadius: '15px', cursor: 'pointer' }}>
    //                                 <FaCheck size={20} />
    //                             </Stack>
    //                             <Stack
    //                                 onClick={() => RejectHanlde(e.scheduleId)}
    //                                 style={{ backgroundColor: 'red', color: 'white', padding: '3px', width: '40px', height: '30px', alignItems: 'center', textAlign: 'center', borderRadius: '15px', cursor: 'pointer' }}>
    //                                 <RxCross1 size={20} />
    //                             </Stack>
    //                         </Stack>
    //                     ) : (
    //                         <Stack>
    //                             {e.Paystatus === "Paid" && e.scheduleId === e.scheduleId ? (
    //                                   <GigButton
    //                                   onClick={() => sendDataToParent(e, i + 1)}
    //                                   style={{
    //                                       backgroundColor: user_color,
    //                                       color: "white",
    //                                       padding: "5px 20px 5px 20px"
    //                                   }}
    //                                   title="Chat Now"
    //                               />
    //                             ) : (
    //                                 <>
    //                                     {e.Paystatus === "Payment Created" && (
    //                                         <PaymentModal parent_check_status={parent_check_status} set_selected_index={setSet_index} get_schedule_data={e} save_index={i} />
    //                                     )}
    //                                     <GigButton
    //                                         onClick={() => sendDataToParent(e, i + 1)}
    //                                         style={{
    //                                             backgroundColor: user_color,
    //                                             color: "white",
    //                                             padding: "5px 20px 5px 20px"
    //                                         }}
    //                                         title="Chat Now"
    //                                     />
    //                                 </>
    //                             )}
    //                         </Stack>
    //                     )}
    //                 </Stack>
    //                 <Stack flexDirection={'row'} alignItems={'center'} mt={0.5}>
    //                          <Stack>
    //                              <IoLocationSharp size={22} color={user_color} />
    //                          </Stack>
    //                          <Stack sx={{ fontSize: 18, color: 'white', }} ml={1}>{e.Home_Address}</Stack>
    //                      </Stack>
    //                      <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
    //                          <Stack flexDirection={'row'} alignItems={'center'} gap={0.3}>
    //                              <Stack>
    //                                  <GoClock size={22} color={user_color} />
    //                              </Stack>
    //                              <Stack sx={{ fontSize: 18, color: 'white', }} ml={1}>{e.time ? formatTime(e.time) : '00:00'}</Stack>
    //                          </Stack>

                             
    //                          <Stack sx={{ backgroundColor: user_color, p: 1, position: 'absolute', right: 0, bottom: 0, borderTopLeftRadius: 50, textAlign: 'center', alignItems: 'center' }}>
    //                              <Stack>
    //                                  <Stack sx={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>4.5
    //                                  </Stack>
    //                                  <Stack sx={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Rating</Stack>
    //                              </Stack>
    //                          </Stack>
    //                      </Stack>
    //                      <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
    //                          <Stack flexDirection={'row'} alignItems={'center'} gap={0.3}>
    //                          <Stack>
    //                          <GoClock size={22} color={user_color} />
    //                          </Stack>
                                
    //                              <Stack sx={{ fontSize: 18, color: 'white', }} ml={1}>{e.date ? formatDate(e.date) : '12-12-12'}</Stack>
    //                          </Stack>
    //                     </Stack>
                       
    //                      <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
    //                          <Stack flexDirection={'row'} alignItems={'center'} gap={0.3}>
    //                          <Stack>
    //                              <IoLocationSharp size={22} color={user_color} />
    //                          </Stack>
    //                              <Stack sx={{ fontSize: 18, color: 'white', fontWeight: 'vold' }} ml={1}>
    //                                  Status:
    //                              </Stack>
    //                              <Stack sx={{ fontSize: 18, color: 'white', }} >{e.status}</Stack>
    //                          </Stack>
    //                     </Stack>

                        
    //              </Stack>

                
    //         ))}
    //     </div>


   

    )
}

export default PickedVendor 