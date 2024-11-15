import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../auth.css";
import { Container, Stack } from "@mui/material";
import { useEffect } from "react";
import { user_color } from "../../../utils/color";
import TabLoginVendor from "../../TabsScreens/Login/TabLoginVendor";
import TabLoginCustomer from "../../TabsScreens/SignUp/TabLoginCustomer";
import TabLoginExpert from "../../TabsScreens/Expert/TabLoginExpert";
import { setIndexValue } from "../../../store/slice/AuthSlice";
import { useDispatch } from "react-redux";
import logo from "../../../assets/new/logo1.png";
import slider1 from "../../../assets/new/Rectangle 19.png";
import slider2 from "../../../assets/new/Rectangle 20.png";
import slider3 from "../../../assets/new/Rectangle 21.png";
// import slider4
import p1 from "../../../assets/new/Ellipse 11.png";
import p2 from "../../../assets/new/Ellipse 11.png";
import p3 from "../../../assets/new/Ellipse 13.png";
import p4 from "../../../assets/new/Ellipse 13.png";
import customerImg from "../../../assets/dylan_customer.jpg";
import vendorImg from "../../../assets/dylan_vendor.jpg";
import expertImg from "../../../assets/dylan_expert.jpg";
const MainSection = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [setIndex, setSetIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState("Customer");
  const tabsBtn = [
    {
      TabName: "Customer",
      Value: "Customer",
    },
    {
      TabName: "Vendor",
      Value: "Vendor",
    },
    // {
    //   TabName: "Expert",
    //   Value: "Expert",
    // },
  ];
  useEffect(() => {
    if (setIndex === null) {
      setSetIndex(0);
    }
  }, []);

  const handleToggle = (e, i) => {
    dispatch(setIndexValue(e.Value));
    setCurrentIndex(e.Value);
    setSetIndex(i);
    console.log(e.Value, i);
    // setIsLogin((prevIsLogin) => !prevIsLogin);
  };
  console.log("currentIndex", currentIndex);
  useEffect(() => {
    dispatch(setIndexValue("Customer"));
  }, []);

  useEffect(() => {
    if (location.state && location.state.loginType) {
      const loginType = location.state.loginType;
      setCurrentIndex(loginType);
      const index = tabsBtn.findIndex((tab) => tab.Value === loginType);
      setSetIndex(index);
      dispatch(setIndexValue(loginType));
    } else {
      dispatch(setIndexValue("Customer"));
    }
  }, [location.state]);
  return (
    <Stack className="main_container">
      <Stack
        className="my-code"
        style={{
          width: "100%",
          maxWidth: "100%",
          minWidth: "100%",
          minHeight: "100vh",
        }}
      >
        <Stack
          sx={{
            borderRadius: "20px",
          }}
          className="blur-container-signup"
        >
          <div className="form-container-1">
            <img
              src={logo}
              style={{
                width: "65%",
                height: "auto",
                borderRadius: "20px 20px 0 0",
              }}
            />
            <div className="logo-container-1 logo-container-1-alt">Sign In</div>
            <div className="from-btn-1 main--section--btns--h">
              {tabsBtn.map((e, i) => {
                return (
                  <button
                    style={{
                      backgroundColor:
                        i === setIndex ? user_color : "transparent",
                      color: i === setIndex ? "white" : user_color,
                    }}
                    onClick={() => handleToggle(e, i)}
                    className="from-0"
                  >
                    {e.TabName}
                  </button>
                );
              })}
            </div>
            {currentIndex === "Vendor" ? (
              <TabLoginVendor />
            ) : currentIndex === "Customer" ? (
              <TabLoginCustomer />
            ) : currentIndex === "Expert" ? (
              <TabLoginExpert />
            ) : null}
          </div>
        </Stack>
        <Stack className="popup-salider">
          <div class="loging-salider">
            <div
              id="carouselExampleIndicators"
              class="carousel slide carousel-fade"
              data-ride="carousel"
              data-interval="3000"
            >
              {/* <div>
                <ol class="carousel-indicators">
                  <img
                    src={p1}
                    alt=""
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  />
                  <img
                    src={p2}
                    alt=""
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  />
                  <img
                    src={p3}
                    alt=""
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  />
                  <img
                    src={p4}
                    alt=""
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  />
                </ol>
              </div> */}
              <div className="carousel-inner">
                <div
                  className={`carousel-item carousel--item--h ${
                    currentIndex === "Customer" ? "active" : ""
                  }`}
                >
                  <img
                    className="d-block w-100"
                    // src={customerImg}
                    src={'https://res.cloudinary.com/dcixxwgst/image/upload/v1725045931/1725045930786-dylan_customer%20%281%29.jpg'}
                    alt="First slide"
                  />
                </div>
                <div
                  className={`carousel-item ${
                    currentIndex === "Vendor" ? "active" : ""
                  }`}
                >
                  <img
                    className="d-block w-100"
                    // src={vendorImg}
                    src={'https://res.cloudinary.com/dcixxwgst/image/upload/v1725045946/1725045945578-dylan_vendor%20%281%29.jpg'}
                    alt="Second slide"
                  />
                </div>
                <div
                  className={`carousel-item ${
                    currentIndex === "Expert" ? "active" : ""
                  }`}
                >
                  <img
                    className="d-block w-100"
                    src={expertImg}
                    alt="Third slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={slider2}
                    alt="fourth slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainSection;
