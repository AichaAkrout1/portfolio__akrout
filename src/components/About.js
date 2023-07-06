import React, { useState } from "react";
import AboutMe from "../assests/images/about-me.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdModelTraining } from "react-icons/md";
import {HiDownload} from "react-icons/hi";
import "../Scss/about.css";
import CV from '../assests/images/cv.pdf';
import data from '../data1'
import Card from "./Card";

function About() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <section id="about" >
      <div className="container about_container">
        <div className="about_left">
          <div className="about_portrait">
            <img src={AboutMe} alt="aboutme" />
          </div>
        </div>
        <div className="about_right">
          <h2 style={{marginTop:'-4rem'}}>About Me</h2>
          <div className="about_cards">
            {
              data.map(item => (
                <Card key={item.id} className="about_card">
                  <span className="about-card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
                ))
            }
          </div>
          <p>
            Front End Developer with Bachelors degree in Computer Science is
            eagerly open to a new career challenge and ready to take on
            responsibilities.
            Reliable team member who is always ready to help.
            A quick learner with a problem-solving and decision-making mindset,
            and excellent interpersonal skills,  </p>
            {isShowMore && (
          <p>
            I’am seeking to work in a
            company with a strong organizational culture, where I can add value
            using my previous professional skills and experience. Get in touch
            today with the details of your project let's get started! Check my
            resume below!
          </p>
           )}
           <button onClick={toggleReadMoreLess} style={{color:"blue", textDecoration:"underline", fontWeight:"bold", background:"transparent"}}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
          <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  );
}

export default About;
