import BasicLayout from '@/components/layout/BasicLayout'
import Apps from './components/Apps'
import Blog from './components/Blog'
import Choose from './components/Choose'
import CTA from './components/CTA'
import Faq from './components/Faq'
import Hero from './components/Hero'
import LogoSlider from './components/LogoSlider'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import TimeTrack from './components/TimeTrack'

const home2 = () => {
  return (
    <>
      <BasicLayout>
        <Navbar />
        <Hero />
        <LogoSlider />
        <Choose />
        <TimeTrack />
        <Services />
        <Apps />
        <Pricing />
        <Testimonial />
        <Blog />
        <Faq />
        <CTA />
      </BasicLayout>
    </>
  )
}

export default home2
