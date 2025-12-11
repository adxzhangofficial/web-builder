import footerIcon1 from '@/assets/img/icons/footer-icon1.png'
import footerIcon2 from '@/assets/img/icons/footer-icon2.png'
import footerIcon3 from '@/assets/img/icons/footer-icon3.png'
import Logo from '@/assets/img/logo/header-logo7.png'
import { currentYear } from '@/components/CurrentYear'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import { FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'

type FooterLink = {
  title: string
  links: {
    label: string
  }[]
}

export const footerData: FooterLink[] = [
  {
    title: 'Related',
    links: [
      { label: 'Website Templates' },
      { label: 'Landing Pages' },
      { label: 'Portfolio Sites' },
      { label: 'E‑commerce Sites' },
      { label: 'Blog & Articles' },
    ],
  },
  {
    title: 'Related',
    links: [
      { label: 'Pricing & Plans' },
      { label: 'Start Free' },
      { label: 'Compare Plans' },
      { label: 'Themes' },
      { label: 'Custom Domains' },
    ],
  },
  {
    title: 'Related',
    links: [
      { label: 'Tutorials' },
      { label: 'Templates Marketplace' },
      { label: 'Integrations' },
      { label: 'API Documentation' },
      { label: 'Design Resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us' },
      { label: 'Careers' },
      { label: 'Press' },
      { label: 'Contact' },
      { label: 'Partners' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center' },
      { label: 'Guides & Docs' },
      { label: 'Community' },
      { label: 'Status' },
    ],
  },
]

const Footer = () => {
  return (
    <>
    <div className="gradient-bg"></div>
      <div className="footer7 _relative">
        <Container>
          <Row>
            <div className="footer-icon-box-all">
              <div className="footer-icon-box">
                <div className="icon">
                  <img src={footerIcon1} alt="" />
                </div>
                <div className="headding">
                  <p>Free training & 24-hours</p>
                </div>
              </div>
              <div className="footer-icon-box">
                <div className="icon">
                  <img src={footerIcon2} alt="" />
                </div>
                <div className="headding">
                  <p>Serious about security & privacy</p>
                </div>
              </div>
              <div className="footer-icon-box">
                <div className="icon">
                  <img src={footerIcon3} alt="" />
                </div>
                <div className="headding">
                  <p>Highest levels of uptime the last 12 months</p>
                </div>
              </div>
            </div>
          </Row>
          <div className="space50" />
          <Row>
            {footerData.map((section, idx) => (
              <Col lg md={6} xs={6} key={idx}>
                <div className="single-footer-items">
                  <h3>{section.title}</h3>
                  <ul className="menu-list">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link to="">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
            <Col lg={3} md={6} xs={7}>
              <div className="single-footer-items">
                <h3>Product</h3>

                <ul className="social-icons">
                  <li>
                    <Link to="">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaYoutube />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="space40" />
          <div className="copyright-area">
            <Row className="align-items-center">
              <Col md={5}>
                <div className="logo">
                  <Link to="/home-1">
                    <img src={Logo} alt="" />
                  </Link>
                </div>
              </Col>
              <Col md={7}>
                <div className="coppyright text-right">
                  <Link to="">@{currentYear} WB</Link>
                  <Link to="">Security</Link>
                  <Link to="">Your Privacy</Link>
                  <Link to="">Terms</Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer