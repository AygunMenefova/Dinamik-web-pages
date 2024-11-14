import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Mountain from './pages/Mountain'
import Jungle from './pages/Jungle'
import News from './pages/News'
import Ski from './pages/Ski'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mountain' element={<Mountain />} />
          <Route path='/jungle' element={<Jungle />} />
          <Route path='/news' element={<News />} />
          <Route path='/ski' element={<Ski />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
