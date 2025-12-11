import heading5 from '@/assets/img/icons/heading5-span.png'
import Home5Btn from '@/assets/img/icons/home5-btn-icon1.svg'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const Pricing = () => {
  return (
    <div className="pricing5 pb100" id="pricing">
      <Container>
        <Row>
          <Col lg={6} className="m-auto text-center">
            <div className="heading5">
              <p className="title" data-aos="zoom-in-left" data-aos-duration="700">
                <span className="span">
                  <img src={heading5} alt="" /> Pricing Plan
                </span>
              </p>
              <h2 className="text-anime-style-3">Choose The Right Plan For You</h2>
            </div>
          </Col>
        </Row>
        <div className="space30" />
        <Row>
          <Col lg={6}>
            <div className="pricing-box" data-aos="fade-up" data-aos-duration="700">
              <Row>
                <Col md={5}>
                  <div className="heading5">
                    <span className="gradint">Pro Plan</span>
                    <h3>$9.99/month</h3>
                    <p>
                      Great for occasional <br /> prospecting.
                    </p>
                    <div className="space30" />
                    <Link to="" className="theme-btn7">
                      <span className="arrow">
                        <img src={Home5Btn} alt="" />
                      </span>
                      Get Started
                    </Link>
                  </div>
                </Col>
                <Col md={7}>
                  <ul className="plan-list">
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Time Tracking
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Task Management
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Collaboration
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Reports and Insights
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Customizable Categories
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Email Support
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="pricing-box" data-aos="fade-up" data-aos-duration="900">
              <Row>
                <Col md={5}>
                  <div className="heading5">
                    <span className="gradint">Pro Plan</span>
                    <h3>$9.99/month</h3>
                    <p>
                      Great for occasional <br /> prospecting.
                    </p>
                    <div className="space30" />
                    <Link to="#" className="theme-btn7">
                      <span className="arrow">
                        <img src={Home5Btn} alt="" />
                      </span>
                      Get Started
                    </Link>
                  </div>
                </Col>
                <Col md={7}>
                  <ul className="plan-list">
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Time Tracking
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Task Management
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Collaboration
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Reports and Insights
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Customizable Categories
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Email Support
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Pricing
