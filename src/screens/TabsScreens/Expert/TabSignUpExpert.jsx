import React from "react";
import "../../auth/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { admin_register_post_async } from "../../../services/adminAuthService";
import { asyncStatus } from "../../../utils/async_status";
import CheckboxList from "../Login/CheckBox";
import FormComponent from "../../auth/section/pandadoc";
import { MultiImageUploadComponent } from "../../../component/uploadImage/MultiImagesUpload";
import { SignupImageUploadComponent } from "../../../component/uploadImage/SignupImageUpload";
import { License_Upload } from "../../../component/uploadImage/LicenseUpload";
const TabSignUpExpert = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { admin_register_status, admin_register_data, admin_register_error } =
    useSelector((state) => state.adminAuth);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [data, setData] = useState({
    expert_driving_license: null,
    expert_profile_picture: null,
  });
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const submitHandle = () => {
    let obj = {
      ...data,
      password: password,
      role: "admin",
    };
    // console.log(obj);
    if (password === confirmPassword) {
      // Passwords match, handle the form submission
      console.log("Form submitted successfully", obj);
      dispatch(admin_register_post_async(obj));
    } else {
      // Passwords don't match, update state to indicate the mismatch
      setPasswordsMatch(false);
      alert("Passwords do not match");
    }
  };
  console.log("admin_register_status", admin_register_status);
  useEffect(() => {
    if (admin_register_status === asyncStatus.SUCCEEDED) {
      localStorage.setItem("userId", admin_register_data?.user_id);
      navigation("/Admin_Dashboard");
      window.location.reload();
    }
  }, [, admin_register_status]);
  const set_selected_queries = (value) => {
    setData({ ...data, selected_queries: value });
  };

  const [show, setShow] = useState(true);

  useEffect(() => {
    const config = {
      nodeId: "form-container-ef719d73-0aec-4e1a-88c6-509933b68a2a",
      width: "100%",
      height: "700px",
      url: "https://eform.pandadoc.com/?eform=f5ad0b2b-26bb-4be3-abc5-5376ffe4451e",
      events: {
        loaded: function () {},
        started: function (data) {
          if (data.started) {
            console.log("Form is filled.");
            setShow(false);
          } else {
            console.log("Form is not filled.");
          }
        },
        completed: function (data) {
          // Check if the form is filled
          if (data.completed) {
            console.log("Form is filled.");
          } else {
            console.log("COMPLETED.");
            setShow(false);
          }
        },
        exception: function (data) {},
      },
      data: {},
    };

    const dataQueryString = config.data
      ? Object.keys(config.data)
          .map(function (key) {
            return (
              "&" +
              key +
              "=" +
              encodeURIComponent(JSON.stringify(config.data[key]))
            );
          })
          .join("")
      : "";

    const iframe = document.createElement("iframe");
    iframe.frameBorder = 0;
    iframe.src = config.url + dataQueryString;
    if (config.nodeId) {
      const node = document.getElementById(config.nodeId);
      if (node) {
        node.style.height = config.height;
        node.style.width = config.width;
        iframe.height = "100%";
        iframe.width = "100%";
        node.appendChild(iframe);
      }
    } else {
      iframe.height = config.height;
      iframe.width = config.width;
      document.body.appendChild(iframe);
    }

    const eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    const messageEvent =
      eventMethod === "attachEvent" ? "onmessage" : "message";

    window[eventMethod](
      messageEvent,
      function (e) {
        if (
          e &&
          e.data &&
          config &&
          iframe &&
          e.source === iframe.contentWindow
        ) {
          try {
            const message = JSON.parse(e.data);
            if (message && message.event) {
              const event = message.event.replace("embed.form.", "");
              const callback = config.events ? config.events[event] : null;
              if (callback) {
                callback(message.data);
              }
            }
          } catch (e) {}
        }
      },
      false
    );

    // Clean up the iframe when component unmounts
    return () => {
      if (config.nodeId) {
        const node = document.getElementById(config.nodeId);
        if (node) {
          node.innerHTML = "";
        }
      } else {
        document.body.removeChild(iframe);
      }
    };
  }, []); // Empty dependency array to run effect only once

  const handleServerResponse = (response) => {
    // Handle the server response here
    console.log("Server response vendor:", response.images[0]);
    setData({ ...data, expert_profile_picture: response.images[0] });
  };

  const handleServerResponse1 = (response) => {
    // Handle the server response here
    console.log("Server Driving License:", response.images[0]);
    setData({ ...data, expert_driving_license: response.images[0] });
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      <div className="as-ki-bali">
        Driving License (Front & Back)
        <License_Upload selectedImagesHandle={handleServerResponse1} />
      </div>

      <div className="as-ki-bali">
        Selfie
        <License_Upload selectedImagesHandle={handleServerResponse} />
      </div>

      <div className="form-1">
        <div
          className="form-group-1"
          style={{
            marginTop: "50px",
          }}
        >
          <input
            type="text"
            id="Name"
            name="name"
            placeholder="Name"
            required=""
            onChange={(e) => setData({ ...data, Name: e.target.value })}
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required=""
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="form-group-1">
          <input
            type="Password"
            id="Password"
            name="Password"
            placeholder="Password"
            required=""
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="Password"
            id="Password-c"
            name="Password"
            placeholder="Confirm Password"
            required=""
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="form-group-1">
          <input
            type="phoneno"
            id="phoneno"
            name="phoneno"
            placeholder="Phone No"
            required=""
            onChange={(e) => setData({ ...data, phoneno: e.target.value })}
          />
        </div>
        <div className="cheak-boxs-box">
          <label class="containerz">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <p className="signup-link-1">
            Agree With
            <a href="/privacypolicy" className="signup-link link-1">
              {" "}
              Terms & Conditions{" "}
            </a>
          </p>
        </div>
        <CheckboxList set_selected_queries={set_selected_queries} />
        <div className="btn-singup btn-singup-alt">
          <button
            onClick={submitHandle}
            className="form-submit-btn"
            type="submit"
          >
            {" "}
            Sign up{" "}
          </button>
        </div>
      </div>
      {show && (
        <div className="panadoc">
          {/* <FormComponent/> */}

          <div id="form-container-ef719d73-0aec-4e1a-88c6-509933b68a2a"></div>
        </div>
      )}
    </div>
  );
};
export default TabSignUpExpert;
