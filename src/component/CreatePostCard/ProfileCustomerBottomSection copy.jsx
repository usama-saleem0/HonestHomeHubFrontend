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
import { useNavigate } from 'react-router-dom'
import PickedVendor from './PickedVendor';
import ShowPickedVendor from './ShowPickedVendor';
import cross from '../../../src/assets/new/icons8-multiply-48.png'
const ProfileCustomerBottomSection = () => {
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
    return (
        <div className='profile_section classname-555'>
    <Grid container>
        <Grid item md={8} lg={9} sm={12} xs={12} className="classname-556">
            <Stack p={1} className="classname-557">
                <Stack mt={1} flexDirection={"row"} justifyContent={'end'} gap={'10px'} className="classname-558">
                          <PickedVendor/>
                        <button onClick={openPopup} className='showpickedvendor'>
                            Show Picked Vendor
                        </button>
                    <Helpful />
                    <img src={logout} className="setting-button" style={{ width: '5%' }} onClick={LogoutHandle} />
                </Stack>
                {/* <Stack mt={1} flexDirection={"row"} justifyContent={'space-between'} alignItems={'center'} style={{ borderBottom: '1px solid #002758' }} className="classname-559">
                    <Stack sx={{ color: '#002758', fontSize: { md: 30, lg: 30, sm: 20, xs: 17 }, fontWeight: 'bold', mt: 1 }} className="classname-560">Upcoming Requests</Stack>
                    
                </Stack> */}
                <Grid item md={12} lg={12} sm={12} xs={12} className='active_jobs_width classname-562'>
                    <Stack className='side_scroll_handle_for_scheduled active_jobs_updated classname-563'>
                        {/* <CustomerScheduledProjectCard /> */}
                    </Stack>
                </Grid>
                <Stack sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }} style={{ borderBottom: '1px solid #002758' }} className="classname-564">
                    <Stack sx={{ color: '#002758', fontSize: { md: 30, lg: 30, sm: 20, xs: 17 }, fontWeight: 'bold', mt: 1 }} className="classname-565">Active Jobs</Stack>
                    <CreateJobModal className="classname-566" />
                </Stack>
                <Grid item md={12} lg={12} sm={12} xs={12} className='active_jobs_width classname-567'>
                    <Stack className='side_scroll_handle_for_scheduled active_jobs_updated classname-568'>
                        <ActiveJobs />
                    </Stack>
                </Grid>
            </Stack>
        </Grid>
        <Grid item md={12} lg={3} sm={12} xs={12} mt={2} className="classname-569">
            <Stack p={1} className="classname-570">
                <Stack sx={{ color: '#000000', fontSize: { md: 20, lg: 20, sm: 14, xs: 11 }, fontWeight: 1000 }} className="classname-571">
                </Stack>
                <Stack style={{ background: 'transparent' }} className='side_scroll_handle_for_scheduled classname-572' mt={2} >
                    <Stack mt={1} className="classname-573">
                        {/* <Drawers /> */}
                        {/* <CustomerScheduledProjectCard /> */}
                    </Stack>
                </Stack>
            </Stack>
        </Grid>
    </Grid>
    {/* {isOpen && <div>
            <div className="popup">
                <span className="close" onClick={closePopup}>&times;</span>
                <ShowPickedVendor/>
            </div>
        </div>} */}
{/* TS */}
<div>
      {isOpen && (
        <div className="popup-container">
          <div className="popup">
            <div className="popup-inner">
            <div className='AHTI_USTAD'>
{/* <button onClick={togglePopup}>Close</button> */}
<img src={cross} onClick={closePopup} style={{width:'25px'}}/>
  </div>
  <h1 style={{textAlign:'center'}}>Selected Vendor</h1>
            <ShowPickedVendor/>
              {/* <button onClick={closePopup}>Close</button> */}
            </div>
          </div>
        </div>
      )}
    </div>
{/*
        {isOpen1 && <div>
            <div className="popup">
                <span className="close" onClick={closePopup1}>&times;</span>
                <PickedVendor/>
            </div>
        </div>} */}
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
</div>
    )
}
export default ProfileCustomerBottomSection