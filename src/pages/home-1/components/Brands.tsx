import shape from '@/assets/img/bg/apps5-shape-bg.png'
import app from '@/assets/img/others/apps5.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const Brands = () => {
  return (
    <div className="brands-area6 sp" id="brands">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="heading6-w">
              <span className="span2" data-aos="fade-left" data-aos-duration="700">
                Integrations
              </span>
              <h2 className="text-anime-style-3">Integrate Website Builder AI Agent With Your Tools</h2>
              <div className="space16" />
              <p data-aos="fade-left" data-aos-duration="900">
                Connect Website Builder AI Agent to hosting, analytics, and other favorite tools to streamline publishing and workflows.
              </p>
              <div className="space30" />
              <div className="" data-aos="fade-left" data-aos-duration="1000">
                <Link to="/account" className="theme-btn8">
                    <span className="tb8">
                    Start Free
                    <span className="arrow">
                      <FaArrowRight />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <div className="apps-images">
              <div className="image1">
                <img src={shape} alt="" />
                <div className="dot"></div>
              </div>
              <div className="image2">
                <img src={app} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Brands
