import React from "react";
import "../../auth/auth.css";
import { Upload_image_component } from "../../../component/uploadImage/uploadImage";
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../../../config/apiHandle/apiHandle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { create_customer_async_service } from "../../../services/customerService";
import { asyncStatus } from "../../../utils/async_status";
import { setCustomerIdle } from "../../../store/slice/customerSlice";
import { useEffect } from "react";
import { user_color } from "../../../utils/color";
import { toast, ToastContainer } from "react-toastify";
import { Toast } from "react-bootstrap";
import { Password } from "@mui/icons-material";
import Google_login from "../../../Google_Auth/google_login";

const TabSignUpCustomer = () => {
  // useEffect(() => {
  //   // Add the script dynamically
  //   const script1 = document.createElement("script");
  //   script1.async = true;
  //   script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16615065963";
  //   document.head.appendChild(script1);

  //   const script2 = document.createElement("script");
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
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { customer_status, customer_data, customer_error } = useSelector(
    (state) => state.customerAuth
  );
  const [selectedImage, setSelectedImage] = useState("");
  const [communityData, setCommunityData] = useState({});
  const [data, setData] = useState({
    phoneno: "", // Raw phone number for storage/submission
    phoneno1: "", // Formatted phone number for display
  });
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
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
  const isFormValid = () => {
    // Check if all required fields in the 'data' object are filled
    return (
      data && // Ensure 'data' is not null
      selectedImage.trim() !== ""
    );
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };



  const SignupEventSuccess=()=>{

    console.log("TS Success")

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'signupSuccess'
});

  }



  const submitHandle = () => {




    let obj = {
      ...data,
      type: "customer",
      password: password,
    };
    obj.phoneno = obj.phoneno.replace(/-/g, ""); // Remove dashes
    // Check if passwords match
    if (password === confirmPassword && password != "") {
      // Passwords match, handle the form submission
      // console.log('Form submitted successfully', obj);
      SignupEventSuccess()
      dispatch(create_customer_async_service(obj));
    } else {
      // Passwords don't match, update state to indicate the mismatch
      setPasswordsMatch(false);
      alert("Passwords do not match");
    }
    // console.log(obj);
  };
  React.useEffect(() => {
    setIsSubmitDisabled(!isFormValid());
  }, [selectedImage, data]);
  // }, [ data]);
  useEffect(() => {
    if (customer_status === asyncStatus.SUCCEEDED) {
      navigation("/dashboard/newcustomer");
      window.location.reload();
      dispatch(setCustomerIdle(setCustomerIdle));
    }
  }, [, customer_status]);

  const handleZipCodeChange = (e) => {
    const { value } = e.target;
    if (value.length <= 5) {
      setData({ ...data, zipCode: value });
    } else {
      toast.error("Invalid ZipCode");
    }
  };

  // const handlePhoneNumberChange = (e) => {
  //   const { value } = e.target;

  //     setData({ ...data, phoneno: value });

  // };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target.value;
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

    if (input.length > 3 && input.length <= 6) {
      input = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else if (input.length > 6) {
      input = `${input.slice(0, 3)}-${input.slice(3, 6)}-${input.slice(6, 10)}`;
    }

    setData({ ...data, phoneno: input });
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
    <div>
      <ToastContainer />
      <div className="form-1">
        <div
          style={{
            textAlign: "start",
            alignItems: "flex-start",
          }}
        >
          {/* <Upload_image_component
                        selectedImage={selectedImage}
                        selectedImageHandle={selectedImageHandle}
                    /> */}
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
            id="Password"
            name="Password"
            placeholder="Password"
            required=""
            type="password"
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
          {/* <input
            type="text"
            id="Address"
            name="Address"
            placeholder="Address"
            required=""
            onChange={(e) => setData({ ...data, Home_Address: e.target.value })}
          /> */}
          <input
            type="text"
            id="phoneno"
            name="phoneno"
            placeholder="Phone No"
            required
            inputMode="numeric"
            onChange={handlePhoneNumberChange}
            value={data.phoneno}
            maxLength="12" // Max length to accommodate the formatted number
          />
          {/* <input
            type="number"
            id="Zip Code"
            name="Zip Code"
            placeholder="Zip Code"
            required=""
            onChange={handleZipCodeChange}
            value={data.zipCode}
          /> */}
        </div>
        <div className="form-group-1">
          {/* <input
            type="phoneno"
            id="phoneno"
            name="phoneno"
            placeholder="Phone No"
            required=""
            onChange={handlePhoneNumberChange}
            value={data.phoneno}
          /> */}
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

        <div className="btn-singup btn-singup-alt">
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
          <button
            // disabled={isSubmitDisabled}
            // onClick={submitHandle} style={{
            //     backgroundColor: isSubmitDisabled ? "gray" : user_color,
            //     border: isSubmitDisabled ? "none" : `1px solid  ${user_color}`
            // }} className="form-submit-btn" type="submit"> Sign up </button>
            onClick={submitHandle}
            style={{
              backgroundColor: user_color,
              border: `1px solid  ${user_color}`,
            }}
            className="form-submit-btn customer--signup--gtm--btn"
            type="submit"
          >
            {" "}
            Sign up{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default TabSignUpCustomer;
