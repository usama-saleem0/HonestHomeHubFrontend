import { Stack } from "@mui/material";
import React from "react";
import { main_color, user_color, vendor_color } from "../../utils/color";
import { IoLocationSharp } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { RiToolsFill } from "react-icons/ri";
import { MdPlumbing } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_vendor_schedule_async_service } from "../../services/vendorService";
import View_Details from "./View_Details";
import { socket } from "../../config/apiHandle/apiHandle";
import { useState } from "react";
import "./createpost.css";
const VendorScheduledProjectCard = () => {
  const dispatch = useDispatch();
  const { get_schedule_status, get_schedule_data, get_schedule_error } =
    useSelector((state) => state.vendorAuth);
  const [ViewDetsis, setViewDetsis] = useState(false);
  const [ViewDetsisData, setViewDetsisData] = useState({});
  const viewmoreHanlde = (elem) => {
    setViewDetsis(true);
    setViewDetsisData(elem);
  };
  const gobackHandle = () => {
    setViewDetsis(false);
  };
  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(dateObject);
  };
  //   const formatTime = (timeString) => {
  //     const timeObject = new Date(`2000-01-01T${timeString}`);
  //     return timeObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //   };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${suffix}`;
  };
  socket.on("requestFromUser", (data) => {
    console.log("newest:", data);
    // Handle the response from the server (if needed)
  });

  // useEffect(() => {
  //     dispatch(get_vendor_schedule_async_service())
  // }, [])

  useEffect(() => {
    dispatch(get_vendor_schedule_async_service());

    const intervalId = setInterval(() => {
      dispatch(get_vendor_schedule_async_service());
    }, 30000); // 3 minutes * 60 seconds/minute * 1000 milliseconds/second

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [dispatch]); // Include dispatch in the dependency array to ensure it's updated correctly

  // console.log("get_schedule_data", get_schedule_data);
  return (
    <div className="classname-440">
      {ViewDetsis === false ? (
        <div className="Vendor_Shedule_card classname-441">
          {get_schedule_data?.map((e, i) => {
            console.log(get_schedule_data, "NOKIA");
            console.log("eeeeeee", e);
            return (
              <Stack
                sx={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  position: "relative",
                  height: 180,
                  mt: 1,
                  width: "550px",
                }}
                className="shedule_card classname-442"
                style={{ padding: "8px" }}
              >
                <Stack className="classname-443">
                  <Stack
                    sx={{
                      flexDirection: "row",
                      alignItems: "start",
                      justifyContent: "center",
                    }}
                    className="dylanshedule"
                  >
                    <Stack
                      sx={{
                        fontSize: { md: 15, lg: 20, sm: 16, xs: 13 },
                        color: main_color,
                        fontWeight: "bold",
                      }}
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      {e.customerDetails?.Name}
                    </Stack>
                  </Stack>
                </Stack>
                <hr
                  style={{ border: "1px solid gray", opacity: 1 }}
                  className="classname-603"
                />
                <Stack flexDirection={"row"} alignItems={"center"} mt={0.5}>
                  <Stack>
                    <IoLocationSharp
                      size={16}
                      color="#0874B7"
                      className="classname-604"
                    />
                  </Stack>
                  <Stack
                    sx={{
                      fontSize: { md: 13, lg: 18, sm: 12, xs: 10 },
                      color: main_color,
                    }}
                    className="classname-605"
                  >
                    {e.customerDetails?.Home_Address}
                  </Stack>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mt={1}
                >
                  <Stack flexDirection={"row"} alignItems={"center"} gap={0.3}>
                    <Stack>
                      <GoClock
                        size={16}
                        color="#0874B7"
                        className="classname-606"
                      />
                    </Stack>
                    <Stack
                      sx={{
                        fontSize: { md: 13, lg: 18, sm: 12, xs: 10 },
                        color: main_color,
                      }}
                      className="classname-607"
                    >
                      {/* {e.date ? formatDate(e.date) : '12-12-12'} */}
                      {e.date && e.date === "2000-01-01"
                        ? "--"
                        : formatDate(e.date)}
                    </Stack>
                  </Stack>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mt={1}
                >
                  <Stack flexDirection={"row"} alignItems={"center"} gap={0.3}>
                    <Stack>
                      <GoClock
                        size={16}
                        color="#0874B7"
                        className="classname-608"
                      />
                    </Stack>
                    <Stack
                      sx={{
                        fontSize: { md: 13, lg: 18, sm: 12, xs: 10 },
                        color: main_color,
                      }}
                      className="classname-609"
                    >
                      {e.time && e.time != "" ? formatTime(e.time) : "--"}
                    </Stack>
                  </Stack>
                </Stack>
                {e.status === "pending" ? (
                  <Stack className="vendor69 classname-610">
                    <div className="ati classname-611">
                      <Stack
                        sx={{
                          fontSize: { md: 13, lg: 15, sm: 12, xs: 10 },
                          color: "white",
                        }}
                        className="classname-612"
                      >
                        Waiting For Response
                      </Stack>
                      <Stack
                        onClick={() => viewmoreHanlde(e)}
                        sx={{
                          fontSize: { md: 11, lg: 15, sm: 10, xs: 10 },
                          color: "#000",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                        className="view_details classname-613"
                      >
                        View
                      </Stack>
                    </div>
                  </Stack>
                ) : (
                  <Stack
                    className="ahtis classname-614"
                    sx={{
                      borderRadius: "15px",
                    }}
                  >
                    <Stack
                      sx={{
                        fontSize: { md: 13, lg: 15, sm: 12, xs: 10 },
                        color: main_color,
                      }}
                      className="classname-615"
                    >
                      Pending Approval.
                    </Stack>
                  </Stack>
                )}
              </Stack>
            );
          })}
        </div>
      ) : (
        <View_Details
          gobackHandle={gobackHandle}
          getViewDetailsData={ViewDetsisData}
          className="classname-616"
        />
      )}
    </div>
  );
};
export default VendorScheduledProjectCard;
