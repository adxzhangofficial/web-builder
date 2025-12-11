import React from 'react'
import './FullWidthImage.scss'
import heroImg from '@/assets/img/others/AI-agent-in-customer-service.png'

const FullWidthImage: React.FC = () => {
  return (
    <div className="fullwidth-image">
      <div className="shade shade-top" />

      <div className="image-outer">
        <div className="image-inner">
          <img src={heroImg} alt="AI agent in customer service" />
        </div>
      </div>

      <div className="shade shade-bottom" />
    </div>
  )
}

export default FullWidthImage
