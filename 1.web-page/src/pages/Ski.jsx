import React from 'react'
import Navbar from '../components/Navbar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../css/Mountain.css'
import image11 from '../images/image-11.jpg'
import image2 from '../images/image-2.jpg'
import image9 from '../images/image-9.jpg'
import { useParams } from 'react-router-dom';

function Ski() {

  const {Home} = useParams()
  return (
    <div>
      <Navbar />

      <div className='mountain'>

        <div>
          <h1 className='mountain1'>Ski</h1>
          <hr className='linee' />
          <div className='imagess' style={{ display: 'flex', flexWrap: 'wrap' }}>

            <div>
              <img className='img-box' src={image2} alt="" />
              <h1 className='head' >Machu Picchu – The Inca Trail Trek </h1>
            </div>

            <div >
              <img style={{ marginRight: '100px' }} className='img-box' src={image9} alt="" />
              <h1 className='head' >Family Great Smoky Mountains Hiking Weekend</h1>
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
            <div className='calendar' style={{ marginTop: '30px' }}>
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
    </div >
  )
}

export default Ski