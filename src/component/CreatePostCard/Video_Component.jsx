// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import useTheme from "../../hooks/theme";
// import { Divider, Grid, Stack } from "@mui/material";
// import { format } from "date-fns";

// import { useDispatch } from "react-redux";
// import { Elements } from "@stripe/react-stripe-js";
// import { CheckoutForm } from "../ChatApp/Payment";
// import { baseURL, socket } from "../../config/apiHandle/apiHandle";
// import axios from "axios";


// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   width: { md: "40%", lg: "40%", sm: "60%", xs: "80%" },
//   height: { md: "60%", lg: "60%", sm: "60%", xs: "60%" },
//   borderRadius: 3,
//   overflow: "hidden", // Ensure the content doesn't overflow the modal
// };


// export default function Video_Dylan({setopen}) {
//   const theme = useTheme();
//   const dispatch = useDispatch();
//   const [open, setOpen] = useState(true);
//   const handleClose = () => setOpen(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const [openProfile, setopenProfile] = useState(true);
//   const viewProfile = () => {
//     setopenProfile(true);
//   };
//   const closeProfile = () => 
    
//     {
      
//       // setopenProfile(false);
//       setopen(false)

//     }
  

//   return (
//     <div className="classname30211">
    
//       <Modal
//         disableScrollLock
//         open={open}
//         className="scroll-remove"
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box
//           sx={{
//             ...style,
//             width: { md: "40%", lg: "40%", sm: "60%", xs: "80%" },
//             height: { md: "40%", lg: "40%", sm: "40%", xs: "40%" },
//             overflowY: "scroll",
//           }}
//           className="scroll_content scroll-remove"
//         >
         
//         </Box>
//       </Modal>
//       <Modal
//         disableScrollLock
//         open={openProfile}
//         className="scroll-remove"
//         onClose={closeProfile}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box
//           sx={{
//             ...style,
//             width: { md: "40%", lg: "40%", sm: "60%", xs: "80%" },
//             height: { md: "60%", lg: "60%", sm: "60%", xs: "60%" },
//             overflowY: "scroll",
//           }}
//           className="scroll_content scroll-remove"
//         >
//           <Stack >
//               <video autoPlay controls
//               style={{
//                 objectFit:'cover'
               
//               }}>
//                 <source
//                   src={require("../../../src/assets/video/dylan.mp4")}
//                   type="video/mp4"
//                 />
//               </video>
//           </Stack>
//         </Box>
//       </Modal>
//     </div>
//   );
// }












import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import dylanVideo from "../../assets/video/dylan.mp4";
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

export default function Video_Dylan({ setopen }) {

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
        <Stack sx={{ height: "100%", width: "100%" }}>
          <video
            autoPlay
            controls
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",  
            }}
          >
            <source
              src={ dylanVideo}
              type="video/mp4"
            />
          </video>
        </Stack>
      </Box>
    </Modal>
  );
}
