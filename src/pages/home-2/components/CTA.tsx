import Home5 from '@/assets/img/icons/home5-btn-icon1.svg'
import CTA5 from '@/assets/img/others/cta5-main-img.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <>
      <div className="space100" />
      <div className="cta5">
        <Container>
          <div className="cta5-bg">
            <Row>
              <Col lg={6}>
                <div className="heading5-w">
                  <h2>Take Control Of Your Time Today!</h2>
                  <div className="space16" />
                  <p>Don't let precious moments slip away. Sign up now to start optimizing your productivity with our Time Tracker App.</p>
                  <div className="space30" />
                  <Link to="/account" className="theme-btn7">
                    <span className="arrow">
                      <img src={Home5} alt="" />
                    </span>
                    Sign Up Now
                  </Link>
                </div>
              </Col>
              <Col lg={6}>
                <div className="main-image">
                  <img src={CTA5} alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default CTA
