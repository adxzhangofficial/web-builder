import Home5Btn from '@/assets/img/icons/home5-btn-icon1.svg'
import Logo5 from '@/assets/img/logo/header-logo5.png'
import Menu from '@/components/layout/Topbar/components/Menu'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import MobileTop from './MobileTop'

const Navbar = () => {
  const { scrollY } = useScrollEvent()
  return (
    <>
      <header>
        <div className={`header-area header-area5 header-area-all d-none d-lg-block ${scrollY > 100 && 'sticky'}`} id="header">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="header-elements">
                  <div className="site-logo home1-site-logo">
                    <Link to="/home-1">
                      <img src={Logo5} alt="" />
                    </Link>
                  </div>
                  <div className="header-right-area">
                    <div className="main-menu-ex main-menu-ex1">
                      <Menu />
                    </div>
                    <div className="header4-buttons">
                      <Link to="/features" className="theme-btn7">
                        <span className="arrow">
                          <img src={Home5Btn} alt="" />
                        </span>
                        Start Your Free trail
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <MobileTop />
    </>
  )
}

export default Navbar
