import React, { useEffect, useState } from 'react';
import "../footer/index.css";
import Footerh from "../footer/Footerhamza";
import Plumbing1 from "../../../src/assets/ahtiimg/Plumber1.jpg";
import Plumbing2 from "../../../src/assets/ahtiimg/Plumber2.jpg";
import Plumbing3 from "../../../src/assets/ahtiimg/Plumber3.jpg";
import Plumbing4 from "../../../src/assets/ahtiimg/Plumber4.jpg";
import Plumbing5 from "../../../src/assets/ahtiimg/Plumber5.jpg";
import Plumbing6 from "../../../src/assets/ahtiimg/Plumber6.jpg";
import LandingPageHeader from '../header/LandingPageHeader';
const Newmy3= () => {
  const images = [
    { id: 1, src: Plumbing1 },
    { id: 2, src: Plumbing2 },
    { id: 3, src: Plumbing3 },
    { id: 4, src: Plumbing4 },
    { id: 5, src: Plumbing5 },
    { id: 6, src: Plumbing6 },
    { id: 7, src: Plumbing1 },
    { id: 8, src: Plumbing2 },

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
              <h2>Our Plumbing Services</h2>
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
                  <h2>Pipe Repairs & Installation</h2>
                  <ul>
                    <li>Fixing leaking or damaged pipes in residential or commercial spaces.</li>
                    <li>Installation of new piping systems and replacements for old pipes.</li>
                    <li>Emergency repairs to prevent water damage.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Drain Cleaning & Unclogging</h2>
                  <ul>
                    <li>Clearing clogged drains, sinks, and toilets.</li>
                    <li>Drain and sewer cleaning to ensure proper flow.</li>
                    <li>Preventative maintenance for long-term drain health.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Water Heater Services</h2>
                  <ul>
                    <li>Installation of new water heaters and tankless systems.</li>
                    <li>Repairs for existing water heaters, including thermostat or element replacement.</li>
                    <li>Routine maintenance to extend the life of your water heater.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Leak Detection & Repair</h2>
                  <ul>
                    <li>Finding hidden leaks in walls, floors, or ceilings.</li>
                    <li>Repairs for leaking faucets, toilets, and fixtures.</li>
                    <li>Minimizing water damage and preventing mold growth.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Bathroom & Kitchen Plumbing</h2>
                  <ul>
                    <li>Faucet and sink installations and repairs.</li>
                    <li>Toilet installation, repairs, and unclogging services.</li>
                    <li>Shower and bathtub plumbing maintenance and fixes.</li>
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

export default Newmy3;
