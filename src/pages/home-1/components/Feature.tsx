import SpanImg6 from '@/assets/img/icons/span-image6.png'
import features6Img1 from '@/assets/img/features/Feature1.png'
import features6Img2 from '@/assets/img/features/Feature2.png'
import features6Img3 from '@/assets/img/features/Feature3.png'
import features6Img4 from '@/assets/img/features/Feature4.png'
import features6Img5 from '@/assets/img/features/Feature5.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

export type FeatureItem = {
  id: number
  subtitle: string
  title: string
  description: string
  image: string
  animation: 'fade-left' | 'fade-right'
  startDelay: number
  duration: number
  descriptionDelay: number
  exitDelay: number
}

export const featuresData: FeatureItem[] = [
  {
    id: 1,
    subtitle: 'AI Page Builder',
    title: 'AI Front/Back End Builder',
    description:
      'Generate responsive pages using an AI-powered builder. No coding required — create a full website from prompts and visual edits.',
    image: features6Img1,
    animation: 'fade-left',
    startDelay: 800,
    duration: 700,
    descriptionDelay: 900,
    exitDelay: 900,
  },
  {
    id: 2,
    subtitle: 'Custom Themes',
    title: 'Automatic Color & Theme Builder',
    description:
      'AI suggests color schemes and custom themes tailored to your brand identity with one click.',
    image: features6Img2,
    animation: 'fade-right',
    startDelay: 700,
    duration: 900,
    descriptionDelay: 1100,
    exitDelay: 1000,
  },
  {
    id: 3,
    subtitle: 'Any Platform',
    title: 'Export to Any Platform',
    description:
      'Export sites to static builds, React, or connect to common CMS and hosting providers effortlessly.',
    image: features6Img3,
    animation: 'fade-left',
    startDelay: 1000,
    duration: 700,
    descriptionDelay: 900,
    exitDelay: 1000,
  },
  {
    id: 4,
    subtitle: 'Template Library',
    title: 'AI Template Library',
    description:
      'Browse and generate pre-built templates adapted by AI for your industry and content to speed up site launches.',
    image: features6Img4,
    animation: 'fade-right',
    startDelay: 700,
    duration: 900,
    descriptionDelay: 1000,
    exitDelay: 800,
  },
  {
    id: 5,
    subtitle: 'Responsive Layouts',
    title: 'Adaptive Layouts for Any Device',
    description:
      'AI ensures layouts look perfect on mobile, tablet, and desktop with automatic adjustments.',
    image: features6Img5,
    animation: 'fade-left',
    startDelay: 1000,
    duration: 700,
    descriptionDelay: 900,
    exitDelay: 1000,
  },
]

const Feature = () => {
  return (
    <div className="features6 sp" id="feature">
      <Container>
        <Row>
          <Col lg={6} className="m-auto text-center">
            <div className="heading6">
              <span className="title">
                <img src={SpanImg6} alt="Section Icon" />
              </span>
              <h2 className="text-anime-style-3">Website Builder AI Agent Features</h2>
            </div>
          </Col>
        </Row>
        {featuresData.map((item, index) => (
          <Row className="align-items-center" key={item.id}>
            {index % 2 === 0 ? (
              <>
                <Col lg={6}>
                  <div className="main-image right60" data-aos="zoom-out" data-aos-duration={item.startDelay}>
                    <img src={item.image} alt={item.title} />
                  </div>
                </Col>
                <Col xs={1}></Col>
                <Col lg={5}>
                  <div className="heading6 features-heading">
                    <span className="span3" data-aos={item.animation} data-aos-duration={item.duration}>
                      {item.subtitle}
                    </span>
                    <h3 className="text-anime-style-3">{item.title}</h3>
                    <div className="space16" />
                    <p data-aos={item.animation} data-aos-duration={item.descriptionDelay}>
                      {item.description}
                    </p>
                    <div className="space30" />
                    <div data-aos={item.animation} data-aos-duration={item.exitDelay}>
                      <Link to="/features" className="theme-btn9">
                        <span className="tb8">
                          Learn More
                          <span className="arrow">
                            <FaArrowRight />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col lg={5}>
                  <div className="heading6 features-heading">
                    <span className="span3" data-aos={item.animation} data-aos-duration={item.startDelay}>
                      {item.subtitle}
                    </span>
                    <h3 className="text-anime-style-3">{item.title}</h3>
                    <div className="space16" />
                    <p data-aos={item.animation} data-aos-duration={item.duration}>
                      {item.description}
                    </p>
                    <div className="space30" />
                    <div data-aos={item.animation} data-aos-duration={item.descriptionDelay}>
                      <Link to="/features" className="theme-btn9">
                        <span className="tb8">
                          Get More Info
                          <span className="arrow">
                            <FaArrowRight />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col xs={1}></Col>
                <Col lg={6}>
                  <div className="main-image right60" data-aos="zoom-out" data-aos-duration={item.exitDelay}>
                    <img src={item.image} alt={item.title} />
                  </div>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </div>
  )
}

export default Feature
