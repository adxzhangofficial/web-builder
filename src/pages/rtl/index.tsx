import MainLayout from '@/components/layout/MainLayout'
import Footer from '@/components/layout/Footer'
import Benefit from './components/Benefit'
import Counter from './components/Counter'
import CTA from './components/CTA'
import Header from './components/Header'
import Hero from './components/Hero'
import Process from './components/Process'
import Solution from './components/Solution'
import Testimonial from './components/Testimonial'
import Work from './components/Work'

const Rtl = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <Hero />
        <Work />
        <Counter />
        <Process />
        <Benefit />
        <Solution />
        <Testimonial />
        <CTA />
        <Footer />
      </MainLayout>
    </>
  )
}

export default Rtl
