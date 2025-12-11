import Heading5 from '@/assets/img/icons/heading5-span.png'
import Icon from '@/assets/img/icons/home5-btn-icon1.svg'
import AppImg from '@/assets/img/others/apps-img5.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Apps = () => {
  return (
    <div className="apps5-area sp" id="app">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="apps-image" data-aos="flip-right" data-aos-duration="800">
              <img src={AppImg} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="heading5">
              <p className="title" data-aos="zoom-in-left" data-aos-duration="700">
                <span className="span">
                  <img src={Heading5} alt="" /> Intregrations
                </span>
              </p>
              <h2 className="text-anime-style-3">Integrate Your Time Tracker With 3000+ Apps</h2>
              <div className="space16" />
              <p data-aos="fade-left" data-aos-duration="600">
                Integrate our Time Tracker App with your favorite tools and software to streamline your workflow and boost productivity. Connect with
                calendar apps, project management tools, and other essential applications to centralize your tasks and time tracking data. By
                integrating our app with your existing tools, you can save time, reduce manual entry errors, and ensure a seamless experience across
                all your work platforms.
              </p>
              <div className="space30" />
              <div className="" data-aos="fade-left" data-aos-duration="800">
                <Link to="/account" className="theme-btn7">
                  <span className="arrow">
                    <img src={Icon} alt="" />
                  </span>
                  Get Started, It's Free
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Apps
