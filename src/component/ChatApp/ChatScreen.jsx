// import React, { useContext } from "react";
// import MessageScreen from "./MessageScreen.js";
// import MsgInput from "./MsgInput.js";
// import { ChatContext } from "../context/ChatContext.js";
// import { IoFilter } from "react-icons/io5";
// import './index.css'
// import { Stack } from "@mui/material";
// import { main_color } from "../../utils/color.js";
// import { useState } from "react";
// import { socket } from "../../config/apiHandle/apiHandle.js";
// import { useEffect } from "react";
// function ChatScreen() {
//   // const { data } = useContext(ChatContext);
//   const [msg, setMsg] = useState("")
//   const [messages, setMessages] = useState([]);
// const senderId = "656cf750c067dce2a4055751"
// const receiverId = "656cf8b7c067dce2a4055774"
//   const sendMessage = () => {
//     console.log(msg);
//     if (msg.trim() !== '') {
//       // Emit chat message event with sender, receiver, and message
//       socket.emit('send_message', {
//         sender: senderId,
//         receiver: receiverId,
//         message: msg,
//       });
//       // Handle the server response
//       socket.on('send_message', (msg) => {
//         setMessages([...messages, msg]);
//       });
//       setMsg('');
//     }
//   }
//   console.log("messages", messages);
//   useEffect(() => {
//     socket.emit('join_room', "abc");
//     socket.on('join_room', "abc");
//     socket.on('receive_message', "abcxaxa");
//     console.log("also");
//   }, [])
//   return (
//     // <div className="home">
//     //   <div className="container">
//     //     <div className="chatScreen">
//     //       <div className="chatInfo">
//     //         <span>{"Ibrar"}</span>
//     //         <span>
//     //           <IoFilter />
//     //         </span>
//     //       </div>
//     //       <MessageScreen />
//     //       <MsgInput />
//     //     </div>
//     //   </div>
//     // </div>
//     <Stack>
//       <Stack className="container">
//         <Stack style={{ backgroundColor: main_color, padding: '10px', borderTopRightRadius: '20px', borderTopLeftRadius: '20px', }}>
//           <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
//             <Stack style={{ fontSize: '25px', fontWeight: 'bold', color: 'white' }}>Sara</Stack>
//             <Stack><IoFilter style={{ fontSize: '25px', color: 'white', cursor: 'pointer' }} /></Stack>
//           </Stack>
//         </Stack>
//         <Stack flex={1} className="chat_or_inp_container">
//           <Stack style={{ flex: 2 }}>
//             <MessageScreen />
//           </Stack>
//           <Stack >
//             <MsgInput value={msg} onChange={(e) => setMsg(e.target.value)} onClick={sendMessage} />
//           </Stack>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// }
// export default ChatScreen;
// import React, { useState, useEffect } from "react";
// import { IoFilter } from "react-icons/io5";
// import { Stack } from "@mui/material";
// import { main_color } from "../../utils/color.js";
// import { socket } from "../../config/apiHandle/apiHandle.js";
// import MessageScreen from "./MessageScreen.js";
// import MsgInput from "./MsgInput.js";
// function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const [msg, setMsg] = useState("");
//   const senderId = "656cf750c067dce2a4055751";
//   const receiverId = "656cf8b7c067dce2a4055774";
//   useEffect(() => {
//     // Emit join event when component mounts
//     socket.emit("join_room", senderId);
//     // Listen for incoming messages
//     socket.on("receive_message", (data) => {
//       console.log("data", data);
//       setMessages([...messages, data]);
//     });
//     // Clean up on component unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, [senderId, messages]);
//   const sendMessage = () => {
//     if (msg.trim() !== "") {
//       // Emit chat message event with sender, receiver, and message
//       socket.emit("send_message", {
//         // room: senderId,
//         sender: senderId,
//         receiver: receiverId,
//         message: msg,
//       });
//       console.log({
//         // room: senderId,
//         sender: senderId,
//         receiver: receiverId,
//         message: msg,
//       });
//       setMsg("");
//     }
//   };
//   return (
//     <Stack>
//       <Stack className="container">
//         <Stack
//           style={{
//             backgroundColor: main_color,
//             padding: "10px",
//             borderTopRightRadius: "20px",
//             borderTopLeftRadius: "20px",
//           }}
//         >
//           <Stack
//             flexDirection={"row"}
//             justifyContent={"space-between"}
//             alignItems={"center"}
//           >
//             <Stack style={{ fontSize: "25px", fontWeight: "bold", color: "white" }}>
//               Sara
//             </Stack>
//             <Stack>
//               <IoFilter style={{ fontSize: "25px", color: "white", cursor: "pointer" }} />
//             </Stack>
//           </Stack>
//         </Stack>
//         <Stack flex={1} className="chat_or_inp_container">
//           <Stack style={{ flex: 2 }}>
//             <MessageScreen messages={messages} />
//           </Stack>
//           <Stack>
//             <MsgInput value={msg} onChange={(e) => setMsg(e.target.value)} onClick={sendMessage} />
//           </Stack>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// }
// export default ChatScreen





