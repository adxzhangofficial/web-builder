import systemIcon1 from '@/assets/img/icons/system-icon1.svg'
import systemIcon2 from '@/assets/img/icons/system-icon2.svg'
import systemIcon3 from '@/assets/img/icons/system-icon3.svg'
import systemIcon4 from '@/assets/img/icons/system-icon4.svg'
import span9 from '@/assets/img/logo/span9.svg'
import systemImg1 from '@/assets/img/others/system9-img1.png'
import systemImg2 from '@/assets/img/others/new-logos.png'
import shape1 from '@/assets/img/shapes/system-shape1.png'
import shape2 from '@/assets/img/shapes/system-shape2.png'
import shape3 from '@/assets/img/shapes/system-shape3.png'
import shape4 from '@/assets/img/shapes/system-shape4.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Benefit = () => {
  return (
    <>
      <div className="buy-sell-bottom2 sp" id="system">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
                <div className="heading9">
                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                  <img src={span9} alt="" /> Website Builder AI Agent Benefits
                </span>
                <h2 className="text-anime-style-3">Why Website Builder AI Agent Helps You</h2>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className="bg">
            <Row className="align-items-center">
              <Col lg={3}>
                <div className="box-area-all" data-aos="flip-right" data-aos-duration="900">
                  <div className="icon">
                    <img src={systemIcon1} alt="" />
                  </div>
                  <div className="single-box heading7">
                    <h5>
                      <Link to="">AI-Powered Templates</Link>
                    </h5>
                    <div className="space10" />
                    <p>Create industry-specific websites in seconds with AI-generated templates.</p>
                  </div>
                </div>
                <div className="space50" />
                <div className="box-area-all box-area-all2" data-aos="flip-right" data-aos-duration="900">
                  <div className="icon">
                    <img src={systemIcon2} alt="" />
                  </div>
                  <div className="single-box heading7">
                    <h5>
                      <Link to="">Instant Content Generation</Link>
                    </h5>
                    <div className="space10" />
                    <p>Auto-generate copy, images, and layouts tailored to your goals.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="service1-main-images" data-aos="zoom-out" data-aos-duration="900">
                  <div className="main-img1">
                    <img src={systemImg1} alt="" />
                  </div>

                  <div className="main-img2 animate1">
                    <img src={systemImg2} alt="" />
                  </div>

                  <div className="shape1">
                    <img src={shape1} alt="" />
                  </div>

                  <div className="shape2">
                    <img src={shape2} alt="" />
                  </div>

                  <div className="shape3">
                    <img src={shape3} alt="" />
                  </div>

                  <div className="shape4">
                    <img src={shape4} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="box-area-all box-area-all3" data-aos="flip-right" data-aos-duration="900">
                  <div className="icon">
                    <img src={systemIcon3} alt="" />
                  </div>
                  <div className="single-box heading7">
                    <h5>
                      <Link to="">Reliable Security & Hosting</Link>
                    </h5>
                    <div className="space10" />
                    <p>Deploy with secure hosting, automated backups, and HTTPS by default.</p>
                  </div>
                </div>
                <div className="space50" />
                <div className="box-area-all box-area-all4" data-aos="flip-right" data-aos-duration="900">
                  <div className="icon">
                    <img src={systemIcon4} alt="" />
                  </div>
                  <div className="single-box heading7">
                    <h5>
                      <Link to="">Publish Everywhere</Link>
                    </h5>
                    <div className="space10" />
                    <p>Connect domains and publish to popular platforms in one click.</p>
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

export default Benefit
