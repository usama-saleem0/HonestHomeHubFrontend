import React, { useEffect, useState } from "react";
import CustomerScheduledProjectCard from "./CustomerScheduledProjectCard ";
import vendor from "../../../src/assets/VendorVisit.png";
import Waiting from "./Waiting";
import ActiveJobs from "../ChatApp/ActiveJobs";
import ActiveJobsUpdated from "../ChatApp/Active_Jobs_updated";
import { useLocation, useParams } from "react-router-dom";
import CustomerProfileCard from "./CustomerProfileCard";
import CustomerProfileCard2 from "./CustomerProfileCard2";
import ActiveJobsNew from "../ChatApp/Active_jobs_new";
import { baseURL, socket } from "../../config/apiHandle/apiHandle";
import axios from "axios";
import SelectVendor from "./SelectVendorCustomerScheduledProjectCard";
import SelectVendorStep3 from "./SelectedVendorStep3";
import PaymentModal from "../Community/PaymentModal";
import PaymentModalSteps from "../Community/PaymentModalSteps";
import { CheckoutFormSteps } from "../ChatApp/PaymentSteps";
import StepFiveChatWithVendor from "./Step5ChatWithVendor";
import ReviewModal from "../Community/ReviewModel";
import FiveStarRating from "../Community/Rating";
import { create_req_async_service } from "../../services/customerService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Get_Assistance from "../ChatApp/Get_Assistance";
import CHATWITHEXPERT from "./CHATWITHEXPERT";
import Expert_Box from "./ExpertBox";
import { Container, Divider, Grid, Stack } from "@mui/material";
import ChatScreen from "../ChatApp/NewChatscreen";
import RecentChat from "../ChatApp/Recent_Chat";
import Expert_Advertisement from "./ExpertAdvertisement";
import VsitingVendor from "./VsitingVendor";
import SelectedVendor from "./SelectedVendor";
import SelectVendorStep3New from "./SelectVendorStep3New";
import Componet from "../ahti-new-component/Componet";

// import Dashboard_Screen from "./dashboardScreens/Dashboard";
// import Chatscreen from "../../screens/dashboard/dashboardScreens/Dashboard";

