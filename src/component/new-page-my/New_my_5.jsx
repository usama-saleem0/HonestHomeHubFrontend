import React, { useEffect, useState } from 'react';
import "../footer/index.css";
import Footerh from "../footer/Footerhamza";
import Remodeling1 from "../../../src/assets/ahtiimg/Remodeler1.jpg";
import Remodeling2 from "../../../src/assets/ahtiimg/Remodeler2.jpg";
import Remodeling3 from "../../../src/assets/ahtiimg/Remodeler3.jpg";
import Remodeling4 from "../../../src/assets/ahtiimg/Remodeler4.jpg";
import Remodeling5 from "../../../src/assets/ahtiimg/Remodeler5.jpg";
import Remodeling6 from "../../../src/assets/ahtiimg/Remodeler6.jpg";
import LandingPageHeader from '../header/LandingPageHeader';
const Newmy5 = () => {
  const images = [
    { id: 1, src: Remodeling1 },
    { id: 2, src: Remodeling2 },
    { id: 3, src: Remodeling3 },
    { id: 4, src: Remodeling4 },
    { id: 5, src: Remodeling5 },
    { id: 6, src: Remodeling6 },
    { id: 7, src: Remodeling1 },
    { id: 8, src: Remodeling2 },

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
              <h2>Our Home Remodeling Services</h2>
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
                  <h2>Kitchen Remodeling</h2>
                  <ul>
                    <li>Complete kitchen remodels including countertops, cabinets, and appliances.</li>
                    <li>Custom kitchen designs to fit your lifestyle and needs.</li>
                    <li>Expert installation and finishing for a modern or classic look.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Bathroom Renovations</h2>
                  <ul>
                    <li>Full bathroom remodeling including showers, tubs, and vanities.</li>
                    <li>Plumbing updates and fixture replacements for improved functionality.</li>
                    <li>Custom tile work and design for a luxurious feel.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Home Additions</h2>
                  <ul>
                    <li>Room additions to expand your living space.</li>
                    <li>Sunrooms, porches, and outdoor living spaces.</li>
                    <li>Garage conversions or basement finishing for extra rooms.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Flooring Installation</h2>
                  <ul>
                    <li>Installation of hardwood, tile, laminate, and carpet flooring.</li>
                    <li>Custom flooring designs and patterns to match your aesthetic.</li>
                    <li>Flooring repairs and refinishing for a refreshed look.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Exterior Renovations</h2>
                  <ul>
                    <li>Siding replacement, painting, and exterior trim updates.</li>
                    <li>Roofing repairs and replacements for enhanced protection.</li>
                    <li>Window and door installations for better energy efficiency.</li>
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

export default Newmy5;
