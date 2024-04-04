import React from "react";
import "./message.css";

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <span>hello</span>
        <img
          style={{ width: "60px", height: "60px", borderRadius: "100%" }}
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
          alt=""
        />
      </div>
      <div className="messageContent">
        <span>message content</span>
      </div>
    </div>
  );
};

export default Message;
