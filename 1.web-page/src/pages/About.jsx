import React from 'react'
import Navbar from '../components/Navbar'
import image7 from '../images/image-7.jpg'
import '../css/About.css'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { GiFlowerTwirl } from "react-icons/gi";
import { SiAnycubic } from "react-icons/si";

function About() {
  return (
    <div>
      <Navbar />
      <div style={{ marginBottom: '150px' }}>

        <div className='about'>

          <div>
            <p className='about-p' >Meet me, a passionate adventurer with a love for the great outdoors. Whether it's pitching a tent under the stars, hiking through rugged terrain, or cooking by the campfire, he thrives in the wilderness. With every trip, he seeks new challenges, from remote mountain trails to secluded lakes. His camping adventures are not just about exploring nature but also about self-discovery and pushing personal limits. Through this blog, he shares his experiences, tips, and stories to inspire others to embrace the wild. Join him as he ventures into the unknown, capturing the beauty of nature and the thrill of the journey. For me, camping is more than a hobby—it's a way of life. Let’s embark on this adventure together.</p>
          </div>

          <div style={{ position: 'relative' }}>

            <img className='about-img' src={image7} alt="" />
            <div className='empty'> </div>

          </div>

        </div>

        <div style={{ position: 'relative' }}>
          <div className='empty2'>

            <div className='text-all'>

              <div className='text'>
                <h1 style={{ color: '#fff', fontSize: '100px' }}>27</h1>
                <p style={{ color: '#fff', fontSize: '20px' }}>Years of Experience</p>
              </div>

              <div className='text'>
                <h1 style={{ color: '#fff', fontSize: '100px' }}>96</h1>
                <p style={{ color: '#fff', fontSize: '20px' }}>Projects Done</p>
              </div>

              <div className='text'>
                <h1 style={{ color: '#fff', fontSize: '100px' }}>58</h1>
                <p style={{ color: '#fff', fontSize: '20px' }}>Awards Winner</p>
              </div>

            </div>
          </div>

        </div>


        <div className='aboutt'>
          <div className='about-hr'></div>

        
          <div>
          <div className='about-box'></div>
          < FaMapMarkerAlt className='about-icon' />
          <h1 className='about-h1 '>2010</h1>
          </div>
       

          <div>
            <div className='about-box2'></div>
            <FaRocket className='about-icon2' />
            <h1 className='about-h1-2 '>2014</h1>          
          </div>

          <div>
            <div className='about-box3'></div>
            <IoDiamond className='about-icon3' />
            <h1  className='about-h1-3 '>2018</h1>
          </div>

          <div>
            <div className='about-box4'></div>
            <GiFlowerTwirl className='about-icon4' />
            <h1  className='about-h1-4 '>2020</h1>
          </div>

          <div >
            <div className='about-box5'></div>
            <SiAnycubic className='about-icon5' />
          </div>

        </div>

      </div>

      <div style={{ position: 'relative' }}>


        <div className='card-all'>

          <div className='card'>
            <p className='card-p' style={{ marginLeft: '15px' }}>Creative design agency that specializes in Premium Niche WordPress Themes. Open since 2010, we’re digital natives with a passion for design and open-source development.</p>
          </div>

          <div className='resp-a' >
            <div className='card'>
              <p className='card-p' style={{ marginLeft: '15px' }}>Creative design agency that specializes in Premium Niche WordPress Themes. Open since 2010, we’re digital natives with a passion for design and open-source development.</p>
            </div>
          </div>

          <div className='card'>
            <p className='card-p' style={{ marginLeft: '15px' }}>Creative design agency that specializes in Premium Niche WordPress Themes. Open since 2010, we’re digital natives with a passion for design and open-source development.</p>
          </div>

          <div className='resp-a'>
            <div className='card'>
              <p className='card-p' style={{ marginLeft: '15px' }}>Creative design agency that specializes in Premium Niche WordPress Themes. Open since 2010, we’re digital natives with a passion for design and open-source development.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About