import { ChildrenType } from '@/types/component-props'
import { Suspense, useEffect } from 'react'
import CTA from '../CTA'
import Loader from '../Loader'
import Footer from './Footer'
import Navbar from './Topbar'
import { useLocation } from 'react-router-dom'

const MainLayout = ({ children }: ChildrenType) => {

  useEffect(() => {
    document.body.classList.add('body2', 'body')
    return () => {
      document.body.classList.remove('body2', 'body')
    }
  }, [])
  const location = useLocation()
  const hideFooterOn = ['/login', '/account', '/signup']
  const shouldShowFooter = !hideFooterOn.includes(location.pathname)

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        {children}
        <CTA />
        {shouldShowFooter && <Footer />}
      </Suspense>
    </>
  )
}

export default MainLayout