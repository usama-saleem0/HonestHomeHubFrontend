import { Divider, Stack } from "@mui/material";
import React from "react";
import { main_color, user_color, vendor_color } from "../../utils/color";
import { FaEdit } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLeadIndex } from "../../store/slice/AuthSlice";
import MatchingLeadsCustomer from "../CreatePostCard/MatchingLeadsCustomer";
import MatchingLeadsVendor from "../CreatePostCard/MatchingLeadsVendor";
import { useState } from "react";
import { useEffect } from "react";
const Drawer_Side_Content = () => {
  const dispatch = useDispatch();

  // const sendDataToParent = (index) => {
  //     dispatch(setSelectedLeadIndex(index));
  // }
  const { selectedIndexValue } = useSelector((state) => state.authSlice);

  const {
    get_matching_customer_status,
    get_matching_customer_data,
    get_matching_customer_error,
  } = useSelector((state) => state.vendorAuth);

  const {
    get_vendor_profile_status,
    get_vendor_profile_data,
    get_vendor_profile_error,
  } = useSelector((state) => state.customerAuth);

  const [count, setCount] = useState(0);

  // console.log(get_matching_customer_data)
  // const totalCount = get_matching_customer_data?.map((e, i) => {
  //     return e.totalCount[0]?.totalJobs
  // })

  // const getlength = get_matching_customer_data?.length
  // setcount(getlength - 1)

  useEffect(() => {
    // Make sure get_matching_customer_data is available before updating the count
    if (get_matching_customer_data) {
      const newCount = get_matching_customer_data.length;
      setCount(newCount - 1);
      console.log(
        get_matching_customer_data,
        "matchingdaatatataatpppppppppppppppppopo"
      );
    }
  }, [get_matching_customer_data]);

  // console.log("count", count);

  // console.log("count", count);

  const get_jobs_length = get_matching_customer_data?.map((e, i) => {
    return e.jobs?.length;
  });

  // const get_jobs_length = get_matching_customer_data?.map((e, i) => {
  //     return e.jobs ? e.jobs.length : 0; // Check if e.jobs exists before accessing its length
  // });

  // const get_vendos_length = get_vendor_profile_data?.map((e, i) => {
  //     console.log("get_vendos_length", e);
  //     return e.vendors?.length
  // })
  // console.log("get_vendor_profile_data", get_vendor_profile_data.length);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "710px",
        overflowY: "scroll",
        borderRadius: "15px",
      }}
    >
      {selectedIndexValue === "Customer" ? (
        <Stack>
          <Stack className="71boy">
            <Stack
              className="72boy"
              height={"260px"}
              sx={{ backgroundColor: "white" }}
              style={{ padding: "20px 10px 20px 10px" }}
            >
              <Stack
                className="73boy leaf"
                style={{
                  backgroundColor: "#0874B7",
                  padding: "30px 20px 30px 20px",
                  borderRadius: "20px",
                }}
              >
                <Stack className="74boy" p={1}>
                  <Stack
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      color: "white",
                      "@media screen and (min-width:600px)": {
                        fontSize: 14,
                      },
                      "@media screen and (min-width:960px)": {
                        fontSize: 16,
                      },
                      "@media screen and (min-width:1280px)": {
                        fontSize: 18,
                      },
                      "@media screen and (min-width:1920px)": {
                        fontSize: 20,
                      },
                    }}
                  >
                    Matched Vendors
                  </Stack>
                  <Stack
                    className="75boy"
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mt={0}
                  >
                    <Stack
                      className="76boy"
                      sx={{
                        fontSize: 70,
                        fontWeight: 1000,
                        color: "white",
                        "@media screen and (min-width:600px)": {
                          fontSize: 40,
                        },
                        "@media screen and (min-width:960px)": {
                          fontSize: 50,
                        },
                        "@media screen and (min-width:1280px)": {
                          fontSize: 60,
                        },
                        "@media screen and (min-width:1920px)": {
                          fontSize: 70,
                        },
                      }}
                    >
                      {get_vendor_profile_data?.length}{" "}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack height={"35px"} sx={{ backgroundColor: "#D9D9D9" }}>
              <Stack p={1}>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack
                    sx={{ fontSize: 18, color: "#333333", fontWeight: "bold" }}
                  >
                    Showing All {get_vendor_profile_data?.length} Results
                  </Stack>
                  <Stack flexDirection={"row"} alignItems={"center"} gap={0.2}>
                    {/* <Stack>
                                            <IoFilter />
                                        </Stack>
                                        <Stack sx={{ fontSize: 11, color: user_color, fontWeight: 'bold' }}>Filter</Stack> */}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* Matching Leads Render */}
          <Stack mt={1}>
            {/* {new Array(3).fill(" ").map((e, i) => (
                            <Stack key={i} > */}
            <MatchingLeadsCustomer />
            {/* </Stack>
                        ))} */}
          </Stack>
        </Stack>
      ) : selectedIndexValue === "Vendor" ? (
        <Stack>
          <Stack>
            {/* <Stack height={"80px"} sx={{ backgroundColor: 'white' }} style={{padding:'20px 10px 20px 10px'}} >

                            <Stack style={{backgroundColor:'#01BAF2' , padding:'50px 20px 50px 20px'}}>
                            <Stack p={1}>
                                <Stack sx={{ fontSize: 17, fontWeight: 1000, color: 'white' }}>
                                  
                                     Matching Leads {console.log(get_jobs_length,"JOB LENGTHHH")}
                                </Stack>




                                


                                
                                <Stack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'} mt={1}>
                                    <Stack flexDirection={'row'} alignItems={'center'} gap={1}>
                                        <Stack flexDirection={'row'} alignItems={'center'}>
                                            <Stack>
                                                <MdMiscellaneousServices size={13} color={vendor_color} />
                                            </Stack>
                                            <Stack sx={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>
                                              
                                             services</Stack>
                                        </Stack>
                                        <Stack flexDirection={'row'} alignItems={'center'}>
                                            <Stack>
                                                <IoLocationSharp size={13} color={vendor_color} />
                                            </Stack>
                                            <Stack sx={{ fontSize: 10, color: 'white', fontWeight: 'bold' }}>Location</Stack>
                                        </Stack>

                                    </Stack>
                                    <Stack>
                                     
                                    </Stack>
                                </Stack>
                            </Stack>
                            </Stack>
                        </Stack> */}

            <Stack
              height={"260px"}
              sx={{ backgroundColor: "white" }}
              style={{ padding: "20px 10px 20px 10px" }}
              className="72boy"
            >
              <Stack
                style={{
                  backgroundColor: "#0874B7",
                  padding: "30px 20px 30px 20px",
                  borderRadius: "20px",
                }}
                className="73boy leaf"
              >
                <Stack p={1}>
                  <Stack
                    sx={{
                      fontSize: 20,
                      fontWeight: 500,
                      color: "white",
                      "@media screen and (min-width:600px)": {
                        fontSize: 14,
                      },
                      "@media screen and (min-width:960px)": {
                        fontSize: 16,
                      },
                      "@media screen and (min-width:1280px)": {
                        fontSize: 18,
                      },
                      "@media screen and (min-width:1920px)": {
                        fontSize: 20,
                      },
                    }}
                  >
                    Matched Leads
                  </Stack>
                  <Stack
                    className="75boy"
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mt={0}
                  >
                    <Stack
                      className="76boy"
                      sx={{
                        fontSize: 70,
                        fontWeight: 1000,
                        color: "white",
                        "@media screen and (min-width:600px)": {
                          fontSize: 40,
                        },
                        "@media screen and (min-width:960px)": {
                          fontSize: 50,
                        },
                        "@media screen and (min-width:1280px)": {
                          fontSize: 60,
                        },
                        "@media screen and (min-width:1920px)": {
                          fontSize: 70,
                        },
                      }}
                    >
                      {/* 0  */}
                      {get_jobs_length}
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack height={"35px"} sx={{ backgroundColor: "#D9D9D9" }}>
              <Stack p={1}>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Stack
                    sx={{ fontSize: 11, color: "#333333", fontWeight: "bold" }}
                  >
                    Showing All Results
                    {/* {get_jobs_length}  */}
                  </Stack>
                  <Stack flexDirection={"row"} alignItems={"center"} gap={0.2}>
                    {/* <Stack>
                                            <IoFilter />
                                        </Stack>
                                        <Stack sx={{ fontSize: 11, color: vendor_color, fontWeight: 'bold' }}>Filter</Stack> */}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* Matching Leads Render */}
          <Stack mt={1}>
            {/* {new Array(3).fill(" ").map((e, i) => (
                            <Stack key={i} > */}
            <MatchingLeadsVendor />
            {/* </Stack>
                        ))} */}
          </Stack>
        </Stack>
      ) : null}

      {/* Matching Leads Render */}
    </div>
  );
};

export default Drawer_Side_Content;
