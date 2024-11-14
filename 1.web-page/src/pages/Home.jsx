import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import '../css/Home.css'
import image from '../images/mountain-bg.jpg'
import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'
import image3 from '../images/image-3.jpg'
import image4 from '../images/image-4.jpg'
import image5 from '../images/image-5.jpg'
import image6 from '../images/image-6.jpg'
import image7 from '../images/image-7.jpg'
import image8 from '../images/image-8.jpg'
import image9 from '../images/image-9.jpg'
import image10 from '../images/image-10.jpg'
import image12 from '../images/image-12.jpg'
import image11 from '../images/logo-light-camp.png'
import { ImFacebook } from "react-icons/im";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from 'react-router-dom'




function Home() {

  const navigate = useNavigate();

  return (
    <div  >
      <Navbar />
      <div className='container'  >
        <div className='home'>
          <h1 className='header' >XTRA Camping Adventures</h1>
          <h2 className='header1'>Welcome to XTRA, This is an text section and you can definitely edit it and Social Network icons that you will use. The demo uses Playfair Display font for headings and Open Sans for the body text.</h2>
        </div>

        <div className='icons-div'>
          <FaDribbble className='icons' />
          <ImFacebook className='icons' />
          <FaInstagram  className='icons' />
          <FiGithub className='icons' />
          <FaBehance className='icons' />
          <FaXTwitter className='icons' />
        </div>

        <div className='image-div'>
          <img onClick={() => navigate("/mountain")} style={{ marginBottom: '108px' }} className='images' src={image1} />
          <img onClick={() => navigate("/ski")} className='images' src={image2} />
          <img onClick={() => navigate("/jungle")} style={{ marginBottom: '50px' }} className='images' src={image6} />
          <img onClick={() => navigate("/news")} className='images' src={image8} />
          <img onClick={() => navigate("/jungle")} style={{ marginBottom: '50px' }} className='images' src={image5} />
          <img onClick={() => navigate("/jungle")} style={{ marginBottom: '60px' }} className='images' src={image10} />
          <img onClick={() => navigate("/mountain")} className='images' src={image7} />
          <img onClick={() => navigate("/news")} style={{ marginBottom: '50px' }} className='images' src={image4} />
          <img onClick={() => navigate("/mountain")} className='images' src={image3} />
          <img onClick={() => navigate("/ski")} className='images' src={image9} />
          <img onClick={() => navigate("/mountain")} className='images' src={image} />
          <img onClick={() => navigate("/mountain")} className='images' src={image12} />

        </div>

        <div>
          <button className='btn'>Show more posts</button>
        </div>

        <div className='footer'>

          <div className='footer-text'>
            <h1 className='resp-h1'>About Mountain Blog</h1>
            <hr className='footer-hr' />
            <div className='logo-footer' style={{ display: 'flex' }}>
              <img className='logo-home' src={image11} alt="" />
              <p className='paragraf' >Each year, XTRA donates millions of dollars to support conservation efforts nationwide and sends dedicated teams of volunteers members, customers and XTRA.</p>
            </div>
          </div>

          <div className='footer-text'>
            <h1 className='resp-h' style={{ fontSize: '30px', marginBottom: '30px' }}>Quick Access</h1>
            <hr className='footer-hr' />


            <div className='quick'>

              <div className='fa' style={{ display: 'flex' }}>
                <FaAngleDoubleRight />
                <a className='quick-a' href="#"> Expert Advice</a>
              </div>

              <div className='fa' style={{ display: 'flex' }}>
                <FaAngleDoubleRight />
                <a className='quick-a' href="#">Newsroom</a>
              </div>

              <div className='fa' style={{ display: 'flex' }}>
                <FaAngleDoubleRight />
                <a className='quick-a' href="#">Our Support Policy</a>
              </div>

              <div className='fa' style={{ display: 'flex' }}>
                <FaAngleDoubleRight />
                <a className='quick-a' href="#"> Gift Registry Links</a>
              </div>

              <div className='fa' style={{ display: 'flex' }}>
                <FaAngleDoubleRight />
                <a className='quick-a' href="#">Stewardship Team</a>
              </div>

            </div>

          </div>

          <div className='footer-text'>
            <h1 className='resp-h' style={{ fontSize: '30px', marginBottom: '30px' }}>Subscribe</h1>
            <hr className='footer-hr' />
            <div style={{ position: 'relative' }} className='resp-h'>
              <p style={{ width: '200px' }}>Get all latest content delivered to your email a few times a month.</p>
              <input className='input' placeholder='Your Email' />
              <MdArrowForward className='arrow' style={{ color: 'black', position: 'absolute', right: '30px', bottom: '13px', cursor: 'pointer' }} />
            </div>
          </div>


        </div>


        <div className='endd' >

          <div>
            <h3 style={{ color: 'gray', fontWeight: '200', fontSize: '15px', marginTop: '30px', marginLeft: '150px' }}>COPYRIGHT ©2024 - PROUDLY POWERED BY WORDPRESS</h3>
          </div>

          <div className='endd1'>
            <a className='end-a' href="#">Advertisement</a>
            <a className='end-a' href="#">About Us</a>
            <a className='end-a' href="#">Get In Touch</a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home