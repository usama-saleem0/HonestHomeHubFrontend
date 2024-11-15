import React, { useEffect, useState } from "react";
import { Container, Grid, Stack } from "@mui/material";
import "../auth.css";
import { main_color, user_color } from "../../../utils/color";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../component/input/Input";
import PasswordInput from "../../../component/input/PasswordInput";
import Btn from "../../../component/button/Button";
import { Upload_image_component } from "../../../component/uploadImage/uploadImage";
import { baseURL } from "../../../config/apiHandle/apiHandle";
import useTheme from "../../../hooks/theme";
import TimePicker from "../../../component/DateTimePicker/DateTimePicker";
import { create_customer_async_service } from "../../../services/customerService";
// import { register_user_post_async } from "../../../services/authService";
// import { asyncStatus } from "../../../utils/async_status";
// import { setIdleStatus } from "../../../store/slice/AuthSlice";





const CustomerSignUp = () => {
  const navigation = useNavigate()
  const theme = useTheme()
  const { searchTerm } = useParams();
  const dispatch = useDispatch()


  const { customer_status,
    customer_data,
    customer_error } = useSelector((state) => state.customerAuth)

  const [selectedImage, setSelectedImage] = useState("");
  const [communityData, setCommunityData] = useState({});

  // console.log('communityData', communityData);
  const selectedImageHandle = async (e) => {
    const { id, files } = e.target;
    try {
      const formData = new FormData();
      formData.append("files", files[0]);

      const response = await axios.post(`${baseURL}/upload-files`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // console.log({ response });

      // Handle the response from the backend
      setSelectedImage(response?.data?.url);
      setCommunityData((prev) => ({
        ...prev,
        community_image_url: response?.data?.url,
      }));
      console.log("Response from the backend:", response.data);
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
    }
  };

  const [data, setData] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const isFormValid = () => {
    // Check if all required fields in the 'data' object are filled
    return (
      data && // Ensure 'data' is not null
      searchTerm.trim() !== '' &&
      selectedImage.trim() !== ''
    );
  };
  const submitHandle = () => {
    let obj = {
      ...data,
      type: "customer",
      // selected_queries: searchTerm,
      Profile_Image: selectedImage,
    }

    dispatch(create_customer_async_service(obj))

    // console.log(obj);


  }
  React.useEffect(() => {
    setIsSubmitDisabled(!isFormValid());
  }, [ selectedImage, data]);

  return (
    <div>
      <Grid container >
        <Grid item md={2} lg={2} xs={1} sm={1}  >
          <Stack sx={{ backgroundColor: 'blue' }}></Stack>
        </Grid>
        <Grid item md={10} lg={10} xs={11} sm={11}  >


          <Stack mt={2}>
            <Grid container spacing={0.4}>
              <Grid md={12} lg={12} sm={12} xs={12}>
                <Upload_image_component
                  selectedImage={selectedImage}
                  selectedImageHandle={selectedImageHandle}
                />
              </Grid>

              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Input
                  onChange={(e) =>
                    setData({ ...data, Name: e.target.value })
                  }
                  label="Name"
                />
              </Grid>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Input
                  onChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                  label="Email address"
                />
              </Grid>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Input
                  onChange={(e) =>
                    setData({ ...data, Home_Address: e.target.value })
                  }
                  label="Home Address"
                />
              </Grid>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Input
                  type="number"
                  onChange={(e) =>
                    setData({ ...data, Phone_Number: e.target.value })
                  }
                  label="Phone Number"
                />
              </Grid>
              <Grid item md={12} lg={12} sm={12} xs={12}>
                <PasswordInput
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  label="Password"
                />
              </Grid>
              <Grid item md={12} lg={12} sm={12} xs={12} mt={5}>
                <Btn
                  disabled={isSubmitDisabled}
                  onClick={submitHandle}
                  label={"Sign Up"}
                  style={{
                    padding: "10px",
                    backgroundColor: isSubmitDisabled ? "gray" : user_color,
                    borderRadius: "8px",
                    mt: 6,
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    color: 'white',
                    cursor: 'pointer'

                  }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomerSignUp;
