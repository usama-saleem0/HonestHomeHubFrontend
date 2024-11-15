import React, { useEffect, useState } from 'react';
import "../footer/index.css";
import Footerh from "../footer/Footerhamza";
import Handyman1 from "../../../src/assets/ahtiimg/Handyman1.jpg";
import Handyman2 from "../../../src/assets/ahtiimg/Handyman2.jpg";
import Handyman3 from "../../../src/assets/ahtiimg/Handyman3.jpg";
import Handyman4 from "../../../src/assets/ahtiimg/Handyman4.jpg";
import Handyman5 from "../../../src/assets/ahtiimg/Handyman5.jpg";
import Handyman6 from "../../../src/assets/ahtiimg/Handyman6.jpg";
import LandingPageHeader from '../header/LandingPageHeader';
const Newmy2= () => {
  const images = [
    { id: 1, src: Handyman1 },
    { id: 2, src: Handyman2 },
    { id: 3, src: Handyman3 },
    { id: 4, src: Handyman4 },
    { id: 5, src: Handyman5 },
    { id: 6, src: Handyman6 },
    { id: 7, src: Handyman1 },
    { id: 8, src: Handyman2 },
  
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
              <h2>Our Handyman Services</h2>
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
                  <h2>Home Repairs & Maintenance</h2>
                  <ul>
                    <li>Fixing plumbing leaks, door repairs, and electrical issues.</li>
                    <li>Regular maintenance for household appliances and systems.</li>
                    <li>Small repairs that improve the safety and comfort of your home.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Furniture Assembly</h2>
                  <ul>
                    <li>Assembly of new furniture pieces, including beds, sofas, and tables.</li>
                    <li>Disassembly and reassembly services for moving or storage.</li>
                    <li>Ensuring proper setup and safety of furniture items.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Painting & Drywall Repair</h2>
                  <ul>
                    <li>Interior and exterior painting for home or office.</li>
                    <li>Fixing cracks, holes, or other damages to drywall.</li>
                    <li>Touch-up painting services to freshen up your space.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Electrical & Plumbing Services</h2>
                  <ul>
                    <li>Light fixture installations and ceiling fan repairs.</li>
                    <li>Minor plumbing repairs such as faucet leaks or toilet fixes.</li>
                    <li>Electrical outlet installation or replacement.</li>
                  </ul>
                </div>

                <div className="my-new-page-ul-box">
                  <h2>Carpentry Services</h2>
                  <ul>
                    <li>Custom shelving and cabinet installations.</li>
                    <li>Woodworking projects for home improvements.</li>
                    <li>Repairing and refinishing wood surfaces or furniture.</li>
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

export default Newmy2;
