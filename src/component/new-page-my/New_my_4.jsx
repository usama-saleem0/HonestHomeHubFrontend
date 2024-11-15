import React, { useEffect, useState } from 'react';
import "../footer/index.css";
import Footerh from "../footer/Footerhamza";
import Cleaning1 from "../../../src/assets/ahtiimg/Cleaner1.jpg";
import Cleaning2 from "../../../src/assets/ahtiimg/Cleaner2.jpg";
import Cleaning3 from "../../../src/assets/ahtiimg/Cleaner3.jpg";
import Cleaning4 from "../../../src/assets/ahtiimg/Cleaner4.jpg";
import Cleaning5 from "../../../src/assets/ahtiimg/Cleaner5.jpg";
import Cleaning6 from "../../../src/assets/ahtiimg/Cleaner6.jpg";
import LandingPageHeader from '../header/LandingPageHeader';
const Newmy4 = () => {
  const images = [
    { id: 1, src: Cleaning1 },
    { id: 2, src: Cleaning2 },
    { id: 3, src: Cleaning3 },
    { id: 4, src: Cleaning4 },
    { id: 5, src: Cleaning5 },
    { id: 6, src: Cleaning6 },
    { id: 7, src: Cleaning1 },
    { id: 8, src: Cleaning2 },
  
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
              <h2>Our Cleaning Services</h2>
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
                  <h2>Residential Cleaning</h2>
                  <ul>
                    <li>Comprehensive home cleaning services for all rooms.</li>
                    <li>Cleaning floors, windows, and hard-to-reach areas.</li>
                    <li>Regular, deep, or move-in/move-out cleaning options.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Commercial Cleaning</h2>
                  <ul>
                    <li>Cleaning offices, retail spaces, and other commercial properties.</li>
                    <li>Customized cleaning schedules based on business needs.</li>
                    <li>Janitorial services including trash removal and sanitization.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Carpet & Upholstery Cleaning</h2>
                  <ul>
                    <li>Deep cleaning of carpets and rugs to remove dirt and stains.</li>
                    <li>Upholstery cleaning to refresh sofas, chairs, and more.</li>
                    <li>Special treatments for delicate fabrics.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Window Cleaning</h2>
                  <ul>
                    <li>Interior and exterior window cleaning services.</li>
                    <li>Cleaning window frames, sills, and tracks.</li>
                    <li>Streak-free results for all types of windows.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Specialized Cleaning Services</h2>
                  <ul>
                    <li>Post-construction or renovation cleanup.</li>
                    <li>Cleaning for events or special occasions.</li>
                    <li>Sanitization and disinfection services.</li>
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

export default Newmy4;
