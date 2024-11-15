import { Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { main_color, user_color, vendor_color } from "../../utils/color";
import { IoLocationSharp } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { RiToolsFill } from "react-icons/ri";
import { MdPlumbing } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  get_customer_schedule_async_service,
  respond_to_customer_schedule_async_service,
} from "../../services/customerService";
// import { RxCross1 } from "react-icons/rx";
// import { FaCheck } from "react-icons/fa";

import RxCross1 from "../../../src/assets/cross.png";
import FaCheck from "../../../src/assets/right.png";

import { asyncStatus } from "../../utils/async_status";
import { apiHandle } from "../../config/apiHandle/apiHandle";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../Community/PaymentModal";
import { setSelectedLeadIndex } from "../../store/slice/AuthSlice";
import { socket } from "../../config/apiHandle/apiHandle";
import GigButton from "../button/GigBtn";
import { useState } from "react";
import InstallmentModal from "../Community/InstallmentModal";
import cross from "../../../src/assets/new/cross.png";
import VendorPopup from "./ViewVendorProfile";
import PickedVendor from "./PickedVendor";
import ReviewModal from "../Community/ReviewModel";
import ViewVendorProfile from "./ViewProfileVendor-CustomerShedule";
import ViewVendorQuote from "./ViewVendorQuote";
import Expert_Box from "./ExpertBox";

