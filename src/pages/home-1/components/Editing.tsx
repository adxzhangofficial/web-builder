import editing6Icon1 from '@/assets/img/icons/editing6-icon1.svg'
import editing6Icon2 from '@/assets/img/icons/editing6-icon2.svg'
import editing6Icon3 from '@/assets/img/icons/editing6-icon3.svg'
import editing6Icon4 from '@/assets/img/icons/editing6-icon4.svg'
import editing6Icon5 from '@/assets/img/icons/editing6-icon5.svg'
import editing6Icon6 from '@/assets/img/icons/editing6-icon6.svg'
import SpanImg6 from '@/assets/img/icons/span-image6.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'

export type EditingType = {
  Duration: number
  image: string
  title: string
  des: string
}

export const EditingData: EditingType[] = [
  {
    Duration: 600,
    image: editing6Icon1,
    title: 'AI-Assisted Drag & Drop',
    des: 'Combine drag & drop with AI suggestions to edit content and layout instantly.',
  },
  {
    Duration: 900,
    image: editing6Icon2,
    title: 'Real-Time AI Preview',
    des: 'See AI-generated changes live and adjust design in real time.',
  },
  {
    Duration: 1100,
    image: editing6Icon3,
    title: 'Custom Design Controls',
    des: 'Fine-tune styles with global design settings and optional custom CSS.',
  },
  {
    Duration: 700,
    image: editing6Icon4,
    title: 'Responsive by Default',
    des: 'AI ensures layouts adapt automatically across devices.',
  },
  {
    Duration: 1100,
    image: editing6Icon5,
    title: 'Reusable Sections',
    des: 'Save and reuse AI-generated sections across pages to speed up builds.',
  },
  {
    Duration: 800,
    image: editing6Icon6,
    title: 'Site-wide Styling',
    des: "Manage your entire website's design using global elements and design settings.",
  },
]

const Editing = () => {
  return (
    <div className="editing6 sp" id="editing">
      <Container>
        <Row>
          <Col lg={6} className="m-auto text-center">
            <div className="heading6">
              <span className="title">
                <img src={SpanImg6} alt="" />
              </span>
              <h2 className="text-anime-style-3">Powerful Visual Editing For Your Entire Website</h2>
            </div>
          </Col>
        </Row>
        <div className="space30" />
        <Row>
          {EditingData.map((item, idx) => (
            <Col lg={4} md={6} key={idx} data-aos="zoom-in-up" data-aos-duration={item.Duration}>
              <div className="editing-box">
                <div className="icon">
                  <img src={item.image} alt="" />
                </div>
                <div className="space16" />
                <div className="heading6">
                  <h4>
                    <Link to="/features">{item.title}</Link>
                  </h4>
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

export default Editing
