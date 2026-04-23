import React from 'react'
import './MissionVision.css'
import { FaBullseye, FaEye } from 'react-icons/fa'

const MissionVision = () => {
  return (
    <div className="mv-container container">

      {/* Mission */}
      <div className="mv-item">
        <div className="mv-left">
          <FaBullseye className="mv-icon" />
          <h3 className="mv-title">Our Mission</h3>
        </div>
        <p className="mv-text">
          To provide quality and affordable healthcare services that improve the
          well-being of our community through compassion, innovation, and professionalism.
        </p>
      </div>

      {/* Vision */}
      <div className="mv-item">
        <div className="mv-left">
          <FaEye className="mv-icon" />
          <h3 className="mv-title">Our Vision</h3>
        </div>
        <p className="mv-text">
          To become a leading healthcare provider recognized for excellence,
          patient-centered care, and continuous improvement in health services.
        </p>
      </div>

    </div>
  )
}

export default MissionVision