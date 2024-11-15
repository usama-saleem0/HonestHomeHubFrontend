import { useRef } from "react";
import "./index.css";
import { Avatar } from "@mui/material";
import { useEffect } from "react";

function MessageScreen({ messages }) {
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const storedUserId = localStorage.getItem("userId");
  const Profile_Image = localStorage.getItem("Profile_Image");
  const user_details = localStorage.getItem("user_details");
  // const retrievedObject = JSON.parse(user_details);

  return (
    <div className="chat-container unique-class-56">
      <div className="message-container unique-class-57">
        {messages?.map((e, index) => (
          <>
            {storedUserId === e.sender ? (
              <div
                key={index}
                className={`message ${
                  e.sender === "other"
                    ? "other unique-class-58"
                    : "user unique-class-59"
                }`}
              >
                <p
                  style={{ background: "#979797" }}
                  className="show_message2 unique-class-60"
                >
                  {e.message}
                </p>
                <Avatar
                  src={
                    Profile_Image
                      ? Profile_Image
                      : "https://media.licdn.com/dms/image/C4E03AQGO448nAOrvfw/profile-displayphoto-shrink_400_400/0/1516929476300?e=2147483647&v=beta&t=i9xTbCh2nx3upQEx53PPtGP28Da2T7i_AJOTsqQRliE"
                  }
                  className="avatar unique-class-61"
                />
              </div>
            ) : (
              <div
                key={index}
                className={`message ${
                  e.sender === "user"
                    ? "user unique-class-62"
                    : "other unique-class-63"
                }`}
              >
                <Avatar
                  src={retrievedObject?.Profile_Image}
                  className="avatar unique-class-64"
                />
                <p className="show_message unique-class-65">{e.message}</p>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default MessageScreen;
