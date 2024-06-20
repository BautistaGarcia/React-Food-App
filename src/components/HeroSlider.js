import React, { useState } from 'react';

import '../styles/HeroSlider.css'
import logo from "../logo.svg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { image: 'imagen1.jpg', alt: 'Imagen 1' },
    { image: 'imagen2.jpg', alt: 'Imagen 2' },
    { image: 'imagen3.jpg', alt: 'Imagen 3' },
  ];

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide - 1);
    if (currentSlide < 0) {
      setCurrentSlide(slides.length - 1);
    }
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide + 1);
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
      <div className="nav">
        <button className="prev" onClick={handlePrevClick}>
          ‹
        </button>
        <button className="next" onClick={handleNextClick}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Slider;