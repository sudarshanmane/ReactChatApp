import React from "react";
import "./chat.css";
import Message from "./Message";
import Input from "./Input";

export const Chat = () => {
  return (
    <div className="side-chat-container">
      <header className="chat-header">Jade</header>
      <div className="message-container">
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <Message></Message>
      </div>
      <div className="message-input-component">
        <Input></Input>
      </div>
    </div>
  );
};
