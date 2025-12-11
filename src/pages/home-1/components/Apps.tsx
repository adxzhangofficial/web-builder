import bgImage from '@/assets/img/bg/hero1-bg.png'
import logo from '@/assets/img/logo/others2-bottom-logo.png'
import appsImg from '@/assets/img/others/apps-img1.png'
import appImg2 from '@/assets/img/others/apps-img2.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Apps = () => {
  return (
    <>
      <div
        className="apps"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="apps-img1" data-aos="fade-down" data-aos-duration="800">
                <img src={appsImg} alt="" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="headding2-w text-center">
                <span className="span">Integrations</span>
                <h2 className="text-anime-style-3">Connect With Your Favorite Tools</h2>
                <div className="space16" />
                <p data-aos="fade-up" data-aos-duration="800">
                  Connect Website Builder AI Agent to CMS, analytics, and hosting providers to simplify publishing and workflows.
                </p>
                <div className="space30" />
                <div className="" data-aos="fade-up" data-aos-duration="1000">
                  <Link to="/features" className="others">
                    View All Integrations
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="apps-img2" data-aos="fade-down" data-aos-duration="900">
                <img src={appImg2} alt="" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="m-auto text-center">
              <div className="bottom-logo">
                <img src={logo} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Apps
