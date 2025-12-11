import { ChildrenType } from '@/types/component-props'
import { Suspense } from 'react'
import Loader from '../Loader'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'

const BasicLayout = ({ children }: ChildrenType) => {
  const location = useLocation()
  const hideFooterOn = ['/login', '/account', '/signup']
  const shouldShowFooter = !hideFooterOn.includes(location.pathname)

  return (
    <>
      <Suspense fallback={<Loader />}>
        {children}
        {shouldShowFooter && <Footer />}
      </Suspense>
    </>
  )
}

export default BasicLayout