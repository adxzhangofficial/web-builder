import bg from '@/assets/img/bg/system-bg.png'
import icon1 from '@/assets/img/icons/system-icon1.svg'
import icon2 from '@/assets/img/icons/system-icon2.svg'
import icon3 from '@/assets/img/icons/system-icon3.svg'
import icon4 from '@/assets/img/icons/system-icon4.svg'
import mainImg1 from '@/assets/img/others/system-main-image1.png'
import mainImg2 from '@/assets/img/others/system-main-image2.png'
import shape1 from '@/assets/img/shapes/system-shape1.png'
import shape2 from '@/assets/img/shapes/system-shape2.png'
import shape3 from '@/assets/img/shapes/system-shape3.png'
import shape4 from '@/assets/img/shapes/system-shape4.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

type SystemFeature = {
  title: string
  desc: string
  icon: string
  className?: string
}

const featuresLeft: SystemFeature[] = [
  { title: 'AI Page Generator', desc: 'Generate full pages from a prompt in seconds using AI.', icon: icon1 },
  { title: 'Flexible Exports', desc: 'Export your site for hosting or connect to a CMS with ease.', icon: icon2, className: 'box-area-all2' },
]

const featuresRight: SystemFeature[] = [
  { title: 'Secure Hosting', desc: 'Secure hosting, automatic backups, and HTTPS enabled.', icon: icon3, className: 'box-area-all3' },
  { title: 'Global Publishing', desc: 'Deploy to any domain or CDN and publish with one click.', icon: icon4, className: 'box-area-all4' },
]

const System = () => {
  return (
    <>
      <div className="buy-sell sp" style={{ backgroundImage: `url(${bg})` }} id="system">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
                <div className="heading7-w">
                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                  AI Website Builder
                </span>
                <h2 className="text-anime-style-3">All-in-One AI Website Builder Platform</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="buy-sell-bottom">
        <Container>
          <div className="bg">
            <Row className="align-items-center">
              <Col lg={3}>
                {featuresLeft.map((feature, idx) => (
                  <div key={idx} className={`box-area-all ${feature.className || ''}`} data-aos="flip-right" data-aos-duration="900">
                    <div className="icon">
                      <img src={feature.icon} alt="" />
                    </div>
                    <div className="single-box heading7">
                      <h5>
                        <Link to="#">{feature.title}</Link>
                      </h5>
                      <div className="space10" />
                      <p>{feature.desc}</p>
                    </div>
                    {idx === 0 && <div className="space50" />}
                  </div>
                ))}
              </Col>
              <Col lg={6}>
                <div className="service1-main-images" data-aos="zoom-out" data-aos-duration="900">
                  <div className="main-img1">
                    <img src={mainImg1} alt="" />
                  </div>
                  <div className="main-img2 animate1">
                    <img src={mainImg2} alt="" />
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
                {featuresRight.map((feature, idx) => (
                  <div key={idx} className={`box-area-all ${feature.className || ''}`} data-aos="flip-right" data-aos-duration="900">
                    <div className="icon">
                      <img src={feature.icon} alt="" />
                    </div>
                    <div className="single-box heading7">
                      <h5>
                        <Link to="">{feature.title}</Link>
                      </h5>
                      <div className="space10" />
                      <p>{feature.desc}</p>
                    </div>
                    {idx === 0 && <div className="space50" />}
                  </div>
                ))}
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="space100" />
    </>
  )
}

export default System
