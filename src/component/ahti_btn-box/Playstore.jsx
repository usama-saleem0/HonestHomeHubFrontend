import React from "react";
import { motion } from "framer-motion";
import appstor from "../../assets/home-app-store.png";
import Androids  from "../../assets/home-google-play.png";

const Playstore = ({   redeem_decision,closepopup   }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="redemm--popup--h"
    >
    <div className="cloce-btn-box" onClick={closepopup}>
      <span>X</span>
    </div>

    <div className="play-athi-box">
    <p>Download HonestHomeHub App</p>
    </div>

    <div className="google-box-in-box">



            <a
              style={{ textDecoration: "none" }}
              href="https://apps.apple.com/us/app/honest-home-hub/id6504685713"
              target="_blank"
              id="ios-store"
            >
              <button
                className="theme_btn theme_btn-alt-2"
              
              >
                <img src={appstor} alt="" />
              </button>
            </a>

            <a
              style={{ textDecoration: "none" }}
              href="https://play.google.com/store/apps/details?id=com.honesthomehubcustomer&pcampaignid=web_share"
              target="_blank"
              id="play-store"
            >
              <button
                className="theme_btn theme_btn-alt-2"
                style={{ marginTop: "10px" }}
             
              >
               <img src={Androids} alt="" />
              </button>
            </a>
            </div>

    </motion.div>
  );
};
export default Playstore;
