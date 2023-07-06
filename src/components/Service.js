import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import "../Scss/service.css";
import EMOJI1 from "../assests/images/emoji.jpg";
import EMOJI2 from "../assests/images/emoji3.png";
import { AiFillCrown } from "react-icons/ai";
import { HiMiniHandThumbUp } from "react-icons/hi2";

function Service() {
  return (
    <section id="services" >
      <h5 style={{ marginTop: "-10rem" }}>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container ">
        <article className="service">
          <div className="service-head">
            <MdDeveloperMode
              style={{
                color: "#1f1f38",
                marginLeft: "140px",
                fontSize: "1.8rem",
              }}
            />
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Collaborating with designers, developers, and stakeholders</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Troubleshooting problems with performance or user experience
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Integrating multimedia content onto a site</p>
            </li>
          </ul>
        </article>
     
      <article className="service">
        <div className="service-head">
          <MdDeveloperMode
            style={{ color: "#1f1f38", marginLeft: "140px", fontSize: "1.8rem" }}
          />
          <h3>Web Development</h3>
        </div>
        <ul className="service-list">
          <li>
            <BiCheck className="service-list-icon" />
            <p>Designing user interfaces and navigation menus</p>
          </li>
          <li>
            <BiCheck className="service-list-icon" />
            <p>
              Writing and reviewing code for sites, typically HTML, CSS, or
              JavaScript
            </p>
          </li>
          <li>
            <BiCheck className="service-list-icon" />
            <p>
              Create or implement designs demanded by a client 
            </p>
          </li>
        </ul>
      </article>
      </div>
      {/* <div className='emoji'>
        <img src={EMOJI1} alt=""/>
        <img src={EMOJI2} alt=""/>
      </div> */}
      {/* <div className='crown'>
      <AiFillCrown style={{color: "hsl(270, 89%, 41%)",fontSize:"30px",marginTop:"19px", marginLeft:"10px"}} />
      <p>Web Developer</p>
      </div>
      <div className='thunbup'>
      <HiMiniHandThumbUp style={{color: "hsl(270, 89%, 41%)",fontSize:"30px",marginTop:"19px", marginLeft:"10px"}} />
      <p>Best Design Award</p>
      </div> */}
    </section>
  );
}

export default Service;
