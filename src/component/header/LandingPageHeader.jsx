import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { MdLogout } from "react-icons/md";
import logo from "../../assets/HHHLogoNoBG.7732ef7fd869a56dfe16 (1).png";
// import logo from '../../assets/image__1_-removebg-preview.png';
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setIndexValue } from "../../store/slice/AuthSlice";
import logo_new from "../../assets/logo_new.png";
import RegisterDropdown from "./component/registerDropdown";
import { AnimatePresence } from "framer-motion";

import logo_new_white from "../../assets/honesthomehubwhitefulllogo.png";
import Playstore from "../ahti_btn-box/Playstore";
import Headerdrop from "./Headerdrop";

function LandingPageHeader() {
  const outsideClick = useRef(null);

  const closeOpenMenus = (e) => {
    if (register && !outsideClick.current?.contains(e.target)) {
      setRegister(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);
  const [register, setRegister] = useState(false);
  const registerToggle = () => {
    setRegister((prevRegister) => !prevRegister);
  };
  const navigation = useNavigate();

  function signUpToggle(signUpType) {
    navigation("signup/customersignup", { state: { signUpType } });
  }

  function signUpToggle1(signUpType) {
    navigation("signup/vendorsignup", { state: { signUpType } });
  }

  const dispatch = useDispatch();
  const NavigateLogin = (loginType) => {
    navigation("/login/customerlogin", { state: { loginType } });
  };

  const NavigateLogin1 = (loginType) => {
    console.log(loginType, "TS V");
    navigation("/login/vendorlogin", { state: { loginType } });
  };
  // const NavigateSignUp = () => {
  //   navigation("/mainSectiontwo");
  // };
  const Home = () => navigation("/");


  const [isOpen, setIsOpen] = useState(false);

  const closepopup=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <Container
      maxWidth="lg"
      className="main-container honest-30 header-width-h"
    >
      {/* <div className="navbar-home-h"> */}
      <div className="ahti-container">
        <Navbar
          expand="lg"
          style={{
            backgroundColor: "transparent",
            color: "white",
            position: "relative",
            zIndex: 9,
          }}
          className=" honest-31 navbar-padding-h"
        >
          <Navbar.Brand href="" style={{}}>


            <div className="full_logo">
              {/* <img className='logo_img' width={300} height={"50%"} */}
              <img
                onClick={Home}
                className="logo_img"
                src={logo_new_white}
                alt="logo"
              />
            </div>

            <div className="navbar-logo-landing">
              {/* <img className='logo_img' width={300} height={"50%"} */}
              <img
                onClick={Home}
                className="logo_img"
                src={logo_new}
                alt="logo"
              />
            </div>



          </Navbar.Brand>

<div className="head-drop">
  <Headerdrop/>
</div>


          <Navbar.Toggle>

        
  <input type="checkbox" id="checkbox" />
  <label htmlFor="checkbox" className="toggle">
    <div className="bars" id="bar1"></div>
    <div className="bars" id="bar2"></div>
    <div className="bars" id="bar3"></div>
  </label>
</Navbar.Toggle>
        
          <Navbar.Collapse
            id="basic-navbar-nav"
            // style={{ marginRight: "20px" }}
            className="honest-32 navbar-btn-flexgrow-h"
          >
            <Nav className="test_class honest-33 nav-width-alt_h">
              <div className="navbar-links_h">
                <a
                  className="beat--my--quote--btn"
                  href="https://docs.google.com/forms/d/1buWyqIeOr8d4r38aAMVjd69k32mThDNJtGICL0-oztE/viewform?pli=1&pli=1&edit_requested=true"
                  target="_blank"
                >
                  {/* Beat My Quote Form */}
                </a>
                <a
                  href="https://onedrive.live.com/edit?id=304A540992C676BC!107&resid=304A540992C676BC!107&ithint=file%2cxlsx&nav=MTVfezI1REVCMzRCLTRDQTUtNEIwRi05QUQwLTEwNUE3RkM2N0VFMn0&authkey=!AEcacX7-2pTzmws&wdo=2&cid=304a540992c676bc"
                  target="_blank"
                >
                  {" "}
                  {/* Don’t Work With List */}
                </a>

                <a
                  onClick={() => NavigateLogin("Customer")}
                  className="navbar-dropdown-btn-alt-h   more-ahti-box-btn"
                >
                  Customer Login
                </a>



                <a 
                  onClick={() => setIsOpen(true)}
                  className="navbar-dropdown-btn-alt-h   more-ahti-box-btn-mobile"
                >
                  Customer Login
                </a>
                {/* <a
                  onClick={() => NavigateLogin1("Vendor")}
                  className="navbar-dropdown-btn-alt-h"
                >
                  Home Pro Login
                </a> */}

                <a
                  onClick={() => signUpToggle("Customer")}
                  className="navbar-dropdown-btn-alt-h  more-ahti-box-btn"
                >
                  Register Customer
                </a>


                <a
               onClick={() => setIsOpen(true)}
                  className="navbar-dropdown-btn-alt-h more-ahti-box-btn-mobile"
                >
                  Register Customer
                </a>
                <a
                  onClick={() => signUpToggle1("Vendor")}
                  className="navbar-dropdown-btn-alt-h"
                >
                  Home Pro Register
                </a>
              </div>
              <div className="header-btn honest-34 header-btn-cont-h-alt">
                <button
                  className="head-Login honest-35 header-btn-login-h-alt header--gtm--customer"
                  onClick={() => NavigateLogin("Customer")}
                >
                   Login
                </button>
                {/* <button
                  className="head-Login honest-35 header-btn-login-h-alt header--gtm--vendor"
                  onClick={() => NavigateLogin1("Vendor")}
                >
                  Home Pro Login
                </button> */}
                {/* <button
                  className="head-Login honest-35 header-btn-login-h-alt"
                  onClick={() => NavigateLogin("Expert")}
                >
                  Expert Login
                </button> */}
                {/* <button
                  className="head-Register honest-36 header-btn-reg-h-alt"
                  onClick={registerToggle}
                >
                  Sign Up
                  <AnimatePresence>
                    {register && (
                      <RegisterDropdown outsideClick={outsideClick} />
                    )}
                  </AnimatePresence>
                </button> */}

<button
                  className="head-Login honest-35 header-btn-login-h-alt header--gtm--customer"
                  onClick={() => signUpToggle("Customer")}
                >
                   Registration
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

                    {
                      isOpen && <Playstore closepopup={closepopup}/>
                    }

      </div>
    </Container>
  );
}

export default LandingPageHeader;
