import Tes2Icon from '@/assets/img/icons/tes2-icon.png'
import Tes2Logo from '@/assets/img/logo/tes2-logo1.png'
import Tes2Logo2 from '@/assets/img/logo/tes2-logo2.png'
import Tes2Logo3 from '@/assets/img/logo/tes2-logo3.png'
import Tes2Logo4 from '@/assets/img/logo/tes2-logo4.png'
import Tes2Logo5 from '@/assets/img/logo/tes2-logo5.png'
import Tes2Logo6 from '@/assets/img/logo/tes2-logo6.png'
import Tes2Img1 from '@/assets/img/testimonial/tes2-img1.png'
import Tes2Img2 from '@/assets/img/testimonial/tes2-img2.png'
import Tes2Img3 from '@/assets/img/testimonial/tes2-img3.png'
import Tes2Img4 from '@/assets/img/testimonial/tes2-img4.png'
import Tes2Img5 from '@/assets/img/testimonial/tes2-img5.png'
import Tes2Img6 from '@/assets/img/testimonial/tes2-img6.png'
import Tes2Img7 from '@/assets/img/testimonial/tes2-img7.png'
import Tes2Img8 from '@/assets/img/testimonial/tes2-img8.png'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa6'

type TestimonialType = {
  title: string
  role: string
  des: string
  image: string
  logo: string
}

const TestimonialData: TestimonialType[] = [
  {
    title: 'Pat Cummins',
    role: 'Ceo Biosynthesis',
    des: "I can't imagine managing our email campaigns a without WB. The simplicity of creating visually stunning emails combined with powerful automation tools has been a game-changer for our marketing team. Our engagement rates have soared.",
    image: Tes2Img1,
    logo: Tes2Logo,
  },
  {
    title: 'Pat Cummins',
    role: 'Ceo Biosynthesis',
    des: "I can't imagine managing our email campaigns a without WB. The simplicity of creating visually stunning emails combined with powerful automation tools has been a game-changer for our marketing team. Our engagement rates have soared.",
    image: Tes2Img2,
    logo: Tes2Logo2,
  },
  {
    title: 'Marcus Harris',
    role: 'Ceo Biosynthesis',
    des: `"We've been using WB for over a year now, and the experience has been nothing short of fantastic. The platform's user- best a friendly interface makes it a breeze to navigate, and the range of features has significantly streamlined our workflow."`,
    image: Tes2Img3,
    logo: Tes2Logo3,
  },
  {
    title: 'Josh Stones',
    role: 'Ceo CouldWatch',
    des: `"Discovering WB was a game-changer for our business. The seamless integration and robust features have not only saved us time but have also significantly increased our productivity. The level of customisation available allows us to tailor the WB"`,
    image: Tes2Img4,
    logo: Tes2Logo4,
  },
  {
    title: 'Ruben Dias',
    role: 'Ceo Biosynthesis',
    des: "I can't imagine managing our email campaigns a without WB. The simplicity of creating visually stunning emails combined with powerful automation tools has been a game-changer for our marketing team. Our engagement rates have soared.",
    image: Tes2Img5,
    logo: Tes2Logo5,
  },
  {
    title: 'Rodrigo Paul',
    role: 'Ceo CouldWatch',
    des: `"WB has exceeded our expectations in every way. The ease with which we can target specific audience segments has an transformed our approach to email marketing. The automation features have saved us countless hours, allowing us to focus"`,
    image: Tes2Img6,
    logo: Tes2Logo6,
  },
  {
    title: 'Pat Cummins',
    role: 'Ceo Biosynthesis',
    des: `"Discovering WB was a game-changer for our business. The seamless integration and robust features have not only saved us time but have also significantly increased our productivity. The level of customisation available allows us to tailor the WB"`,
    image: Tes2Img7,
    logo: Tes2Logo6,
  },
  {
    title: 'Marcus Harris',
    role: 'Ceo Biosynthesis',
    des: `"We've been using WB for over a year now, and the experience has been nothing short of fantastic. The platform's user- best a friendly interface makes it a breeze to navigate, and the range of features has significantly streamlined our workflow."`,
    image: Tes2Img8,
    logo: Tes2Logo2,
  },
]

const Blog = () => {
  return (
    <>
      <Row>
        {TestimonialData.map((item, idx) => (
          <Col key={idx} lg={6}>
            <div className="single-slider-page">
              <ul className="stars">
                <li style={{ marginRight: '3px' }}>
                  <FaStar size={18} />
                </li>
                <li style={{ marginRight: '3px' }}>
                  <FaStar size={18} />
                </li>
                <li style={{ marginRight: '3px' }}>
                  <FaStar size={18} />
                </li>
                <li style={{ marginRight: '3px' }}>
                  <FaStar size={18} />
                </li>
                <li>
                  <FaStar size={18} />
                </li>
              </ul>
              <div className="icon">
                <img src={Tes2Icon} alt="" />
              </div>
              <p>{item.des}</p>
              <div className="single-slider-bottom">
                <div className="headdding-area">
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="headding">
                    <h5>
                      <Link to="#">{item.title}</Link>
                    </h5>
                    <p>{item.role}</p>
                  </div>
                </div>
                <div className="logo">
                  <img src={item.logo} alt="" />
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Blog
