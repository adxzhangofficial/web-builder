import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import '@/assets/css/mobile-menu.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import 'aos/dist/aos.css'

import '@/assets/scss/main.scss'

// Bootstrap Icons (paste this)
import "bootstrap-icons/font/bootstrap-icons.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)