import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { io, Socket } from 'socket.io-client';
 
 
import { useDispatch, useSelector } from "react-redux";
 
 
import { baseURL } from "../config/apiHandle/apiHandle";
const TSChat = ({handleClose,vendorId}) => {

  

    const storedUserId = localStorage.getItem("userId");

    const VendorIDReal = localStorage.getItem("VendorIDReal");

    const formatTime1 = (timeString) => {
        const [hours, minutes] = timeString.split(":");
        const hour = parseInt(hours, 10);
        const minute = parseInt(minutes, 10);
        const suffix = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${suffix}`;
      };
      
      const DateFormatCustom = (date) => {
        let x = date;
      
        const month = [
          "ts",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
      
        const mm = x.split("-")[1];
      
        const yy = x.split("-")[0];
      
        const dd = x.split("-")[2];
      
        const y = mm[0].includes("0") ? mm.split("0")[1] : mm;
      
        // console.log(y)
      
        const  final_date= month[y]+" "+ dd+" "+ yy
      
        return final_date;
      
        // console.log(dd,month[y],yy)
      };

    console.log(VendorIDReal,"chatttttt",storedUserId)
     

    const dispatch = useDispatch()

  

    const SocketRef = useRef(null);
    const [senderId, setSenderId] = useState(storedUserId); // Example sender ID, replace with actual logic
    const [receiverId, setReceiverId] = useState(VendorIDReal);

    // const [senderId, setSenderId] = useState(storedUserId); // Example sender ID, replace with actual logic
    // const [receiverId, setReceiverId] = useState(vendorId);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [messages1, setMessages1] = useState([
        { sender: "Dylan", content: "Hey there, how are you?" },
        { sender: "Albert", content: "I'm doing well, how about you?" },
        { sender: "Dylan", content: "I'm great! What's going on?" },
        { sender: "Albert", content: "Just working on a new project." },
        { sender: "Dylan", content: "That's awesome, tell me more about it!" },
    ]);

    const fetchData = async () => {
        try {

            console.log("fetch")
            SocketRef.current = io(`${baseURL}`);

            // Set up socket listeners for new messages
            SocketRef.current.on("send_message", (incomingMessage) => {
                setMessages((prevMessages) => [...prevMessages, incomingMessage]);
            });

            // Listen for previous messages
            SocketRef.current.on("previous_messages", (previousMessages) => {
                console.log(previousMessages, "previous messages")
                setMessages(previousMessages);
            });

            // Request previous messages when the component mounts
            SocketRef.current.emit("get_previous_messages", {
                sender: senderId,
                receiver: receiverId,
            });
        } catch (error) {
            console.error('Error fetching data from server:', error);
        }
    };

    useEffect(() => {
        fetchData();
         
    
        return () => {
            if (SocketRef.current) {
                SocketRef.current.off("send_message");
                SocketRef.current.off("previous_messages");
                SocketRef.current.disconnect();
                SocketRef.current = null;
            }
        };
    }, [ dispatch]);
    const handleSendMessage = () => {

        console.log(message, "message")


        if (message.trim()) {
            const newMessage = {
                sender: senderId,
                receiver: receiverId,
                message: message,
            };

            // Emit message to server
            SocketRef.current.emit('send_message', newMessage);

            // Clear input field
            setMessage('');
        }
    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isPopupVisible2, setIsPopupVisible2] = useState(false);
    const [isPopupVisible3, setIsPopupVisible3] = useState(false);

    // Function to toggle popup visibility
    const handleViewClick = () => {
        setIsPopupVisible(true); // Show the popup
    };

    // Function to close the popup
    const handleClosePopup = () => {
        setIsPopupVisible(false); // Hide the popup
    };

    const handleViewClick2 = () => {
        setIsPopupVisible2(true); // Show the popup
    };

    // Function to close the popup
    const handleClosePopup2 = () => {
        setIsPopupVisible2(false); // Hide the popup
    };



    const handleViewClick3 = () => {
        setIsPopupVisible3(true); // Show the popup
    };

    // Function to close the popup
    const handleClosePopup3 = () => {
        setIsPopupVisible3(false); // Hide the popup
    };



    const handleSendPickTimeMessage=(data)=>{

        console.log(data,"yea boi")

        CustomSendMessage(`Time Picked Successfully Date: ${DateFormatCustom(data.date)} Time: ${formatTime1(data.time)}`)

    }



    const handleCreateQuoteMessage=(data)=>{

        console.log(data,"yea boi2")

        CustomSendMessage(`Quote Created Successfully Description: ${data.duration} Job Time: ${formatTime1(data.jobtime)} Cost: ${data.cost}`)

    }




    


    const CustomSendMessage = (message) => {

        console.log(message, "message")


        if (message.trim()) {
            const newMessage = {
                sender: senderId,
                receiver: receiverId,
                message: message,
            };

            // Emit message to server
            SocketRef.current.emit('send_message', newMessage);

            // Clear input field
            setMessage('');
        }
    };

    const handleCloseTS=()=>{

        console.log('close')

        handleClose
    }



    return (
        <>
            <div className="Chat-sec">
                <div className="Chat-main">

                    <div className="more-head-cloce">
                 
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none" onClick={handleClose}>
  <g clip-path="url(#clip0_140_1971)">
    <path d="M1.77516e-06 30.0047C-0.00563503 13.4304 13.4137 0.00751983 29.9953 3.15672e-06C46.5713 -0.00751352 59.9944 13.4098 60 29.9953C60.0075 46.5696 46.5882 59.9925 30.0066 60C13.4363 60.0075 0.00563858 46.5809 1.77516e-06 30.0047ZM5.98065 29.9765C5.94683 43.1814 16.7639 54.0111 29.9953 54.0224C43.1986 54.0318 53.9348 43.3224 54.0212 30.0592C54.1077 16.8749 43.3207 6.04341 30.0404 5.9814C16.8446 5.91751 6.01447 16.719 5.98065 29.9765Z" fill="#FF7F47"/>
    <path d="M34.255 30.0235C37.0546 32.8178 39.7884 35.552 42.5317 38.2787C43.3471 39.0905 43.7849 40.0207 43.5426 41.1895C43.0822 43.4257 40.4874 44.3578 38.7118 42.9221C38.4939 42.7455 38.2985 42.5406 38.0993 42.3415C35.5947 39.8403 33.0938 37.3353 30.5892 34.8342C30.4107 34.6556 30.2228 34.4846 30.0048 34.2779C29.7925 34.4771 29.6027 34.6444 29.4261 34.821C26.8388 37.4049 24.2591 39.9962 21.6642 42.5745C20.3396 43.8899 18.5696 43.9613 17.3277 42.7812C16.0613 41.5766 16.0594 39.7087 17.3596 38.3971C19.9525 35.785 22.5624 33.1899 25.1628 30.5872C25.3413 30.4087 25.5123 30.2208 25.7209 30.0028C25.5217 29.7905 25.3564 29.6007 25.1779 29.424C22.5605 26.8045 19.9356 24.1906 17.3258 21.5635C16.4408 20.6727 16.1421 19.6016 16.5648 18.4027C16.9744 17.2376 17.8406 16.5649 19.06 16.4108C20.1122 16.2774 20.9672 16.7096 21.7037 17.45C24.2666 20.0263 26.8388 22.5914 29.4092 25.1583C29.5896 25.3368 29.7756 25.5097 29.9954 25.7202C30.2059 25.5248 30.3957 25.3594 30.5742 25.1828C33.1614 22.5989 35.7469 20.0132 38.3304 17.4237C39.1271 16.625 40.0496 16.2229 41.1883 16.4559C43.4298 16.9163 44.3618 19.502 42.9281 21.2816C42.7384 21.5184 42.5167 21.7307 42.3025 21.9468C39.8185 24.4348 37.3308 26.921 34.845 29.4071C34.6646 29.5875 34.4936 29.7736 34.255 30.0235Z" fill="#FF7F47"/>
  </g>
  <defs>
    <clipPath id="clip0_140_1971">
      <rect width="60" height="60" fill="white"/>
    </clipPath>
  </defs>
</svg>
                    </div>
            

                    <div className="Chat-body">
                        <div className="Chat-box">
                            <div className="Chat-box-head">
                                <h2>{vendorId?vendorId:'Vendor'} </h2>

                                 
                            </div>

                            <div className="Chat-box-body">

                                <div className="chat-body-ar">
                                <div className="messages-container-ar">
  <div className="main-scrllo-box-chart" style={styles.messageList}>
    {messages.map((item, i) => (
      <div className="gap-part"
        key={i}
        style={
          item.sender === senderId
            ? styles.myMessageContainer
            : styles.theirMessageContainer
        }
      >
        <div className="chat-message-box">
          <p>
            {item.sender === senderId ? "You" : "Vendor"}: {item.message}
          </p>
          <div className="chat-bubble-tail"></div>
        </div>
        {/* <img src={mypic} alt="Sender" className="sender-image" /> */}
      </div>
    ))}
  </div>
</div>

                                </div>
                                <div className="Chat-box-type-messeag">
                                    <div className="Chat-box-type-messeag-in-box">
                                        <input
                                            type="text"
                                            placeholder="Type Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />


                                    </div>
                                    <button className="Chat-box-type-messeag-btn" onClick={handleSendMessage}>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 488.721 488.721"
    style={{ enableBackground: "new 0 0 488.721 488.721" }}
    xmlSpace="preserve"
  >
    <g>
      <g>
        <path
          d="M483.589,222.024c-5.022-10.369-13.394-18.741-23.762-23.762L73.522,11.331C48.074-0.998,17.451,9.638,5.122,35.086
               C-1.159,48.052-1.687,63.065,3.669,76.44l67.174,167.902L3.669,412.261c-10.463,26.341,2.409,56.177,28.75,66.639
               c5.956,2.366,12.303,3.595,18.712,3.624c7.754,0,15.408-1.75,22.391-5.12l386.304-186.982
               C485.276,278.096,495.915,247.473,483.589,222.024z M58.657,446.633c-8.484,4.107-18.691,0.559-22.798-7.925
               c-2.093-4.322-2.267-9.326-0.481-13.784l65.399-163.516h340.668L58.657,446.633z M100.778,227.275L35.379,63.759
               c-2.722-6.518-1.032-14.045,4.215-18.773c5.079-4.949,12.748-6.11,19.063-2.884l382.788,185.173H100.778z"
        />
      </g>
    </g>
  </svg>
</button>


                                </div>
                            </div>
                        </div>

                        <div className="Chat-Details">
                            <h2>Details</h2>

                            <div className="Details-para-box">
                                <p>You can chat with the vendor about any specifics in your project and coordinate the date and time you want the project to take place.</p>
                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </>
    )



}


export default TSChat












const styles = {
    messageList: {
        paddingBottom: '20px',
    },
    myMessageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '10px',
    },
    theirMessageContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: '10px',
    },
    myMessage: {
        backgroundColor: '#DCF8C6',
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '60%',
        wordWrap: 'break-word',
    },
    theirMessage: {
        backgroundColor: '#ECECEC',
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '60%',
        wordWrap: 'break-word',
    },
    messageText: {
        margin: 0,
        fontSize: '14px',
    },
};


























































