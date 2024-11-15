  import React from "react";
import "../../auth/auth.css";
import CheckboxList from "./CheckBox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Upload_image_component } from "../../../component/uploadImage/uploadImage";
import { useEffect } from "react";
import { asyncStatus } from "../../../utils/async_status";
import axios from "axios";
import { baseURL } from "../../../config/apiHandle/apiHandle";
import { setVendorIdle } from "../../../store/slice/vendorSlice";
import { user_color } from "../../../utils/color";
import { create_vendor_async_service } from "../../../services/vendorService";
import FormComponent from "../../auth/section/pandadoc";
import { MultiImageUploadComponent } from "../../../component/uploadImage/MultiImagesUpload";
import { SignupImageUploadComponent } from "../../../component/uploadImage/SignupImageUpload";
import { License_Upload } from "../../../component/uploadImage/LicenseUpload";
import { toast, ToastContainer } from "react-toastify";
const TabSignUpVendor = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { vendor_status, vendor_data, vendor_error } = useSelector(
    (state) => state.vendorAuth
  );
  const [selectedImage, setSelectedImage] = useState("");
  const [communityData, setCommunityData] = useState({});
  // console.log('communityData', communityData);
  const selectedImageHandle = async (e) => {
    const { id, files } = e.target;
    try {
      const formData = new FormData();
      formData.append("files", files[0]);
      const response = await axios.post(`${baseURL}/upload-files`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log({ response });
      // Handle the response from the backend
      setSelectedImage(response?.data?.url);
      setCommunityData((prev) => ({
        ...prev,
        community_image_url: response?.data?.url,
      }));
      console.log("Response from the backend:", response.data);
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
    }
  };
  const [data, setData] = useState({
    selected_queries: null,
    vendor_profile_picture: null,
    driving_license: null,
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const set_selected_queries = (value) => {
    setData({ ...data, selected_queries: value });
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const isFormValid = () => {
    // Check if all required fields in the 'data' object are filled
    return (
      data && // Ensure 'data' is not null
      selectedImage.trim() !== ""
    );
  };
  const submitHandle = () => {
    let obj = {
      ...data,
      type: "vendor",
      Profile_Image: selectedImage,
      password: password,
    };
    console.log(obj,confirmPassword);
    if (password === confirmPassword ) {
      // Passwords match, handle the form submission
      console.log("Form submitted successfully", obj);
      dispatch(create_vendor_async_service(obj));
    } 
    
    else if( data.zipCode === null)
    {
      toast.warning("Enter Zipcode")
    }
    else if(data.Name === null)
    {
      toast.warning("Enter Name")
    }
    
    else {
      // Passwords don't match, update state to indicate the mismatch
      setPasswordsMatch(false);
      alert("Passwords do not match");
    }
  };
  useEffect(() => {
    if (vendor_status === asyncStatus.SUCCEEDED) {
      navigation("/dashboard/vendor");
      window.location.reload();
      dispatch(setVendorIdle(setVendorIdle));
    }
  }, [, vendor_status]);
  React.useEffect(() => {
    setIsSubmitDisabled(!isFormValid());
  }, [selectedImage, data]);

  const [show, setShow] = useState(true);

  useEffect(() => {
    const config = {
      nodeId: "form-container-ef719d73-0aec-4e1a-88c6-509933b68a2a",
      width: "100%",
      height: "700px",
      url: "https://eform.pandadoc.com/?eform=b2e3106a-305a-48b9-a100-f6d047d47236",
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

  const [data1, setData1] = useState({
    images: null,
    Budget: null,
    vendor_level: null,
    availablity_times: null,
    selected_queries: null,

    emergencyResponse: null,

    choose_service: null,

    //
  });

  const handleSelectedImages = (value) => {
    // setProgressValue(value.totalValue)
    // setData({ ...data, images: value.images, })
  };

  const handleSelectedImages1 = (value) => {
    // setProgressValue(value.totalValue)
    // setData({ ...data, images: value.images, })

    setData1({ ...data1, images: value.images });
    console.log(data1, "DATA1");
  };

  const handleServerResponse = (response) => {
    // Handle the server response here
    console.log("Server response vendor:", response.images[0]);
    setData({ ...data, vendor_profile_picture: response.images[0] });
  };

  const handleServerResponse1 = (response) => {
    // Handle the server response here
    console.log("Server Driving License:", response.images[0]);
    setData({ ...data, driving_license: response.images[0] });
  };



  const handleInputZipCode = (e) => {
    if(e.target.value.length>5)
    {
      toast.error("Invalid ZipCode")
    }
    else{

      console.log(e.target.value);
      setData({ ...data, zipCode: e.target.value });
    }
  };



  return (
    <div>


    <ToastContainer/>
      <div
        className="form-1"
        style={{
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            textAlign: "start",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* <Upload_image_component
                        selectedImage={selectedImage}
                        selectedImageHandle={selectedImageHandle}
                    /> */}
        </div>

        <div className="as-ki-bali">
          Driving License (Front & Back)
          <License_Upload selectedImagesHandle={handleServerResponse1} />
        </div>

        <div className="as-ki-bali">
          Selfie
          <License_Upload selectedImagesHandle={handleServerResponse} />
        </div>

        <div className="form-group-1">
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
            onChange={(e) => setData({ ...data, email: e.target.value.toLowerCase() })}
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
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <input
            type="Password"
            id="Password-c"
            name="Password"
            placeholder="Confirm Password"
            required=""
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
          />
        </div>
        <div className="form-group-1">
          <input
            type="text"
            id="Address"
            name="Address"
            placeholder="Address"
            required=""
            onChange={(e) => setData({ ...data, Home_Address: e.target.value })}
          />
          <input
            type="number"
            id="Zip Code"
            name="Zip Code"
            placeholder="Zip Code"
            required=""
            value={data.zipCode}
                  onChange={handleInputZipCode}
          />
        </div>
        <div className="form-group-1">
          <input
            type="number"
            id="Phone No"
            name="Phone No"
            placeholder="Phone No"
            required=""
            onChange={(e) => setData({ ...data, phoneno: e.target.value })}
          />
        </div>
        {/* <div className='form-chek-box'>
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
                </div> */}
        <CheckboxList set_selected_queries={set_selected_queries} />
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
        <div className="btn-singup btn-singup-alt">
          <button
            onClick={submitHandle}
            style={{
              backgroundColor: user_color,
              border: `1px solid  ${user_color}`,
            }}
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
export default TabSignUpVendor;
