import React, { useEffect, useState } from "react";
import { Container, Grid, Stack } from "@mui/material";
import "../auth.css";
import { main_color } from "../../../utils/color";
import Input from "../../../component/input/Input";
import PasswordInput from "../../../component/input/PasswordInput";
import Btn from "../../../component/button/Button";
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { baseURL } from "../../../config/apiHandle/apiHandle";
import { Upload_image_component } from "../../../component/uploadImage/uploadImage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { register_user_post_async } from "../../../services/authService";
import { asyncStatus } from "../../../utils/async_status";
import { setIdleStatus } from "../../../store/slice/AuthSlice";



const Signup = () => {
  const navigation = useNavigate()
  const dispatch = useDispatch()

  const { register_status,
    register_data,
    register_error } = useSelector((state) => state.authSlice)

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

  const [firstPassword, setFirstPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const submitHandle = () => {

    if (firstPassword === confirmPassword) {
      let obj = {
        ...data,
        profile_image: selectedImage,
        password: firstPassword
      }
      console.log(obj)
      dispatch(register_user_post_async(obj))
    } else if(firstPassword !== confirmPassword) {
      alert("Passwords do not match")
    }
    // console.log(firstPassword);
    // console.log(confirmPassword);

  }
  useEffect(() => {
    if (register_status === asyncStatus.SUCCEEDED) {
      navigation('/landingpage')
      window.location.reload()
      dispatch(setIdleStatus(setIdleStatus))
    }
  }, [,register_status])

  // navigation('/')

  return (
    <Stack
      sx={{
        // backgroundColor: main_color,
        // height: '100%',
      }}
      className="main_container"
    >
      <Container maxWidth={"md"} sx={{ p: { md: 5, lg: 5, sm: 0, xs: 0 }, justifyContent: 'center', alignItems: 'center' }}>
        <Grid container sx={{ justifyContent: 'center', alignItems: 'center' }} >
          <Grid md={12} lg={12} sm={12} xs={12} display={'contents'} >
            <Stack
              sx={{
                p: { md: 5, lg: 5, sm: 2, xs: 2 },
                borderRadius: { md: "20px", lg: "20px", sm: "20px", xs: '20px' },
                width: { md: '50%', lg: '50%', sm: '70%', xs: '90%' },
                mt: { xs: 2 },
                mb: { xs: 1 },

              }}

              className="blur-container"

            >
              <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <img width={150} height={150} src={logo} />
              </Stack>
              <Stack className="title">Sign Up</Stack>
              <Stack mt={5}>
                <Grid container spacing={0.4}>
                  <Grid md={12} lg={12} sm={12} xs={12} mx={2}>
                    <Upload_image_component
                      selectedImage={selectedImage}
                      selectedImageHandle={selectedImageHandle}
                    />
                  </Grid>

                  <Grid item md={6} lg={6} sm={12} xs={12}>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, first_name: e.target.value })
                      }
                      label="First Name"
                    />
                  </Grid>
                  <Grid item md={6} lg={6} sm={12} xs={12}>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, last_name: e.target.value })
                      }
                      label="Last Name"
                    />
                  </Grid>
                  <Grid item md={12} lg={12} sm={12} xs={12}>
                    <Input
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      label="Email address"
                    />
                  </Grid>

                  <Grid item md={12} lg={12} sm={12} xs={12}>
                    <PasswordInput
                      onChange={(e) =>
                        setFirstPassword(e.target.value)
                      }
                      label="Password"


                    />
                  </Grid>
                  <Grid item md={12} lg={12} sm={12} xs={12}>
                    <PasswordInput
                      onChange={(e) =>
                        setconfirmPassword(e.target.value)
                      }
                      label="Confirm Password"


                    />
                  </Grid>
                  <Grid item md={12} lg={12} sm={12} xs={12} mt={5}>
                    <Btn
                      onClick={() => submitHandle()}
                      label={"Sign Up"}
                      style={{
                        padding: "10px",
                        backgroundColor: main_color,
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

                <Stack
                  sx={{
                    textAlign: "center",
                    mt: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  <p> Al'ready have an account?</p>{" "}
                  <p
                    onClick={() => navigation('/')}
                    style={{ color: main_color, cursor: "pointer" }}
                  >
                    {" "}
                    Login
                  </p>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Signup;
