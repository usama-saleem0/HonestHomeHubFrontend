import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useTheme from "../../hooks/theme";
import { Divider, Grid, Stack } from "@mui/material";
import { format } from "date-fns";

import { useDispatch } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../ChatApp/Payment";
import { baseURL, socket } from "../../config/apiHandle/apiHandle";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "48%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
export default function ContactSupport() {
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

          borderRadius: "5px", // Added quotes
          background: "#0874B7",
          boxShadow: "0px 4px 14px 0px rgba(0, 0, 0, 0.25)",
          border: "1px solid  #0874B7", // Changed the color format to lowercase
          color: "#FFF",
          // fontFamily: 'sans-serif',
          fontSize: "16px", // Added quotes
          fontStyle: "normal",
          fontWeight: "400", // Added quotes
          lineHeight: "normal",
          padding: "6px", // Added quotes and semicolon,
          width: "100px",
          textAlign: "center",
          height: "45px",
          justifyContent: "center",
        }}
        className="classname3031"
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
            width: { md: "40%", lg: "40%", sm: "60%", xs: "80%" },
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
            width: { md: "40%", lg: "40%", sm: "60%", xs: "80%" },
            height: { md: "60%", lg: "60%", sm: "60%", xs: "60%" },
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove"
        >
          <Stack>
            <Stack
              mt={1}
              className="user_details1"
              style={{ backgroundColor: "transparent" }}
            >
              <Stack
                sx={{
                  fontSize: 29,
                  fontWeight: 600,
                  color: "#002758",
                  p: 2,
                  fontFamily: "sans-serif",
                  backgroundColor: "transparent",
                  textAlign: "center",
                }}
                className="colorbg"
              >
                Contact Us
              </Stack>
              <Divider sx={{ border: "1px solid white" }} />

              <div className="ibrar">
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
                    className="ibrar4"
                  >
                    {" "}
                    Email: honesthomehub@gmail.com{" "}
                  </Stack>
                  <br />
                  <Stack
                    sx={{
                      fontFamily: "Doppio One",
                      color: "#002758",
                      fontSize: "22px",
                    }}
                    className="ibrar4"
                  >
                    {" "}
                    Phone No: 469-223-3255{" "}
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
