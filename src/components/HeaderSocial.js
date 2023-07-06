import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
import "../Scss/header.css";

function HeaderSocial() {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'><BsGithub/></a>
        <a href="https://instagram.com" target='_blank'><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocial