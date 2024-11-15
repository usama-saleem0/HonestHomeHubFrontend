import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
// import Templates_SideBar from "../../component/drawer/Templates_SideBar";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Dashboard_Screen from "./dashboardScreens/Dashboard";
import Admin_body from "./Admin_body";
import { setActiveIndex } from "../../../../store/slice/AuthSlice";
import Admin_Templates_SideBar from "../../../../component/drawer/admin/Admin_Templates_SideBar";

const Admin_Dashboard = () => {
  const [active_sidebar_index, setactive_sidebar_index] = useState(null);
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { activeIndex } = useSelector((state) => state.authSlice);

  useEffect(() => {
    setactive_sidebar_index(0);
    dispatch(setActiveIndex(0));
    Navigate("/Admin_Dashboard");
  }, []);

  const change_side_menu_handle = (index) => {
    setactive_sidebar_index(index);
    dispatch(setActiveIndex(index));
    localStorage.setItem("active_sidebar_index", index);
  };

  return (
    <>
      <Stack sx={{ position: "relative" }} className="ADMIN1">
        <Admin_Templates_SideBar className="ts"
          change_side_menu_handle={change_side_menu_handle}
          active_sidebar_index={active_sidebar_index}
          content_section={<Admin_body />}
        />

{/* <Admin_body /> */}
       
      </Stack>


    </>
  );
};

export default Admin_Dashboard;
