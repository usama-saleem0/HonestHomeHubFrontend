import React, { useEffect, useState } from 'react';
import "../footer/index.css";
import Footerh from "../footer/Footerhamza";
import Professional1 from "../../../src/assets/ahtiimg/Fencing1.jpg";
import Professional2 from "../../../src/assets/ahtiimg/Fencing2.jpg";
import Professional3 from "../../../src/assets/ahtiimg/Fencing3.jpg";
import Professional4 from "../../../src/assets/ahtiimg/Fencing4.jpg";
import LandingPageHeader from '../header/LandingPageHeader';

const Newmy7 = () => {
  const images = [
    { id: 1, src: Professional1 },
    { id: 2, src: Professional2 },
    { id: 3, src: Professional3 },
    { id: 4, src: Professional4 },
    { id: 5, src: Professional1 },
    { id: 6, src: Professional2 },
    { id: 7, src: Professional3 },
    { id: 8, src: Professional4 },
  
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
              <h2>Our Fencing Professional Services</h2>
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
                  <h2>Wood Fencing</h2>
                  <ul>
                    <li>Custom wood fencing designs to suit your property style.</li>
                    <li>High-quality materials and construction for durability.</li>
                    <li>Options for staining or sealing to enhance longevity.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Vinyl Fencing</h2>
                  <ul>
                    <li>Low-maintenance vinyl fencing solutions for homes.</li>
                    <li>Various colors and styles to match your aesthetic.</li>
                    <li>Weather-resistant and long-lasting performance.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Chain Link Fencing</h2>
                  <ul>
                    <li>Cost-effective chain link fencing for security and visibility.</li>
                    <li>Galvanized and vinyl-coated options for added protection.</li>
                    <li>Perfect for residential and commercial properties.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Ornamental Fencing</h2>
                  <ul>
                    <li>Elegant ornamental fencing designs to enhance property value.</li>
                    <li>Durable materials with rust-resistant finishes.</li>
                    <li>Customized styles to fit any architectural design.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Fencing Repair & Maintenance</h2>
                  <ul>
                    <li>Repair services for all types of fencing damage.</li>
                    <li>Regular maintenance plans to extend the life of your fence.</li>
                    <li>Free estimates for repairs and upgrades.</li>
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

export default Newmy7;
