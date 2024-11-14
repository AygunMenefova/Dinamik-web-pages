import React from 'react'
import Navbar from '../components/Navbar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../css/Mountain.css'
import image11 from '../images/image-11.jpg'
import image4 from '../images/image-4.jpg'
import image8 from '../images/image-8.jpg'
import image10 from '../images/image-10.jpg'

function News() {
  return (
    <div>
      <Navbar />
      <div className='mountain'>

        <div>
          <h1 className='mountain1' >news</h1>
          <hr className='linee' />
          <div  className='imagess' style={{ display: 'flex', flexWrap: 'wrap' }}>

            <div >
              <img className='img-box' src={image4} alt="" />
              <h1 className='head' >Great Smoky Mountains Women’s Adventure</h1>
            </div>

            <div >
              <img className='img-box' src={image8} alt="" />
              <h1 className='head' >Yosemite Hiking & Camping</h1>
            </div>

            <div>
              <img className='img-box' src={image10} alt="" />
              <h1 className='head' >Mount Kilimanjaro Climb</h1>
            </div>

          </div>
        </div>

        <div className='col'>
          <div className='search'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <input className='inputt' placeholder='Search...' />
              <button className='btnn'>Search</button>
            </div>
          </div>
          <div className='all'>
            <div className='post'>
              <h1 className='h1' >Posts Calendar</h1>
            </div>
            <div className='calendar'   style={{ marginTop: '30px' }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>
          </div>

          <div className='all'>
            <div className='post'>
              <h1 className='h1'>Advertisement</h1>
            </div>

            <div className='image'>
              <img className='imagge' src={image11} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default News