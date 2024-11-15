import React from "react";
import "../../auth/auth.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login_vendor_async_service } from "../../../services/vendorService";
import { get_customer_job_byId_async_service } from "../../../services/customerService";
import { useEffect } from "react";
import { asyncStatus } from "../../../utils/async_status";
import { setVendorLoginIdle } from "../../../store/slice/vendorSlice";
import { color } from "framer-motion";
const TabLoginVendor = () => {
 
  //   useEffect(() => {
  //     // Add the script dynamically
  //     const script1 = document.createElement('script');
  //     script1.async = true;
  //     script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16615065963';
  //     document.head.appendChild(script1);
  
  //     const script2 = document.createElement('script');
  //     script2.innerHTML = `
  //       window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());

  // gtag('config', 'AW-16615065963');

  //     `;
  //     document.head.appendChild(script2);
  
  //     // Cleanup the script when the component unmounts
  //     return () => {
  //       document.head.removeChild(script1);
  //       document.head.removeChild(script2);
  //     };
  //   }, []);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [data, setData] = useState({});
  const { vendor_login_status, vendor_login_data, vendor_login_error } =
    useSelector((state) => state.vendorAuth);
  const loginHandle = () => {
    dispatch(login_vendor_async_service(data));
    dispatch(get_customer_job_byId_async_service());
    // navigation('/dashboard')
  };
  useEffect(() => {
    if (vendor_login_status === asyncStatus.SUCCEEDED) {
      navigation("/dashboard/vendor");
      dispatch(setVendorLoginIdle(setVendorLoginIdle));
    }
  }, [, vendor_login_status]);
  console.log("vendor_login_data", vendor_login_data);

  const NavigateSignUp = (signUpType) => {
    console.log(signUpType,"ppp")
    navigation("/signup/vendorsignup" ,{ state: { signUpType } });
  };
  return (
    <div>
      <div className="form-1">
        <div className="form-group-1 new">
          <input
            onChange={(e) => setData({ ...data, email: e.target.value.toLowerCase() })}
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            required=""
          />
        </div>
        <div className="form-group-1  new">
          <input
            onChange={(e) => setData({ ...data, password: e.target.value })}
            type="password"
            id="pass"
            name="password"
            placeholder="Enter your Password"
            required=""
          />
        </div>
        <Link to={"/forgotpasswordv"}>
          <p className="forgotall ">Forgot Password ?</p>
        </Link>
        <div className="btn-singup  ">
          <button
            onClick={() => loginHandle()}
            className="form-submit-btn vendor--login--form--gtm"
            type="submit"
            style={{
              backgroundColor:'#002758',
              borderColor: "#002758"
            }}

          >
            Login{" "}
          </button>
        </div>
      </div>
      <p
        className="signup-link"
        style={{
          textAlign: "center",
        }}
      >
        Not a Member?
        <a  className="signup-link link" onClick={() => NavigateSignUp("Vendor")}>
          {" "}
          Signup Now{" "}
        </a>
      </p>
    </div>
  );
};
export default TabLoginVendor;
