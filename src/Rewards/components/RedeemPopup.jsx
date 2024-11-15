import React from "react";
import { motion } from "framer-motion";
const RedeemPopup = ({ dollar, redeem_decision, points }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="redemm--popup--h"
    >
      <h1>Redeem Voucher</h1>
      <p style={{ fontSize: "20px" }}>
      Are you sure you want to redeem {points} points? You’ll receive this amount.
      </p>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>${dollar}</p>
      <div className="redemm--popup--btn--h">
       
      <button onClick={() => redeem_decision("yes")}>
          Yes{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </button>
        <button onClick={() => redeem_decision("no")}>
          No{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>


     
      </div>
    </motion.div>
  );
};
export default RedeemPopup;
