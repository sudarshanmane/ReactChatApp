import React from "react";
import "./sidebar.css";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="nav-search-container">
        <Navbar></Navbar>
        <Search></Search>
      </div>
      <div className="chats-container">
        <Chats></Chats>
        <Chats></Chats>
        <Chats></Chats>
        <Chats></Chats>
        <Chats></Chats>
        <Chats></Chats>
        <Chats></Chats>
      </div>
    </div>
  );
};

export default Sidebar;
