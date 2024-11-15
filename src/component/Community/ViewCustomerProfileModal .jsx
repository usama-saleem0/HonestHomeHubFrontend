import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useTheme from "../../hooks/theme";
import { Divider, Grid, Stack, } from "@mui/material";
import "./premium.css";
import { useDispatch, } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../ChatApp/Payment";


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

export default function ViewCustomerProfileModal({ get_profile_data }) {


  const theme = useTheme();
  const dispatch = useDispatch()


  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true)

  }


  console.log('get',get_profile_data)



  const DateFormatCustom=(date)=>{


    let x= date.trim()

const month=['ts','January','February','March','April','May','June','July','August','September','October','November','December']

const mm= x.split('-')[1]

const yy=x.split('-')[0]

const dd= x.split('-')[2]


const y= mm[0].includes('0')?mm.split('0')[1]:mm

// console.log(y)

const  final_date= month[y]+" "+ dd+" "+ yy

return final_date

// console.log(dd,month[y],yy)



}


const formatTimets = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const suffix = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? '0' + minute : minute} ${suffix}`;
  };




  return (
    <div className="classname276">
  <Stack
    onClick={handleOpen}
    className="classname303"
    style={{
      // textDecoration: 'underline',
      fontSize: 20,
      color: '#333333',
      fontWeight: 'bold'
    }}
  >
    View
  </Stack>
  <Modal 
    disableScrollLock
    open={open}
    className="classname278 scroll-remove"
    onClose={handleClose}
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
      className="classname279 scroll_content scroll-remove"
    >
      {/* <div>
    <h1>Details</h1>
  </div> */}
      <Stack className="classname280" style={{ backgroundColor: '', display: 'flex', alignItems: 'center' }}>
        <Stack className="classname281" mt={1} style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', gap: '0px', padding: '0px' }}>
          <Stack className="classname282" sx={{ fontSize: 23, fontWeight: 600, color: '#002758', p: 2, fontFamily: 'sans-serif', backgroundColor: 'transparent' }}>
            Customer Details
          </Stack>
          <Divider className="classname283" sx={{ border: '1px solid #002758' }} />
          <Grid container className="classname284">
            <Grid item md={6} lg={6} sm={12} xs={12} className="classname285">
              <Stack className="classname286" px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
                <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Name:</Stack>
                <Stack sx={{ color: '#002758' }}>{get_profile_data?.userDetails?.Name}
                
                
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={6} lg={6} sm={12} xs={12} className="classname287">
              {/* <Stack className="classname288" px={2} mt={1} flexDirection={'row'} alignItems={'center'} gap={1} sx={{ mt: 2 }}>
                <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Email: </Stack>
                <Stack sx={{ color: '#002758' }}>{get_profile_data?.userDetails?.email}</Stack>
              </Stack> */}
            </Grid>
            <Grid item md={12} lg={12} sm={12} xs={12} className="classname289">
              <Stack className="classname290" px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
                <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Home_Address: </Stack>
                <Stack sx={{ color: '#002758' }}>{get_profile_data?.userDetails?.Home_Address}</Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack className="classname291" flexDirection={'col'} px={2} mt={3} ml={2}>
            <Stack className="classname292" flexDirection={'row'}></Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* Job Details =======================>>>>>>>>>>>>>>>>>>>>>>>> */}
      <Stack className="classname293" mt={1} style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column !important', gap: '0px', padding: '0px' }}>
        <Stack className="classname294" sx={{ fontSize: 23, fontWeight: 600, color: '#002758', p: 2, fontFamily: 'sans-serif', backgroundColor: 'transparent' }}>
          Job Details
        </Stack>
        <Divider className="classname295" sx={{ border: '1px solid #B22234' }} />
        <Grid container className="classname296">
          <Grid item md={8} lg={8} sm={12} xs={12} className="classname297">
            <Stack className="classname297" px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
              <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Details: </Stack>
              <Stack sx={{ color: '#002758' }}>
                
                
                {get_profile_data.jobs?.details} 
              
              
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={4} lg={4} sm={12} xs={12} className="classname298">
            <Stack className="classname298" px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
              <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Problem:</Stack>
              <Stack sx={{ color: '#002758' }}> {get_profile_data.jobs?.selected_queries}</Stack>
            </Stack>
          </Grid>
          <Grid item md={4} lg={4} sm={12} xs={12} className="classname299">
            {get_profile_data.jobs?.note ? (
              <Stack className="classname299" px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
                <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>NOTE:</Stack>
                <Stack sx={{ color: '#002758' }}>{get_profile_data.jobs.note}</Stack>
              </Stack>
            ) : null}
          </Grid>



{get_profile_data.jobs?.amount===undefined ?

  (<>
  
  
  <Grid item md={12} lg={12} sm={12} xs={12} className="classname300">
            <Stack className="classname300" px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
              <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Availablity Date: </Stack>
              {get_profile_data.jobs.availablity_times.map((e) => {
                const dateObject = e.date && e.date !== "2000-01-01" ? new Date(e.date) : null;
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = dateObject ? new Intl.DateTimeFormat('en-US', options).format(dateObject) : "---";
                return (
                  <Stack sx={{ color: '#002758' }}>
                    {formattedDate}
                  </Stack>
                );
              })}
            </Stack>
          </Grid>

          
          <Grid item md={12} lg={12} sm={12} xs={12} className="classname301">
            <Stack className="classname301" px={2} flexDirection={'row'} alignItems={'center'} gap={4} ml={2} mb={2} sx={{ mt: 2 }}>
              <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Availablity Times: </Stack>
              {get_profile_data.jobs?.availablity_times.map((availability, index) => (
                <Stack key={index} ml={0.4} flexDirection={'column'} alignItems={'flex-start'} sx={{ fontSize: 10, color: '##002758' }}>
                  <Stack fontSize={15} ml={1} flexDirection={'row'} gap={'15px'} alignItems={'center'}>
                    {availability?.times?.length > 0 ? (
                      availability.times.map((time, timeIndex) => (
                        <span key={timeIndex}>
                          {time !== null && /^(\d{2}):(\d{2})$/.test(time) ? (
                            new Date(`2000-01-01T${time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          ) : (
                            '---'
                          )}
                        </span>
                      ))
                    ) : (
                      <span>---</span>
                    )}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Grid>

  
  
  </>)

  :

  (
  
  <Grid item md={12} lg={12} sm={12} xs={12} className="classname300">
  <Stack className="classname300" px={2} flexDirection={'row'} alignItems={'center'} gap={1} ml={2} sx={{ mt: 2 }}>
    <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Availablity Date & Time: </Stack>
    <Stack>

    { get_profile_data.jobs?.amount && get_profile_data.jobs?.amount!=="T,,"? DateFormatCustom(get_profile_data.jobs?.amount?.split('T')[0]):''} {  get_profile_data.jobs?.amount && get_profile_data.jobs?.amount !=="T,,"?formatTimets(get_profile_data.jobs?.amount?.split('T')[1]):''}

    </Stack>
  </Stack>
</Grid>
  
  
  
  
  
  
  
  
  )


  

}

















         
            <Stack className="classname30122" px={2} flexDirection={'row'} alignItems={'center'} gap={4} ml={2} mb={2} sx={{ mt: 2 }}>
              <Stack sx={{ fontSize: 17, fontWeight: 1000, color: '#002758' }}>Images: </Stack>
             
            </Stack>
          


          {get_profile_data.jobs?.images?.map((e, i) => {
                        return <Stack ml={0.4} flexDirection={'row'} alignItems={'center'} className="classname-64228">
                            <img width={80} height={80} src={e} />
                        </Stack>
                    })}





        </Grid>
      </Stack>
    </Box>
  </Modal >
</div >

  );
}
