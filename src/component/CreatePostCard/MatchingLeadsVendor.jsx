import { Divider, Stack } from "@mui/material";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { user_color, vendor_color } from "../../utils/color";
import { IoLocationSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_matching_customer_async_service } from "../../services/vendorService";
import { setSelectedLeadIndex } from "../../store/slice/AuthSlice";
import { getTimeAgo } from "../../utils/common/check_date_time";
import ViewCustomerProfileModal from "../Community/ViewCustomerProfileModal ";

const MatchingLeadsVendor = () => {
  const dispatch = useDispatch();

  const {
    get_matching_customer_status,
    get_matching_customer_data,
    get_matching_customer_error,
    vendor_login_data,
    vendor_data,
  } = useSelector((state) => state.vendorAuth);

  const sendDataToParent = (elem, index) => {
    dispatch(setSelectedLeadIndex(index));
    let obj = {
      ...elem.userDetails,
      job_details: elem.jobs,
    };
    localStorage.setItem("user_details", JSON.stringify(obj));
    localStorage.setItem("is_expert", "false");
  };

  useEffect(() => {
    // Save the user ID to local storage when it's available
    if (vendor_login_data?.selected_queries) {
      // localStorage.setItem('query', vendor_login_data?.selected_queries);
      const jsonString = JSON.stringify(vendor_login_data?.selected_queries);
      localStorage.setItem("query", jsonString);
    } else if (vendor_data?.selected_queries) {
      // localStorage.setItem('query', vendor_data?.selected_queries);
      const jsonString = JSON.stringify(vendor_data?.selected_queries);
      localStorage.setItem("query", jsonString);
    }
  }, [vendor_login_data?.selected_queries, vendor_data?.selected_queries]);

  useEffect(() => {
    // Retrieve user ID from local storage
    // const storedUserQuery = localStorage.getItem('query');

    // // Use the stored ID if available, otherwise, use the one from the state
    // const userQueryToUse = storedUserQuery

    // If there is a stored ID and it is different from the state ID, dispatch the action
    dispatch(get_matching_customer_async_service());
    // if (userIdToUse && userIdToUse !== customer_login_data?.user_id) {
    // }
  }, [
    dispatch,
    vendor_login_data?.selected_queries,
    vendor_data?.selected_queries,
  ]);

  const formatTime1 = (timeString) => {
    console.log(timeString, "HITTs");
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${suffix}`;
  };

  const formatTimets = (timeString) => {
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
    <div className="classname-510">
      {get_matching_customer_data?.length > 0 ? (
        get_matching_customer_data?.map((elem, ind) => {
          return elem?.jobs.map((e, i) => {
            const timeAgo = getTimeAgo(e.jobs?.createdAt);
            return (
              <Stack key={i}>
                {!e?.userDetails?.Name ? (
                  <Stack
                    sx={{ fontSize: 12, ml: 2, fontWeight: "bold" }}
                    className="classname-511"
                  >
                    No matching jobs found for the given query
                  </Stack>
                ) : (
                  <Stack>
                    <Stack>
                      <Stack
                        p={1}
                        style={{
                          paddingRight: "10px",
                          borderBottom: "1px solid #01BAF2",
                        }}
                        className=" classname-501"
                      >
                        <Stack
                          onClick={() => sendDataToParent(e, i + 1)}
                          sx={{ cursor: "pointer" }}
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Stack flexDirection={"row"} alignItems={"center"}>
                            <Stack>
                              <GoDotFill color={vendor_color} />
                            </Stack>
                            <Stack
                              sx={{
                                color: "#000000",
                                fontSize: 15,
                                fontWeight: 1000,
                              }}
                              className="classname-513"
                            >
                              {e?.userDetails?.Name}
                            </Stack>
                          </Stack>
                          <Stack
                            sx={{
                              backgroundColor: user_color,
                              borderRadius: "6px",
                              p: 0.5,
                              fontSize: 9,
                              color: "white",
                              fontWeight: "bold",
                            }}
                            className="classname-514"
                          >
                            {timeAgo}
                          </Stack>
                        </Stack>
                        <Stack
                          ml={2}
                          sx={{ cursor: "pointer" }}
                          onClick={() => sendDataToParent(e, i + 1)}
                          className="classname-515"
                        >
                          <Stack sx={{ color: "#000000", fontSize: 12 }}>
                            {e?.jobs?.emergency &&
                              e?.jobs?.emergency.trim() === "emergency" && (
                                <>{"Emergency"}</>
                              )}
                          </Stack>
                          <Stack
                            sx={{
                              color: "black",
                              fontWeight: "5px",
                              fontSize: 15,
                            }}
                            className="classname-516"
                          >
                            {e?.jobs?.note && <div>{e.jobs.note}</div>}
                          </Stack>
                          <Stack
                            sx={{
                              color: "black",
                              fontWeight: "5px",
                              fontSize: 15,
                            }}
                            className="classname-517"
                          >
                            {e?.jobs?.amount && e.jobs.amount !== "T,," && (
                              <div>
                                Date/Time:{" "}
                                {e.jobs?.amount.split("T")[0]
                                  ? DateFormatCustom(
                                      e.jobs?.amount.split("T")[0]
                                    )
                                  : ""}{" "}
                                {e.jobs?.amount.split("T")[1]
                                  ? formatTimets(e.jobs?.amount.split("T")[1])
                                  : ""}
                              </div>
                            )}
                          </Stack>
                          <Stack
                            sx={{ color: "#000000", fontSize: 12 }}
                            style={{ color: "black", fontWeight: "600" }}
                            className="classname-518"
                          >
                            {e?.jobs?.selected_queries}
                          </Stack>

                          <Stack
                            sx={{
                              color: "black",
                              fontWeight: "500",
                              fontSize: 15,
                            }}
                            className="classname-517"
                          >
                            {e?.jobs?.choose_service && (
                              <div> {e.jobs.choose_service}</div>
                            )}
                          </Stack>

                          <Stack
                            ml={-0.3}
                            flexDirection={"row"}
                            alignItems={"center"}
                          >
                            <Stack>
                              <IoLocationSharp size={13} color={vendor_color} />
                            </Stack>
                            <Stack
                              sx={{ fontSize: 10, color: "#333333" }}
                              className="classname-519"
                            >
                              {e.userDetails?.Home_Address}
                            </Stack>
                          </Stack>
                          <Stack
                            ml={-0.3}
                            flexDirection={"row"}
                            alignItems={"center"}
                          >
                            {e.jobs.availablity_times?.map((e, i) => {
                              const dateObject =
                                e.date && e.date !== "2000-01-01"
                                  ? new Date(e.date)
                                  : null;
                              const formattedDate = dateObject
                                ? new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  }).format(dateObject)
                                : "---";
                              return (
                                <Stack
                                  key={i}
                                  ml={0.4}
                                  flexDirection={"row"}
                                  alignItems={"center"}
                                  sx={{ color: "#333333" }}
                                  className="classname-520"
                                >
                                  {formattedDate}
                                </Stack>
                              );
                            })}
                          </Stack>
                        </Stack>
                        <Stack
                          className="hello-bhai"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                          }}
                        >
                          <Stack
                            ml={2}
                            sx={{ cursor: "pointer" }}
                            style={{
                              backgroundColor: "#0874B7",
                              padding: "5px 30px 5px 30px",
                              borderRadius: "5px",
                              color: "white",
                              fontSize: "20px",
                              fontWeight: "bold",
                            }}
                            className=" classname-506"
                            onClick={() => sendDataToParent(e, i + 1)}
                          >
                            Chat Now
                          </Stack>
                          <Stack
                            ml={2}
                            sx={{ cursor: "pointer" }}
                            style={{
                              backgroundColor: "white",
                              padding: "5px 10px 5px 10px",
                              borderRadius: "5px",
                              color: "white",
                              fontSize: "20px",
                              border: "1px solid #002758",
                            }}
                            className="classname-507"
                          >
                            <ViewCustomerProfileModal get_profile_data={e} />
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                )}
              </Stack>
            );
          });
        })
      ) : (
        <Stack
          sx={{ textAlign: "center", alignItems: "center" }}
          className="classname-523"
        >
          No Job Available
        </Stack>
      )}
    </div>
  );
};

export default MatchingLeadsVendor;
