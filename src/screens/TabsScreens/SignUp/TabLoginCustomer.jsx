import React from "react";
import "../../auth/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useState } from "react";
import { login_customer_async_service } from "../../../services/customerService";
import { useEffect } from "react";
import { asyncStatus } from "../../../utils/async_status";
import Google_login from "../../../Google_Auth/google_login";
import axios from "axios";
import { baseURL } from "../../../config/apiHandle/apiHandle";
const TabLoginCustomer = () => {
  // useEffect(() => {
  //   // Add the script dynamically
  //   const script1 = document.createElement('script');
  //   script1.async = true;
  //   script1.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16615065963';
  //   document.head.appendChild(script1);

  //   const script2 = document.createElement('script');
  //   script2.innerHTML = `
  //     window.dataLayer = window.dataLayer || [];
  // function gtag(){dataLayer.push(arguments);}
  // gtag('js', new Date());

  // gtag('config', 'AW-16615065963');

  //   `;
  //   document.head.appendChild(script2);

  //   // Cleanup the script when the component unmounts
  //   return () => {
  //     document.head.removeChild(script1);
  //     document.head.removeChild(script2);
  //   };
  // }, []);

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { searchTerm } = useParams();
  const [data, setData] = useState({});
  const { customer_login_status, customer_login_data, customer_login_error } =
    useSelector((state) => state.customerAuth);
  const loginHandle = () => {
    console.log(data, "DATA LOGIn");
    dispatch(login_customer_async_service(data));
  };
  useEffect(() => {
    if (customer_login_status === asyncStatus.SUCCEEDED) {
      navigation("/dashboard/customer");

      window.location.reload();
    }
  }, [, customer_login_status]);
  const NavigateSignUp = () => {
    navigation("/signup/customersignup");
  };

  const handle_google_callBack = (p) => {
    console.log(p, "GOOLE SIGN");
    // navigation("/dashboard");
    login_google(p);
  };

  const login_google = async (p) => {
    const formData = {
      type: "customer",
      Name: p.name,
      email: p.email,
      password: "$2a$12$u5rnPeRMTox9LOVEQLJxUOla5Tq7vL8zZJ5UTIUrDONT89889g2",
    };

    axios
      .post(`${baseURL}/google-login`, formData)
      .then((res) => {
        console.log(res.data.data);

        localStorage.setItem("userId", res.data.data._id);
        navigation("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div>
    //     <div className="form">
    //         <div className="form-group">
    //             <input onChange={(e) =>
    //                 setData({ ...data, email: e.target.value })
    //             } type="text" id="email" name="email" placeholder="Enter your email" required="" />
    //         </div>
    //         <div className="form-group">
    //             <input onChange={(e) =>
    //                 setData({ ...data, password: e.target.value })
    //             } type="password" id="pass" name="pass" placeholder="Enter your Password" required="" />
    //         </div>
    //        <Link to={'/forgotpassword'}>
    //         <p className='forgotall'>Forgot Password?</p>
    //         </Link>
    //         <button onClick={() => loginHandle()} className="form-submit-btn" type="submit">Login </button>
    //     </div>
    //     <p className="signup-link" style={{
    //         textAlign: 'center'
    //     }}>
    //         Not a Member?
    //         <a href="#" className="signup-link link" onClick={NavigateSignUp}> Signup Now </a>
    //     </p>
    // </div>
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
        <Link to={"/forgotpassword"}>
          <p className="forgotall ">Forgot Password ?</p>
        </Link>

        <div className="btn-singup btn-singup-alt ts--google">
          <button
            onClick={() => loginHandle()}
            className="form-submit-btn customer--login--form--gtm"
            type="submit"
          >
            Login{" "}
          </button>
          {/* <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'

    }}>

        <span style={{
          color:'#800000',
          fontWeight:'500'
        }}>
        Sign In with Google
        </span>
         
    <Google_login handle_google_callBack={handle_google_callBack}/>
    </div> */}
        </div>
      </div>
      <p
        className="signup-link"
        style={{
          textAlign: "center",
        }}
      >
        Not a Member?
        <a className="signup-link link" onClick={NavigateSignUp}>
          {" "}
          Signup Now{" "}
        </a>
      </p>
    </div>
  );
};
export default TabLoginCustomer;
