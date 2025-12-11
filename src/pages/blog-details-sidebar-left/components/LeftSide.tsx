import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

const LeftSide = () => {
  return (
    <>
      <Col lg={4}>
        <div className="sidebar-single-box">
          <h3>Email Campaign Playbook</h3>
          <div className="sidebar-list">
            <ul>
              <li>
                <Link to="/blog-details" className="active">
                  Best Masterful Email Marketing Starts Here: Introducing WB ....
                </Link>
              </li>
              <li>
                <Link to="/blog-details">Crafting Success: Your Email Marketing Solution -WB ....</Link>
              </li>
              <li>
                <Link to="/blog-details">Beyond the Inbox: Marketing Redefines Email Strategies ....</Link>
              </li>
              <li>
                <Link to="/blog-details">Effortless Excellence: Your Email Marketing Revolution – WB ....</Link>
              </li>
              <li>
                <Link to="/blog-details">Best Experience Excellence: WB Revolutionises Email Outreach ....</Link>
              </li>
            </ul>
          </div>
        </div>
      </Col>
    </>
  )
}

export default LeftSide
