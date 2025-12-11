import Choose1 from '@/assets/img/choose/choose5-img1.png'
import Choose2 from '@/assets/img/choose/choose5-img2.png'
import Choose3 from '@/assets/img/choose/choose5-img3.png'
import HeadingImg from '@/assets/img/icons/heading5-span.png'
import { Col, Container, Row } from 'react-bootstrap'

export type ChooseType = {
  duration: number
  image: string
  title: string
  des: string
}

export const ChooseData: ChooseType[] = [
  {
    duration: 700,
    image: Choose1,
    title: 'Seamless Project Tracking',
    des: 'Assign tasks to projects, track overall project time, and identify areas for improvement.',
  },
  {
    duration: 900,
    image: Choose2,
    title: 'Detailed Reporting',
    des: 'Generate comprehensive reports with insightful data visualizations. See exactly where your time is being spent and make informed decisions.',
  },
  {
    duration: 1100,
    image: Choose3,
    title: 'Flexible Time Tracking',
    des: 'Track time manually, automatically based on active applications, or use our mobile app for on-the-go tracking.',
  },
]

const Choose = () => {
  return (
    <div className="choose5 sp" id="choose">
      <Container>
        <Row>
          <Col lg={7} className=" m-auto text-center">
            <div className="heading5">
              <p className="title" data-aos="zoom-in-left" data-aos-duration="700">
                <span className="span">
                  <img src={HeadingImg} alt="" /> Why Choose WB?
                </span>
              </p>
              <h2 className="text-anime-style-3">WB Helps You Gain Clarity And Control Over Your Workday.</h2>
            </div>
          </Col>
        </Row>
        <div className="space30" />
        <Row>
          {ChooseData.map((item, idx) => (
            <Col key={idx} lg={4}>
              <div className="choose-box" data-aos="zoom-in-up" data-aos-duration={item.duration}>
                <div className="image">
                  <img src={item.image} alt="" />
                </div>
                <div className="space20" />
                <div className="heading5">
                  <h5>{item.title}</h5>
                  <div className="space16" />
                  <p>{item.des}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Choose
