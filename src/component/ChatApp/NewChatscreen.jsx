 


import React, { useState, useEffect } from "react";
import { IoFilter } from "react-icons/io5";
import { Stack } from "@mui/material";
 
import { socket } from "../../config/apiHandle/apiHandle.js";
import MessageScreen from "./MessageScreen.jsx";
import MsgInput from "./MsgInput.jsx";
import { setChats, setChatsSeen } from "../../store/slice/ChatSlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import VendorSchedulesModal from "../Community/VendorSchedulesModal.jsx";
import { useNavigate } from "react-router-dom";

function ChatScreen() {
  const { selectedIndexValue } = useSelector((state) => state.authSlice)
  const dispatch = useDispatch()
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const storedUserId = localStorage.getItem('userId');
  // console.log('alex',storedUserId)
  const user_details = localStorage.getItem('user_details');
  // const retrievedObject = JSON.parse(user_details);
  const senderId = storedUserId;
  const receiverId = "669962bd6a6c2b9ab03dc5e2";
  const sendMessage = async () => {
    if (msg !== '') {
      const messageData = {
        sender: senderId,
        receiver: receiverId,
        message: msg,
      };
      // console.log(messageData);
      await socket.emit('send_message', messageData);
      setMsg('');
    }
  };

  // After sending a message
  socket.emit("get_previous_messages", {
    sender: senderId,
    receiver: receiverId,
  });

  // Handle the received previous messages
  socket.on("previous_messages", (previousMessages) => {
    setMessages(previousMessages)
  });

  const [accepted, setAccepted] = useState(false); // Initialize accepted state

  socket.on('requestResponse', (data) => {
    console.log('Request response received:', data);
    console.log('Request response received achieved:', data.accepted);

    setAccepted(data.accepted); // Update accepted state
    // Handle the response from the server (if needed)
  });

  const handleKey = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      sendMessage();
    }
  }

  const checkAdmin = localStorage.getItem('is_expert', "true");

  const navigate = useNavigate()

  const handlenavigate =()=>{

navigate('/dashboard')

  }






  return (
    <Stack className="unique-class-26">
      {accepted ? (
        <Stack className="container unique-class-27" style={{background:'transparent'}}>


<div className="Select_vendor-chart-vue-button">
                                <button onClick={handlenavigate}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="30" viewBox="0 0 51 30" fill="none"><path d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM51 13L2 13V17L51 17V13Z" fill="#002758"></path><path d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM51 13L2 13V17L51 17V13Z" fill="#002758"></path></svg>

                  
                                </button>

                                </div>
          <Stack style={{backgroundColor: '#1AC1F3', padding: "10px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px"}} className="unique-class-28">
            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} className="unique-class-29">
              <Stack style={{ fontSize: "25px", fontWeight: "bold", color: "white" }} className="unique-class-30">
                {retrievedObject?.Name}
              </Stack>
              {
                checkAdmin === "true" ? <Stack className="unique-class-31"></Stack> : (
                  <Stack className="unique-class-32">
                    {selectedIndexValue === "Vendor" ? <VendorSchedulesModal className="unique-class-33" /> : null}
                  </Stack>
                )
              }
            </Stack>
          </Stack>
          <Stack flex={1} className="chat_or_inp_container unique-class-34">
            <Stack style={{ flex: 2 }} className="unique-class-35">
              <MessageScreen messages={messages} className="unique-class-36" />
            </Stack>
            <Stack className="unique-class-37">
              <MsgInput value={msg} onChange={(e) => setMsg(e.target.value)} onClick={sendMessage} handleKey={handleKey} className="unique-class-38" />
            </Stack>
          </Stack>
        </Stack>
      ) : null}
    </Stack>
  );
}

export default ChatScreen;
