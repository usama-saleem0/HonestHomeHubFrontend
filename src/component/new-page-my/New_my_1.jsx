import React, { useEffect, useState } from 'react';
import "../footer/index.css";
import Footerh from "../footer/Footerhamza";
import Roofer1 from "../../../src/assets/ahtiimg/Roofer1.jpg";
import Roofer2 from "../../../src/assets/ahtiimg/Roofer2.jpg";
import Roofer3 from "../../../src/assets/ahtiimg/Roofer3.jpg";
import Roofer4 from "../../../src/assets/ahtiimg/Roofer4.jpg";
import Roofer5 from "../../../src/assets/ahtiimg/Roofer5.jpg";
import Roofer6 from "../../../src/assets/ahtiimg/Roofer6.jpg";
import Slider from "react-slick";
import LandingPageHeader from '../header/LandingPageHeader';

const Newmy1 = () => {
 // Define your list of images here
 const images = [
  { id: 1, src: Roofer1 },
  { id: 2, src: Roofer2 },
  { id: 3, src: Roofer3 },
  { id: 4, src: Roofer4 },
  { id: 5, src: Roofer5 },
  { id: 6, src: Roofer6 },
  { id: 7, src: Roofer1 },
  { id: 8, src: Roofer2 },
  // Add more images as needed
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
      <h2>Our Roofing Services</h2>

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
          <h2>Roof Installation & Replacement</h2>
          <ul>
            <li>Full roof installation for new constructions.</li>
            <li>Roof replacement for old or damaged roofs using high-quality shingles, tiles, or metal.</li>
            <li>Customized solutions based on building type (residential, commercial, or industrial).</li>
          </ul>
        </div>


        <div className="my-new-page-ul-box">
          <h2>Roof Repairs & Maintenancet</h2>
          <ul>
            <li>Leak detection and repair services.</li>
            <li>Fixing cracked shingles, tiles, or flashing issues.</li>
            <li>Regular maintenance plans to extend roof lifespan and prevent future damage.</li>
          </ul>
        </div>

        
        <div className="my-new-page-ul-box">
          <h2>Emergency Roofing Services</h2>
          <ul>
            <li>24/7 availability for storm damage or leaks.</li>
            <li>Fast repairs to prevent further water damage or structural problems.</li>
  
          </ul>
        </div>


                
        <div className="my-new-page-ul-box">
          <h2>Roof Inspection & Assessment</h2>
          <ul>
            <li>Detailed inspections for damage, age-related wear, or storm impact.</li>
            <li>Certifications for home purchases, sales, or insurance claims.</li>
            <li>Drone inspections for hard-to-reach areas.</li>
  
          </ul>
        </div>

        <div className="my-new-page-ul-box">
          <h2>Types of Roofs We Service</h2>
          <ul>
            <li>Asphalt Shingles: Affordable and versatile.</li>
            <li>Metal Roofs: Durable and energy-efficient.</li>
            <li>Tile Roofs: Elegant and long-lasting.</li>
            <li>Flat Roofs: Ideal for commercial properties.</li>
            <li>Wood Shakes: Natural and aesthetic appeal.</li>

  
          </ul>
        </div>
      </div>
    </div>

  </div>

</div>

</div>



    <Footerh/>
    </>
  );
};

export default Newmy1;
