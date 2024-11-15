import React from "react";
import Slider from "react-slick";

import honestjob1 from "../../assets/honestjob1.jpeg";
import honestjob2 from "../../assets/honestjob2.jpeg";
const CompletedJobs = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
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
  const jobsData = [
    {
      src:  'https://res.cloudinary.com/dcixxwgst/image/upload/v1725044311/1725044310521-honestjob1.jpg',
      title: "Roofing in Dallas",
      text: "Reliable service with great attention to detail. Our new roof looks fantastic and is built to last. I am very pleased with the quality and efficiency.",
      name: "- Larry",
    },
    {
      src: 'https://res.cloudinary.com/dcixxwgst/image/upload/v1725044310/1725044310153-honestjob2.jpg',
      title: "Cleaning in New York",
      text: "Spotless results! The team was efficient, friendly, and thorough. My house looks brand new, and I couldn't be happier with the service. Highly recommended!",
      name: "- Laura",
    },
  ];
  return (
    <section className="main-completed--jobs-sec-h">
      <div className="main-completed--jobs-cont-h">
        <h1 className="completed--jobs--main--title">Completed Jobs</h1>
        <div className="slider-container">
          <Slider {...settings}>
            {jobsData.map((slide, index) => (
              <div className="slide slide--alt--h slide--alt--h--2" key={index}>
                <div className="complete--job--img--cont--h">
                  <img src={slide.src} alt={`Slide ${index + 1}`}  loading="lazy"/>
                </div>
                <h1 className="completed--jobs--title--h">{slide.title}</h1>
                <p className="completed--jobs--text--h">{slide.text}</p>
                <p className="completed--jobs--customer--name--h">
                  {slide.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CompletedJobs;
