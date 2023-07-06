import React from "react";
import Ct from "./Ct";
import Aicha from "../assests/images/aicha.jpg";
import HeaderSocial from "./HeaderSocial";
import "../Scss/header.css";

function Headerr() {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={Aicha} alt="aicha" />
        </div>
        <h1 style={{fontSize:"2rem", marginTop:"1rem"}}>Akrout Aicha</h1>
        <p>
          You are a click away from building your dream website or web app. Send
          me the details of your project for a modern, mobile responsive, highly
          performant website today!
        </p>
        <HeaderSocial />
        <div className="header_cta">
        <a href="#contact" className="btn primary">
          Let's Talk
        </a>
        <a href="#portfolio" className="btn btnn ">
          My Work
        </a>
        </div>
      </div>
    </header>
  );
}

export default Headerr;
