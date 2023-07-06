import React from 'react'
import {MdOutlineMailOutline} from 'react-icons/md';
import {BsMessenger, BsWhatsapp} from 'react-icons/bs';
import {IoIosArrowDropupCircle} from 'react-icons/io'
import "../Scss/contact.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com'




function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gb7b5m5', 'template_3bvpeee', form.current, 'AKQdPks3KZcvSBBae')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
        <h5 style={{marginTop:"-10rem"}}>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <div className='contact_options'>
          <article className="contact_option">
            <MdOutlineMailOutline className='contact_option-icon'/>
            <h4>Email</h4>
            <h5 style={{fontSize:"0.8rem"}}>akroutsabrin1994@gmail.com</h5>
            <a href='https://mail.google.com/mail/u/0/?pli=1#inbox?compose=new'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger  className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5 style={{fontSize:"1.1rem"}}>Aicha Akrout</h5>
            <a href='https://m.me/chouaib.ahmed.984'>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5 style={{fontSize:"1.1rem"}}>+21623514548</h5>
            <a href='https://web.whatsapp.com/send?phone=23514548'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your Message' required></textarea>
          <button className='btn primary' type='submit'>Send Message</button>
        </form>
      </div>
      <a  href="#"><IoIosArrowDropupCircle className='dropup'/></a>
    </section>
  )
}

export default Contact