import Hero5Icon from '@/assets/img/icons/home5-btn-icon1.svg'
import timeTrack from '@/assets/img/others/time-track-sec-main.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const TimeTrack = () => {
  useEffect(() => {
    document.body.classList.add('body', 'body5')
    return () => {
      document.body.classList.remove('body', 'body5')
    }
  }, [])

  return (
    <>
      <div className="time-track-steps">
        <Container>
          <div className="step-area">
            <Row className="align-items-center">
              <Col lg={5}>
                <div className="heading5">
                  <h3 className="text-anime-style-3">Track Time Manually, Automatically Based On Active Applications</h3>
                  <div className="space16" />
                  <p data-aos="fade-right" data-aos-duration="700">
                    Our intuitive interface makes tracking time a breeze. Simply start a timer for each task, or use our automatic project tracking
                    features. No more clunky spreadsheets or wasted minutes logging hours.
                  </p>
                  <div className="space5"></div>
                  <ul className="track-list" data-aos="fade-right" data-aos-duration="900">
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Offline Functionality
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Multi-Platform Support
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Customizable Dashboards
                    </li>
                  </ul>
                  <div className="space30" />
                  <div className="" data-aos="fade-right" data-aos-duration="900">
                    <Link to="/account" className="theme-btn7">
                      <span className="arrow">
                        <img src={Hero5Icon} alt="" />
                      </span>
                      Get Started, It's Free
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div className="main-image" data-aos="zoom-out" data-aos-duration="800">
                  <img src={timeTrack} alt="" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="space60" />
          <div className="step-area step2">
            <Row className="align-items-center">
              <Col lg={7}>
                <div className="main-image" data-aos="zoom-out" data-aos-duration="800">
                  <img src={timeTrack} alt="" />
                </div>
              </Col>
              <Col lg={5}>
                <div className="heading5">
                  <h3 className="text-anime-style-3">Simply Start A Timer For Each Task, Or Use Our Automatic Project Tracking Features.</h3>
                  <div className="space16" />
                  <p data-aos="fade-left" data-aos-duration="700">
                    Our intuitive interface makes tracking time a breeze. Simply start a timer for each task, or use our automatic project tracking
                    features. No more clunky spreadsheets or wasted minutes logging hours.
                  </p>
                  <div className="space5"></div>
                  <ul className="track-list" data-aos="fade-left" data-aos-duration="700">
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Customizable Settings
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Sync Across Devices
                    </li>
                    <li>
                      <span className="check">
                        <FaCheck />
                      </span>
                      Reminders and Notifications
                    </li>
                  </ul>
                  <div className="space30" />
                  <div className="" data-aos="fade-left" data-aos-duration="700">
                    <Link to="/account" className="theme-btn7">
                      <span className="arrow">
                        <img src={Hero5Icon} alt="" />
                      </span>
                      Get Started, It's Free
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="space100" />
    </>
  )
}

export default TimeTrack
