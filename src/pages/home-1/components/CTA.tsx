import Img from '@/assets/img/hero/main-img2.png'
import Shap from '@/assets/img/shapes/cta6-shape.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

const CTA = () => {
  return (
    <div className="cta6">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
              <div className="heading6-w">
              <span className="span">Integrations</span>
              <h2>
                Access an AI-Powered <br /> Template Library
              </h2>
              <div className="space16" />
              <p>
                Connect Website Builder AI Agent to hosting, analytics, and CMS tools to streamline publishing and analytics.
              </p>
              <div className="space30" />
              <Link to="/account" className="theme-btn8">
                  <span className="tb8">
                  Try the AI Builder Free
                  <span className="arrow">
                    <FaArrowRight />
                  </span>
                </span>
              </Link>
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <div className="cta6-images">
              <div className="image1">
                <img src={Img} alt="" />
              </div>
              <div className="image2">
                <img src={Shap} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CTA
