import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'
import ScrollToTop from './components/BackToTop'

import Home1 from './pages/home-1'
import Home2 from './pages/home-2'
/* Removed Home3..Home9 imports (pages deleted) */
import About from './pages/about'
import Blog from './pages/blog'
import BlogDetails from './pages/blog-details'
import BlogDetailsSidebarLeft from './pages/blog-details-sidebar-left'
import BlogDetailsSidebarRight from './pages/blog-details-sidebar-right'
import Contact from './pages/contact'
import Download from './pages/download'
import Features from './pages/features'
import Pricing from './pages/pricing'
import Testimonial from './pages/testimonial'
import Account from './pages/account'
import Login from './pages/login'
import Forgot from './pages/forgot'
import Reset from './pages/reset'
import Verify from './pages/verify'
import FormSuccess from './pages/form-success'
import ErrorPage from './pages/error'
import Rtl from './pages/rtl'

function App() {
  useEffect(() => {
    Aos.init({
      once: true
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home-1" replace />} />
        <Route path="/home-1" element={<Home1 />} />
        <Route path="/home-2" element={<Home2 />} />
        {/* Removed routes for home-3 .. home-9 */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/blog-details-sidebar-left" element={<BlogDetailsSidebarLeft />} />
        <Route path="/blog-details-sidebar-right" element={<BlogDetailsSidebarRight />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/form-success" element={<FormSuccess />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/rtl" element={<Rtl />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App