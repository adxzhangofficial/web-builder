import Icon3 from '@/assets/img/icons/work7-icon1.svg'
import Icon2 from '@/assets/img/icons/work7-icon2.svg'
import Icon1 from '@/assets/img/icons/work7-icon3.svg'
import WorkBoxImg from '@/assets/img/shapes/work7-box-shape.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

type WorkType = {
  duration: number
  image: string
  title: string
  des: string
}

export const WorkData: WorkType[] = [
  { duration: 800, image: Icon1, title: 'Create a Project', des: 'Sign up and start an AI project to generate your first site.' },
  { duration: 1000, image: Icon2, title: 'Choose a Template', des: 'Pick an AI-recommended template or generate one for your industry.' },
  {
    duration: 1200,
    image: Icon3,
    title: 'Customize & Publish',
    des: 'Refine AI suggestions, customize visuals, and publish your site with one click.',
  },
]

const Work = () => {
  return (
    <>
      <div className="space100" />
      <div className="works7 sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading7">
                <p className="title" data-aos="zoom-in-left" data-aos-duration="800">
                  <span className="span">how it works</span>
                </p>
                <h2 className="text-anime-style-3">Simple Steps to Launch Your Website</h2>
              </div>
            </Col>
          </Row>
          <div className="space30" />
          <Row>
            {WorkData.map((item, idx) => (
              <Col key={idx} lg={4} md={6}>
                <div className="works-box" data-aos="zoom-out" data-aos-duration={item.duration}>
                  <div className="icon">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="space16" />
                  <div className="heading7">
                    <h5>
                      <Link to="#">{item.title}</Link>
                    </h5>
                    <div className="space16" />
                    <p>{item.des}</p>
                  </div>
                  {(idx === 0 || idx === 1) && <img src={WorkBoxImg} alt="" className={idx === 0 ? 'shape1' : 'shape2'} />}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Work
