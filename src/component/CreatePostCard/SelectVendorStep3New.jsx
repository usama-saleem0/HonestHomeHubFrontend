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
  get_schedules_by_job_id_new,
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
import { AnimatePresence } from "framer-motion";
import SelectQuotePopup from "../../Rewards/components/SelectQuotePopup";

const SelectVendorStep3New = ({ job_id1 }) => {
  const TS = job_id1;

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [s_id,sets_id]=useState('')
  const [showpop,setshowpop]=useState(false)


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
    getschedulesbyjobiddata
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

    // dispatch(
    //   respond_to_customer_schedule_async_service({
    //     scheduleId: id,
    //     response: "selected",
    //   })
    // );

    dispatch(respond_to_customer_schedule_async_service({
        scheduleId: id,
        response: "selected",
      })).then((result) => {
        if (result.type === 'RESPONSE_TO_VENDOR_SCHEDULE/fulfilled') {
        
               window.location.reload();
          
        }
      });
    // dispatch(get_customer_schedule_async_service())

    // setTimeout(() => {
    //   window.location.reload();
    // }, 2000);
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


    dispatch(get_schedules_by_job_id_new(job_id1))


    // const intervalId = setInterval(() => {
    //   dispatch(get_customer_schedule_async_service());
    //   console.log(
    //     "Dispatching get_customer_schedule_async_service",
    //     get_customer_schedule_data
    //   );
    // }, 300000);

    // Clear the interval when the component unmounts
    // return () => clearInterval(intervalId);
  }, [dispatch]); // Include dispatch in the dependency array

  localStorage.setItem(
    "jobdescription",
    JSON.stringify(get_customer_schedule_data)
  );

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const [pickedvendor, setpickedvendor] = useState(true);

  const datePattern = /\b\d{2}-\d{2}-\d{4}\b/;


  const formatTime1 = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${suffix}`;
  };


  const handleOpenPopup=(id)=>{

    sets_id(id)

    setshowpop(true)




  }


  
const handleApproveVendorCallback=(decision)=>{


  console.log(decision,"decision")

  if(decision==='yes')
  {
  

    AcceptHanlde(s_id)


    setTimeout(() => {
      setshowpop(false)
    }, 1000);




  }

    else
    {
      setshowpop(false)

    }



}



console.log(getschedulesbyjobiddata,"NEW DATA PP")

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
    <div className="select_qoutes_step3 select--quotes--step3--alt--h">
      <div className="classname-440 RR">
        {/* <button onClick={openPopup}>Picked Vendors</button> */}

        {getschedulesbyjobiddata
        
          
          ?.map((e, i) => (
            // Render logic for the first three entries with selected_queries equal to "Landscaping"

            <div className="darshan1">
              {/* <p>ID:{TS}</p> */}

              <Stack key={i}>
                {e.jobId === TS && e.status === "accepted" && (
                  

                  <div class="sh-card ">
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
                            <ViewVendorQuote
                              vendorID={e.vendorId}
                              jobID={e.jobId}
                            />

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
                            Job Date:
                            {/* {e.date === "2000-01-01"
                              ? e.cleaning_maintainance_date
                              : "---"} */}
                              {/* {e.date != "2000-01-01" ? (
  e.cleaning_maintainance_date ? (
    <>
      {new Date(e.cleaning_maintainance_date.split("T")[0]).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })} {formatTime1(e.cleaning_maintainance_date.split("T")[1])}
    </>
  ) : ''
) : ''} */}


                                    {

                                        e?.date && DateFormatCustom(e?.date)
                                    }




                            {/* {e.date === '2000-01-01' ? '---' : formatDate(e.date)}  */}
                          </p>
                        </span>

                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="16"
                            viewBox="0 0 24 16"
                            fill="none"
                          >
                            <path
                              d="M22.5 0.875H1.5C1.20163 0.875 0.915483 0.993526 0.704505 1.2045C0.493526 1.41548 0.375 1.70163 0.375 2V14C0.375 14.2984 0.493526 14.5845 0.704505 14.7955C0.915483 15.0065 1.20163 15.125 1.5 15.125H22.5C22.7984 15.125 23.0845 15.0065 23.2955 14.7955C23.5065 14.5845 23.625 14.2984 23.625 14V2C23.625 1.70163 23.5065 1.41548 23.2955 1.2045C23.0845 0.993526 22.7984 0.875 22.5 0.875ZM16.9884 12.875H7.01156C6.78896 11.7952 6.25487 10.8043 5.47529 10.0247C4.6957 9.24513 3.70479 8.71104 2.625 8.48844V7.51156C3.70479 7.28896 4.6957 6.75487 5.47529 5.97529C6.25487 5.1957 6.78896 4.20479 7.01156 3.125H16.9884C17.211 4.20479 17.7451 5.1957 18.5247 5.97529C19.3043 6.75487 20.2952 7.28896 21.375 7.51156V8.48844C20.2952 8.71104 19.3043 9.24513 18.5247 10.0247C17.7451 10.8043 17.211 11.7952 16.9884 12.875ZM21.375 5.18188C20.9012 5.01274 20.4709 4.74048 20.1152 4.38477C19.7595 4.02906 19.4873 3.59877 19.3181 3.125H21.375V5.18188ZM4.68187 3.125C4.51274 3.59877 4.24048 4.02906 3.88477 4.38477C3.52906 4.74048 3.09877 5.01274 2.625 5.18188V3.125H4.68187ZM2.625 10.8181C3.09877 10.9873 3.52906 11.2595 3.88477 11.6152C4.24048 11.9709 4.51274 12.4012 4.68187 12.875H2.625V10.8181ZM19.3181 12.875C19.4873 12.4012 19.7595 11.9709 20.1152 11.6152C20.4709 11.2595 20.9012 10.9873 21.375 10.8181V12.875H19.3181ZM12 4.25C11.2583 4.25 10.5333 4.46993 9.91661 4.88199C9.29993 5.29404 8.81928 5.87971 8.53545 6.56494C8.25162 7.25016 8.17736 8.00416 8.32205 8.73159C8.46675 9.45902 8.8239 10.1272 9.34835 10.6517C9.8728 11.1761 10.541 11.5333 11.2684 11.6779C11.9958 11.8226 12.7498 11.7484 13.4351 11.4645C14.1203 11.1807 14.706 10.7001 15.118 10.0834C15.5301 9.4667 15.75 8.74168 15.75 8C15.75 7.00544 15.3549 6.05161 14.6517 5.34835C13.9484 4.64509 12.9946 4.25 12 4.25ZM12 9.5C11.7033 9.5 11.4133 9.41203 11.1666 9.2472C10.92 9.08238 10.7277 8.84811 10.6142 8.57403C10.5006 8.29994 10.4709 7.99834 10.5288 7.70736C10.5867 7.41639 10.7296 7.14912 10.9393 6.93934C11.1491 6.72956 11.4164 6.5867 11.7074 6.52882C11.9983 6.47094 12.2999 6.50065 12.574 6.61418C12.8481 6.72771 13.0824 6.91997 13.2472 7.16665C13.412 7.41332 13.5 7.70333 13.5 8C13.5 8.39782 13.342 8.77936 13.0607 9.06066C12.7794 9.34196 12.3978 9.5 12 9.5Z"
                              fill="#01BAF2"
                            />
                          </svg>
                          <p>Price: {e.vendorBudget===0?"Quote Not Created":e.vendorBudget}</p>
                        </span>
                      </div>
                    </div>

                    <div class="sh-box-2 select-button">
                      <button
                        onClick={() => {
                          handleOpenPopup(e._id);
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                )}
              </Stack>
            </div>
          ))}
 
 
      </div>

      <AnimatePresence>
        {showpop && (
          <SelectQuotePopup
            
            redeem_decision={handleApproveVendorCallback}
            scheduleId={s_id}
             
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectVendorStep3New;
