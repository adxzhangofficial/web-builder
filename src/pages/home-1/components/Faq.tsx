import headingIcon from '@/assets/img/icons/heading5-span.png'
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
    question: 'What is Website Builder AI Agent?',
    answer: 'Website Builder AI Agent is an AI-driven website builder that generates pages, copy, and layouts to help you launch sites quickly.',
  },
  {
    id: '1',
    question: 'Do I need coding experience?',
    answer: 'No. The AI generates functional pages and provides visual editing tools so you can build without coding.',
  },
  {
    id: '2',
    question: 'Can I host the site anywhere?',
    answer: 'Yes. You can export static builds, connect to common hosting providers, or use our integrated hosting options.',
  },
  {
    id: '3',
    question: 'Who owns the generated content?',
    answer: 'You retain ownership of the content you create. See our terms for specific licensing details.',
  },
]

const faqColumn2: FaqItem[] = [
  {
    id: '4',
    question: 'Is my site data secure?',
    answer: 'Yes. We provide secure hosting options, automatic backups, and encrypted connections.',
  },
  {
    id: '5',
    question: 'Can I edit AI-generated content?',
    answer: 'Absolutely. All AI output is editable via the visual editor and can be customized further.',
  },
  {
    id: '6',
    question: 'Does it support SEO?',
    answer: 'Yes. AI helps generate SEO-friendly copy and meta tags; you can also fine-tune SEO settings manually.',
  },
  {
    id: '7',
    question: 'What kind of support is available?',
    answer: 'We offer documentation, guides, and customer support to help you at every step.',
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
    </div>
  )
}

export default Faq
