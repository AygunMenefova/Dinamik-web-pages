import React from 'react'
import Navbar from '../components/Navbar'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import '../css/Mountain.css'
import image11 from '../images/image-11.jpg'
import image from '../images/mountain-bg.jpg'
import image1 from '../images/image-1.jpg'
import image3 from '../images/image-3.jpg'
import image7 from '../images/image-7.jpg'
import image12 from '../images/image-12.jpg'
import { useParams } from 'react-router-dom';


function Mountain() {

const {Home} = useParams()

  return (
    <div>
      <Navbar />
      
      <div className='mountain'>

        <div>
          <h1 className='mountain1'>mountain</h1>
          <hr className='linee' />
          <div className='imagess' style={{ display: 'flex', flexWrap: 'wrap' }}>

            <div>
              <img className='img-box' src={image1} alt="" />
              <h1 className='head' >Camping adventure in the Great Smoky</h1>
            </div>

            <div >
              <img className='img-box' src={image3} alt="" />
              <h1 className='head' >Rocky Mountain National Park Family Adventure</h1>
            </div>

            <div >
              <img className='img-box' src={image12} alt="" />
              <h1 className='head' >Adventure Mountain Summer Camp</h1>
            </div>

            <div>
              <img className='img-box' src={image7} alt="" />
              <h1 className='head' >Great Smoky Mountains Adventure</h1>
            </div>

            <div>
              <img className='img-box' src={image} alt="" />
              <h1 className='head' >Rocky Mountain Camping Adventure</h1>
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

export default Mountain