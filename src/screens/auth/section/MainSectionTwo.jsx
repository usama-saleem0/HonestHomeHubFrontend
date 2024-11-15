import React, { useState } from "react";
import "../auth.css";
import { Container, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIndexValue } from "../../../store/slice/AuthSlice";
import TabSignUpVendor from "../../TabsScreens/Login/TabSignUpVendor";
import TabSignUpCustomer from "../../TabsScreens/SignUp/TabSignUpCustomer";
import TabSignUpExpert from "../../TabsScreens/Expert/TabSignUpExpert";
import { user_color } from "../../../utils/color";
// import logo from '../../../assets/honestlogo2.png'
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
import { useLocation } from "react-router-dom";
const MainSectiontwo = () => {
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
  };
  console.log("currentIndex", currentIndex);
  useEffect(() => {
    dispatch(setIndexValue("Customer"));
  }, []);

  useEffect(() => {
    if (setIndex === null) {
      setSetIndex(0);
    }

    if (location.state && location.state.signUpType) {
      const signUpType = location.state.signUpType;
      setCurrentIndex(signUpType);
      const index = tabsBtn.findIndex((tab) => tab.Value === signUpType);
      setSetIndex(index);
      dispatch(setIndexValue(signUpType));
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
            <div className="logo-container-1 logo-container-1-alt">Sign Up</div>
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
            {
              currentIndex === "Vendor" ? (
                <TabSignUpVendor />
              ) : currentIndex === "Customer" ? (
                <TabSignUpCustomer />
              ) : currentIndex === "Expert" ? (
                <TabSignUpExpert />
              ) : null

              // currentIndex === "Customer" ? <TabSignUpVendor /> : currentIndex === "Vendor" ? <TabSignUpCustomer /> : currentIndex === "Expert" ? <TabSignUpExpert /> : null
            }
            {/* <form className="form-1">
                            <div className="form-group-1">
                                <input type="text" id="Name" name="name" placeholder="Name" required="" />
                                <input type="email" id="email" name="email" placeholder="Enter your email" required="" />
                            </div>
                            <div className="form-group-1">
                                <input type="Password" id="Password" name="Password" placeholder="Password" required="" />
                                <input type="Password" id="Password-c" name="Password" placeholder="Confirm Password" required="" />
                            </div>
                            <div className="form-group-1">
                                <input type="text" id="Address" name="Address" placeholder="Address" required="" />
                                <input type="text" id="Zip Code" name="Zip Code" placeholder="Zip Code" required="" />
                            </div>
                            <div className='form-chek-box'>
                                <h2>Select Your Service You Wanna Provide</h2>
                                <div className='cheak-boxs'>
                                    <div className='cheak-boxs-box'>
                                        <label class="containerz">
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <p>Heating, Ventilation & Air Conditioning</p>
                                    </div>
                                    <div className='cheak-boxs-box'>
                                        <label class="containerz">
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <p>Water Heater</p>
                                    </div>
                                    <div className='cheak-boxs-box'>
                                        <label class="containerz">
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <p>Roofing</p>
                                    </div>
                                    <div className='cheak-boxs-box'>
                                        <label class="containerz">
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <p>Plumbing</p>
                                    </div>
                                    <div className='cheak-boxs-box'>
                                        <label class="containerz">
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <p>Remodeling</p>
                                    </div>
                                </div>
                            </div>
                            <div className='cheak-boxs-box'>
                                <label class="containerz">
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                </label>
                                <p className="signup-link-1">
                                    Agree With
                                    <a href="#" className="signup-link link-1">Terms & Conditions </a>
                                </p>
                            </div>
                            <div className='btn-singup'>
                                <button className="form-submit-btn" type="submit"> Sign up </button>
                            </div>
                        </form> */}
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
export default MainSectiontwo;
