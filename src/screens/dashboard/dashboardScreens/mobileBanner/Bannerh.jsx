import React, { useState } from "react";
import BannerButtonh from "./BannerButtonh";
import logo from "../../../../assets/2222.png";
const Bannerh = () => {
  const [close, setClose] = useState(true);
  const toggle = () => {
    setClose(!close);
  };
  return (
    <section className="mobile--banner--h">
      {close && (
        <>
          <div
            onClick={toggle}
            className="banner--close--btn--h"
            style={{ color: "gray", fontSize: "10px" }}
          >
            X
          </div>
          <div className="mobile--banner--cont--h">
            <div className="mobile--banner--title--img--h">
              <div className="mobile--banner--img--h">
                <img src={logo} alt="" />
              </div>
              <div className="mobile--banner--title--h">
                <h1>HonestHome</h1>
                <p>Get our app</p>
              </div>
            </div>
            <div className="mobile--banner--buttons">
              <BannerButtonh
                btnText="Playstore"
                appUrl="google.com"
                bannerBtnClass=""
              />
              <BannerButtonh
                btnText="Appstore"
                appUrl="google.com"
                bannerBtnClass=""
              />
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Bannerh;
