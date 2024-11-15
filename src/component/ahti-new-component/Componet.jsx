import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thamup from "../../assets/thamup.png";
const Componet = () => {
  return (
    <>
    <div className="Componet-thankyou">
      <div className="main-Componet-tnak-you">
        <div className="thankyou-box">
          <img src={thamup} alt="" />

          <h2>Thank you for using <br/> <span>Honest Home Hub</span></h2>
          <p>We hope you’re satisfied with the service!</p>
        </div>
      </div>
    </div>
    </>
  );
};
export default Componet;
