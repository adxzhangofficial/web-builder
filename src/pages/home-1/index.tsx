import BasicLayout from '@/components/layout/BasicLayout'
import Brands from './components/Brands'
import Counter from './components/Counter'
import CTA from './components/CTA'
import Editing from './components/Editing'
import Faq from './components/Faq'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Navbar from '@/pages/home-1/components/Navbar'
import Work from './components/Work'
import Apps from './components/Apps'
import Work2 from './components/Work2'
import Benefit from './components/Benefit'
import CTANew from './components/CTANew'
import Innovation from './components/Innovation'
import System from './components/System'
import Testimonial from './components/Testimonial'
import FullWidthImage from '@/components/FullWidthImage/FullWidthImage'


const home1 = () => {
  return (
    <>
      <BasicLayout>
        <Navbar />
        <Hero />
        <Counter />
        <Work />
        <Work2 />
        <Benefit />
        {/* <CTANew /> */}
        {/* <Innovation /> */}
        {/* <System /> */}
        <Apps />
        <Editing />
        <Feature />
        <Brands />
        <Faq />

        <FullWidthImage />
        <Testimonial />

        <CTA />
      </BasicLayout>
    </>
  )
}

export default home1
