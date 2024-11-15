import React from "react";
import "../../auth/auth.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { admin_login_post_async } from "../../../services/adminAuthService";
import { asyncStatus } from "../../../utils/async_status";
import { useState } from "react";
import { useEffect } from "react";
const TabLoginExpert = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { login_status, login_data, login_error } = useSelector(
    (state) => state.adminAuth
  );
  const [data, setData] = useState({});
  const loginHandle = () => {
    dispatch(admin_login_post_async(data));
  };
  useEffect(() => {
    if (login_status === asyncStatus.SUCCEEDED) {
      localStorage.setItem("userId", login_data?.user_id);
      navigation("/Admin_Dashboard");
      window.location.reload();
    }
  }, [, login_status]);
  const NavigateSignUp = () => {
    navigation("/mainSectiontwo");
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
    //         <Link to={'/forgotpassworde'}>
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
            onChange={(e) => setData({ ...data, email: e.target.value })}
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
        <Link to={"/forgotpassworde"}>
          <p className="forgotall ">Forgot Password ?</p>
        </Link>
        <div className="btn-singup btn-singup-alt">
          <button
            onClick={() => loginHandle()}
            className="form-submit-btn"
            type="submit"
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
        <a href="#" className="signup-link link" onClick={NavigateSignUp}>
          {" "}
          Signup Now{" "}
        </a>
      </p>
    </div>
  );
};
export default TabLoginExpert;
