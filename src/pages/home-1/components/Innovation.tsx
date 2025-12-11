import bgImage from '@/assets/img/bg/others2-bg.png'
import otherImg from '@/assets/img/others/others2-image.png'
import shape1 from '@/assets/img/shapes/others2-shape1.png'
import shape2 from '@/assets/img/shapes/others2-shape2.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const Innovation = () => {
  return (
    <>
      <div
        className="email-innovation"
        id="email"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <Container>
          <Row>
            <Col lg={5}>
              <div className="headding2-w">
                <h2 className="text-anime-style-3">Email Innovation: Craft Marketing An Success</h2>
                <div className="space16" />
                <p data-aos="fade-right" data-aos-duration="800">
                  Email marketing journey transforms into a streamlined, an powerful experience. Our cutting-edge platform equips you with the tools
                  to craft compelling, personalized
                </p>
                <div className="space30" />
                <div className="" data-aos="fade-right" data-aos-duration="1000">
                  <Link to="/account" className="theme-btn3">
                    Start For Free Now
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="images" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="image1">
                  <img src={otherImg} alt="" />
                </div>
                <div className="image2">
                  <img src={shape1} alt="" />
                </div>
                <div className="image3">
                  <img src={shape2} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Innovation
