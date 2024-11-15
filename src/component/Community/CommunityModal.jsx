import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import CommunityButton from "../button/GigBtn";
import useTheme from "../../hooks/theme";
import { Grid, Stack, Typography } from "@mui/material";
import "./premium.css";
import { IoMdAdd } from "react-icons/io";
import { Upload_image_component } from "../uploadImage/uploadImage";
import Input from "../input/Input";
import Select_dropdown from "../select/Select";
import Btn from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  create_community_async,
  get_all_topics_async,
} from "../../services/communityService";
import axios from "axios";
import { asyncStatus } from "../../utils/async_status";
import { baseURL } from "../../config/apiHandle/apiHandle";
import GigButton from "../button/GigBtn";
import { vendor_color } from "../../utils/color";
import KeywordInput from "../input/AddkeyWord";
import {
  create_customer_gig_async_service,
  get_customer_gig_async_service,
} from "../../services/vendorService";
import { setVendorGigIdle } from "../../store/slice/vendorSlice";
import { Placeholder } from "react-bootstrap";
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
export default function CreateGigModal() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {
    create_community_status,
    create_community_data,
    create_community_error,
  } = useSelector((state) => state.community);
  const {
    create_customer_gig_status,
    create_customer_gig_data,
    create_customer_gig_error,
  } = useSelector((state) => state.vendorAuth);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState({
    keywords: null,
    travelling_cost: null,
    license_type: null,
    fluent_english: null,
  });
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
  const setKeywordValue = (e) => {
    setData({ ...data, keywords: e });
  };
  const storedUserId = localStorage.getItem("userId");
  const submitHandle = () => {
    let obj = {
      ...data,
      gig_image: selectedImage,
      vender_id: storedUserId,
    };
    dispatch(create_customer_gig_async_service(obj));
    dispatch(
      get_customer_gig_async_service({
        vender_id: storedUserId,
      })
    );
    // window.location.reload()
  };
  useEffect(() => {
    if (create_customer_gig_status === asyncStatus.SUCCEEDED) {
      handleClose();
      // window.location.reload();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      dispatch(
        get_customer_gig_async_service({
          vender_id: storedUserId,
        })
      );
      dispatch(setVendorGigIdle(setVendorGigIdle));
    }
  }, [, create_customer_gig_status, open]);
  return (
    <div className="class-215">
      <GigButton
        onClick={handleOpen}
        color={theme.text_color}
        padding="10px 20px 10px 20px"
        title="Create Profile"
        className="class-198"
      />
      <Modal
        disableScrollLock
        open={open}
        className="scroll-remove class-199"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack style={{ padding: "20px" }} className="class-200">
          <Box
            sx={{
              ...style,
              width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
              height: { md: "80%", lg: "80%", sm: "80%", xs: "70%" },
              overflowY: "scroll",
            }}
            className=" scroll-remove class-201"
          >
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              className="class-202"
            >
              <Stack
                sx={{
                  fontSize: { md: 30, lg: 30, sm: 30, xs: 15 },
                  color: "#002758",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Create Profile
              </Stack>
            </Stack>
            <Stack
              alignItems={"center"}
              sx={{
                fontSize: { md: 20, lg: 20, sm: 16, xs: 11 },
                fontWeight: "bold",
                color: "#002758",
              }}
              className="class-203"
            >
              Share your interests, current content, host discussions, and more.
            </Stack>
            <Stack style={{ width: "100%" }} className="class-204">
              <Stack alignItems={"center"} className="class-205">
                <Grid md={12} lg={12} sm={12} xs={12} className="class-206">
                  <Upload_image_component
                    selectedImage={selectedImage}
                    selectedImageHandle={selectedImageHandle}
                  />
                </Grid>
              </Stack>
              <Grid container alignItems={"center"} className="class-207">
                <Grid
                  md={1}
                  lg={1}
                  sm={12}
                  xs={12}
                  className="class-208"
                ></Grid>
                <Grid
                  md={12}
                  lg={12}
                  sm={12}
                  xs={12}
                  mb={2}
                  className="class-209"
                >
                  <Input
                    name="title"
                    onChange={(e) =>
                      setData({ ...data, gig_title: e.target.value })
                    }
                    style={{
                      padding: "10px 10px",
                      borderBottomLeftRadius: "7px",
                      borderTopLeftRadius: "7px",
                      border: "none",
                      borderBottom: "2px solid #0874B7",
                      outline: "none",
                      width: "100%",
                    }}
                    label="Title*"
                  />
                </Grid>
                <Grid
                  md={12}
                  lg={12}
                  sm={12}
                  xs={12}
                  mb={2}
                  className="class-210"
                >
                  <Input
                    name="description"
                    onChange={(e) =>
                      setData({ ...data, gig_discription: e.target.value })
                    }
                    style={{
                      padding: "10px 10px",
                      borderBottomLeftRadius: "7px",
                      borderTopLeftRadius: "7px",
                      border: "none",
                      borderBottom: "2px solid #002758",
                      outline: "none",
                    }}
                    label="Brief Description"
                  />
                </Grid>
                {/* <Grid md={12} lg={12} sm={12} xs={12} mt={2} className="class-211">
                            <KeywordInput
                                className='keyword-input'
                                setKeywordValue={setKeywordValue}
                                style={{
                                    padding: "10px 10px",
                                    borderBottomLeftRadius: "7px",
                                    borderTopLeftRadius: "7px",
                                    border: "none",
                                    borderBottom: "2px solid #002758",
                                    outline: "none",
                                }}
                            />
                        </Grid> */}

                <Grid
                  md={12}
                  lg={12}
                  sm={12}
                  xs={12}
                  mb={2}
                  className="class-210"
                >
                  <Input
                    name="description"
                    onChange={(e) =>
                      setData({ ...data, fluent_english: e.target.value })
                    }
                    placeholder="Enter Yes or No"
                    style={{
                      padding: "10px 10px",
                      borderBottomLeftRadius: "7px",
                      borderTopLeftRadius: "7px",
                      border: "none",
                      borderBottom: "2px solid #002758",
                      outline: "none",
                    }}
                    label="Fluent English"
                  />
                </Grid>

                <Grid
                  md={12}
                  lg={12}
                  sm={12}
                  xs={12}
                  mb={2}
                  className="class-210"
                >
                  <Input
                    name="description"
                    // placeholder="Type Yes or No"
                    onChange={(e) =>
                      setData({ ...data, license_type: e.target.value })
                    }
                    style={{
                      padding: "10px 10px",
                      borderBottomLeftRadius: "7px",
                      borderTopLeftRadius: "7px",
                      border: "none",
                      borderBottom: "2px solid #002758",
                      outline: "none",
                    }}
                    label="License Type/Number?"
                  />
                </Grid>

                <Grid
                  md={12}
                  lg={12}
                  sm={12}
                  xs={12}
                  mb={2}
                  className="class-210"
                >
                  <Input
                    name="travellingcost"
                    onChange={(e) =>
                      setData({ ...data, travelling_cost: e.target.value })
                    }
                    style={{
                      padding: "10px 10px",
                      borderBottomLeftRadius: "7px",
                      borderTopLeftRadius: "7px",
                      border: "none",
                      borderBottom: "2px solid #002758",
                      outline: "none",
                    }}
                    label="Travelling Cost"
                  />
                </Grid>
              </Grid>
              <Grid container className="class-212">
                <Grid
                  md={12}
                  lg={12}
                  sm={12}
                  xs={12}
                  mt={7}
                  className="class-213"
                >
                  <Stack mt={3} alignItems={"center"} className="class-214">
                    <Btn
                      onClick={submitHandle}
                      label={"Create Now"}
                      style={{
                        backgroundColor: "#0874B7",
                        border: "none",
                        outline: "none",
                        padding: "10px",
                        borderRadius: "10px",
                        color: "white",
                        cursor: "pointer",
                        width: "30%",
                      }}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Box>
        </Stack>
      </Modal>
    </div>
  );
}
