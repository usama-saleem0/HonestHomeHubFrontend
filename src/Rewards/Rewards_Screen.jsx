import React, { useEffect, useState } from "react";
import { baseURL } from "../config/apiHandle/apiHandle";
import axios from "axios";
import RedeemPopup from "./components/RedeemPopup";
import VoucherPopup from "./components/Voucher_Popup";
import ContactSupport from "../component/CreatePostCard/ContactSupport";
import CustomerProfileCard from "../component/CreatePostCard/CustomerProfileCard";
import { Stack } from "@mui/material";
import logosmall from "../../src/assets/new/logo1.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";

const Rewards_Screen = () => {
  const navigate = useNavigate();
  const new_customer_route= localStorage.getItem("customer_route")
  const goBack = () => {
    // navigate("/dashboard/customer");
    navigate(new_customer_route)
  };
  const {
    customer_profile_status,
    customer_profile_data,
    customer_login_data,
    customer_data,
    customer_profile_error,
  } = useSelector((state) => state.customerAuth);
  // ===========
  const storedUserId = localStorage.getItem("userId");
  const [points, setpoints] = useState("0");
  const [dollars, setdollars] = useState("0");
  const [dollars1, setdollars1] = useState("0");
  const [code, setcode] = useState("0");

  const [rewards, setrewards] = useState([]);

  const [showpop, setshowpop] = useState(false);
  const [showpop1, setshowpop1] = useState(false);

  useEffect(() => {
    console.log("Rewards", storedUserId);
    GetPoints();
    Get_Rewards();
  }, []);
  const GetPoints = async () => {
    axios
      .get(`${baseURL}/getpoints/${storedUserId}`)
      .then((res) => {
        console.log(res.data.Points);
        setpoints(res.data.Points);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Calculate_Dollar_Amount = async (p) => {

    if (p!='0'){

      const formData = {
        points: p,
      };
  
      axios
        .post(`${baseURL}/calculate-dollars`, formData)
        .then((res) => {
          console.log(res.data.dollars, "DOLL");
          setdollars(res.data.dollars);
          setshowpop(true);
        })
        .catch((error) => {
          console.log(error);
        });
      
    }
    else{
      toast.error("Cannot Redeem Points")
    }
   
  };

  const Create_Coupon = async () => {
    const formData = {
      Customer_ID: storedUserId,
      budget: dollars,
      voucher_taken: "0",
    };

    axios
      .post(`${baseURL}/create-coupon`, formData)
      .then((res) => {
        console.log(res.data);

        // window.location.reload()
        GetPoints()
        Get_Rewards()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Get_Rewards = async () => {
    axios
      .get(`${baseURL}/getrewards/${storedUserId}`)
      .then((res) => {
        console.log(res.data.Rewards, "GET REWATDS");
        setrewards(res.data.Rewards);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Callback_Redeem_Decsion = (r) => {
    console.log(r, "Call Back REDEEM P");
    if (r === "no") {
      setshowpop(false);
    } else if (r === "yes") {
      setshowpop(false);
      Create_Coupon();
    }
  };

  const Callback_Redeem_Decsion1 = (r) => {
    console.log(r, "Call Back REDEEM P");
    if (r === "no") {
      setshowpop1(false);
    }
  };

  const Show_Rewards = (e, p) => {
    console.log(e, p, "AHTO");
    setcode(e);
    setdollars1(p);
    setshowpop1(true);
  };

  return (
    <>
  
      <div className="reward--screen--header--h">
        <div className="classname-431 small_logo">
          <img className="rewards--logo--h" src={logosmall} />
          <Stack flexDirection={"column"}>
            <Stack
              className="classname-432"
              sx={{
                fontSize: { lg: 40, md: 30, sm: 17, xs: 17 },
                fontWeight: 800,
                paddingTop: "30px",
                paddingLeft: "30px",
                color: "#002758",
              }}
            >
              {" "}
              Hello {customer_profile_data?.Name}
            </Stack>
            <Stack
              className="classname-433"
              sx={{
                fontSize: { lg: 20, md: 20, sm: 12, xs: 10 },
                fontWeight: 600,
                paddingLeft: "30px",
                color: "#002758",
              }}
            >
              {" "}
              Here you can manage your household problems
            </Stack>
          </Stack>
        </div>

        <div onClick={goBack} className="rewards--back--btn--h">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>
      </div>
      <div className="points--main--cont--h">
        <h1>Total Points</h1>
        <h2>{points.Points ? points.Points : "0"}</h2>
        <button className="redeem-points-ar" onClick={() => Calculate_Dollar_Amount(points.Points)}>
          Redeem Points
        </button>
      </div>

      {rewards != null &&
        rewards
          .filter((e) => e.voucher_taken === "0")
          .map((e, i) => (
            <div className="claim--points---cont--h" key={i}>
              <h4>Claim Your ${e.budget} Coupon Code</h4>
              <button onClick={() => Show_Rewards(e.coupon_code, e.budget)}>
                Claim
              </button>
            </div>
          ))}
      <AnimatePresence>
        {showpop && (
          <RedeemPopup
            dollar={dollars}
            redeem_decision={Callback_Redeem_Decsion}
            points={points.Points}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showpop1 && (
          <VoucherPopup
            code={code}
            redeem_decision={Callback_Redeem_Decsion1}
            dollar={dollars1}
          />
        )}
      </AnimatePresence>
    </>
  );
};


export default Rewards_Screen;
