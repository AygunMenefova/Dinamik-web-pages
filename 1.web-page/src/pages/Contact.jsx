import React from 'react'
import Navbar from '../components/Navbar'
import '../css/Contact.css'
import image10 from '../images/image-10.jpg'
import { ImFacebook } from "react-icons/im";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";


function Contact() {
  return (
    <div>
      <Navbar />
      <div style={{ marginBottom: '100px' }}>

        <div className='contact-icon'>
          <FaDribbble className='iconn' />
          <ImFacebook className='iconn' />
          <FaInstagram className='iconn' />
          <FiGithub className='iconn' />
          <FaBehance className='iconn' />
          <FaXTwitter className='iconn' />
        </div>


        <div >
          <img className='image-ten' src={image10} alt="" />
        </div>

        <div style={{ position: 'relative' }}>
          <div className='contact-div'>
            <h1 style={{ color: '#fff', fontSize: '35px' }}>Contact Us</h1>
            <p style={{ color: '#fff', fontSize: '17px' }}>Dynamically envisioneer parallel opportunities vis-a-vis client-centered benefits.</p>
            <input style={{ marginTop: '15px', padding: '15px', outline: 'none' }} placeholder='Your Name (*)' />
            <input style={{ marginTop: '15px', padding: '15px', outline: 'none' }} placeholder='Your Email (*)' />
            <input style={{ marginTop: '15px', padding: '15px 0 100px 15px', outline: 'none' }} placeholder='Your Message' />
            <button className='contact-btn'>Send Message</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact