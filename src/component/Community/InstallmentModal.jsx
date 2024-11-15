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
import { InstallmentCheckoutForm } from "../ChatApp/PayInstallment";

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

export default function InstallmentModal({ get_schedule_data, parent_check_status, save_index, set_selected_index ,number}) {
  const stripePromise = loadStripe('pk_live_51ON5LdEN3YLdh4I9nJXr0oTVXOslXKHNNl7E4lu59pgWhF74DdzsHBCOqlS7hKjgUqzpenNyULx0p4JtGiEnJLcC00N9ExSAcI');

  const theme = useTheme();
  const dispatch = useDispatch()
  const { payment_status,
    payment_data,
    payment_error } = useSelector((state) => state.payment)

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (payment_status === asyncStatus.SUCCEEDED) {
      handleClose()
      setOpen(false)
      dispatch(setPaymentIdleStatus(setPaymentIdleStatus))
    }
  }, [, payment_status])

  const get_status_from_api = (value) => {
    console.log("value", value)
    parent_check_status(value)
  }

  const handleOpen = () => {
    setOpen(true)
    console.log("save_index", save_index)
    set_selected_index(save_index)
  }



  return (
    <div className="class-279">
    <GigButton
        onClick={handleOpen}
        // borderColor={user_color}
        // color={theme.text_color}
        // padding="10px 20px 10px 20px"
        style={{
          borderRadius: '5px',
          backgroundColor: '#01BAF2',
          border: 'none',
          outline: 'none',
          color: 'white',
          fontSize: '12px',
          cursor: 'pointer',
          padding: '3px',
          width: '105px',
          height: '40px',
          fontWeight: 'bold'
        }}
        // title={`Pay Installment ${number}`}
        title={`Pay Installment ${number}`}
        className="class-280"
    />
    <Modal
        disableScrollLock
        open={open}
        className="scroll-remove class-281"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box
            sx={{
                ...style,
                // width: { md: "40%", lg: "40%", sm: "50%", xs: "80%" },
                // height: { md: "30%", lg: "30%", sm: "30%", xs: "30%" },
                // height: { md: "70%", lg: "70%", sm: "50%", xs: "auto" },
                overflowY: "scroll",
            }}
            className="scroll_content scroll-remove class-282"
        >
            <Stack className="class-283">

                <Elements stripe={stripePromise} className="class-284">
                    {/* Components that use useStripe go here */}
                    <InstallmentCheckoutForm get_schedule_data_nested={get_schedule_data} get_status_from_api={get_status_from_api} className="class-285" />
                </Elements>
            </Stack>
        </Box>
    </Modal>
</div>

  );
}
