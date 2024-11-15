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
import { main_color, vendor_color } from "../../utils/color";
import KeywordInput from "../input/AddkeyWord";
import {
  create_customer_gig_async_service,
 
  create_expert_gig_async_service1,
  get_customer_gig_async_service,
  
  get_expert_gig_async_service1,
} from "../../services/vendorService";
import { setVendorGigIdle } from "../../store/slice/vendorSlice";

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

export default function ExpertGigModal() {
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
    dispatch(create_expert_gig_async_service1(obj));
    dispatch(
      get_expert_gig_async_service1({
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
        get_expert_gig_async_service1({
          vender_id: storedUserId,
        })
      );
      dispatch(setVendorGigIdle(setVendorGigIdle));
    }
  }, [, create_customer_gig_status, open]);

  return (
    <div className="class-256">
      <GigButton
        onClick={handleOpen}
        borderColor={theme.text_color}
        color={theme.text_color}
        padding="10px 20px 10px 20px"
        // startIcon={<IoMdAdd size={22} color={theme.text_color} />}
        title="Create Profile"
        className="class-257"
      />
      <Modal
        disableScrollLock
        open={open}
        className="scroll-remove class-258"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
            height: { md: "80%", lg: "80%", sm: "80%", xs: "70%" },
            overflowY: "scroll",
          }}
          className="scroll_content scroll-remove class-259"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            className="class-260"
          >
            <Stack
              sx={{
                fontSize: { md: 30, lg: 30, sm: 30, xs: 15 },
                color: main_color,
                fontWeight: "bold",
              }}
              className="class-261"
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
              color: "#646464",
            }}
            className="class-262"
          >
            Share your interests, current content, host discussions, and more.
          </Stack>
          <Stack className="class-263">
            <Stack alignItems={"center"} className="class-264">
              <Grid md={12} lg={12} sm={12} xs={12} className="class-265">
                <Upload_image_component
                  selectedImage={selectedImage}
                  selectedImageHandle={selectedImageHandle}
                />
              </Grid>
            </Stack>
            <Grid container alignItems={"center"} className="class-266">
              <Grid md={1} lg={1} sm={12} xs={12} className="class-267"></Grid>
              <br className="class-268" />
              <Grid
                md={12}
                lg={12}
                sm={12}
                xs={12}
                mb={2}
                className="class-269"
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
                    borderBottom: `2px solid ${vendor_color}`,
                    outline: "none",
                  }}
                  label="Title*"
                  className="class-270"
                />
              </Grid>
              <br className="class-271" />
              <Grid
                md={12}
                lg={12}
                sm={12}
                xs={12}
                mb={2}
                className="class-272"
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
                    borderBottom: `2px solid ${vendor_color}`,
                    outline: "none",
                  }}
                  label="Brief Description"
                  className="class-273"
                />
              </Grid>
              <br className="class-274" />
            </Grid>
            <Grid container className="class-275">
              <Grid
                md={12}
                lg={12}
                sm={12}
                xs={12}
                mt={7}
                className="class-276"
              >
                <Stack mt={3} alignItems={"center"} className="class-277">
                  <Btn
                    onClick={submitHandle}
                    label={"Create Now"}
                    style={{
                      backgroundColor: vendor_color,
                      border: "none",
                      outline: "none",
                      padding: "10px",
                      borderRadius: "10px",
                      color: "white",
                      cursor: "pointer",
                      width: "30%",
                    }}
                    className="class-278"
                  />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
