import React from "react";
import "./createpost.css";
import { Avatar, Divider, Stack, IconButton } from "@mui/material";
import useTheme from "../../hooks/theme";
import back_image from '../../assets/back_profile.png'
import { user_color, vendor_color } from "../../utils/color";
import ProfileBottomSection from "./ProfileBottomSection";
import { useDispatch, useSelector } from "react-redux";
import { get_customer_profile_async_service } from "../../services/customerService";
// import { Upload_image_component } from '../../../component/uploadImage/uploadImage';
import { Upload_image_component } from '../uploadImage/uploadImage';
import { useEffect } from "react";
import axios from 'axios';
// import { baseURL } from '../../../config/apiHandle/apiHandle';
import { baseURL } from '../../config/apiHandle/apiHandle';
import ProfileCustomerBottomSection from "./ProfileCustomerBottomSection copy";
import { useState } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import settingbutton from '../../../src/assets/settingicon.png'
import ChangeSetting from "./ChangeDetailsDropdown";
import Drawers from "../drawer/Drawer_Side_Content";
import { Class } from "@mui/icons-material";
// import MatchingLeadsVendor from '../CreatePostCard/MatchingLeadsVendor';
// src\assets\settingicon.png
import logosmall from '../../../src/assets/new/logo1.png'
import ProfileCustomerBottomSectionNew from "./Profile_bottom_section_new_design";
import ProfileCustomerBottomSectionNewjs from "./Profile_bottom_section_steps";
import PPBS from "./ppbs";
const CustomerProfileCard2 = ({order_id}) => {
  const theme = useTheme();
  const dispatch = useDispatch()
  const { customer_profile_status,
    customer_profile_data,
    customer_login_data,
    customer_data,
    customer_profile_error } = useSelector((state) => state.customerAuth)
  // console.log(customer_data?.user_id, customer_login_data?.user_id);
  // useEffect(() => {
  //   dispatch(get_customer_profile_async_service())
  // }, [])
  // TS  work
  const [selectedImage, setSelectedImage] = useState("");
  const [communityData, setCommunityData] = useState({});
  const [userId, setUserId] = useState(null);
  // const selectedImageHandle = async (e) => {
  //   const { files } = e.target;
  //   try {
  //     const formData = new FormData();
  //     formData.append("files", files[0]);
  //     const response = await axios.post(`${baseURL}/upload-files`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     const imagePath = response?.data?.url;
  //     // Send the image path and user ID to another API to save in the create_vendor table
  //     await saveImagePathToCustomerTable(imagePath, userId);
  //     // Update state or do any other necessary actions
  //     setSelectedImage(imagePath);
  //     setCommunityData((prev) => ({
  //       ...prev,
  //       community_image_url: imagePath,
  //     }));
  //     console.log("Response from the backend:", response.data);
  //   } catch (error) {
  //     // Handle any errors
  //     console.error("Error:", error);
  //   }
  // };
// ts
const firstName = customer_profile_data?.Name;
  const split_firstname = customer_profile_data?.Name.split(' ')[0]



const selectedImageHandle = async (e) => {
  const { files } = e.target;
  try {
    const formData = new FormData();
    formData.append("files", files[0]);
    const response = await axios.post(`${baseURL}/upload-files`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const imagePath = response?.data?.url;
    // Send the image path and user ID to another API to save in the create_vendor table
    await saveImagePathToCustomerTable(imagePath, userId);
    // Update state or do any other necessary actions
    setSelectedImage(imagePath);
    setCommunityData((prev) => ({
      ...prev,
      community_image_url: imagePath,
    }));
    console.log("Response from the backend:", response.data);
  } catch (error) {
    // Handle any errors
    console.error("Error:", error);
  }
};
const saveImagePathToCustomerTable = async (imagePath, userId) => {
  try {
    const response = await axios.post(
      // save-customerimage-path
      // `${baseURL}/save-image-path`,
      `${baseURL}/save-customerimage-path`,
      { imagePath, userId },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response from save-image-path API:", response.data);
  } catch (error) {
    console.error("Error saving image path to vendor table:", error);
  }
};
useEffect(() => {
  // Retrieve user ID from local storage when the component mounts
  const storedUserId = localStorage.getItem('userId');
  if (storedUserId) {
    setUserId(storedUserId);
  }
}, []);
//
  useEffect(() => {
    // Save the user ID to local storage when it's available
    if (customer_login_data?.user_id) {
      localStorage.setItem('userId', customer_login_data?.user_id);
      localStorage.setItem('Profile_Image', customer_login_data?.Profile_Image);
    } else if (customer_data?.user_id) {
      localStorage.setItem('userId', customer_data?.user_id);
      localStorage.setItem('Profile_Image', customer_data?.Profile_Image);
    }
  }, [customer_login_data?.user_id, customer_data?.user_id]);
  useEffect(() => {
    // Retrieve user ID from local storage
    const storedUserId = localStorage.getItem('userId');
    // Use the stored ID if available, otherwise, use the one from the state
    const userIdToUse = storedUserId
    // If there is a stored ID and it is different from the state ID, dispatch the action
    dispatch(get_customer_profile_async_service(userIdToUse))
    // if (userIdToUse && userIdToUse !== customer_login_data?.user_id) {
    // }
  }, [dispatch, customer_login_data?.user_id, customer_data?.user_id]);
//   React.useEffect(() => {
//     setIsSubmitDisabled();
// }, [selectedImage]);
console.log(customer_profile_data?.Name,'TSSSS');
console.log(customer_profile_data,'momomooommoooomoomomomomomo');
const [userInfo, setUserInfo] = useState({
  fullName: '',
  email: '',
  phone: '',
  address: '',
  customer_id:'',
  iban:'',
  accountName:'',
  accountNumber:'',
  bankName:''
});
useEffect(() => {
  if (customer_profile_data) {
    const intervalId = setInterval(() => {
      setUserInfo({
        fullName: customer_profile_data?.Name || '',
        email: customer_profile_data?.email || '',
        phone: customer_profile_data?.phoneno || '',
        address: customer_profile_data?.Home_Address || '',
        customer_id: userId,
        iban:customer_profile_data?.iban || '',
        accountName:customer_profile_data?.accountName || '',
        accountNumber:customer_profile_data?.accountNumber || '',
        bankName:customer_profile_data?.bankName || ''
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }
}, [customer_profile_data]);
useEffect(() => {
  console.log("Latest userInfo:", userInfo);
}, [userInfo]);
  return (
    <>
    <Stack className="classname-430 Customer-Dashboard">
        <Stack sx={{ position: 'relative' }}>
            <div className="classname-431 small_logo">
                <img src={logosmall} style={{ width: '5%' }} />
                <Stack flexDirection={'column'}>
                    <Stack className="classname-432" sx={{
                        fontSize: { lg: 40, md: 30, sm: 17, xs: 17 },
                        fontWeight: 800,
                        paddingTop: "30px",
                        paddingLeft: "30px",
                        color: "#002758"
                    }}> Hello {customer_profile_data?.Name}</Stack>
                    <Stack className="classname-433" sx={{
                        fontSize: { lg: 20, md: 20, sm: 12, xs: 10 },
                        fontWeight: 600,
                        paddingLeft: "30px",
                        color: "#002758"
                    }}> Here you can manage your household problems</Stack>
                </Stack>
            </div>
            <Stack sx={{
                position: 'absolute',
                bottom: { lg: -55, sm: -20, xs: -18, md: -70 },
                left: 20,
              }} className="classname-434" style={{ width: "100%" }}>


                <Stack  className="nazar bhai"     flexDirection={'column'} alignItems={'end'} style={{ width: '100%' }}>
                  
                    {/* <Stack className="classname-435" style={{ width: '24.5%', backgroundColor: 'white', paddingTop: '25px', paddingLeft: '10px', paddingBottom: '0px', borderRadius: '15px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar
                                alt="Remy Sharp"
                                sx={{
                                    width: { md: 80, lg: 100, sm: 70, xs: 70 },
                                    height: { md: 80, lg: 100, sm: 70, xs: 70 },
                                    left: 0
                                }}
                                src={selectedImage || customer_profile_data?.Profile_Image}
                            />
                            <Stack flexDirection={"column"}>
                                <span className="classname-436" style={{ paddingLeft: '20px', fontWeight: 'bold', fontSize: '40px' }}>
                                  
                                
                                  {split_firstname}
                                
                                </span>
                                <p className="classname-437" style={{ paddingLeft: '20px', fontWeight: 'bold', fontSize: '25px', color: '#01BAF2' }}>Customer</p>
                            </Stack>
                        </div>
                        <Stack className="classname-438" flexDirection={'row'} justifyContent={'end'}>
                            <ChangeSetting userInfo={userInfo} />
                        </Stack>
           
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={selectedImageHandle}
                        />
                        <div className="upload_icon_image_ahti">
                          <label htmlFor="fileInput"  style={{ position: 'absolute', left: '90px', bottom: '40px' }}>
                                      <IconButton component="span" style={{ fontSize: 50, color: 'black' }}>
                                              <CloudUploadIcon sx={{ fontSize: 50, color: 'black' }}  className="upload-button"/>
                                              </IconButton>
                                      </label>
                        </div>
                    </Stack> */}



                </Stack>
            </Stack>
        </Stack>
        <Stack className="classname-439" style={{ paddingTop: '10px' }}>
            {/* <ProfileCustomerBottomSection /> */}
            {/* <ProfileCustomerBottomSectionNew /> */}
            {/* <ProfileCustomerBottomSectionNewjs  order_id={order_id}/> */}
            <PPBS order_id={order_id}/>
            {/* <ProfileCustomerBottomSectionNew/> */}
        </Stack>
    </Stack>
</>
  );
};
export default CustomerProfileCard2;