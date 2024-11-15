import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import slide1 from "../../../assets/slides/home-slide-1.png";
import slide2 from "../../../assets/slides/home-slide-2.png";
import slide3 from "../../../assets/slides/home-slide-3.png";
import slide4 from "../../../assets/slides/home-slide-4.png";
import slide5 from "../../../assets/slides/home-slide-5.png";
import slide6 from "../../../assets/slides/home-slide-6.png";

function MultipleItems() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2500,
          loop: true,
        },
      },
    ],
  };
  const slides = [
    {
      src: slide1,
      info: "Explore →",
      link: "/signup/customersignup",
    },
    {
      src: slide2,
      info: "Explore →",
      link: "/signup/customersignup",
    },
    {
      src: slide3,
      info: "Explore →",
      link: "/signup/customersignup",
    },
    {
      src: slide4,
      info: "Explore →",
      link: "/signup/customersignup",
    },
    {
      src: slide5,
      info: "Explore →",
      link: "/signup/customersignup",
    },
    {
      src: slide6,
      info: "Explore →",
      link: "/signup/customersignup",
    },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="slide slide--alt--h" key={index}>
            <Link to={slide.link}>
              <img src={slide.src} alt={`Slide ${index + 1}`}  loading="lazy"/>
              <div className="overlay--h">{slide.info}</div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
