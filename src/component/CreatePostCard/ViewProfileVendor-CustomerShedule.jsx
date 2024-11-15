import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useTheme from "../../hooks/theme";
import { Divider, Grid, Stack, } from "@mui/material";

import { useDispatch, } from "react-redux";
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
export default function ViewVendorProfile({ get_profile_data, vendorID }) {
  const theme = useTheme();
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true)
  }
  const [openProfile, setopenProfile] = useState(false);
  const viewProfile = () => {
    setopenProfile(true)
  }
  const closeProfile = () => setopenProfile(false);
//   console.log(get_profile_data.VendorInfo._id ,"PROFILE DETAILS")
  socket.on('requestResponse', (data) => {
    console.log('Request response received:', data);
    // Handle the response from the server (if needed)
  });
  const [gigdescription, setgigdescription] = useState(null)
  const [gigimage, setgigimage] = useState('')
  const [gigtitle, setgigtitle] = useState('')
  const [travelling_cost, settravelling_cost] = useState('')
//   const vendorId = get_profile_data.VendorInfo._id;
  useEffect(() => {
      const formData = {
          vendor_id: vendorID
      };
      axios.get(`${baseURL}/view_vendor_profile/${formData.vendor_id}`)
          .then(response => {
              // Handle successful response
              console.log(response.data,"VendorTS");
              // setgigdescription(response.data)
              setgigdescription(response.data.gig_discription)
              setgigtitle(response.data.gig_title)
              setgigimage(response.data.gig_image)
              settravelling_cost(response.data.travelling_cost)
              console.log(gigdescription,gigimage,gigtitle,"PROFILETS");
          })
          .catch(error => {
              // Handle error
              console.error('Error fetching vendor profile:', error);
          });
  }, []);
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
    
    
        borderRadius: '5px', // Added quotes
        background: '#B22234',
        boxShadow: '0px 4px 14px 0px rgba(0, 0, 0, 0.25)',
        border: '1px solid #B22234', // Changed the color format to lowercase
        color: '#FFF',
        fontFamily: 'sans-serif',
        fontSize: '16px', // Added quotes
        fontStyle: 'normal',
        fontWeight: '400', // Added quotes
        lineHeight: 'normal',
        padding: '6px', // Added quotes and semicolon,
        width:'100px',
        textAlign:'center'

    }}
    


      className="classname3031"
    >
  View Profile
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
        <Stack className="classname304">
          <Stack mt={1} className='user_details' style={{ backgroundColor: 'transparent' }}>
            <Stack sx={{ fontSize: 23, fontWeight: 600, color: '#002758', p: 2, fontFamily: 'sans-serif', backgroundColor: 'transparent' }} className='colorbg'>
              Vendor  Details
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
        </Stack>
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
          <Stack mt={1} className='user_details1' style={{ backgroundColor: 'transparent' }}>
            <Stack sx={{ fontSize: 29, fontWeight: 600, color: '#002758', p: 2, fontFamily: 'sans-serif', backgroundColor: 'transparent', textAlign: 'center' }} className='colorbg'>
              Vendor  Profile
            </Stack>
            <Divider sx={{ border: '1px solid white' }} />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={gigimage} style={{ width: '200px', height: '200px', padding: '10px', borderRadius: '30px' }} className="classname311" />
            </div>
            <div className="ibrar">
              <div className="ibrar-BSDK">
                <Stack sx={{ fontSize: 22, fontWeight: 1000, color: '#002758' }} className="ibrar3">Profile Name:</Stack>
                <Stack sx={{ color: '#002758' }} className="ibrar4"> {gigtitle}</Stack>
              </div>
              <div className="ibrar-janu">
                <Stack sx={{ fontSize: 22, fontWeight: 1000, color: '#002758' }} className="ibrar7"> Description: </Stack>
                <Stack sx={{ color: '#002758' }} className="ibrar7">{gigdescription}</Stack>
              </div>

              <div className="ibrar-janu">
                <Stack sx={{ fontSize: 22, fontWeight: 1000, color: '#002758' }} className="ibrar7"> Travelling Cost: </Stack>
                <Stack sx={{ color: '#002758' }} className="ibrar7">{travelling_cost}</Stack>
              </div>
            </div>
            <Stack flexDirection={'col'} px={2} mt={3} ml={2}>
              <Stack flexDirection={'row'}></Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  </div>
  
  );
}