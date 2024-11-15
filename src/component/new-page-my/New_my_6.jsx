import React, { useEffect, useState } from 'react';
import "../footer/index.css";
import Footerh from "../footer/Footerhamza";
import Landscaping1 from "../../../src/assets/ahtiimg/Landscaper1.jpg";
import Landscaping2 from "../../../src/assets/ahtiimg/Landscaper2.jpg";
import Landscaping3 from "../../../src/assets/ahtiimg/Landscaper3.jpg";
import Landscaping4 from "../../../src/assets/ahtiimg/Landscaper4.jpg";
import Landscaping5 from "../../../src/assets/ahtiimg/Landscaper5.jpg";
import Landscaping6 from "../../../src/assets/ahtiimg/Landscaper6.jpg";
import LandingPageHeader from '../header/LandingPageHeader';

const Newmy6 = () => {
  const images = [
    { id: 1, src: Landscaping1 },
    { id: 2, src: Landscaping2 },
    { id: 3, src: Landscaping3 },
    { id: 4, src: Landscaping4 },
    { id: 5, src: Landscaping5 },
    { id: 7, src: Landscaping6 },
    { id: 8, src: Landscaping2 },
  
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
              <h2>Our Landscaping Services</h2>
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
                  <h2>Garden Design & Maintenance</h2>
                  <ul>
                    <li>Custom garden designs to enhance your outdoor space.</li>
                    <li>Regular garden maintenance including pruning, weeding, and watering.</li>
                    <li>Seasonal planting and lawn care for year-round beauty.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Landscape Construction</h2>
                  <ul>
                    <li>Hardscaping services including patios, walkways, and retaining walls.</li>
                    <li>Installation of water features like ponds, fountains, and waterfalls.</li>
                    <li>Decks, pergolas, and other outdoor structures for functional spaces.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Tree Care & Removal</h2>
                  <ul>
                    <li>Tree trimming, pruning, and health assessments.</li>
                    <li>Safe removal of hazardous or unwanted trees.</li>
                    <li>Stump grinding and removal for a clean finish.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Irrigation Systems</h2>
                  <ul>
                    <li>Installation and repair of irrigation and sprinkler systems.</li>
                    <li>Water-efficient solutions to keep your lawn green year-round.</li>
                    <li>Seasonal adjustments and winterization for optimal performance.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Outdoor Lighting</h2>
                  <ul>
                    <li>Design and installation of outdoor lighting for ambiance and security.</li>
                    <li>Energy-efficient LED lighting solutions for paths and gardens.</li>
                    <li>Maintenance and repair of existing outdoor lighting systems.</li>
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

export default Newmy6;