const Steps = ({}) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const ExpertTalkHandle = async () => {
    // toast.success("Your request has been sent to the expert", {
    //     position: "top-center",
    //   });

    const customerId = localStorage.getItem("userId");
    const customer = localStorage.getItem("user_details");

    console.log("ssfsfssfsagasgdgasjTSTSSSSSSS", customer, customerId);
    let obj = {
      customerId: customerId,
      vendorId: "657b33a8b0ecf22648173b2c",
      customer: customer,
      // expertId: "6570a161252b429f66e5980f"
    };
    // Socket se request bhejo
    socket.emit("userRequest", obj);
    dispatch(create_req_async_service(obj));

    toast.success(
      "Your request has been sent to the expert. Expert will join you soon",
      {
        position: "top-center",
      }
    );
  };

  const A = 1;
  const B = 1;

  const [button1, setbutton1] = useState(false);
  const [button2, setbutton2] = useState(false);
  const [button3, setbutton3] = useState(false);
  const [button4, setbutton4] = useState(false);
  const [button5, setbutton5] = useState(false);
  const [button6, setbutton6] = useState(false);
  const [button7, setbutton7] = useState(false);

  const { state } = useLocation();
  const [phase1, setphase1] = useState(false);
  const [phase2, setphase2] = useState(false);
  const [phase3, setphase3] = useState(false);
  const [phase4, setphase4] = useState(false);
  const [phase5, setphase5] = useState(false);
  const [phase6, setphase6] = useState(false);

  const [phase7, setphase7] = useState(false);


  const [showordercomplete, setshowordercomplete] = useState(false);


  const [vendor_budget, setvendor_budget] = useState("");

  const [numberofinstallments, setnumberofinstallments] = useState("");

  const [numberofinstallments_matching, setnumberofinstallments_matching] =
    useState("");

  const [order_id, setorder_id] = useState("");

  // let vendor_budget=0

  console.log("stateTS", id);

  // useEffect(()=>{

  // axios.get(`${baseURL}/getselectedjobdetails/${id}`)
  // .then(selected_response=>{
  //     console.log(selected_response,"selected_response")

  // })
  // .catch(error=>{

  // console.log(error)

  // })

  // },[])

  const handleCallback = (p) => {
    get_vendor_status();

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const get_vendor_status = async () => {
    try {
      axios
        .get(`${baseURL}/vendor_status/${id}`)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

const [pending_vendor_data,setpending_vendor_data]=useState(null)
  const pending_vendor_status = async () => {
    try {
      axios
        .get(`${baseURL}/pending_vendor_status/${id}`)
        .then((res) => {
          console.log(res.data.data,"poppopopyuuuy");
          setpending_vendor_data(res.data.data)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const [selected_schedule_id, setselected_schedule_id] = useState("");

  useEffect(() => {
    axios
      .get(`${baseURL}/getjobdetails/${id}`)
      .then((response) => {
        console.log("ggggggggg", response.data.Vendor_Budget);
        localStorage.setItem(
          "vendorBudget",
          JSON.stringify(response.data.Vendor_Budget)
        );
        localStorage.setItem(
          "vendorid",
          JSON.stringify(response.data.Vendor_Budget[0])
        );

        localStorage.setItem(
          "jobqueries",
          JSON.stringify(response.data.Job_details)
        );

        // localStorage.setItem('user_details', JSON.stringify(elem));
        // Handle successful response

        //   setphase(response.data.phase)
        setorder_id(response.data.Job_details.Order_Id);
        if (response.data.Job_details.phase == "Job Created") {
          setphase1(true);
        } else if (
          response.data.Job_details.phase == "Currently in Pick a Vendor Phase"
        ) {
          setphase2(true);
          setbutton1(true);
        } else if (
          response.data.Job_details.phase == "Currently in a Vendor Visit Phase"
        ) {
          setphase2(true);

          // setphase3(true)

          setbutton1(true);
          setbutton7(true);
        } else if (response.data.Job_details.phase == "Pay the Vendor") {
          setphase4(true);
          setbutton1(false);
          setbutton2(false);
          setbutton3(true);
        } else if (response.data.Job_details.phase == "Chat Now And Review") {
          setphase5(true);
          setbutton1(false);
          setbutton2(false);
          setbutton3(false);
          setbutton4(false);
          setbutton5(true);
          setbutton6(true);
        } else if (response.data.Job_details.phase == "Quotes Created") {
          setphase3(true);
          setbutton3(true);

          setbutton1(true);
          setbutton7(true);
          setbutton2(true);
        } else if (response.data.Job_details.phase == "Quotes Selected") {
          setphase7(true);
          setbutton7(true);
          setbutton1(true);
        }

       


        // setvendor_budget(response.data.Vendor_Budget[0].vendorBudget)
        setnumberofinstallments(
          response.data.Vendor_Budget[0]?.NumberofInstallments
        );
        setnumberofinstallments_matching(
          response.data.Vendor_Budget[0]?.NumberofInstallmentsMatching
        );
        if(response.data.Job_details.phase=='Order Completed')
          {
            setshowordercomplete(true)
          }
        // vendor_budget=response.data.Vendor_Budget[0].vendorBudget

        console.log("Job details:", response.data.Vendor_Budget[0]);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching job details:", error);
      });

    // ts

    axios
      .get(`${baseURL}/getselectedjobdetails/${id}`)
      .then((selected_response) => {
        console.log(selected_response.data, "selected_response");
        setvendor_budget(selected_response.data?.Vendor_Budget[0]?.vendorBudget);

        setselected_schedule_id(selected_response.data?.Vendor_Budget[0]?._id);
      })
      .catch((error) => {
        console.log(error);
      });

    get_vendor_status();

    pending_vendor_status();
  }, []);

  const handleReview = (p) => {
    console.log(p, "parent ");
    setphase6(true);
    setphase5(false);
  };

  const handlechat = () => {
    setphase6(false);
    setphase5(true);
  };

  const handlevisitedvendor = () => {
    setphase2(false);
    setphase7(true);
    setphase3(false);
  };

  const handlestep1 = () => {
    setphase1(false);
    setphase2(true);
    setphase3(false);
    setphase4(false);
    setphase5(false);
    setphase6(false);
    setphase7(false);
  };

  const handlestep2 = () => {
    setphase1(false);
    setphase2(false);
    setphase3(true);
    setphase4(false);
    setphase5(false);
    setphase6(false);
    setphase7(false);
  };

  return (
    <div className="Main_Container_steps inner-stpes">
      <div className="container-boxes">
        <CustomerProfileCard2 order_id={order_id} />

        <div class="multi-form">
          {/* <div class="main-multi">
            <button class="Create">
                Create <br/>
                Job
            </button>
            <span>
                <p>Step 1</p>
                <h2>Select Vendor</h2>
            </span>

            <button><svg xmlns="http://www.w3.org/2000/svg" width="29" height="33" viewBox="0 0 29 33" fill="none">
                <path d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z" fill="white"/>
              </svg></button>
      
            <span>
                <p>Step 2</p>
                <h2>Vendor Visit</h2>
            </span>


            <button><svg xmlns="http://www.w3.org/2000/svg" width="29" height="33" viewBox="0 0 29 33" fill="none">
                <path d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z" fill="white"/>
              </svg></button>
            <span>
                <p>Step 3</p>
                <h2>Pay for the Job</h2>
            </span>


            <button><svg xmlns="http://www.w3.org/2000/svg" width="29" height="33" viewBox="0 0 29 33" fill="none">
                <path d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z" fill="white"/>
              </svg></button>
            <span>
                <p>Step 4</p>
                <h2>Chat with Vendor</h2>
            </span>


            <button><svg xmlns="http://www.w3.org/2000/svg" width="29" height="33" viewBox="0 0 29 33" fill="none">
                <path d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z" fill="white"/>
              </svg></button>
            <span>
                <p>Step 5</p>
                <h2>Review Vendor</h2>
            </span>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="29" height="33" viewBox="0 0 29 33" fill="none">
                <path d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z" fill="white"/>
              </svg></button>
        </div> */}

          <div class="main-multi bule">
            {B == 1 ? (
              <button class="Create">
                Create <br />
                Job
              </button>
            ) : null}

            <span>
              <p>Step 1</p>

              <h2 className="steps-text-wrap-h">Select Vendor</h2>
            </span>

            <span className="hello-tooltip">
              {/* 
                                <div className="tooltips">
                                    hello
                                </div> */}

              {!button1 ? (
                <button className="grey-button grey-button-alt-h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                  >
                    <path
                      d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z"
                      fill="white"
                    />
                  </svg>
                </button>
              ) : (
                <button onClick={handlestep1}>1</button>
              )}
            </span>

            {/* New step 2 */}

            <span>
              <p>Step 1.1</p>
              <h2 className="steps-text-wrap-h">Vendor Selection</h2>
            </span>

            <span className="hello-tooltip">
              {/* <div className="tooltips">
    hello
</div> */}
              {!button7 ? (
                <button className="grey-button grey-button-alt-h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                  >
                    <path
                      d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z"
                      fill="white"
                    />
                  </svg>
                </button>
              ) : (
                <button onClick={handlevisitedvendor}>1.1</button>
              )}
            </span>

            {/*  */}

            <span>
              <p>Step 2</p>
              <h2 className="steps-text-wrap-h">Vendor Visit</h2>
            </span>

            <span className="hello-tooltip">
              {!button2 ? (
                <>
                  <button className="grey-button grey-button-alt-h">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="33"
                      viewBox="0 0 29 33"
                      fill="none"
                    >
                      <path
                        d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  {/* <div className="tooltips">Waiting for Quotes</div> */}
                  <button onClick={handlestep2}>2</button>
                </>
              )}
            </span>

            <span>
              <p>Step 3</p>
              <h2 className="steps-text-wrap-h">Decide Between Quotes</h2>
            </span>
            <span className="hello-tooltip">
              {/* <div className="tooltips">
    hello
</div> */}

              {!button3 ? (
                <button className="grey-button grey-button-alt-h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                  >
                    <path
                      d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z"
                      fill="white"
                    />
                  </svg>
                </button>
              ) : (
                <button>3</button>
              )}
            </span>
            <span>
              <p>Step 4</p>
              <h2 className="steps-text-wrap-h">Pay for the Job</h2>
            </span>

            <span className="hello-tooltip">
              {/* <div className="tooltips">
    hello
</div> */}
              {!button4 ? (
                <button className="grey-button grey-button-alt-h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                  >
                    <path
                      d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z"
                      fill="white"
                    />
                  </svg>
                </button>
              ) : (
                <button>4</button>
              )}
            </span>
            <span>
              <p>Step 5</p>
              <h2 className="steps-text-wrap-h">Chat with Vendor</h2>
            </span>

            <span className="hello-tooltip">
              {/* <div className="tooltips">
    hello
</div> */}
              {!button5 ? (
                <button className="grey-button grey-button-alt-h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                  >
                    <path
                      d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z"
                      fill="white"
                    />
                  </svg>
                </button>
              ) : (
                <button onClick={handlechat}>5</button>
              )}
            </span>

            <span>
              <p>Step 6</p>
              <h2 className="steps-text-wrap-h">Review Vendor</h2>
            </span>

            <span className="hello-tooltip">
              {/* <div className="tooltips">
    hello
</div> */}
              {!button6 ? (
                <button className="grey-button grey-button-alt-h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                  >
                    <path
                      d="M27.3125 14.5781H24.5898V5.60938C24.5898 2.77861 22.2956 0.484375 19.4648 0.484375H9.53516C6.70439 0.484375 4.41016 2.77861 4.41016 5.60938V14.5781H1.6875C0.978809 14.5781 0.40625 15.1507 0.40625 15.8594V31.2344C0.40625 31.9431 0.978809 32.5156 1.6875 32.5156H27.3125C28.0212 32.5156 28.5938 31.9431 28.5938 31.2344V15.8594C28.5938 15.1507 28.0212 14.5781 27.3125 14.5781ZM15.6211 24.0674V26.1895C15.6211 26.3656 15.477 26.5098 15.3008 26.5098H13.6992C13.523 26.5098 13.3789 26.3656 13.3789 26.1895V24.0674C13.0484 23.8301 12.8017 23.494 12.6743 23.1076C12.547 22.7212 12.5455 22.3043 12.6701 21.917C12.7948 21.5297 13.0391 21.1919 13.3679 20.9523C13.6968 20.7127 14.0931 20.5836 14.5 20.5836C14.9069 20.5836 15.3032 20.7127 15.6321 20.9523C15.9609 21.1919 16.2052 21.5297 16.3299 21.917C16.4545 22.3043 16.453 22.7212 16.3257 23.1076C16.1983 23.494 15.9516 23.8301 15.6211 24.0674ZM21.707 14.5781H7.29297V5.60938C7.29297 4.37217 8.29795 3.36719 9.53516 3.36719H19.4648C20.7021 3.36719 21.707 4.37217 21.707 5.60938V14.5781Z"
                      fill="white"
                    />
                  </svg>
                </button>
              ) : (
                <button onClick={handleReview}>6</button>
              )}
            </span>
          </div>
        </div>

        <div className="CustomerCard">
          {phase1 ? (
            <div
            
              className="teesremein"
            >
        <div className="mamhas">
        <ActiveJobsNew job_id={id} />
              <h1 className="step--1--vendor--text--h">
                You will be approached by vendors in no later than 24 hours
              </h1>
        </div>
            </div>
          ) : (
            <></>
          )}

          {phase2 ? (
            <div className="Select_vendor">
              <h1 style={{ textAlign: "center" }}>
                Select Which Vendors Do Visit
              </h1>
              <hr />

              <SelectVendor job_id1={id} handleCallback={handleCallback}  pending_vendor_data={pending_vendor_data}/>
            </div>
          ) : null}

          {phase3 ? (
            <div className="Select_vendor">
              <h1 style={{ textAlign: "center" }}>Decide Between Quotes</h1>
              <hr />
              <div className="desplay">
                {/* <SelectVendorStep3 job_id1={id} /> */}

                <SelectVendorStep3New job_id1={id} />

                {/* <hr/> */}

                {/* <Grid
                  item
                  md={4}
                  lg={4}
                  sm={12}
                  xs={12}
                  sx={{ mt: { xl: 6, lg: 6, md: 6, sm: 75, xs: 72 } }}
                  className="hello-screen-chat"
                >
                  <Stack
                    mt={{ md: 0, sm: 0, xs: 5 }}
                    className="hello-screen-chat2"
                  >
                    <RecentChat />
                  </Stack>
                </Grid> */}
              </div>
              <Grid item md={8} lg={8} sm={12} xs={12} mt={3}>
                <Stack className="Select_vendor-chart-vue">
                  <ChatScreen />
                </Stack>
              </Grid>

              {/* <div sx={{ position: "relative" }} style={{width:'100%'}}>
        <Chatscreen/>
      
      </div> */}

              {/* <Expert_Box/> */}

              {/* <button onClick={ExpertTalkHandle}>GET AN Expert</button>  */}

              {/* <CHATWITHEXPERT/> */}

              {/* <Get_Assistance/> */}
            </div>
          ) : null}

          {phase4 ? (
            <div className="chat_step_4">
              <PaymentModalSteps
                vendor_budget={vendor_budget}
                job_id={id}
                numberofinstallments={numberofinstallments}
                numberofinstallments_matching={numberofinstallments_matching}
                selected_schedule_id={selected_schedule_id}
              />

              {/* <Expert_Advertisement /> */}
            </div>
          ) : null}

          {phase5 ? (
            <>
              <StepFiveChatWithVendor handleReview={handleReview} job_id1={id} />
            </>
          ) : null}

          {phase6 ? (
            <>
              {/* <StepFiveChatWithVendor job_id1={id}/> */}

              <FiveStarRating
                J_ID={id}
                selected_schedule_id={selected_schedule_id}
              />
            </>
          ) : null}

          {phase7 ? (
            <>
              <h1 style={{ textAlign: "center" }}>Vendor Selection </h1>
              <hr />

              <VsitingVendor job_id1={id} />
            </>
          ) : null}



          
{showordercomplete ? (
            <>
            <div className="vaasline">
        <Componet/>

            </div>
            </>
          ) : null}



        </div>
      </div>
    </div>
  );
};

export default Steps;
