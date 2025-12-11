import heading5Span from '@/assets/img/icons/heading5-span.png'
import Home5Btn from '@/assets/img/icons/home5-btn-icon1.svg'
import service5Icon1 from '@/assets/img/icons/service5-icon1.svg'
import service5Icon2 from '@/assets/img/icons/service5-icon2.svg'
import service5Icon3 from '@/assets/img/icons/service5-icon3.svg'
import service5Icon4 from '@/assets/img/icons/service5-icon4.svg'
import service5Icon5 from '@/assets/img/icons/service5-icon5.svg'
import tabs5Img1 from '@/assets/img/others/tab5-img1.png'
import tabs5Img2 from '@/assets/img/others/tab5-img2.png'
import Shap1 from '@/assets/img/shapes/faq5-shape1.png'
import Shap2 from '@/assets/img/shapes/faq5-shape2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa6'

const Services = () => {
  const [activeTab, setActiveTab] = useState('tab1')

  const tabs = [
    { id: 'tab1', label: 'SEO', icon: service5Icon1 },
    { id: 'tab2', label: 'Content Marketing', icon: service5Icon2 },
    { id: 'tab3', label: 'Market Research', icon: service5Icon3 },
    { id: 'tab4', label: 'Advertising', icon: service5Icon4 },
    { id: 'tab5', label: 'Social Media', icon: service5Icon5 },
  ]

  const renderTabContent = () => (
    <div className="service-3-bottom-area" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
      <Row>
        <Col lg={6}>
          <div className="tab-bottom-headding">
            <div className="heading5">
              <h3>Simply start a timer for each task, or use our automatic project tracking features.</h3>
              <div className="space16" />
              <p>
                Our intuitive interface makes tracking time a breeze. Simply start a timer for each task, or use our automatic project tracking
                features. No more clunky spreadsheets or wasted minutes logging hours.
              </p>
              <div className="space5"></div>
              <ul className="track-list">
                <li>
                  <span className="check">
                    <FaCheck />
                  </span>
                  Customizable Settings
                </li>
                <li>
                  <span className="check">
                    <FaCheck />
                  </span>
                  Sync Across Devices
                </li>
                <li>
                  <span className="check">
                    <FaCheck />
                  </span>
                  Reminders and Notifications
                </li>
              </ul>
              <div className="space30" />
              <Link to="/account" className="theme-btn7">
                <span className="arrow">
                  <img src={Home5Btn} alt="" />
                </span>
                Get Started, It's Free
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="tab-bottom-images">
            <div className="img1">
              <img src={tabs5Img1} alt="" />
            </div>
            <div className="img2 shape-animaiton3">
              <img src={tabs5Img2} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )

  return (
    <div className="service5 sp" id="service">
      <Container>
        <Row>
          <Col lg={6} className="m-auto text-center">
            <div className="heading5">
              <p className="title" data-aos="zoom-in-left" data-aos-duration="700">
                <span className="span">
                  <img src={heading5Span} alt="" /> Choose by Industry
                </span>
              </p>
              <h2 className="text-anime-style-3">Industry-Specific Applications Of Our Time Tracker App</h2>
            </div>
          </Col>
        </Row>
        <div className="space30" />
        <Row>
          <Col lg={12}>
            <div className="service-tabs-area">
              <div className="tabs-boxs">
                <ul className="nav nav-pills mb-3">
                  {tabs.map((tab, index) => (
                    <li key={tab.id} className="nav-item" data-aos="fade-up" data-aos-duration={800 + index * 100}>
                      <button className={`nav-link ${activeTab === tab.id ? 'active' : ''}`} onClick={() => setActiveTab(tab.id)}>
                        <img src={tab.icon} alt="" />
                        <br />
                        <span>{tab.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space60" />
              <div className="tabs-item-area">
                <div className="tab-content">
                  {tabs.map((tab) => (
                    <div key={tab.id} className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}>
                      {activeTab === tab.id && renderTabContent()}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={Shap1} alt="" className="shape1" />
      <img src={Shap2} alt="" className="shape2" />
    </div>
  )
}

export default Services
