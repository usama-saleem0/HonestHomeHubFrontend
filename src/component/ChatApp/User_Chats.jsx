import { Avatar, Divider, Stack } from '@mui/material'
import React from 'react'
import './index.css'


const User_Chats = () => {
    const checkType = localStorage.getItem("type_for_details")

    const user_details = localStorage.getItem('user_details');
    const retrievedObject = JSON.parse(user_details);
    let e = "sender"
    return (
        <Stack className="user_detailss unique-class-129" sx={{
            p: 1,
            height: "47vh",
            // border:'1px solid black',
            borderRadius:'20px'
        }} >
            <div className="message-container unique-class-130">
                {/* {
                    storedUserId === e.sender ?  */}
                <div
                    key={1}
                    className={`message  unique-class-131 ${e.sender === 'other' ? 'other' : 'user'}`}
                    
                >
                    <p className="show_message2 unique-class-132" >{"Hi"}</p>
                    <Avatar src={"https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_400_400/0/1516929476300?e=2147483647&v=beta&t=i9xTbCh2nx3upQEx53PPtGP28Da2T7i_AJOTsqQRliE"} className="avatar unique-class-133"  />
                </div>
                {/* : */}
        
                <div
                    key={2}
                    className={`message  unique-class-134 ${e.sender === 'user' ? 'user' : 'other'}`}
                    
                >
                    <Avatar src={"https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_400_400/0/1516929476300?e=2147483647&v=beta&t=i9xTbCh2nx3upQEx53PPtGP28Da2T7i_AJOTsqQRliE"} className="avatar unique-class-135"  />
                    <p className="show_message unique-class-136" >{"Hello"}</p>
                </div>
        
        
                {/* } */}
            </div>
        </Stack>
        
    )
}

export default User_Chats