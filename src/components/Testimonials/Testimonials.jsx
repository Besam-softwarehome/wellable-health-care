import React from 'react';
import './Testimonials.css';
import Title from '../Title/Title'
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from '../../ReviewData';
import { FaQuoteLeft, FaQuoteRight, FaStar  } from "react-icons/fa";

const Slider = SliderImport.default || SliderImport;

function Testimonials() {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

  return (
    <div className="testimonials-wrapper">
      <Title
      title='Testimonials'
      paragraph='Hear from our valued clients who have trusted us with their health and wellbeing'
      />
      <Slider {...settings} className='container'>
        {Reviews.map((item, index) => (
          <div key={index} className="slide-item">
            <div className="review">
              <div className="text">
                <p><FaQuoteLeft size={15} /> {item.review} <FaQuoteRight size={15}/></p>
              </div>
              <div className="name">
                <div className="stars">
                <FaStar style={{color:'green'}}/>
                <FaStar style={{color:'green'}}/>
                <FaStar style={{color:'green'}}/>
                <FaStar style={{color:'green'}}/>
                <FaStar style={{color:'green'}}/>
              </div>
                <h3>{item.name}</h3><span>{item.area}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;