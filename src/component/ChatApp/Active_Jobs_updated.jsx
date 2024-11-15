import React, { useEffect, useState } from "react";
import locationlogo from "../../../src/assets/new/icons8-location-24.png";
import clock from "../../../src/assets/new/icons8-clock-24.png";
import ImageSlider from "./Image_Slider";
import { get_customer_job_byId_async_service } from "../../services/customerService";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";
import axios from "axios";
import { baseURL } from "../../config/apiHandle/apiHandle";
import { toast } from "react-toastify";
import Steps from "../CreatePostCard/Steps";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CreateJobModal from "../Community/CreateJobModal";

import nojobpic from "../../../src/assets/no jobs posted.png";
import { AnimatePresence } from "framer-motion";
import DeleteJobPopup from "../../Rewards/components/DeleteJobPopup";
import LogoSlider from "../ahti-new-component/Ahtisalider";

const ActiveJobsUpdated = () => {
  const dispatch = useDispatch();
  const { get_job_byId_data } = useSelector((state) => state.customerAuth);

  useEffect(() => {
    dispatch(get_customer_job_byId_async_service());
    // dispatch(get_customer_job_byId_async_service());
    // dispatch(get_customer_job_byId_async_service());

    //     setTimeout(() => {
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //     }, 2000);

    //     setTimeout(() => {
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //         dispatch(get_customer_job_byId_async_service());
    //     }, 5000);
  }, [dispatch]);

  const [counter, setCounter] = useState(0);

  const [jobID1,setjobID1]=useState('')



  const [showpop,setshowpop]=useState(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Your code to run in the interval
  //     dispatch(get_customer_job_byId_async_service());
  //     // Increment the counter
  //     setCounter((prevCounter) => prevCounter + 1);

  //     // Check if the function has been executed 5 times
  //     if (counter >= 2) {
  //       clearInterval(interval); // Stop the interval when it reaches 5 executions
  //     }
  //   }, 2000); // Run the function every 2 seconds

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${suffix}`;
  };

  async function handleDeleteJob(e) {
    console.log(e, "DeleteJOBID");

    const formData = {
      _id: e,
    };

    try {
      const response = await axios.post(`${baseURL}/deletejob`, formData);

      console.log(response.data, "deletejob1");
      if (response.data == true) {
        toast.success("Job Deleted Successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  }


  const handleApproveVendorCallback=(decision)=>{

    if(decision==='yes')

    {
      console.log(decision,"DEC")
  
      handleDeleteJob(jobID1)
      setshowpop(false)

    }
    else{
        setshowpop(false)

    }



  }

  const OpenDelete=(id)=>{

    setjobID1(id)

    setshowpop(true)



  }






  console.log(get_job_byId_data ? "TS" : "null", "DATAArr");

  const [Customer_Job_id, setCustomer_Job_id] = useState(0);
  const [a, seta] = useState(0);

  // const View_Steps =(e)=>{

  //     const navigation = useNavigate()

  //     setCustomer_Job_id(e)

  //     console.log(Customer_Job_id,"DylanID")

  //    navigation('/steps')

  // }

  const View_Steps = (e) => {
    const navigate = useNavigate();

    setCustomer_Job_id(e);

    console.log(Customer_Job_id, "DylanID");
    navigate("/steps");
  };

  const [show, setshow] = useState(false);

  console.log(get_job_byId_data, "new game");

  return (
    

    <div className="mainparent">
      <div className="pheku-chand">
        {get_job_byId_data && get_job_byId_data.length > 0 ? (
          get_job_byId_data.map((e, i) => (
            <Stack key={i} mt={1} className="active-boxes-divs">
              {e.phase !== "Job Cancelled" && (
                <div>
                  <section class="pulilli">
                    <div class="long-boxing">
                      <div class="boxing-list-1">
                        <h2>Order ID: {e.Order_Id ? e.Order_Id : "123"}</h2>
                        <p>{e.selected_queries}</p>
                      </div>
                      <div class="boxing-list-2">
                        <p>{e.phase ? e.phase : "Phase"}</p>
                      </div>
                      <div class="boxing-list-3">
                        {/* <Link to={`/steps/${e._id}`}>
                                            <button>View</button>
                                        </Link> */}

                        <Link
                          to={
                            e.selected_queries === "Landscaping" ||
                            e.selected_queries === "Cleaning" ||
                            e.choose_service === "Maintenance"||
                            e.emergency=='emergency'
                              ? `/Maintainence_Steps/${e._id}`
                              : `/selectvendor/${e._id}`
                          }
                        >
                          <button>View</button>
                        </Link>

                        <button
                          class="Cancel"
                          onClick={() => OpenDelete(e?._id)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
              )}
            </Stack>
          ))
        ) : (
          <div className="NOJOBPOSTED">
            <div className="imgdivx">
              {/* <img src={nojobpic} /> */}
              <LogoSlider/>
          </div>
            <h1 style={{ color: "#b22354" }}>
              Post Your 1st Job and Get $25 OFF
            </h1>
            <CreateJobModal />
          </div>
        )}
      </div>

      <AnimatePresence>
        {showpop && (
          <DeleteJobPopup
            
            redeem_decision={handleApproveVendorCallback}
            scheduleId={jobID1}
             
          />
        )}
      </AnimatePresence>


    </div>
  );
};

export default ActiveJobsUpdated;
