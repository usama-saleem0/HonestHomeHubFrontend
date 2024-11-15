import { ImAttachment } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";
import { useContext, useState } from "react";
import {
    Timestamp,
    arrayUnion,
    doc,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "../fireBase.js";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { AuthContext } from "../context/AuthContext.jsx";
import { ChatContext } from "../context/ChatContext.jsx";
import './index.css'
import { Button, TextField } from "@mui/material";

function MsgInput({ onChange, onClick, value, handleKey }) {


    return (
        <div className="input-container unique-class-66">
  <div className="chat-input-container unique-class-67">
    <input type="text" value={value} onChange={onChange} className="message-input unique-class-68" placeholder="Type your message..." onKeyDown={handleKey} />
    {/* <div className="attachment-icon unique-class-69">
        <div className="send">
            <input type="file" name="" id="imgAttachment" style={{ display: "none" }} onChange={(e) => setImg(e.target.files[0])} />
            <label htmlFor="imgAttachment" className="imgAttachment">
                <ImAttachment size={20} />
            </label>
        </div>
    </div> */}
  </div>

  <button className="send_btn unique-class-70" onClick={onClick}>
    <AiOutlineSend size={25} className="unique-class-71" />
  </button>
</div>

    );
}

export default MsgInput;