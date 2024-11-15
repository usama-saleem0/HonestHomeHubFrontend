import React from "react";

const BannerButtonh = (props) => {
  return (
    <a className={`banner--btn--h ${props.bannerBtnClass}`} href={props.appUrl}>
      {props.btnText}
    </a>
  );
};

export default BannerButtonh;
