import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useTheme from "../../../hooks/theme";
import { Divider, Grid, Stack } from "@mui/material";
import { format } from "date-fns";

import { useDispatch } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../../ChatApp/Payment";
import { baseURL, socket } from "../../../config/apiHandle/apiHandle";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "48%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  // borderRadius: 3,
};
export default function ContactUsFooter() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const [openProfile, setopenProfile] = useState(false);
  const viewProfile = () => {
    setopenProfile(true);
  };
  const closeProfile = () => setopenProfile(false);
  //   console.log(get_profile_data.VendorInfo._id ,"PROFILE DETAILS")
  socket.on("requestResponse", (data) => {
    console.log("Request response received:", data);
    // Handle the response from the server (if needed)
  });
  const [gigdescription, setgigdescription] = useState(null);
  const [gigimage, setgigimage] = useState("");
  const [gigtitle, setgigtitle] = useState("");
  const [jobtime, setjobtime] = useState("");
  const [travelling_cost, settravelling_cost] = useState("");
  //   const vendorId = get_profile_data.VendorInfo._id;

  // Parse date and time strings into Date object and format them

  // If gigimage and gigtitle are not empty, parse and format them

  return (
    <div className="classname30211">
      {/* <Stack
      onClick={handleOpen}
      style={{
        textDecoration: 'underline',
        fontSize: 15,
        color: '#0D3B7A',
      }}>View Details1 </Stack> */}
      <Stack
        onClick={viewProfile}
        style={{
          // textDecoration: 'underline',
          // fontSize: 18,
          // fontWeight: 'bold',
          // color: '#0D3B7A',

          //   width: "100%", // Corrected
          //   borderRadius: "5px", // Added quotes
          background: "transparent",
          //   boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.25)",
          //   border: "1px solid #1ac1f3", // Changed the color format to lowercase
          color: "#FFF",
          // fontFamily: 'sans-serif',
          fontSize: "20px", // Added quotes
          fontStyle: "normal",
          fontWeight: "400", // Added quotes
          // lineHeight: "40px",
          //   padding: "6px", // Added quotes and semicolon,
          //   width: "100px",
          //   textAlign: "center",
          //   height: "45px",
          //   justifyContent: "center",
        }}
        className="classname3031 contact-hamza"
      >
        Contact Support
      </Stack>
      <Modal
        disableScrollLock
        open={open}
        className="scroll-remove"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "60%", lg: "60%", sm: "60%", xs: "80%" },
            height: { md: "40%", lg: "40%", sm: "40%", xs: "40%" },
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          {/* <Stack className="classname304">
          <Stack mt={1} className='user_details' style={{ backgroundColor: 'transparent' }}>
            <Stack sx={{ fontSize: 23, fontWeight: 600, color: '#002758', p: 2, fontFamily: 'sans-serif', backgroundColor: 'transparent' }} className='colorbg'>
             Quote
            </Stack>
            <Divider sx={{ border: '1px solid white' }} />
            <Grid container className="classname305">
              <Grid item md={6} lg={6} sm={12} xs={12} className="classname306">
                <Stack px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
                  <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Name:</Stack>
                  <Stack sx={{ color: '#002758' }}> {get_profile_data?.VendorInfo?.Name}</Stack>
                </Stack>
              </Grid>
              <Grid item md={6} lg={6} sm={12} xs={12} className="classname307">
                <Stack px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
                  <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Zip Code: </Stack>
                  <Stack sx={{ color: '#002758' }}>{get_profile_data?.VendorInfo?.zipCode}</Stack>
                </Stack>
              </Grid>
              <Grid item md={12} lg={12} sm={12} xs={12} className="classname308">
                <Stack px={2} mt={1} flexDirection={'row'} alignItems={'center'} ml={2} gap={1} sx={{ mt: 2 }}>
                  <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Email: </Stack>
                  <Stack sx={{ color: '#002758' }}>{get_profile_data?.VendorInfo?.email}</Stack>
                </Stack>
              </Grid>
              <Grid item md={12} lg={12} sm={12} xs={12} className="classname309">
                <Stack px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
                  <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Home_Address: </Stack>
                  <Stack sx={{ color: '#002758' }}>{get_profile_data?.VendorInfo?.Home_Address}</Stack>
                </Stack>
              </Grid>
              <Grid item md={12} lg={12} sm={12} xs={12} className="classname310">
                <Stack px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
                  <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Type Of Home Service: </Stack>
                  {get_profile_data?.VendorInfo?.selected_queries.map((e, index) => (
                    <Stack key={index} sx={{ color: '#002758' }}>{e}</Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
            <Stack flexDirection={'col'} px={2} mt={3} ml={2}>
              <Stack flexDirection={'row'}></Stack>
            </Stack>
          </Stack>
        </Stack> */}
        </Box>
      </Modal>
      <Modal
        disableScrollLock
        open={openProfile}
        className="scroll-remove"
        onClose={closeProfile}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "60%", lg: "60%", sm: "60%", xs: "80%" },
            height: { md: "60%", lg: "60%", sm: "60%", xs: "60%" },
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove footer-contact-h"
        >
          <Stack
            mt={1}
            className="user_details1 user-detail-margin"
            style={{ backgroundColor: "transparent" }}
          >
            <Stack
              sx={{
                fontSize: 29,
                fontWeight: 600,
                color: "#002758",
                //   p: 2,
                fontFamily: "sans-serif",
                backgroundColor: "transparent",
                //   textAlign: "center",
              }}
              className="colorbg"
            >
              Contact Us
            </Stack>
            <Stack>
              <Divider
                className="contact-hr"
                sx={{ border: "1px solid white" }}
              />

              <div className="ibrar ibrar-h-alt">
                <div className="ibrar-BSDK">
                  <Stack
                    sx={{
                      fontFamily: "Doppio One",
                      fontSize: 25,
                      fontWeight: 1000,
                      color: "#002758",
                    }}
                    className="ibrar3"
                  >
                    {" "}
                    For Any Queries Contact Us at:
                  </Stack>
                  <br />
                  <Stack
                    sx={{
                      fontFamily: "Doppio One",
                      color: "#002758",
                      fontSize: "22px",
                    }}
                    className="ibrar4 footer-modal-left-text-h"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                      width={20}
                      height={20}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    Email: honesthomehub@gmail.com{" "}
                  </Stack>
                  <br />
                  <Stack
                    sx={{
                      fontFamily: "Doppio One",
                      color: "#002758",
                      fontSize: "22px",
                    }}
                    className="ibrar4 footer-modal-left-text-h"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                      width={20}
                      height={20}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    Phone No: 469-223-3255{" "}
                  </Stack>
                  <br />
                  {/* <Stack
                    sx={{
                      fontFamily: "Doppio One",
                      color: "#002758",
                      fontSize: "22px",
                    }}
                    className="ibrar4 footer-modal-left-text-h"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                      width={20}
                      height={20}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    Location: assdd street{" "}
                  </Stack> */}
                </div>
              </div>
              <Stack
                className="contact-hidden-div"
                flexDirection={"col"}
                px={2}
                mt={3}
                ml={2}
              >
                <Stack flexDirection={"row"}></Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack className="contact-right-h">
            <br />
            <Stack
              mt={1}
              className="user_details1"
              style={{ backgroundColor: "transparent" }}
            >
              <Divider
                className="contact-hr"
                sx={{ border: "1px solid white" }}
              />

              <div className="ibrar ibrar-h-alt">
                <div className="ibrar-BSDK">
                  <Stack
                    sx={{ fontSize: 25, fontWeight: 1000, color: "#002758" }}
                    className="ibrar3"
                  >
                    {" "}
                  </Stack>
                  <br />
                  <Stack
                    sx={{ color: "#002758", fontSize: "18px" }}
                    className="ibrar4"
                  >
                    {" "}
                    <input
                      style={{
                        padding: "10px",
                        // borderRadius: "10px",
                        // width: "300px",
                      }}
                      type="text"
                      placeholder="Your Name"
                    />
                  </Stack>
                  <br />
                  <Stack
                    sx={{ color: "#002758", fontSize: "18px" }}
                    className="ibrar4"
                  >
                    {" "}
                    <input
                      style={{
                        padding: "10px",
                        //  borderRadius: "10px"
                      }}
                      type="text"
                      placeholder="Mobile Number"
                    />
                  </Stack>
                  <br />
                  <Stack
                    sx={{ color: "#002758", fontSize: "18px" }}
                    className="ibrar4"
                  >
                    {" "}
                    <input
                      style={{
                        padding: "10px",
                        //  borderRadius: "10px"
                      }}
                      type="text"
                      placeholder="Your Email"
                    />
                  </Stack>
                  <br />

                  <Stack
                    sx={{ color: "#002758", fontSize: "18px" }}
                    className="ibrar4"
                  >
                    {" "}
                    <textarea
                      style={{
                        padding: "10px",
                        // borderRadius: "10px"
                      }}
                      name=""
                      id=""
                      placeholder="Your Messsage / Requirement"
                    ></textarea>
                  </Stack>
                  <br />

                  <Stack>
                    <a href="#" className="footer-submit-btn">
                      Submit Query
                    </a>
                  </Stack>
                </div>
              </div>
              <Stack flexDirection={"col"} px={2} mt={3} ml={2}>
                <Stack flexDirection={"row"}></Stack>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
