import headingIcon from '@/assets/img/icons/heading5-span.png'
import shape1 from '@/assets/img/shapes/faq5-shape1.png'
import shape2 from '@/assets/img/shapes/faq5-shape2.png'
import { useState } from 'react'
import { Accordion, Col, Container, Row } from 'react-bootstrap'

interface FaqItem {
  id: string
  question: string
  answer: string
}

const faqColumn1: FaqItem[] = [
  {
    id: '0',
    question: 'What devices are compatible with the Time Tracker App?',
    answer:
      'Our Time Tracker App is compatible with desktop computers, laptops, tablets, and smartphones running on Windows, macOS, iOS, and Android operating systems..',
  },
  {
    id: '1',
    question: 'Can I upgrade or downgrade my plan at any time?',
    answer:
      'Our Time Tracker App is compatible with desktop computers, laptops, tablets, and smartphones running on Windows, macOS, iOS, and Android operating systems.',
  },
  {
    id: '2',
    question: 'How does the collaboration feature work in the App?',
    answer:
      'Our Time Tracker App is compatible with desktop computers, laptops, tablets, and smartphones running on Windows, macOS, iOS, and Android operating systems.',
  },
  {
    id: '3',
    question: 'Can I export my time tracking data from the app?',
    answer:
      'Our Time Tracker App is compatible with desktop computers, laptops, tablets, and smartphones running on Windows, macOS, iOS, and Android operating systems.',
  },
]

const faqColumn2: FaqItem[] = [
  {
    id: '4',
    question: 'Is my data secure with the Time Tracker App?',
    answer:
      'Our Time Tracker App is compatible with desktop computers, laptops, tablets, and smartphones running on Windows, macOS, iOS, and Android operating systems.',
  },
  {
    id: '5',
    question: 'Are there any discounts for long-term subscriptions?',
    answer:
      'Our Time Tracker App is compatible with desktop computers, laptops, tablets, and smartphones running on Windows, macOS, iOS, and Android operating systems.',
  },
  {
    id: '6',
    question: 'Does the Time Tracker App offer customer support?',
    answer:
      'Our Time Tracker App is compatible with desktop computers, laptops, tablets, and smartphones running on Windows, macOS, iOS, and Android operating systems.',
  },
  {
    id: '7',
    question: 'Can I export my time tracking data from the app?',
    answer:
      'Our Time Tracker App is compatible with desktop computers, laptops, tablets, and smartphones running on Windows, macOS, iOS, and Android operating systems.',
  },
]

const Faq = () => {
  const [active1, setActive1] = useState('0')
  const [active2, setActive2] = useState('4')

  return (
    <div className="faq5 sp">
      <Container>
        <Row>
          <Col lg={6} className="m-auto text-center">
            <div className="heading5">
              <p className="title">
                <span className="span">
                  <img src={headingIcon} alt="Heading Icon" /> FAQ
                </span>
              </p>
              <h2 className="text-anime-style-3">Frequently Asked Questions</h2>
            </div>
          </Col>
        </Row>
        <div className="space30" />
        <Row>
          <Col lg={6}>
            <Accordion activeKey={active1}>
              {faqColumn1.map((item) => (
                <div
                  key={item.id}
                  className={`accordion-item ${active1 === item.id ? 'active' : ''}`}
                  onClick={() => setActive1(active1 === item.id ? '' : item.id)}>
                  <h2 className="accordion-header" id={`heading${item.id}`}>
                    <Accordion.Button as="button" className={`accordion-button ${active1 !== item.id ? 'collapsed' : ''}`}>
                      {item.question}
                    </Accordion.Button>
                  </h2>
                  <Accordion.Collapse eventKey={item.id}>
                    <div className="accordion-body fade show">{item.answer}</div>
                  </Accordion.Collapse>
                </div>
              ))}
            </Accordion>
          </Col>
          <Col lg={6}>
            <Accordion activeKey={active2}>
              {faqColumn2.map((item) => (
                <div
                  key={item.id}
                  className={`accordion-item ${active2 === item.id ? 'active' : ''}`}
                  onClick={() => setActive2(active2 === item.id ? '' : item.id)}>
                  <h2 className="accordion-header" id={`heading${item.id}`}>
                    <Accordion.Button as="button" className={`accordion-button ${active2 !== item.id ? 'collapsed' : ''}`}>
                      {item.question}
                    </Accordion.Button>
                  </h2>
                  <Accordion.Collapse eventKey={item.id}>
                    <div className="accordion-body fade show">{item.answer}</div>
                  </Accordion.Collapse>
                </div>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
      <img src={shape1} alt="Shape 1" className="shape1" />
      <img src={shape2} alt="Shape 2" className="shape2" />
    </div>
  )
}

export default Faq
