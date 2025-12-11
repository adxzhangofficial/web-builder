import Apple from '@/assets/img/icons/apple.svg'
// import Logo from '@/assets/img/logo/header-logo7.png'
import workIcon from "/src/assets/img/icons/work7-icon1.svg";
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
        <div className={`header-area header-area7 header-area-all d-none d-lg-block ${scrollY > 100 && 'sticky'}`} id="header">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="header-elements">
<div className="d-flex align-items-center gap-2">
  <img
    src={workIcon}
    alt="logo-icon"
    width={26}
    height={26}
  />

  <p className="text-white m-0 fw-semibold">
    WEB BUILDER
  </p>
</div>

                  <div className="main-menu-ex main-menu-ex1">
                    <Menu />
                  </div>
                  <div className="header4-buttons">
                    <Link to="" className="header7-btn">
                      <img src={Apple} alt="" />
                      Signup Now
                    </Link>
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
