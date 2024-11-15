import React from "react";
import "./createpost.css";
import { Avatar, Container, Divider, Stack, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import useTheme from "../../hooks/theme";
import back_image from "../../assets/back_profile.png";
import { vendor_color } from "../../utils/color";
import ProfileBottomSection from "./ProfileBottomSection";
import { useDispatch, useSelector } from "react-redux";
import { get_vendor_profile_by_id_async_service } from "../../services/vendorService";
import { useEffect } from "react";
import axios from "axios";
// import { baseURL } from '../../../config/apiHandle/apiHandle';
import { baseURL } from "../../config/apiHandle/apiHandle";
import { Upload_image_component } from "../uploadImage/uploadImage";
import { useState } from "react";
import ChangeSetting from "./ChangeDetailsDropdown";
import logosmall from "../../../src/assets/new/logo1.png";
const VendorProfileCard = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {
    vendor_profile_status,
    vendor_profile_data,
    vendor_login_data,
    vendor_data,
    vendor_profile_error,
  } = useSelector((state) => state.vendorAuth);
  const [selectedImage, setSelectedImage] = useState("");
  const [userId, setUserId] = useState(null);
  const [communityData, setCommunityData] = useState({
    community_image_url: null,
  });
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
      await saveImagePathToVendorTable(imagePath, userId);
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
  const saveImagePathToVendorTable = async (imagePath, userId) => {
    try {
      const response = await axios.post(
        `${baseURL}/save-image-path`,
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
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);
  useEffect(() => {
    // Save the user ID to local storage when it's available
    if (vendor_login_data?.user_id) {
      localStorage.setItem("userId", vendor_login_data?.user_id);
      localStorage.setItem("Profile_Image", vendor_login_data?.Profile_Image);
    } else if (vendor_data?.user_id) {
      localStorage.setItem("userId", vendor_data?.user_id);
      localStorage.setItem("Profile_Image", vendor_data?.Profile_Image);
    }
  }, [vendor_login_data?.user_id, vendor_data?.user_id]);
  useEffect(() => {
    // Retrieve user ID from local storage
    const storedUserId = localStorage.getItem("userId");
    // Use the stored ID if available, otherwise, use the one from the state
    const userIdToUse = storedUserId;
    console.log("storedUserId", storedUserId);
    // If there is a stored ID and it is different from the state ID, dispatch the action
    dispatch(get_vendor_profile_by_id_async_service(userIdToUse));
    // if (userIdToUse && userIdToUse !== vendor_login_data?.user_id) {
    // }
  }, [dispatch, vendor_login_data?.user_id, vendor_data?.user_id]);
  // console.log("vendor_data", vendor_data);
  // console.log("vendor_profile_data", vendor_login_data.user_id ? vendor_login_data.user_id : vendor_data?.user_id);
  // const firstName = vendor_profile_data?.Name.split(' ')[0];
  const firstName = vendor_profile_data?.Name;
  const split_firstname = vendor_profile_data?.Name.split(" ")[0];

  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    customer_id: "",
    iban: "",
    accountName: "",
    accountNumber: "",
    bankName: "",
  });
  useEffect(() => {
    if (vendor_profile_data) {
      const intervalId = setInterval(() => {
        setUserInfo({
          fullName: vendor_profile_data?.Name || "",
          email: vendor_profile_data?.email || "",
          phone: vendor_profile_data?.phoneno || "",
          address: vendor_profile_data?.Home_Address || "",
          customer_id: userId,
          iban: vendor_profile_data?.iban || "",
          accountName: vendor_profile_data?.accountName || "",
          accountNumber: vendor_profile_data?.accountNumber || "",
          bankName: vendor_profile_data?.bankName || "",
        });
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [vendor_profile_data]);
  useEffect(() => {
    console.log("Latest userInfo:", userInfo);
  }, [userInfo]);
  return (
    <>
      <Container
        maxWidth="xl"
        style={{ paddingRight: "0px" }}
        className="classname-580"
      >
        <Stack sx={{ position: "relative" }} className="classname-581">
          <div className="classname-431 small_logo">
            <img src={logosmall} style={{ width: "5%" }} />
            <Stack flexDirection={"column"} className="classname-583">
              <Stack
                className="classname-432"
                sx={{
                  fontSize: { lg: 40, md: 30, sm: 17, xs: 17 },
                  fontWeight: 800,
                  paddingTop: "30px", // Adjust the value as needed
                  paddingLeft: "30px",
                  color: "#000",
                }}
              >
                {" "}
                Hello {firstName}
              </Stack>
              <Stack
                className="classname-433"
                sx={{
                  fontSize: { lg: 20, md: 20, sm: 12, xs: 10 },
                  fontWeight: 600,
                  paddingLeft: "30px",
                  color: "#000",
                }}
              >
                {" "}
                Here you can manage your household problems
              </Stack>
            </Stack>
          </div>
          <Stack
            sx={{
              position: "absolute",
              bottom: { lg: -55, sm: -20, xs: -18, md: -70 },
              left: 20,
            }}
            style={{ width: "100%" }}
            className="classname-434"
          >
            <Stack
              className="nazar bhai"
              flexDirection={"column"}
              alignItems={"end"}
              style={{ width: "100%" }}
            >
              <Stack
                className="classname-435"
                style={{
                  width: "24.5%",
                  backgroundColor: "white",
                  paddingTop: "25px",
                  paddingLeft: "10px",
                  paddingBottom: "0px",
                  borderRadius: "15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="classname-589"
                >
                  <Avatar
                    alt="Remy Sharp"
                    sx={{
                      width: { md: 80, lg: 100, sm: 70, xs: 70 },
                      height: { md: 80, lg: 100, sm: 70, xs: 70 },
                      left: 0,
                    }}
                    src={selectedImage || vendor_profile_data?.Profile_Image}
                    className="classname-590"
                  />
                  <Stack flexDirection={"column"} className="classname-591">
                    <span
                      className="classname-436"
                      sx={{ fontSize: { md: 30, lg: 40, sm: 20, xs: 10 } }}
                      style={{
                        paddingLeft: "20px",
                        fontWeight: "bold",
                        fontSize: "40px",
                      }}
                    >
                      {split_firstname}
                    </span>
                    <p
                      className="classname-437"
                      sx={{ fontSize: { md: 30, lg: 40, sm: 20, xs: 10 } }}
                      style={{
                        paddingLeft: "20px",
                        fontWeight: "bold",
                        fontSize: "25px",
                        color: "#002758",
                      }}
                    >
                      Vendor
                    </p>
                  </Stack>
                </div>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"end"}
                  className="classname-592"
                >
                  <ChangeSetting
                    userInfo={userInfo}
                    className="classname-593"
                  />
                </Stack>
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={selectedImageHandle}
                  className="classname-594"
                />

                <div className="upload_icon_image_ahti">
                  <label
                    htmlFor="fileInput"
                    style={{
                      position: "absolute",
                      left: "90px",
                      bottom: "40px",
                    }}
                  >
                    <IconButton
                      component="span"
                      style={{ fontSize: 50, color: "black" }}
                    >
                      <CloudUploadIcon
                        sx={{ fontSize: 50, color: "black" }}
                        className="upload-button"
                      />
                    </IconButton>
                  </label>
                </div>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            sx={{}}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            className="classname-595"
          >
            <Stack className="classname-596"></Stack>
            <Stack flexDirection={"row"} alignItems={"center"}>
              <Stack
                sx={{
                  fontSize: { lg: 30, md: 30, sm: 17, xs: 17 },
                  fontWeight: 800,
                  mt: { lg: 4, md: 4, sm: 2, xs: 2 },
                }}
                className="classname-597"
              >
                {/* Over-all Rating: */}
              </Stack>
              <Stack
                sx={{
                  fontSize: { lg: 50, md: 50, sm: 20, xs: 20 },
                  fontWeight: 1000,
                  mt: 3,
                }}
                className="classname-598"
              >
                {/* 4.5 */}
                <br />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        {/* <Divider sx={{ borderWidth: 1, borderColor: vendor_color, }} /> */}
        {/* Bottom Profile Section */}
        <ProfileBottomSection className="classname-599" />
        {/* Bottom Profile Section */}
      </Container>
    </>
  );
};
export default VendorProfileCard;
