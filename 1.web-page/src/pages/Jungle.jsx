import React from 'react'
import Navbar from '../components/Navbar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../css/Mountain.css'
import image11 from '../images/image-11.jpg'
import image10 from '../images/image-10.jpg'
import image5 from '../images/image-5.jpg'
import image6 from '../images/image-6.jpg'

function Jungle() {
  return (
    <div>
      <Navbar />
      <div className='mountain'>

        <div>
          <h1  className='mountain1'>jungle</h1>
          <hr className='linee' />
          <div className='imagess' style={{ display: 'flex', flexWrap: 'wrap' }}>

            <div >
              <img className='img-box' src={image5} alt="" />
              <h1 className='head' >Family Zion & Bryce Hiking</h1>
            </div>

            
            <div>
              <img className='img-box' src={image6} alt="" />
              <h1 className='head' >Yellowstone Family Adventure</h1>
            </div>

            <div>
              <img className='img-box' src={image10} alt="" />
              <h1 className='head' >Tanzania Ultimate Adventure & Safari</h1>
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
            <div className='calendar'  style={{ marginTop: '30px' }}>
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

export default Jungle