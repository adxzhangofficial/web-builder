import MainImg from '@/assets/img/hero/hero5-main-image.png'
import HomeIcon from '@/assets/img/icons/home5-btn-icon1.svg'
import mainSpan from '@/assets/img/icons/main-span5.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  useEffect(() => {
    document.body.classList.add('body', 'body5')
    return () => {
      document.body.classList.remove('body', 'body5')
    }
  }, [])

  return (
    <div className="hero-area5">
      <Container>
        <div className="hero5-bg">
          <Row>
            <Col lg={7} className="m-auto text-center">
              <div className="main-heading">
                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                  <img src={mainSpan} alt="" /> No 01 Time Tracker Software on Producthunt
                </span>
                <h1 className="text-anime-style-3">Stop Wasting Time, Start Tracking It. </h1>
                <div className="space16" />
                <p data-aos="fade-up" data-aos-duration="700">
                  Boost your productivity, improve profitability, and reduce stress <br /> with our all-in-one time management solution.
                </p>
                <div className="space30" />
                <div className="buttons" data-aos="fade-up" data-aos-duration="900">
                  <Link to="/account" className="theme-btn7">
                    <span className="arrow">
                      <img src={HomeIcon} alt="" />
                    </span>
                    Get Started, It's Free
                  </Link>
                  <Link to="/features" className="theme-btn7">
                    <span className="arrow">
                      <img src={HomeIcon} alt="" />
                    </span>
                    Get a Demo
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <div className="space80" />
          <Row>
            <Col lg={12}>
              <div className="main-image">
                <img src={MainImg} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Hero
