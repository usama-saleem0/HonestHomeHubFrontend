import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import each image directly
import pepsiLogo from "../../assets/thamup.png";
import cocacolaLogo from "../../assets/thamup.png";
import windowsLogo from "../../assets/thamup.png";
import pizzahutLogo from "../../assets/thamup.png";


const LogoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Adjust this based on how many logos to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    centerPadding: "0",
  };

  const logos = [
    { src: 'https://res.cloudinary.com/dcixxwgst/image/upload/v1713142553/1713142553654-logo%20on%20white.png', alt: "Pepsi" },
    { src: 'https://res.cloudinary.com/dcixxwgst/image/upload/v1724613564/1724613564789-IMG_1347.jpg', alt: "Coca Cola" },
    { src: 'https://res.cloudinary.com/dcixxwgst/image/upload/v1710215399/1710215399122-B5584D82-BB71-4274-B62B-A6D6F121B4FA.jpg', alt: "Coca Cola" },
    { src: 'https://res.cloudinary.com/dcixxwgst/image/upload/v1719154018/1719154018222-CFA9C626-82B6-4145-821C-090DF20DADAC.jpg', alt: "Coca Cola" },
    { src: 'https://res.cloudinary.com/dcixxwgst/image/upload/v1710253070/1710253070320-Screen%20Shot%202023-08-22%20at%201.jpg', alt: "Coca Cola" },
    { src: 'https://res.cloudinary.com/dcixxwgst/image/upload/v1713527841/1713527840957-IMG_8739.jpg', alt: "Coca Cola" },
    { src: 'https://res.cloudinary.com/dcixxwgst/image/upload/v1718783232/1718783232360-IMG_1440.jpg', alt: "Coca Cola" },
    { src: 'https://res.cloudinary.com/dcixxwgst/image/upload/v1714707730/1714707730331-IMG_1968.jpg', alt: "Coca Cola" },
  
 
    
    // Add more logos as needed
  ];

  return (
    <div className="slider-containerx">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="slider-itemx">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
