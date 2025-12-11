import MainLayout from '@/components/layout/MainLayout'
import About3 from './components/About3'
import Innovation from './components/Innovation'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Stiky from './components/Stiky'
import Work from './components/Work'

const FeaturesPage = () => {
  return (
    <>
      <MainLayout>
        <div className="unic-body">
          <Hero />
          <Stiky />
          <Work />
          <Innovation />
          <Feature />
          <About3 />
        </div>
      </MainLayout>
    </>
  )
}

export default FeaturesPage
