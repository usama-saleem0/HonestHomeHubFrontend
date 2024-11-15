import { Container, Grid, Stack, colors, linkClasses } from "@mui/material";
import React, { useRef, useState } from "react";
import "./hero.css";
import person_img from "../assets/dylannew.png";
import firstBannerImg from "../assets/girl-think-img.png";
// import Homeimg from "../assets/home-dylan.png";
import heroimg from "../assets/heroimg.png";

import Homeimg from "../assets/dylan_real.png";
import reviewer from "../assets/reviewer.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import coupon from "../assets/coupon-img.png";
import Video_Dylan from "../component/CreatePostCard/Video_Component";
import VideoPlay_button from "../Video/VideoPlay";
import Mobile_Popup from "../component/CreatePostCard/Mobile_Popup";

import dylanreal_aviv from "../../src/assets/WEBIMAGES/dylan_real.avif";

import dylanreal_webp from "../../src/assets/WEBIMAGES/dylan_real.webp";
import { Android } from "@mui/icons-material";


import appstor from "../assets/home-app-store.png";
import Androids  from "../assets/home-google-play.png";

const HeroSection = () => {
  const navigation = useNavigate();

  const NavigateSignUp = () => {
    navigation("/signup/customersignup");
  };

  const [listDrop, setListDrop] = useState(false);
  const [showvideo, setshowvideo] = useState(false);

  const [mobile_pop, setmobile_pop] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [selectedOption, setSelectedOption] = useState("How can we help");

  const handleVideo = (p) => {
    console.log(p, "videoooo");
    setshowvideo(false);
  };

  const dropdownRef = useRef(null);

  const handle_Mobile_Popup = (p) => {
    console.log(p, "videoooo");
    setmobile_pop(false);
  };

  const handle_check_device_screen = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      setmobile_pop(true); // Trigger the function for small screens
    } else {
      NavigateSignUp(); // Trigger the function for larger screens
    }
  };

  const options = [
    
    "Hire a Handyman",
    "Hire a Plumber",

    "Hire a Cleaner",
    "Hire a Home Remodeler",
    "Hire a Landscaper",
    "Hire a Fencing Professional",
    "Hire a Roofer",
    "Hire a Water Heater Professional",
  ];

  const handleOptionClick2 = (option) => {
    switch (option) {
      case "Hire a Handyman":
        navigation('/Newmy2');
    console.log("Hire a Handyman")

        break;
      case "Hire a Plumber":

        break;
      case "Hire a Cleaner":
 
        break;
      case "Hire a Home Remodeler":
      
        break;
      case "Hire a Landscaper":
   
        break;
      case "Hire a Fencing Professional":
        
        break;
      case "Hire a Roofer":
        break;
      case "Hire a Water Heater Professional":
        // navigation('/Newmy8');
        break;
      default:
        break;
    }};

  // const toggleListDrop = () => {
  //   setListDrop((prevDrop) => !prevDrop);

  //   if (!listDrop) {
  //     document.querySelector('.home--select--drop--ul--h').scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start'
  //     })
  //   }
  // };

  const toggleListDrop = () => {
    setListDrop(!listDrop);

    if (!listDrop) {
      setTimeout(() => {
        if (dropdownRef.current) {
          dropdownRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 0); // Ensure the dropdown is rendered before scrolling
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setListDrop(false);
    handleOptionClick2(option);
  };

  const handleSearch = () => {
    NavigateSignUp();
    // Add your search logic here
  };

  const handleClick = () => {
    console.log("TSTSTTS");
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "conversion", {
        send_to: "AW-16615065963/NYJYCLnysMwZEOuS1_I9",
        value: 1.0,
        currency: "USD",
      });
    } else {
      console.error("gtag is not defined");
    }
  };

  return (
    <section className="home-first-banner home-first-banner-position-alt-h">
      <div className="main_container main-container-alt-h main-container-alt-width-h">
        <div className="first-banner-flex">
          <div className="first-banner-starthalf first-banner-starthalf-alt-h">
            <div className="first-banner-img first-banner-img-alt-h    popts">
              {/* <img className="alt-img-home-h    " src={Homeimg} alt="img"  /> */}

              {/* <img className="alt-img-home-h    " src={'https://res.cloudinary.com/dcixxwgst/image/upload/v1725043938/1725043937299-dylan_real.png'}
               alt="Description of the image" 
  loading="lazy"   /> */}

              <picture className="alt-img-home-h">
                {/* AVIF format as the first option */}
                <source srcSet={dylanreal_aviv} type="image/avif" />
                {/* WebP format as the second option */}
                <source srcSet={dylanreal_webp} type="image/webp" />
                {/* Fallback to JPEG or PNG format if needed */}
                <img src={heroimg} alt="Description of the image" />
              </picture>

              <div
                className="video_pop_button"
                onClick={() => setshowvideo(true)}
              >
                <VideoPlay_button />
              </div>
              {/* <video controls>
                <source
                  src={require("../assets/video/dylan.mp4")}
                  type="video/mp4"
                />
              </video> */}
              {showvideo && <Video_Dylan setopen={handleVideo} />}

              {mobile_pop && <Mobile_Popup setopen={handle_Mobile_Popup} />}
            </div>
          </div>
          <div className="first-banner-txt">
            <h5 className="post_sen_ts hsh">
              {/* How Home Se<span>r</span>vices */}
              Save Time on Your Home Services

            </h5>
            <h5 className="post_sen_ts weight-font" style={{ color: "#0874B7" }}>
              {/* How Home Se<span>r</span>vices */}
              Trustworthy Home Service Professionals

            </h5>
            {/* <h5 className="hamza12">Get T<span className="tts">h</span>ree Quotes</h5> */}

            {/* <h5 className="hamza12">Pay on Platform to Avoid Scams </h5> */}

            <h5 className="hamza22">
            $25 Off Your First Service
            </h5>

            {/* <h5 className="hamza22">
            Pay on Platform to Avoid Scams 
            </h5> */}
            {/* <h5>Should Be</h5> */}
            {/* <p className="hamza-shanto">
              Earn rewards with every service, <br />
              Redeemable across all our offerings. <br />
              Get more value and convenience for all your home service needs!
            </p> */}

            {/* <p className="hamza-shanto">
            Pay on Platform to, <br /> Avoid Scams under , <br />Get 3 Quotes
            </p> */}

            {/* <p className="hero--sec--info--ven--cus--h">
              If you are a Customer then Download our App <br />
              If you are a Home Pro Register as a Home Pro
            </p> */}
            <div className="home--search--zip--h">
              <div className="home--select--h">
                <div
                  onClick={toggleListDrop}
                  className="home--select--text--drop--cont--h"
                >
                  {selectedOption}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="12"
                    viewBox="0 0 21 12"
                    fill="none"
                  >
                    <path
                      d="M10.5891 8.40033C10.7184 8.24649 10.8155 8.1114 10.9316 7.99602C13.4175 5.52041 15.9063 3.04668 18.3941 0.572009C18.8205 0.147994 19.3253 -0.00866575 19.9102 0.16019C20.48 0.324355 20.8338 0.710846 20.9612 1.2812C21.0829 1.82623 20.914 2.29527 20.5187 2.68833C19.5696 3.63111 18.6215 4.57482 17.6724 5.51853C15.7082 7.47163 13.7449 9.42472 11.7807 11.3769C10.9457 12.2071 10.1287 12.2071 9.29661 11.3806C6.37576 8.47538 3.45396 5.572 0.534045 2.66582C-0.264095 1.87126 -0.151827 0.704279 0.765185 0.192085C1.37181 -0.146564 2.09448 -0.033994 2.63695 0.502591C3.8134 1.66675 4.98325 2.83655 6.15594 4.00353C7.53523 5.37876 8.91452 6.75399 10.2957 8.12829C10.3693 8.20146 10.4476 8.26994 10.5891 8.40033Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <AnimatePresence>
                  {listDrop && (
                    <motion.ul
                      ref={dropdownRef}
                      initial={{ opacity: 0, y: -40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.4 }}
                      className="home--select--drop--ul--h"
                    >
                      {options.map((option, index) => (
                        <li
                          key={index}
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
                width={20}
                height={20}
                color="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <div className="zip--search--cont--h">
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="home--input--search--alt--h"
                />
                <button
                  onClick={() => handle_check_device_screen()}
                  className="home--search--icon--h"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width={25}
                    height={25}
                  >
                    <path
                      color="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="google-box-in-box">
            <a
              style={{ textDecoration: "none" }}
              href="https://apps.apple.com/us/app/honest-home-hub/id6504685713"
              target="_blank"
              id="ios-store"
            >
              <button
                className="theme_btn theme_btn-alt-2"
                onClick={handleClick}
              >
                <img src={appstor} alt="" />
              </button>
            </a>

            <a
              style={{ textDecoration: "none" }}
              href="https://play.google.com/store/apps/details?id=com.honesthomehubcustomer&pcampaignid=web_share"
              target="_blank"
              id="play-store"
            >
              <button
                className="theme_btn theme_btn-alt-2"
                style={{ marginTop: "10px" }}
                onClick={handleClick}
              >
               <img src={Androids} alt="" />
              </button>
            </a>
            </div>
           
            <div className="testimonial-review-h">
              <div className="dylan--coupon--cont--h">
                <img src={coupon} alt="coupon" loading="lazy" />
              </div>
              <div className="testimonial-img-text-h">
                <div className="testimonial-img-cont-h">
                  <img src={reviewer} alt="revieew" loading="lazy" />
                </div>
                <h4>Larry</h4>
                <p>Dallas, Texas</p>
              </div>
              <h3>
                “Home projects were a hassle until I used Honest Home Hub.
                Described my project, got a qualified contractor with a lower
                bid, and the job was done in one day. Highly recommend!”
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
