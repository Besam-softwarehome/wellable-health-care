import React from "react";
import "./Trust.css";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Trust = ({title, text}) => {
  return (
    <div className="call">
      <div className="call-content">
        <FaPhoneAlt className="call-icon" />

        <h2>{title}</h2>

        <p>{text}</p>

        <div className="call-buttons">
          <Link to="/contact" className="btn btn-white">
            Contact Us
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trust;