import CtaBtn1 from '@/assets/img/icons/cta7-btn1.svg'
import CtaBtn2 from '@/assets/img/icons/cta7-btn2.svg'
import Shape1 from '@/assets/img/others/cta7-image-shape1.png'
import Shape2 from '@/assets/img/others/cta7-image-shape2.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <>
      <div className="cta7">
        <Container className="_relative">
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="cta-heading">
                <span className="span">Get Started</span>
                <h2>Start Building with Website Builder AI Agent</h2>
                <div className="buttons">
                  <Link to="">
                    <img src={CtaBtn1} alt="" />
                  </Link>
                  <Link to="">
                    <img src={CtaBtn2} alt="" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <img src={Shape1} alt="" className="image-shape1" />
          <img src={Shape2} alt="" className="image-shape2" />
        </Container>
      </div>
    </>
  )
}

export default CTA
