import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { Timestamp } from "firebase/firestore";
import { Avatar } from "@mui/material";
import './index.css'

function Message({ message }) {
  // const { currentUser } = useContext(AuthContext);
  // const { data } = useContext(ChatContext);
  // const ref = useRef();

  // useEffect(() => {
  //   ref.current?.scrollIntoView({ behavior: "smooth" });
  // }, [message]);

  // const toHoursAndMinutes = (totalSeconds) => {
  //   const totalMinutes = Math.floor(totalSeconds / 60);

  //   const seconds = Math.floor(totalSeconds % 60);
  //   const hours = Math.floor(totalMinutes / 60);
  //   const minutes = Math.floor(totalMinutes % 60);
  //   if (hours !== 0) {
  //     return `${hours} Hours Ago`;
  //   } else if (hours === 0 && minutes !== 0) {
  //     return `${minutes} Minutes Ago`;
  //   } else if (hours === 0 && minutes === 0 && seconds !== 0) {
  //     return `${seconds} Seconds Ago`;
  //   } else if (hours === 0 && minutes === 0 && seconds === 0) {
  //     return "Just now";
  //   }
  // };

  return (
    <div
    // ref={ref}
    // className={`message ${message.senderID === currentUser.uid && "owner"}`}
    className={`message unique-class-51`}
  >
    <div className="messageInfo unique-class-52">
     
      <Avatar alt="Remy Sharp" src={'https://images4.alphacoders.com/133/1332070.jpeg'} className="unique-class-53" />
  
      {/* <span>{toHoursAndMinutes(Timestamp.now() - message.date)}</span> */}
    </div>
    <div className="messageContent unique-class-54">
      {/* <p>{'How are you'}</p> */}
      <p className="para unique-class-55">{"hello"}</p>
      {/* {message.img && */}
       {/* <img src={'https://images4.alphacoders.com/133/1332070.jpeg'} alt={'message'} /> */}
       {/* } */}
    </div>
  </div>
  
  );
}

export default Message;
