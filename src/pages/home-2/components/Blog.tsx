import blogImg1 from '@/assets/img/blog/blog5-img1.png'
import blogImg2 from '@/assets/img/blog/blog5-img2.png'
import iconDate from '@/assets/img/icons/blog2-icon1.png'
import iconAuthor from '@/assets/img/icons/blog2-icon2.png'
import headingIcon from '@/assets/img/icons/heading5-span.png'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'

export interface BlogItem {
  id: number
  image: string
  dateIcon: string
  authorIcon: string
  date: string
  author: string
  title: string
  description: string
  link: string
}

export const blogItems: BlogItem[] = [
  {
    id: 1,
    image: blogImg1,
    dateIcon: iconDate,
    authorIcon: iconAuthor,
    date: '10 October 2023',
    author: 'Rabby Mahmud',
    title: 'The Ultimate Email Campaign Playbook',
    description: 'Effortlessly design stunning emails, automate your market workflow, & precisely target your audience for maximum.',
    link: '/blog-details',
  },
  {
    id: 2,
    image: blogImg2,
    dateIcon: iconDate,
    authorIcon: iconAuthor,
    date: '10 October 2023',
    author: 'Rabby Mahmud',
    title: 'Email Design: A Deep Dive in Visual Impact',
    description: 'Effortlessly design stunning emails, automate your market workflow, & precisely target your audience for maximum.',
    link: '/blog-details',
  },
]

const Blog = () => {
  return (
    <div className="blog2 blog5 sp" id="blog">
      <Container>
        <Row>
          <Col lg={6} className="m-auto text-center">
            <div className="heading5">
              <p className="title" data-aos="zoom-in-left" data-aos-duration="700">
                <span className="span">
                  <img src={headingIcon} alt="Heading Icon" /> Our Blog
                </span>
              </p>
              <h2 className="text-anime-style-3">Our Latest Blog & News</h2>
            </div>
          </Col>
        </Row>
        <div className="space30" />
        <Row>
          {blogItems.map((item, index) => (
            <Col lg={6} key={item.id}>
              <div className="blog-box" data-aos="zoom-in-up" data-aos-duration={800 + index * 200}>
                <div className="image">
                  <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="headding">
                  <div className="tags">
                    <Link to="">
                      <img src={item.dateIcon} alt="Date Icon" /> {item.date}
                    </Link>
                    <Link to="">
                      <img src={item.authorIcon} alt="Author Icon" /> {item.author}
                    </Link>
                  </div>
                  <h4>
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                  <p>{item.description}</p>
                  <Link to={item.link} className="learn">
                    Read more
                    <span>
                      <FaArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Blog
