import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <BsInstagram /> <BsFacebook /> <BsTwitter /> <BsLinkedin />
      </div>
      <p>&copy; 2021 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;