// import React, { useState, useEffect } from "react";
// import { IoFilter } from "react-icons/io5";
// import { Stack } from "@mui/material";
// import { main_color } from "../../utils/color.js";
// import { socket } from "../../config/apiHandle/apiHandle.js";
// import MessageScreen from "./MessageScreen.js";
// import MsgInput from "./MsgInput.js";
// import { setChats, setChatsSeen } from "../../store/slice/ChatSlice.js";
// import { useDispatch, useSelector } from "react-redux";
// import VendorSchedulesModal from "../Community/VendorSchedulesModal.js";
// function ChatScreen() {
//   const { selectedIndexValue } = useSelector((state) => state.authSlice)
//   const dispatch = useDispatch()
//   const [messages, setMessages] = useState([]);
//   const [msg, setMsg] = useState("");
//   const storedUserId = localStorage.getItem('userId');
//   // console.log('alex',storedUserId)
//   const user_details = localStorage.getItem('user_details');
//   const retrievedObject = JSON.parse(user_details);
//   const senderId = storedUserId;
//   const receiverId = retrievedObject?._id;
//   const sendMessage = async () => {
//     if (msg !== '') {
//       const messageData = {
//         sender: senderId,
//         receiver: receiverId,
//         message: msg,
//       };
//       // console.log(messageData);
//       await socket.emit('send_message', messageData);
//       setMsg('');
//     }
//   };
//   // After sending a message
//   socket.emit("get_previous_messages", {
//     sender: senderId,
//     receiver: receiverId,
//   });
//   // Handle the received previous messages
//   socket.on("previous_messages", (previousMessages) => {
//     setMessages(previousMessages)
//   });
//   // socket.on('requestResponse', (data) => {
//   //   console.log('Request response received:', data);
//   //   // Handle the response from the server (if needed)
//   // });
//   let accepted;
//   socket.on('requestResponse', (data) => {
//     console.log('Request response received:', data);
//     console.log('Request response received achivee:', data.accepted);

//     accepted = data.accepted
//     // Handle the response from the server (if needed)
//   });
//   const handleKey = (e) => {
//     if (e.code === "Enter" || e.code === "NumpadEnter") {
//       sendMessage();
//     }
//   }
//   const checkAdmin = localStorage.getItem('is_expert', "true");
//   return (
//     <Stack className="unique-class-26">
//        {accepted? (
//     <Stack className="container unique-class-27" style={{background:'transparent'}}>
  
//       <Stack style={{backgroundColor: '#1AC1F3', padding: "10px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px"}} className="unique-class-28">
  
//         <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} className="unique-class-29">
//           <Stack style={{ fontSize: "25px", fontWeight: "bold", color: "white" }} className="unique-class-30">
//             {retrievedObject?.Name}
//           </Stack>
  
//           {
//             checkAdmin === "true" ? <Stack className="unique-class-31"></Stack>
//               : <Stack className="unique-class-32">
//                   {selectedIndexValue == "Vendor" ? <VendorSchedulesModal className="unique-class-33" /> : null}
//                 </Stack>
//           }
//         </Stack>
  
//       </Stack>
  
//       <Stack flex={1} className="chat_or_inp_container unique-class-34">
//         <Stack style={{ flex: 2 }} className="unique-class-35">
//           <MessageScreen messages={messages} className="unique-class-36" />
//         </Stack>
  
//         <Stack className="unique-class-37">
//           <MsgInput value={msg} onChange={(e) => setMsg(e.target.value)} onClick={sendMessage} handleKey={handleKey} className="unique-class-38" />
//         </Stack>
//       </Stack>
  
//     </Stack>
//      ) : null}
//   </Stack>
  
//   );
// }
// export default ChatScreen;


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
  const { selectedIndexValue } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const storedUserId = localStorage.getItem('userId');
  const user_details = localStorage.getItem('user_details');
  const senderId = storedUserId;
  const receiverId = '669962bd6a6c2b9ab03dc5e2';
  const navigate = useNavigate();
  const [accepted, setAccepted] = useState(false); // Initialize accepted state

  useEffect(() => {
    // After sending a message, emit the event to get previous messages
    socket.emit("get_previous_messages", { sender: senderId, receiver: receiverId });

    // Handle the received previous messages
    socket.on("previous_messages", (previousMessages) => {
      setMessages(previousMessages);
    });

    // Handle request response from the server
    socket.on('requestResponse', (data) => {
      console.log('Request response received:', data);
      setAccepted(data.accepted); // Update accepted state
    });

    // Clean up socket listeners on component unmount
    return () => {
      socket.off("previous_messages");
      socket.off("requestResponse");
    };
  }, [senderId, receiverId]);

  const sendMessage = async () => {
    if (msg !== '') {
      const messageData = {
        sender: senderId,
        receiver: receiverId,
        message: msg,
      };
      await socket.emit('send_message', messageData);
      setMsg(''); // Clear the input field
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      sendMessage();
    }
  };

  const checkAdmin = localStorage.getItem('is_expert', "true");

  // Ensure the redirect logic is inside useEffect to prevent state updates before the component is mounted
  useEffect(() => {
    const retrievedObject = JSON.parse(user_details);
    if (retrievedObject?.Name === "Expert") {
      // Avoid reloading directly in render
      navigate('/dashboard');
    }
  }, [navigate, user_details]);

  return (
    <Stack className="unique-class-26">
      {true? (
        <Stack className="container unique-class-27" style={{ background: 'transparent' }}>
          <Stack style={{ backgroundColor: '#0874B7', padding: "10px", borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }} className="unique-class-28">
            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} className="unique-class-29">
              <Stack style={{ fontSize: "25px", fontWeight: "bold", color: "white" }} className="unique-class-30">
                {/* {JSON.parse(user_details)?.Name}
                 */} NAME S
              </Stack>
              {checkAdmin === "true" ? (
                <Stack className="unique-class-31"></Stack>
              ) : (
                <Stack className="unique-class-32">
                  {selectedIndexValue === "Vendor" ? <VendorSchedulesModal className="unique-class-33" /> : null}
                </Stack>
              )}
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
