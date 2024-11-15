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
import { CheckoutFormSteps } from "../ChatApp/PaymentSteps";

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

export default function PaymentModalSteps({vendor_budget ,job_id ,numberofinstallments_matching,numberofinstallments,selected_schedule_id}) {
const stripePromise = loadStripe('pk_live_51ON5LdEN3YLdh4I9nJXr0oTVXOslXKHNNl7E4lu59pgWhF74DdzsHBCOqlS7hKjgUqzpenNyULx0p4JtGiEnJLcC00N9ExSAcI');

// const stripePromise = loadStripe('pk_live_51ON5LdEN3YLdh4I9nJXr0oTVXOslXKHNNl7E4lu59pgWhF74DdzsHBCOqlS7hKjgUqzpenNyULx0p4JtGiEnJLcC00N9ExSAcI');

// ('pk_live_51ON5LdEN3YLdh4I9nJXr0oTVXOslXKHNNl7E4lu59pgWhF74DdzsHBCOqlS7hKjgUqzpenNyULx0p4JtGiEnJLcC00N9ExSAcI');

  const theme = useTheme();
  const dispatch = useDispatch()
  const { payment_status,
    payment_data,
    payment_error } = useSelector((state) => state.payment)

  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

//   useEffect(() => {
//     console.log(payment_status,get_schedule_data,"TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT")

//     if (payment_status === asyncStatus.SUCCEEDED) {
//       handleClose()
//       setOpen(false)
//       dispatch(setPaymentIdleStatus(setPaymentIdleStatus))
//     }
//   }, [, payment_status])

//   const get_status_from_api = (value) => {
//     console.log("value", value)
//     parent_check_status(value)
//   }

//   const handleOpen = () => {
//     setOpen(true)
//     console.log("save_index", save_index)
//     set_selected_index(save_index)
//   }

    {console.log(vendor_budget)}

  return (
    <div className="class-286">
    {/* <GigButton
        onClick={''}
        className="PayNow_AHTI class-287"
        // borderColor={user_color}
        // color={theme.text_color}
        // padding="10px 20px 10px 20px"
        style={{
            backgroundColor: user_color,
            color: "white",
            // padding: "5px 20px 5px 20px"
            padding: '3px', width: '120px', height: '40px',
            borderRadius: '5px'
        }}
        title="Pay Now "
    /> */}
    {/* <Modal
        disableScrollLock
        open={open}
        className="scroll-remove class-288"
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box
            sx={{
                ...style,
                
                overflowY: "scroll",
            }}
            className="scroll_content scroll-remove strip-form-layout class-289"

        >
            <Stack style={{

              

            }} className="class-290">

                <Elements stripe={stripePromise} className="class-291">
                    
                    <CheckoutFormSteps className="class-292" />
                </Elements>
            </Stack>
        </Box>
    </Modal> */}

    <div>
    <Elements stripe={stripePromise} className="class-291">
                    
                    <CheckoutFormSteps    vendor_budget={vendor_budget} J_ID={job_id}    numberofinstallments={numberofinstallments}  
                        numberofinstallments_matching={numberofinstallments_matching}   selected_schedule_id={selected_schedule_id}

                    className="class-292" />
                </Elements>
    </div>
</div>

  );
}
