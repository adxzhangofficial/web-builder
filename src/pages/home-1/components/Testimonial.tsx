import TestIcon from '@/assets/img/icons/tes2-icon.png'
import Test2Logo1 from '@/assets/img/logo/tes2-logo1.png'
import Test2Logo2 from '@/assets/img/logo/tes2-logo2.png'
import Shape2 from '@/assets/img/shapes/footer2-shape2.png'
import TestImg from '@/assets/img/testimonial/tes2-img1.png'
import TestImg2 from '@/assets/img/testimonial/tes2-img2.png'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa6'
import Slider from 'react-slick'
import ClientOnly from '@/components/ClientOnly'

export type TestimonialType = {
  des: string
  image: string
  logo: string
}

export const TestimonialData = [
  {
    des: `"Website Builder AI Agent helped us launch a complete website in under an hour. The AI-generated copy and templates were spot on for our brand."`,
    image: TestImg,
    logo: Test2Logo1,
  },
  {
    des: `"AI-assisted design made it easy to iterate. We saved weeks of work and the site looks professional."`,
    image: TestImg2,
    logo: Test2Logo2,
  },
  {
    des: `"Publishing and hosting was seamless. The AI suggestions improved our messaging and conversions."`,
    image: TestImg,
    logo: Test2Logo1,
  },
  {
    des: `"A powerful tool for small teams — the AI does the heavy lifting while we refine the details."`,
    image: TestImg2,
    logo: Test2Logo2,
  },
]

const Testimonial = () => {
  const sliderRef = useRef<Slider | null>(null)

  const setting = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    loop: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <>
      <div className="tes2" id="testimonial">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="headding2">
                <span className="span">Testimonials </span>
                <h2 className="text-anime-style-3">Why Our Users Love Us</h2>
              </div>
            </Col>
            <Col lg={6}>
              <div className="testimonial-arrows" data-aos="fade-left" data-aos-duration="800">
                <button className="testimonial-prev-arrow2" onClick={() => sliderRef.current?.slickPrev()}>
                  <FaArrowLeft />
                </button>
                <button className="testimonial-next-arrow2" onClick={() => sliderRef.current?.slickNext()}>
                  <FaArrowRight />
                </button>
              </div>
            </Col>
          </Row>
          <div className="space60" />
          <Row>
            <Col lg={12}>
              <ClientOnly>
                <Slider {...setting} ref={sliderRef} className="tes2-slider-all" data-aos="fade-up" data-aos-duration="900">
                  {TestimonialData.map((item, idx) => (
                    <div className="px-1">
                      <div key={idx} className="single-slider">
                        <ul className="stars">
                          <li style={{ marginRight: '5px' }}>
                            <FaStar size={18} />
                          </li>
                          <li style={{ marginRight: '5px' }}>
                            <FaStar size={18} />
                          </li>
                          <li style={{ marginRight: '5px' }}>
                            <FaStar size={18} />
                          </li>
                          <li style={{ marginRight: '5px' }}>
                            <FaStar size={18} />
                          </li>
                          <li>
                            <FaStar size={18} />
                          </li>
                        </ul>
                        <div className="icon">
                          <img src={TestIcon} alt="" />
                        </div>
                        <p>{item.des}</p>
                        <div className="single-slider-bottom">
                          <div className="headdding-area">
                            <div className="image">
                              <img src={item.image} alt="" />
                            </div>
                            <div className="headding">
                              <h5>
                                <Link to="">Pat Cummins</Link>
                              </h5>
                              <p>Ceo Biosynthesis</p>
                            </div>
                          </div>
                          <div className="logo">
                            <img src={item.logo} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </ClientOnly>
            </Col>
          </Row>
        </Container>
        <img className="tes2-shape" src={Shape2} alt="" />
      </div>
    </>
  )
}

export default Testimonial
