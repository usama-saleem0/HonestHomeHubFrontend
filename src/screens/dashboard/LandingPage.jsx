// import Footer from "../../component/footer/Footer";
// import Landing_second_section from "../../component/grid/landing_second_section";
// import LandingPageHeader from "../../component/header/LandingPageHeader";
// import HeroSection from "../../hero/HeroSection";
// import { main_color } from "../../utils/color";
// import "./main.css";
// import { Grid, Stack } from "@mui/material";
// import image1 from "../../assets/Frame 59.png";
// import image2 from "../../assets/Frame 60.png";
// import image3 from "../../assets/Frame 61.png";
// import image4 from "../../assets/Frame 63.png";
// import image5 from "../../assets/Frame 64.png";
// import image6 from "../../assets/Frame 65.png";
// import LandingThirdh from "../../component/grid/landing_third_section_h";
// import Footerh from "../../component/footer/Footerhamza";
// import Getapphamza from "./Section5hamza";
// import Faqhamza from "./Homefaqh";
// import Carouselhome from "./Homecarousel";
// import Homeprocessh from "./Homeprocess";
// import Bannerh from "./dashboardScreens/mobileBanner/Bannerh";
// import CompletedJobs from "./Completed Jobs";
// import { useState, useEffect } from "react";
// const LandingPage = () => {
//   //   useEffect(() => {
//   //     // Add the script dynamically
//   //     const script1 = document.createElement('script');
//   //     script1.async = true;
//   //     script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16615065963';
//   //     document.head.appendChild(script1);

//   //     const script2 = document.createElement('script');
//   //     script2.innerHTML = `
//   //       window.dataLayer = window.dataLayer || [];
//   // function gtag(){dataLayer.push(arguments);}
//   // gtag('js', new Date());

//   // gtag('config', 'AW-16615065963');

//   //     `;
//   //     document.head.appendChild(script2);

//   //     // Cleanup the script when the component unmounts
//   //     return () => {
//   //       document.head.removeChild(script1);
//   //       document.head.removeChild(script2);
//   //     };
//   //   }, []);
//   return (
     
//     <>
//       <Bannerh />
//       <LandingPageHeader />
//       <HeroSection />
//       <CompletedJobs />
//       <Homeprocessh />
//       <Carouselhome />
//       <Faqhamza />
//       <Getapphamza />
//       <Footerh />
//     </>

     
//   );
// };

// export default LandingPage;


import React, { Suspense } from "react";
import Mobilside from "./Mobilsid";

// Lazy load non-critical components
const LandingPageHeader = React.lazy(() => import("../../component/header/LandingPageHeader"));
const HeroSection = React.lazy(() => import("../../hero/HeroSection"));
const CompletedJobs = React.lazy(() => import("./Completed Jobs"));
const Homeprocessh = React.lazy(() => import("./Homeprocess"));
const Carouselhome = React.lazy(() => import("./Homecarousel"));
const Faqhamza = React.lazy(() => import("./Homefaqh"));
const Getapphamza = React.lazy(() => import("./Section5hamza"));
const Footerh = React.lazy(() => import("../../component/footer/Footerhamza"));

const Bannerh = React.lazy(() => import("./dashboardScreens/mobileBanner/Bannerh"));

const LandingPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Bannerh />
      <LandingPageHeader />


      <HeroSection />

      <Mobilside/>
      <CompletedJobs />
      <Homeprocessh />
      <Carouselhome />
      <Faqhamza />
      <Getapphamza />
      <Footerh />
    </Suspense>
  );
};

export default React.memo(LandingPage);

