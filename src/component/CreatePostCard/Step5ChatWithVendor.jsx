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
  getpaidvendorschedule,
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
import Waiting from "./Waiting";
import ChatScreen from "../ChatApp/ChatScreen";
import TSChat from "../../screens/NewChatTS";
 

const StepFiveChatWithVendor = ({ job_id1, handleReview }) => {
  const TS = job_id1;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [vendorId,setvendorId]=useState('')


  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };
  

  const new_customer_route= localStorage.getItem("customer_route")

  const sendDataToParent = (elem, index) => {
    console.log(elem);
    dispatch(setSelectedLeadIndex(index));
    localStorage.setItem("user_details", JSON.stringify(elem?.vendorDetails));
    console.log("elem", elem?.vendorDetails);
    // navigate("/dashboard/customer");
    navigate(new_customer_route)
  };


  const handleNewChat=(vendorid,name)=>{

    console.log(vendorid,"vendor new ts")

    setIsPopupVisible(true)

    setvendorId(name)

    localStorage.setItem('VendorIDReal',vendorid)

    // navigate(`chatwithvendor/${vendorid}`)


  }
 

  useEffect(() => {
    dispatch(getpaidvendorschedule(job_id1));
 
  }, [dispatch]);  

  const {
    getpaidvendorschedule_data
  } = useSelector((state) => state.customerAuth);
  

  console.log(getpaidvendorschedule_data,"popplololll")


  const handleReviewEmit = () => {
    console.log("hamza");
    handleReview("true");
  };

  return (
    <div className="step4chatnow">
      <div className="classname-440 RR">
        

       

            <div className="darshan1">
            

              <Stack >
   
                  <div
                    sx={{
                      backgroundColor: "#FFFFFF",
                      p: 1,
                      borderRadius: "10px",
                      position: "relative",
                      mt: 1,
                    }}
                    className="classname-442     notpicked"
                  >
                    <Stack className="classname-443 ">
                      {console.log(job_id1, "ts")}

                    
                      <Stack
                        sx={{
                          flexDirection: "row",
                          alignItems: "start",
                          justifyContent: "space-between",
                          marginTop: "10px",
                        }}
                        className="classname-467 customer_shedule2"
                      >
                        <Stack
                          className="classname-471 customer_shedule7"
                          style={{
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                       
                              <Waiting />
                              <h1>Payment Successful</h1>

                              <GigButton
                                className="classname-472 customer_shedule8"
                                onClick={() => handleNewChat(getpaidvendorschedule_data?.vendorId,getpaidvendorschedule_data?.customerDetails?.Name)}
                                style={{
                                  backgroundColor: "blue",
                                  color: "white",
                                  padding: "10px 85px",  
                                  width: "290px",
                                  height: "40px",
                                  borderRadius: "5px",  
                                  background: "#B22234",
                                  boxShadow:
                                    "0px 4px 14px 0px rgba(0, 0, 0, 0.25)",
                                  border: "1px solid #B22234",
                                  fontFamily: "Urbanist, sans-serif",
                                  fontSize: "20px",
                                  fontStyle: "normal",
                                  fontWeight: "600",
                                  lineHeight: "normal",
                                }}
                                title="Chat Now"
                              />
                               <GigButton
                                  className="classname-472 customer_shedule8"
                                  onClick={handleReviewEmit}
                                  style={{
                                    backgroundColor: "blue",
                                    color: "white",
                                    padding: "10px 85px",  
                                    width: "290px",
                                    height: "40px",
                                    borderRadius: "5px",  
                                    background: "#B22234",
                                    boxShadow:
                                      "0px 4px 14px 0px rgba(0, 0, 0, 0.25)",
                                    border: "1px solid #B22234",
                                    fontFamily: "Urbanist, sans-serif",
                                    fontSize: "20px",
                                    fontStyle: "normal",
                                    fontWeight: "600",
                                    lineHeight: "normal",
                                  }}
                                  title="Review"
                                />
                           
                          
                         
                        </Stack>
{/* 
                        <div>
                          {console.log(
                            e.NumberofInstallmentsMatching,
                            "numberofinstallments"
                          )}
                          {e.NumberofInstallmentsMatching <=
                            e.NumberofInstallments &&
                          e.status === "accepted" ? (
                            <InstallmentModal
                              parent_check_status={parent_check_status}
                              set_selected_index={setSet_index}
                              get_schedule_data={e}
                              save_index={i}
                              number={e.NumberofInstallmentsMatching}
                            />
                          ) : null}
                        </div> */}
                      </Stack>
                    </Stack>
                  </div>
               
              </Stack>
            </div>
       
     
        
      </div>
      {isPopupVisible && (
        <div className="popup-View-box">
          <TSChat handleClose={handleClosePopup}  vendorId={vendorId}/>
        </div>
      )}
    </div>
  );
};

export default StepFiveChatWithVendor;
