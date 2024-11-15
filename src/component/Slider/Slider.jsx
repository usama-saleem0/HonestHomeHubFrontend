import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Grid, Stack } from '@mui/material';
import { MdLeaderboard, MdPlumbing } from 'react-icons/md';
import sildeImage from '../../assets/carousel.png'
import { main_color, vendor_color } from '../../utils/color';
import './slider.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { get_customer_gig_async_service } from '../../services/vendorService';
import Btn from '../button/Button';
import axios from 'axios';
import { baseURL } from '../../config/apiHandle/apiHandle';
// const slider_data = (
//   <Stack mt={2}>
//     <Grid container p={2} sx={{ backgroundColor: main_color, borderRadius: 4 }} >
//       <Grid item md={8} lg={8} sm={12} xs={12}>
//         <Stack>
//           <Stack sx={{ fontSize: { md: 25, lg: 25, sm: 20, xs: 17 }, color: 'white', fontWeight: 1000, textAlign: 'start' }}>Plumbing Maintainance</Stack>
//           <Stack mt={1} mb={1} sx={{ fontSize: { md: 12, lg: 12, sm: 10, xs: 8, color: 'white', textAlign: 'start' } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus,</Stack>
//           <Stack flexDirection={'row'} alignItems={'center'} gap={0.5} mt={0.9}>
//             <Stack ><MdPlumbing color={vendor_color} /></Stack>
//             <Stack sx={{ color: "white", fontSize: { md: 15, lg: 12, sm: 12, xs: 10 }, fontWeight: 'bold' }}>Plumbing</Stack>
//             <Stack ml={1}><MdPlumbing color={vendor_color} /></Stack>
//             <Stack sx={{ color: "white", fontSize: { md: 15, lg: 12, sm: 12, xs: 10 }, fontWeight: 'bold' }}>Plumbing</Stack>
//             <Stack ml={1}><MdPlumbing color={vendor_color} /></Stack>
//             <Stack sx={{ color: "white", fontSize: { md: 15, lg: 12, sm: 12, xs: 10 }, fontWeight: 'bold' }}>Plumbing</Stack>
//           </Stack>
//           <Stack flexDirection={'row'} alignItems={'center'} gap={0.5} mt={0.9} mb={{ md: 1, sm: 1 }}>
//             <Stack><MdLeaderboard color={'#FB8500'} /></Stack>
//             <Stack sx={{ color: "white", fontSize: { md: 10, lg: 10, sm: 12, xs: 7 }, fontWeight: 'bold' }}>3034 Incoming Leads</Stack>
//             <Stack ml={2}><MdLeaderboard color={'#FB8500'} /></Stack>
//             <Stack sx={{ color: "white", fontSize: { md: 10, lg: 10, sm: 12, xs: 7 }, fontWeight: 'bold' }}>3034 Incoming Leads</Stack>
//           </Stack>
//         </Stack>
//       </Grid>
//       <Grid item md={12} lg={4} sm={12} xs={12}>
//         <img className='img_control' src={sildeImage} alt="carousel image" />
//       </Grid>
//     </Grid>
//   </Stack>
// )
const Slider = () => {
  const dispatch = useDispatch()
  const {
    get_customer_gig_status,
    get_customer_gig_data,
    get_customer_gig_error
  } = useSelector((state) => state.vendorAuth)
  const storedUserId = localStorage.getItem('userId');
  useEffect(() => {
    dispatch(get_customer_gig_async_service({
      vender_id: storedUserId
    }))
  }, [])
  // console.log("get_customer_gig_data", get_customer_gig_data);
let [_id,Set_id]=useState(" ")
// const  id_handler1=  async(e)=>{
//   Set_id(e)
// console.log(_id,"SaskldakldjaksdjaksdjakldjaskjkldjajdskldjklasjdklsjdakldjlkadklasdjklasjdTSTSTSTSTaaaa")
// //  axios.post('http://localhost:5000/delete-vendor-gig', { _id });
// try {
//   const response =  await axios.post('http://localhost:5000/delete-vendor-gig', { _id });
//   console.log(response);
//   window.location.reload();
// } catch (error) {
//   console.error(error.response);
// }
// }
const  id_handler=  async(e)=>{
console.log(e);
const _id = e;
  Set_id(e)
console.log(_id,"SaskldakldjaksdjaksdjakldjaskjkldjajdskldjklasjdklsjdakldjlkadklasdjklasjdTSTSTSTSTaaaa")
//  axios.post('http://localhost:5000/delete-vendor-gig', { _id });
try {
  const response =  await axios.post(`${baseURL}/delete-vendor-gig`, { _id });
  console.log(response);
  window.location.reload();
} catch (error) {
  console.error(error.response);
}
}
  return (
    <Carousel
      dynamicHeight={false}
      showThumbs={false}
      showArrows={false}
      showIndicators={false}
      stopOnHover={true}
      autoPlay={true}
      useKeyboardArrows={true}
      swipeable={true}
      showStatus={false}
    // infiniteLoop={true}
    >
      {get_customer_gig_data?.map((e, i) => {
        {console.log(e._id,"customerdetailsTSTSTSTTSTTS")}
        return <div className='SliderProfile'>
          <Stack mt={2}>
            <Grid container p={2} sx={{ backgroundColor:'white', borderRadius: 4, minHeight: '300px',border:'2px solid #002758' }} >
              <Grid item md={8} lg={8} sm={12} xs={12}>
                <Stack className='space_between_class' flexDirection={'column'} justifyContent={'space-between'}  >
                  <Stack flex={1}>
                    <Stack sx={{ fontSize: { md: 30, lg: 38, sm: 25, xs: 20 }, color: '#002758', fontWeight: 1000, textAlign: 'start' }}>{e.gig_title}</Stack>
                    <Stack mt={1} mb={1} sx={{ fontSize: { md: 14, lg: 18, sm: 15, xs: 13, color: '#002758', textAlign: 'start' } }}>{e.gig_discription}</Stack>
                    <Stack mt={1} mb={1} sx={{ fontSize: { md: 14, lg: 18, sm: 15, xs: 13, color: '#002758', textAlign: 'start' } }}>Travelling Cost: {e.travelling_cost}</Stack>
                  </Stack>
                  <Stack sx={{ mt: { xl: 7, lg: 0, md: 0, sm: 0, xs: 0 } }} >
                    <Stack flexDirection={'row'} alignItems={'center'} gap={0.5} >
                      {e.keywords.map((e, i) => {
                        return <Stack flexDirection={'row'} alignItems={'center'}>
                          <Stack ><MdPlumbing color={vendor_color} /></Stack>
                          <Stack sx={{ color: "#002758", fontSize: { md: 15, lg: 18, sm: 15, xs: 13 }, fontWeight: 'bold' }}>{e}</Stack>
                        </Stack>
                      })}
                    </Stack>
                    <Stack flexDirection={'row'} alignItems={'center'} gap={0.5} mt={0.9} mb={{ md: 1, sm: 1 }}>
                      {/* <Stack><MdLeaderboard color={'#FB8500'} /></Stack> */}
                      <Stack sx={{ color: "#002758", fontSize: { md: 12, lg: 15, sm: 12, xs: 10 }, fontWeight: 'bold' }}></Stack>
                      {/* <Stack ml={2}><MdLeaderboard color={'#FB8500'} /></Stack> */}
                      <Stack sx={{ color: "#002758", fontSize: { md: 12, lg: 15, sm: 12, xs: 10 }, fontWeight: 'bold' }}></Stack>
                    </Stack>
                  </Stack>

                              <Grid  className="delete1">
          
            <Btn variant="contained" color="danger" label={'Delete'} onClick={() => id_handler(e._id)} style={{
                          backgroundColor: "#B22234",
                        marginLeft:'5px',
                          border: 'none', outline: 'none', padding: "5px", borderRadius: '5px', color: 'white', cursor: "pointer" , width:'70px',
                          marginTop: '10px',
                          fontWeight:'600'
                        }}/>
                        </Grid>
                </Stack>
              </Grid>
              <Grid item md={12} lg={4} sm={12} xs={12}>
                <img className='img_control' src={e.gig_image} alt="carousel image"  style={{width: '220px',
height: '262px',
flexShrink: '0'}}/>
              </Grid>
                       
            </Grid>
          </Stack>
        </div>
      })}
      {/* <div>
        {slider_data}
      </div> */}
    </Carousel>
  );
};
export default Slider
// ReactDOM.render(<Slider />, document.querySelector('.demo-carousel'));