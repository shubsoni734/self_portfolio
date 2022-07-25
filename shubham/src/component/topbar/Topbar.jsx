import React from "react";
import "./topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

export default function Topbar({ menuOpen, setMenuOpen }) {
 
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Shubham Soni
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+91 9461096095</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>SS387403@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
