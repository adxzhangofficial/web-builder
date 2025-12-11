import MainLayout from '@/components/layout/MainLayout'
import Details from './components/Details'
import Hero from './components/Hero'
import More from './components/More'

const index = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Details />
        <More />
      </MainLayout>
    </>
  )
}

export default index
