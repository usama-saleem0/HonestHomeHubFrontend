import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Templates_SideBar from "../../component/drawer/Templates_SideBar";
import Template_Side_Drawer from "../../component/drawer/Template_Side_Drawer ";
import { useDispatch, useSelector } from "react-redux";
import { setActiveIndex } from "../../store/slice/AuthSlice";
import { useNavigate } from "react-router-dom";
import Dashboard_Screen from "./dashboardScreens/Dashboard";

const Dashboard = () => {
  const [active_sidebar_index, setactive_sidebar_index] = useState(null);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { activeIndex } = useSelector((state) => state.authSlice);

  useEffect(() => {
    // Set active_sidebar_index to 0 when the component mounts (application opens)
    setactive_sidebar_index(0); 
    dispatch(setActiveIndex(0)); // Dispatch to Redux store to update the state
    // Navigate("/dashboard");





  }, []);
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // Your code to run in the interval
  //     setactive_sidebar_index(0);
  //     dispatch(setActiveIndex(0)); // Dispatch to Redux store to update the state
  //     Navigate("/dashboard");
  //     console.log("DYlannn")

  //     // Increment the counter
  //     setCounter((prevCounter) => prevCounter + 1);

  //     // Check if the function has been executed 5 times
  //     if (counter >= 5) {
  //       clearInterval(interval); // Stop the interval when it reaches 5 executions
  //     }
  //   }, 2000); // Run the function every 2 seconds

  //   // Clean up the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, []);






  const change_side_menu_handle = (index) => {
    setactive_sidebar_index(index);
    dispatch(setActiveIndex(index));
    localStorage.setItem("active_sidebar_index", index);
  };

  return (
    <>
      <Stack sx={{ position: "relative" }} style={{width:'100%'}}>
        <Dashboard_Screen/>
        {/* <Templates_SideBar
          change_side_menu_handle={change_side_menu_handle}
          active_sidebar_index={active_sidebar_index}
          content_section={<Dashboard_Screen/>}
        /> */}
      </Stack>

     
    </>
  );
};

export default Dashboard;