const VsitingVendor = ({ job_id1 }) => {
  const TS = job_id1;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [save_status, setsave_status] = useState({
    status: null,
  });

  const [set_index, setSet_index] = useState();

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(dateObject);
  };

  const formatTime = (timeString) => {
    const timeObject = new Date(`2000-01-01T${timeString}`);
    return timeObject.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const {
    get_customer_schedule_status,
    get_customer_schedule_data,
    get_customer_schedule_error,
    res_vendor_schedule_status,
    res_vendor_schedule_data,
    res_vendor_schedule_error,
  } = useSelector((state) => state.customerAuth);

  useEffect(() => {
    dispatch(get_customer_schedule_async_service());
  }, []);

  socket.on("requestFromUser", (data) => {
    console.log("ahtisham:", data);
    // Handle the response from the server (if needed)
  });

  socket.on("requestResponse", (data) => {
    console.log("samjho ho gya :", data);
    // Handle the response from the server (if needed)
  });

  // console.log("get_customer_schedule_data", get_customer_schedule_data);

  const AcceptHanlde = (id) => {
    console.log("step3");
    dispatch(
      respond_to_customer_schedule_async_service({
        scheduleId: id,
        response: "selected",
      })
    );
    // dispatch(get_customer_schedule_async_service())

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const RejectHanlde = (id) => {
    dispatch(
      respond_to_customer_schedule_async_service({
        scheduleId: id,
        response: "rejected",
      })
    );
    // dispatch(get_customer_schedule_async_service())
    // console.log(id);
  };
  const parent_check_status = (value) => {
    setsave_status({ ...save_status, status: value });
  };

  const sendDataToParent = (elem, index) => {
    console.log(elem);
    dispatch(setSelectedLeadIndex(index));
    localStorage.setItem("user_details", JSON.stringify(elem?.vendorDetails));
    console.log("elem", elem?.vendorDetails);
  };

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

  // useEffect(() => {
  //     if (res_vendor_schedule_status === asyncStatus.SUCCEEDED) {
  //         dispatch(get_customer_schedule_async_service())
  //         console.log(get_customer_schedule_async_service(),"sheduleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")

  //     }
  // }, [, res_vendor_schedule_status])
  // console.log(get_customer_schedule_data,"DATATATATATATATATATATTSTSTSTSSSSSS")

  useEffect(() => {
    dispatch(get_customer_schedule_async_service());

    const intervalId = setInterval(() => {
      dispatch(get_customer_schedule_async_service());
      console.log(
        "Dispatching get_customer_schedule_async_service",
        get_customer_schedule_data
      );
    }, 300000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dispatch]); // Include dispatch in the dependency array

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const [pickedvendor, setpickedvendor] = useState(true);

  const formatTime1 = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${suffix}`;
  };

  const DateFormatCustom = (date) => {
    let x = date;
  
    const month = [
      "ts",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const mm = x.split("-")[1];
  
    const yy = x.split("-")[0];
  
    const dd = x.split("-")[2];
  
    const y = mm[0].includes("0") ? mm.split("0")[1] : mm;
  
    // console.log(y)
  
    const  final_date= month[y]+" "+ dd+" "+ yy
  
    return final_date;
  
    // console.log(dd,month[y],yy)
  };

  return (
    <div className="select_qoutes_step3 select--quote--3--alt--h">
      <div className="classname-440 RR">
        {/* <button onClick={openPopup}>Picked Vendors</button> */}

        {get_customer_schedule_data
          ?.filter(
            (e) => e.customerJobDetails.selected_queries === "Landscaping"
          )
          // .slice(0, 3)
          .map((e, i) => (
            // Render logic for the first three entries with selected_queries equal to "Landscaping"

            <div className="darshan1">
              {/* <p>ID:{TS}</p> */}

              <Stack key={i}>
                {e.jobId === TS && e.status === "accepted" && (
                  // <div sx={{ backgroundColor: '#FFFFFF', p: 1, borderRadius: "10px", position: 'relative', mt: 1 }}

                  //     className='classname-442 customer_shedule1    notpicked'>

                  //         <Stack className='classname-443 backimage'>

                  //     {console.log(job_id1,'ts')}

                  //             <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #002758' }}>
                  //                 <Stack sx={{ fontSize: 24, color: '#002758', fontWeight: 'bold' }} className='classname-444 customer_shedule3'>{e.Name}</Stack>
                  //             </div>

                  //                 <div  style={{ display: 'flex', justifyContent: 'center',  }} className='vendor-view-button'>

                  //             <ViewVendorProfile vendorID={e.vendorId}/>
                  //                 </div>
                  //             <Stack flexDirection={'row'} alignItems={'center'} mt={0.5} className='classname-445 customer_shedule10'>
                  //                 <Stack className='classname-446 customer_shedule11'>
                  //                     <IoLocationSharp size={22} color={user_color} />
                  //                 </Stack>
                  //                 <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-447 customer_shedule12'>{e.Home_Address}</Stack>
                  //             </Stack>

                  //             <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-448 customer_shedule13'>
                  //                 <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-449 customer_shedule14'>
                  //                     <Stack className='classname-450 customer_shedule15'>
                  //                         <GoClock size={22} color={user_color} />
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-451 customer_shedule16'>{e.time ? formatTime(e.time) : '00:00'}</Stack>
                  //                 </Stack>
                  //             </Stack>
                  //             <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-452 customer_shedule20'>
                  //                 <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-453 customer_shedule21'>
                  //                     <Stack className='classname-454 customer_shedule21'>
                  //                         <GoClock size={22} color={user_color} className='classname-455 customer_shedule22' />
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-456 customer_shedule23'>{e.date === '2000-01-01' ? '---' : formatDate(e.date)}</Stack>
                  //                 </Stack>
                  //             </Stack>
                  //             <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-457 customer_shedule24'>
                  //                 <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-458 customer_shedule25'>
                  //                     <Stack className='classname-459 customer_shedule26'>
                  //                         <IoLocationSharp size={22} color={user_color} />
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-460 customer_shedule27'>
                  //                         Status:
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} className='classname-461 customer_shedule28'>{e.status}</Stack>
                  //                 </Stack>
                  //             </Stack>
                  //             <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-462 customer_shedule29'>
                  //                 <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-463 customer_shedule30'>
                  //                     <Stack className='classname-464 customer_shedule31'>
                  //                         <IoLocationSharp size={22} color={user_color} />
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-465 customer_shedule32'>
                  //                         Quote:
                  //                     </Stack>

                  //                 </Stack>
                  //             </Stack>

                  //         </Stack>

                  //         <div>
                  //                         <button onClick={()=>{AcceptHanlde(e.scheduleId)}}>
                  //                             Select
                  //                         </button>

                  //                     </div>

                  //         </div>

                  <div class="sh-card">
                    <div class="sh-box-1">
                      <div class="sh-list-1">
                        <span className="sh--list--1--img--cont--h">
                          <img src={e.gig_image} alt="" />
                        </span>
                        <span>
                          <h2>{e.Vendor_Name}</h2>
                          <h3>{e.customerJobDetails.selected_queries}</h3>
                          {/* <button>View</button> */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            className="vendor-view-button"
                          >
                            <ViewVendorProfile vendorID={e.vendorId} />
                          </div>
                        </span>
                      </div>
                      {/* <div class="sh-list-2">
            <p>Note:</p>



        </div>

        <p>{e.status} </p> */}

                      <div class="sh-list-2">
                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12.0015 6.80764C12.0015 6.65463 11.9407 6.50788 11.8325 6.39969C11.7243 6.2915 11.5776 6.23071 11.4246 6.23071C11.2716 6.23071 11.1248 6.2915 11.0166 6.39969C10.9084 6.50788 10.8477 6.65463 10.8477 6.80764V13.1538C10.8477 13.2555 10.8746 13.3554 10.9257 13.4433C10.9767 13.5312 11.0501 13.6041 11.1384 13.6546L15.1769 15.9623C15.3094 16.0339 15.4647 16.0508 15.6096 16.0095C15.7544 15.9681 15.8774 15.8717 15.9521 15.7409C16.0268 15.6101 16.0475 15.4553 16.0095 15.3095C15.9716 15.1637 15.8782 15.0385 15.7492 14.9607L12.0015 12.8192V6.80764Z"
                              fill="#01BAF2"
                            />
                            <path
                              d="M12.0003 21.2308C14.4485 21.2308 16.7963 20.2583 18.5274 18.5272C20.2585 16.7961 21.2311 14.4482 21.2311 12.0001C21.2311 9.5519 20.2585 7.20402 18.5274 5.47292C16.7963 3.74181 14.4485 2.76929 12.0003 2.76929C9.55215 2.76929 7.20427 3.74181 5.47316 5.47292C3.74206 7.20402 2.76953 9.5519 2.76953 12.0001C2.76953 14.4482 3.74206 16.7961 5.47316 18.5272C7.20427 20.2583 9.55215 21.2308 12.0003 21.2308ZM20.0772 12.0001C20.0772 14.1422 19.2263 16.1966 17.7115 17.7113C16.1968 19.226 14.1424 20.077 12.0003 20.077C9.85817 20.077 7.80377 19.226 6.28905 17.7113C4.77434 16.1966 3.92338 14.1422 3.92338 12.0001C3.92338 9.85792 4.77434 7.80353 6.28905 6.28881C7.80377 4.77409 9.85817 3.92313 12.0003 3.92313C14.1424 3.92313 16.1968 4.77409 17.7115 6.28881C19.2263 7.80353 20.0772 9.85792 20.0772 12.0001Z"
                              fill="#01BAF2"
                            />
                          </svg>
                          <p>
                            Job Date :{" "}
                            {e.date && DateFormatCustom(e.date)}
                          </p>
                        </span>

                        <p>Time: {formatTime1(e.time)}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Stack>
            </div>
          ))}

        {get_customer_schedule_data
          ?.filter((e) => e.customerJobDetails.selected_queries === "Cleaning")
          // .slice(0, 3)
          .map((e, i) => (
            // Render logic for the first three entries with selected_queries equal to "Landscaping"

            <div className="darshan1">
              {/* <p>ID:{TS}</p> */}

              <Stack key={i}>
                {e.jobId === TS && e.status === "accepted" && (
                  // <div sx={{ backgroundColor: '#FFFFFF', p: 1, borderRadius: "10px", position: 'relative', mt: 1 }}

                  //     className='classname-442 customer_shedule1    notpicked'>

                  //         <Stack className='classname-443 backimage'>

                  //     {console.log(job_id1,'ts')}

                  //             <div style={{ display: 'flex', justifyContent: 'center', borderBottom: '1px solid #002758' }}>
                  //                 <Stack sx={{ fontSize: 24, color: '#002758', fontWeight: 'bold' }} className='classname-444 customer_shedule3'>{e.Name}</Stack>
                  //             </div>

                  //                 <div  style={{ display: 'flex', justifyContent: 'center',  }} className='vendor-view-button'>

                  //             <ViewVendorProfile vendorID={e.vendorId}/>
                  //                 </div>
                  //             <Stack flexDirection={'row'} alignItems={'center'} mt={0.5} className='classname-445 customer_shedule10'>
                  //                 <Stack className='classname-446 customer_shedule11'>
                  //                     <IoLocationSharp size={22} color={user_color} />
                  //                 </Stack>
                  //                 <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-447 customer_shedule12'>{e.Home_Address}</Stack>
                  //             </Stack>

                  //             <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-448 customer_shedule13'>
                  //                 <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-449 customer_shedule14'>
                  //                     <Stack className='classname-450 customer_shedule15'>
                  //                         <GoClock size={22} color={user_color} />
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-451 customer_shedule16'>{e.time ? formatTime(e.time) : '00:00'}</Stack>
                  //                 </Stack>
                  //             </Stack>
                  //             <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-452 customer_shedule20'>
                  //                 <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-453 customer_shedule21'>
                  //                     <Stack className='classname-454 customer_shedule21'>
                  //                         <GoClock size={22} color={user_color} className='classname-455 customer_shedule22' />
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-456 customer_shedule23'>{e.date === '2000-01-01' ? '---' : formatDate(e.date)}</Stack>
                  //                 </Stack>
                  //             </Stack>
                  //             <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-457 customer_shedule24'>
                  //                 <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-458 customer_shedule25'>
                  //                     <Stack className='classname-459 customer_shedule26'>
                  //                         <IoLocationSharp size={22} color={user_color} />
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-460 customer_shedule27'>
                  //                         Status:
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} className='classname-461 customer_shedule28'>{e.status}</Stack>
                  //                 </Stack>
                  //             </Stack>
                  //             <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1} className='classname-462 customer_shedule29'>
                  //                 <Stack flexDirection={'row'} alignItems={'center'} gap={0.3} className='classname-463 customer_shedule30'>
                  //                     <Stack className='classname-464 customer_shedule31'>
                  //                         <IoLocationSharp size={22} color={user_color} />
                  //                     </Stack>
                  //                     <Stack sx={{ fontSize: 18, color: '#002758', fontWeight: 500 }} ml={1} className='classname-465 customer_shedule32'>
                  //                         Quote:
                  //                     </Stack>

                  //                 </Stack>
                  //             </Stack>

                  //         </Stack>

                  //         <div>
                  //                         <button onClick={()=>{AcceptHanlde(e.scheduleId)}}>
                  //                             Select
                  //                         </button>

                  //                     </div>

                  //         </div>

                  <div class="sh-card">
                    <div class="sh-box-1">
                      <div class="sh-list-1">
                        <span className="sh--list--1--img--cont--h">
                          <img src={e.gig_image} alt="" />
                        </span>
                        <span>
                          <h2>{e.Vendor_Name}</h2>
                          <h3>{e.customerJobDetails.selected_queries}</h3>
                          {/* <button>View</button> */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            className="vendor-view-button"
                          >
                            <ViewVendorProfile vendorID={e.vendorId} />
                          </div>
                        </span>
                      </div>
                      {/* <div class="sh-list-2">
            <p>Note:</p>



        </div>

        <p>{e.status} </p> */}

                      <div class="sh-list-2">
                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12.0015 6.80764C12.0015 6.65463 11.9407 6.50788 11.8325 6.39969C11.7243 6.2915 11.5776 6.23071 11.4246 6.23071C11.2716 6.23071 11.1248 6.2915 11.0166 6.39969C10.9084 6.50788 10.8477 6.65463 10.8477 6.80764V13.1538C10.8477 13.2555 10.8746 13.3554 10.9257 13.4433C10.9767 13.5312 11.0501 13.6041 11.1384 13.6546L15.1769 15.9623C15.3094 16.0339 15.4647 16.0508 15.6096 16.0095C15.7544 15.9681 15.8774 15.8717 15.9521 15.7409C16.0268 15.6101 16.0475 15.4553 16.0095 15.3095C15.9716 15.1637 15.8782 15.0385 15.7492 14.9607L12.0015 12.8192V6.80764Z"
                              fill="#01BAF2"
                            />
                            <path
                              d="M12.0003 21.2308C14.4485 21.2308 16.7963 20.2583 18.5274 18.5272C20.2585 16.7961 21.2311 14.4482 21.2311 12.0001C21.2311 9.5519 20.2585 7.20402 18.5274 5.47292C16.7963 3.74181 14.4485 2.76929 12.0003 2.76929C9.55215 2.76929 7.20427 3.74181 5.47316 5.47292C3.74206 7.20402 2.76953 9.5519 2.76953 12.0001C2.76953 14.4482 3.74206 16.7961 5.47316 18.5272C7.20427 20.2583 9.55215 21.2308 12.0003 21.2308ZM20.0772 12.0001C20.0772 14.1422 19.2263 16.1966 17.7115 17.7113C16.1968 19.226 14.1424 20.077 12.0003 20.077C9.85817 20.077 7.80377 19.226 6.28905 17.7113C4.77434 16.1966 3.92338 14.1422 3.92338 12.0001C3.92338 9.85792 4.77434 7.80353 6.28905 6.28881C7.80377 4.77409 9.85817 3.92313 12.0003 3.92313C14.1424 3.92313 16.1968 4.77409 17.7115 6.28881C19.2263 7.80353 20.0772 9.85792 20.0772 12.0001Z"
                              fill="#01BAF2"
                            />
                            {/* </svg><p>Job Date : {e.date === '2000-01-01' ? '---' : formatDate(e.date)} </p></span> */}
                          </svg>
                          <p>
                            Job Date :{" "}
                            {e.date && DateFormatCustom(e.date)}
                          </p>
                        </span>

                        <p>Time: {formatTime1(e.time)}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Stack>
            </div>
          ))}

        {get_customer_schedule_data
          ?.filter(
            (e) =>
              e.customerJobDetails.selected_queries !== "Landscaping" &&
              e.customerJobDetails.selected_queries !== "Cleaning"
          )
          .map((e, i) => (
            // Render logic for the entries with selected_queries not equal to "Landscaping"

            <div className="darshan1">
              {/* <p>ID:{TS}</p> */}

              <Stack key={i}>
                {e.jobId === TS && e.status === "accepted" && (
                  <div class="sh-card">
                    <div class="sh-box-1">
                      <div class="sh-list-1">
                        <span className="sh--list--1--img--cont--h">
                          <img src={e.gig_image} alt="" />
                        </span>
                        <span>
                          <h2>{e.Vendor_Name}</h2>
                          <h3>{e.customerJobDetails.selected_queries}</h3>
                          {/* <button>View</button> */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                            className="vendor-view-button"
                          >
                            <ViewVendorProfile vendorID={e.vendorId} />
                          </div>
                        </span>
                      </div>
                      {/* <div class="sh-list-2">
            <p>Note:</p>



        </div>

        <p>{e.status} </p> */}

                      <div class="sh-list-2">
                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12.0015 6.80764C12.0015 6.65463 11.9407 6.50788 11.8325 6.39969C11.7243 6.2915 11.5776 6.23071 11.4246 6.23071C11.2716 6.23071 11.1248 6.2915 11.0166 6.39969C10.9084 6.50788 10.8477 6.65463 10.8477 6.80764V13.1538C10.8477 13.2555 10.8746 13.3554 10.9257 13.4433C10.9767 13.5312 11.0501 13.6041 11.1384 13.6546L15.1769 15.9623C15.3094 16.0339 15.4647 16.0508 15.6096 16.0095C15.7544 15.9681 15.8774 15.8717 15.9521 15.7409C16.0268 15.6101 16.0475 15.4553 16.0095 15.3095C15.9716 15.1637 15.8782 15.0385 15.7492 14.9607L12.0015 12.8192V6.80764Z"
                              fill="#01BAF2"
                            />
                            <path
                              d="M12.0003 21.2308C14.4485 21.2308 16.7963 20.2583 18.5274 18.5272C20.2585 16.7961 21.2311 14.4482 21.2311 12.0001C21.2311 9.5519 20.2585 7.20402 18.5274 5.47292C16.7963 3.74181 14.4485 2.76929 12.0003 2.76929C9.55215 2.76929 7.20427 3.74181 5.47316 5.47292C3.74206 7.20402 2.76953 9.5519 2.76953 12.0001C2.76953 14.4482 3.74206 16.7961 5.47316 18.5272C7.20427 20.2583 9.55215 21.2308 12.0003 21.2308ZM20.0772 12.0001C20.0772 14.1422 19.2263 16.1966 17.7115 17.7113C16.1968 19.226 14.1424 20.077 12.0003 20.077C9.85817 20.077 7.80377 19.226 6.28905 17.7113C4.77434 16.1966 3.92338 14.1422 3.92338 12.0001C3.92338 9.85792 4.77434 7.80353 6.28905 6.28881C7.80377 4.77409 9.85817 3.92313 12.0003 3.92313C14.1424 3.92313 16.1968 4.77409 17.7115 6.28881C19.2263 7.80353 20.0772 9.85792 20.0772 12.0001Z"
                              fill="#01BAF2"
                            />
                          </svg>
                          <p>
                            Job Date :{" "}
                            {e?.date && DateFormatCustom(e.date)  }
                          </p>
                        </span>

                        <p>Time: {formatTime1(e?.time)}</p>
                      </div>
                    </div>
                  </div>
                )}
              </Stack>
            </div>
          ))}

        {/* <Expert_Box/> */}
      </div>
    </div>
  );
};

export default VsitingVendor;
