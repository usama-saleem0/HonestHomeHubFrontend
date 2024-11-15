


import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  width: { md: "50%", lg: "50%", sm: "60%", xs: "80%" },
  height: { md: "60%", lg: "60%", sm: "60%", xs: "60%" },
  borderRadius: 3,
  overflow: "hidden", // Ensure the content doesn't overflow the modal
};

export default function Mobile_Popup({ setopen }) {

  const [openProfile, setopenProfile] = useState(true);

  const closeProfile = () => 
  {

    // setopenProfile(false);
    setopen(false)

  }
    

  return (
    <Modal
      disableScrollLock
      open={openProfile}
      onClose={closeProfile}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack sx={{ height: "100%", width: "100%" }} className="stupid_app">

            <div className="stupid_app1">

         <div style={{fontWeight:'bold',color:'#b22234',paddingBottom:'10px'}}>
        Press on the button down below to Download HonestHomeHub App on your Mobile.
         </div>

            <div>

            <a
              style={{ textDecoration: "none" }}
              href="https://apps.apple.com/us/app/honest-home-hub/id6504685713"
              target="_blank"
              className="ios-store"
            >
              <button className="ssts  ios-store"   >
               For IOS
              </button>
            </a>


            <a
              style={{ textDecoration: "none" }}
              href="https://play.google.com/store/apps/details?id=com.honesthomehubcustomer&pcampaignid=web_share"
              target="_blank"
              className="play-store"
            >
              <button className="ssts play-store" style={{marginTop:'10px'}}  >
                  For Android
              </button>
            </a>

            </div>
                </div>

        </Stack>
      </Box>
    </Modal>
  );
}
