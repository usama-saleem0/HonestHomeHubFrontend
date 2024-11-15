import { Grid, Stack } from '@mui/material'
import React from 'react'
import Slider from '../Slider/Slider';
import CreateJobModal from '../Community/CreateJobModal';
import ActiveJobs from '../ChatApp/ActiveJobs';
import CustomerScheduledProjectCard from './CustomerScheduledProjectCard ';
import Drawers from '../drawer/Drawer_Side_Content';
import ChangeSetting from "./ChangeDetailsDropdown";
import Helpful from '../header/dropdown';
import { useState } from 'react';
import logout from '../../../src/assets/logout.png'
import { useLocation, useNavigate } from 'react-router-dom'
import PickedVendor from './PickedVendor';
import ShowPickedVendor from './ShowPickedVendor';
import cross from '../../../src/assets/new/icons8-multiply-48.png'
import Steps from './Steps';
import ActiveJobsUpdated from '../ChatApp/Active_Jobs_updated';
const PPBS = ({order_id}) => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const LogoutHandle = () => {
        localStorage.clear();
        handleClose()
        navigate('/')
        window.location.reload();
        // window.location.href = 'https://honesthomehub.com/';
     }
     const [isOpen, setIsOpen] = useState(false);
     const openPopup = () => {
       setIsOpen(true);
     };
     const closePopup = () => {
       setIsOpen(false);
     };
     const [isOpen1, setIsOpen1] = useState(false);
     const openPopup1 = () => {
       setIsOpen1(true);
     };
     const closePopup1 = () => {
       setIsOpen1(false);
     };

     const location = useLocation(); // Hook to access location
const currentUrl = window.location.href; // Full URL
const pathname = location.pathname; // Path only

console.log('Current URL:', currentUrl);
console.log('Current Path:', pathname);

const new_customer_route= localStorage.getItem("customer_route")


     const handlets=()=>{
      // navigate('/dashboard/customer')

      navigate(new_customer_route)
     }


    return (
        <div className='profile_section classname-555'>
    <Grid container>
        <Grid item md={8} lg={12} sm={12} xs={12} className="classname-556">
            <Stack p={1} className="classname-557">
                <Stack mt={1} flexDirection={"row"} justifyContent={'end'} gap={'10px'} className="classname-558">
                          {/* <PickedVendor/> */}
                        {/* <button onClick={openPopup} className='showpickedvendor'>
                            Show Picked Vendor
                        </button> */}
                        <div className='active-jobs'>
                        <p>Active Jobs  </p>
                        </div>

                        
                        <div className='side-div'>

                            <CreateJobModal className="classname-566" />


                    <Helpful />


                    <img src={logout} className="setting-button" style={{ width: '5%' }} onClick={LogoutHandle} />
                        </div>
                        <div className='order_id-box-imger-box'>
                        <div className='order_id'>
                Order ID:{order_id}
              </div>
              <div className='order_id-part2'>
              <button onClick={handlets}>
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="30" viewBox="0 0 51 30" fill="none">
  <path d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM51 13L2 13V17L51 17V13Z" fill="#002758"/>
  <path d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM51 13L2 13V17L51 17V13Z" fill="#002758"/>
</svg>
              </button>
              </div>
              </div>
                </Stack>
              
             
                <Stack sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }} style={{ borderBottom: '1px solid #002758' }} className="classname-564">
             
                </Stack>
              
            </Stack>
        </Grid>
        {/* <Grid item md={12} lg={3} sm={12} xs={12} mt={2} className="classname-569">
            <Stack p={1} className="classname-570">
                <Stack sx={{ color: '#000000', fontSize: { md: 20, lg: 20, sm: 14, xs: 11 }, fontWeight: 1000 }} className="classname-571">
                </Stack>
                <Stack style={{ background: 'transparent' }} className='side_scroll_handle_for_scheduled classname-572' mt={2} >
                    <Stack mt={1} className="classname-573">
                  
                        
                        
                    </Stack>
                </Stack>
            </Stack>
        </Grid> */}
    </Grid>

<div>
      {isOpen && (
        <div className="popup-container">
          <div className="popup">
            <div className="popup-inner">
            <div className='AHTI_USTAD'>

<img src={cross} onClick={closePopup} style={{width:'25px'}}/>
  </div>
  <h1 style={{textAlign:'center'}}>Selected Vendor</h1>
            {/* <ShowPickedVendor/> */}
        
          
            </div>
          </div>
        </div>
      )}
    </div>

{ isOpen1 &&
<div className="modal fade show" id="paymentOptionsModal" tabIndex="-1" role="dialog" aria-labelledby="paymentOptionsModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="paymentOptionsModalLabel"> Choose Vendor </h5>
                <button type="button" className="close" onClick={closePopup1} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit='' className='formkk'>
                <PickedVendor/>
                </form>
              </div>
            </div>
          </div>
        </div>
}



{/* <ActiveJobsUpdated/> */}

{/* <Steps/> */}

</div>
    )
}
export default PPBS