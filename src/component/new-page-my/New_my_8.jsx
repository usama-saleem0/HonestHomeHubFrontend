import React, { useEffect, useState } from 'react';
import "../footer/index.css";
import Footerh from "../footer/Footerhamza";
import Heater1 from "../../../src/assets/ahtiimg/Heater1.jpg";
import Heater2 from "../../../src/assets/ahtiimg/Heater2.jpg";
import Heater3 from "../../../src/assets/ahtiimg/Heater3.jpg";
import LandingPageHeader from '../header/LandingPageHeader';

const Newmy8 = () => {
  const images = [
    { id: 1, src: Heater1 },
    { id: 2, src: Heater2 },
    { id: 3, src: Heater3 },
    { id: 4, src: Heater1 },
    { id: 5, src: Heater2 },
    { id: 6, src: Heater3 },
    { id: 7, src: Heater1 },
    { id: 8, src: Heater2 },
 
  ];

// State to manage the main image being shown
const [featuredImage, setFeaturedImage] = useState(images[0].src);
const [currentIndex, setCurrentIndex] = useState(0);
const [isFading, setIsFading] = useState(false); // To handle fade effect

// Function to handle thumbnail clicks
const handleThumbnailClick = (src, index) => {
  setIsFading(true); // Start fading before changing image
  setTimeout(() => {
    setFeaturedImage(src);
    setCurrentIndex(index);
    setIsFading(false); // Reset fading after image change
  }, 500); // Delay for fade-out transition (same as CSS duration)
};

// Auto-slide function using setInterval
useEffect(() => {
  const interval = setInterval(() => {
    setIsFading(true); // Start fading before changing image
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length; // Loop back to the first image
      setFeaturedImage(images[nextIndex].src);
      setCurrentIndex(nextIndex);
      setIsFading(false); // Reset fading after image change
    }, 200); // Delay for fade-out transition
  }, 2000); // Change every 3 seconds

  return () => clearInterval(interval); // Cleanup interval on component unmount
}, [currentIndex, images]);

  return (
    <>

    <LandingPageHeader/>
      <div className="new-my-page-sec">
        <div className="ahti-container">
          <div className="main-my-new-page">
            <div className="my-new-page-head">
              <h2>Our Water Heater Professional Services</h2>
              <button>Contact Us</button>
            </div>

            <div className="my-new-page-body">
            <div className="my-new-page-slider">
      <div className="slider">
        {/* Main Image */}
        <div className={`main-image ${isFading ? "fade" : ""}`}>
          <img src={featuredImage} alt="Featured" />
        </div>

        {/* Thumbnails */}
        <div className="thumbnails">
          {images.map((image, index) => (
            <img
              key={image.id}
              className={`thumbnail ${featuredImage === image.src ? "active" : ""}`}
              src={image.src}
              alt={`Thumbnail ${image.id}`}
              onClick={() => handleThumbnailClick(image.src, index)}
            />
          ))}
        </div>
      </div>
    </div>

              <div className="my-new-page-ul-main-box">
                <div className="my-new-page-ul-box">
                  <h2>Water Heater Installation</h2>
                  <ul>
                    <li>Professional installation of tankless and traditional water heaters.</li>
                    <li>Expert guidance on selecting the right water heater for your needs.</li>
                    <li>Compliance with local codes and regulations during installation.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Water Heater Repair</h2>
                  <ul>
                    <li>Diagnosis and repair of all types of water heater issues.</li>
                    <li>Fast response times for emergency water heater repairs.</li>
                    <li>Replacement of faulty components for efficient performance.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Maintenance Services</h2>
                  <ul>
                    <li>Regular maintenance to extend the life of your water heater.</li>
                    <li>Flushing and sediment removal to improve efficiency.</li>
                    <li>Safety inspections to ensure proper functioning and safety.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Energy Efficiency Upgrades</h2>
                  <ul>
                    <li>Upgrading to energy-efficient models to save on utility bills.</li>
                    <li>Insulation of hot water pipes to reduce heat loss.</li>
                    <li>Smart thermostats and controls for optimal performance.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Emergency Services</h2>
                  <ul>
                    <li>24/7 emergency water heater services for urgent issues.</li>
                    <li>Prompt response to prevent water damage and restore hot water.</li>
                    <li>Comprehensive solutions to get your water heater back in working order.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footerh />
    </>
  );
};

export default Newmy8;
