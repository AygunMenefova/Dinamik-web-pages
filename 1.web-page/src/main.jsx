import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../src/Responsive/Laptop.css'
import '../src/Responsive/Tablet.css'
import '../src/Responsive/Mobile.css'

createRoot(document.getElementById('root')).render(
        <App />
)
