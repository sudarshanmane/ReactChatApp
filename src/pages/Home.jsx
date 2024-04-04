import React from "react";
import Sidebar from "../Components/Sidebar";
import { Chat } from "./../Components/Chat";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="chat-container">
          <Chat></Chat>
        </div>
      </div>
    </div>
  );
};

export default Home;
