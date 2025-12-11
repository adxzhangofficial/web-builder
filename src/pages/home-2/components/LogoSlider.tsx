import Slider1 from '@/assets/img/logo/hero5-slider1.png'
import Slider2 from '@/assets/img/logo/hero5-slider2.png'
import Slider3 from '@/assets/img/logo/hero5-slider3.png'
import Slider4 from '@/assets/img/logo/hero5-slider4.png'
import Slider5 from '@/assets/img/logo/hero5-slider5.png'
import ClientOnly from '@/components/ClientOnly'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'

export type sliderType = {
  image: string
}

export const sliderData: sliderType[] = [
  { image: Slider1 },
  { image: Slider2 },
  { image: Slider3 },
  { image: Slider4 },
  { image: Slider5 },
  { image: Slider1 },
  { image: Slider2 },
  { image: Slider3 },
  { image: Slider4 },
  { image: Slider5 },
]

const LogoSlider = () => {
  const setting = {
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
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
      <div className="space60" />
      <div className="hero5-slider">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="hero5-slider-hading">
                <p>Trusted by 50,000+ businesses to scale outbound sales and drive new revenue</p>
                <ClientOnly>
                  <Slider {...setting} className="hero5-slider-all">
                    {sliderData.map((item, idx) => (
                      <div key={idx}>
                        <div className="single-slider">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </ClientOnly>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default LogoSlider
