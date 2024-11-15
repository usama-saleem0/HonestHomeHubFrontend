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
import { user_color, vendor_color } from "../../utils/color";
import KeywordInput from "../input/AddkeyWord";
import { create_customer_gig_async_service, get_customer_gig_async_service } from "../../services/vendorService";
import { setVendorGigIdle } from "../../store/slice/vendorSlice";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../ChatApp/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { setPaymentIdleStatus } from "../../store/slice/paymentSlice";
import FiveStarRating from "./Rating";

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

export default function ReviewModal({ shedule_id,  job_id, customer_id, vendor_id }) {
// const stripePromise = loadStripe('pk_test_51ONGSUJf5CYoJPVsmhVV5W3GMEu0dVMj0RVrroS6aISJLVGYrMLe1D7LziLXPY3WgLsJRZOprKbUQzCb2kbVHWMm00dDxogEMK');



  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  

  const handleOpen = () => {
    setOpen(true)
    // console.log("save_index", save_index)
    // set_selected_index(save_index)
  }



  return (
    <div>
      <GigButton
        onClick={handleOpen}
        className="PayNow_AHTI"
        // borderColor={user_color}
        // color={theme.text_color}
        // padding="10px 20px 10px 20px"
        style={{
            backgroundColor: user_color,
            padding: "5px 20px 5px 20px",
            color: "white",
            width: "100px",
            height: "40px",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          
        title="Review "
      />
      <Modal
        disableScrollLock
        open={open}
        className="scroll-remove"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
            height: { md: "60%", lg: "60%", sm: "60%", xs: "60%" },
            // height: { md: "70%", lg: "70%", sm: "50%", xs: "auto" },
            overflowY: "scroll",
            display:'flex',
            justifyContent:'center'
          }}
          className="scroll_content scroll-remove"
        >
          <Stack>

          

                <FiveStarRating  C_ID={customer_id} V_ID={vendor_id} J_ID={job_id} S_ID={shedule_id} />
              {/* Components that use useStripe go here */}
              {/* <CheckoutForm get_schedule_data_nested={get_schedule_data} get_status_from_api={get_status_from_api}  s_id={shedule_id} job_ID={job_id}    cust_id={customer_id} vend_id={vendor_id}/> */}
           
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
