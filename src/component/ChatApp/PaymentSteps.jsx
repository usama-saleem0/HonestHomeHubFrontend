import { useEffect, useState } from "react";
import axios from "axios";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { apiHandle, baseURL } from "../../config/apiHandle/apiHandle";
 
import { useDispatch, useSelector } from "react-redux";
import {
  edit_schedule_by_id_async,
  save_and_post_async,
} from "../../services/paymentService ";
import { get_customer_schedule_async_service } from "../../services/customerService";
import { socket } from "../../config/apiHandle/apiHandle.js";
import FiveStarRating from "../Community/Rating.jsx";
import SelectVendorStep3 from "../CreatePostCard/SelectedVendorStep3.jsx";
import SelectedVendor from "../CreatePostCard/SelectedVendor.jsx";
import { toast } from "react-toastify";

import stripepower from "../../assets/hell.png";

export function CheckoutFormSteps({
  vendor_budget,
  J_ID,
  numberofinstallments_matching,
  numberofinstallments,
  selected_schedule_id,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState(null);
  const [coupon_id, setcoupon_id] = useState(null);
  const [showrating, setshowrating] = useState(false);

  const [showpayment, setshowpayment] = useState(true);

  const [showopen, setshowopen] = useState(false);

  useEffect(() => {
    async function updateSchedule() {
      await axios
        .post(`${baseURL}/updatescheduleandcustomerjob`, J_ID)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    if (showopen === true) {
      updateSchedule();
    }
  }, []);

  const handleID = () => {
    setshowpayment(false);
    setshowrating(true);

    // const formData ={
    //     job_ID:job_ID,
    //     _id: s_id
    // }
    // try{
    //     axios.post('http://localhost:5000/order_completed',formData)
    //     .then((response)=> {
    //         console.log("ORDER_COMPLETED")
    //     }
    //     )

    // }
    // catch (err) {
    //     console.log(err)
    // }
  };

  const [id1, setid1] = useState("");
  const { payment_status, payment_data, payment_error } = useSelector(
    (state) => state.payment
  );
  const [price_final, setprice_final] = useState(null);

  // const handle_date =()=>{
  //     let i_num = 1;
  //     axios.post(' http://localhost:5000/update-shedule',{ id1: id1, i_num: i_num })
  //     console.log("Payment done TSTSTSTSTSTST",id1,i_num)

  // }

  useEffect(() => {
    // setid1(get_schedule_data_nested.scheduleId)
    // console.log(get_schedule_data_nested.scheduleId,"aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANANANANANANANANANANANANAN")
    // Fetch the client secret when the component mounts
    // apiHandle.post('/create-payment-intent', { amount: get_schedule_data_nested?.vendorBudget.toString() + '00' })

    if (vendor_budget !== 0 || vendor_budget !== "") {
      // apiHandle.post('/create-payment-intent', { amount:vendor_budget.toString()+ '00' })
      apiHandle
        .post("/create-payment-intent", {
          amount:
            price_final != null ? price_final : vendor_budget.toString() + "00",
        })
        .then((response) => {
          const { clientSecret } = response.data;
          console.log("Client Secret:", clientSecret); // Log clientSecret
          setClientSecret(clientSecret);
        })
        .catch((error) => {
          console.error("Error fetching client secret:", error);
        });
    }
  }, [vendor_budget, price_final]);

  // console.log("get_schedule_data_nested", get_schedule_data_nested);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    // Fetch additional data (customerId, vendorId, amount) from your application state or props

    // Use the client secret to confirm the payment
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
        // Pass additional data here

        // customerId: '657b3267b61870438dc6a2da', // Replace with actual customerId
        // vendorId: '657b33a8b0ecf22648173b2c',     // Replace with actual vendorId
        // amount: 20000,                   // Replace with actual amount
      }
    );

    if (error) {
      console.error("Payment failed:", error.message);
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment succeeded!");

      const formData = {
        J_ID: J_ID,
        schedule_id: selected_schedule_id,
      };
      await axios
        .post(`${baseURL}/updatescheduleandcustomerjob`, formData)
        .then(
          (response) => console.log(response)

          // setTimeout(() => {
          //     window.location.reload()
          // }, 2000)
        )
        .catch((error) => console.log(error));

      if (price_final != null) {
        create_reward();

        expire_coupon();
      } else {
        create_reward();
      }

      window.location.reload();

      // get_status_from_api(paymentIntent.status)

      // const messageData = {
      //     sender: get_schedule_data_nested?.customerId, // Assuming storedUserId is the vendorId
      //     receiver: get_schedule_data_nested?.vendorId, // Assuming receivedObject._id is the customerId
      //     message: 'Payment send successfully',
      //   };

      //   // Emit chat message event with sender, receiver, and message
      //   socket.emit('send_message', messageData);

      // console.log("paymentIntent", paymentIntent)

      // Handle successful payment and send data to your backend for saving in MongoDB
      // const { customerId, vendorId, amount } = paymentIntent;

      // Make an API call to your backend to save the payment details
      // savePaymentDetails(customerId, vendorId, amount);
      // dispatch(save_and_post_async(
      //     {
      //         customerId: get_schedule_data_nested?.customerId,
      //         vendorId: get_schedule_data_nested?.vendorId,
      //         amount: get_schedule_data_nested?.vendorBudget
      //     }
      // ))
      // dispatch(edit_schedule_by_id_async({
      //     scheduleId: get_schedule_data_nested?.scheduleId
      // }))
      // dispatch(get_customer_schedule_async_service())
    }
  };

  const handleSubmitInstallment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    // Fetch additional data (customerId, vendorId, amount) from your application state or props

    // Use the client secret to confirm the payment
    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
        // Pass additional data here

        // customerId: '657b3267b61870438dc6a2da', // Replace with actual customerId
        // vendorId: '657b33a8b0ecf22648173b2c',     // Replace with actual vendorId
        // amount: 20000,                   // Replace with actual amount
      }
    );

    if (error) {
      console.error("Payment failed:", error.message);
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment succeeded!");

      const formData = {
        J_ID: J_ID,
        numberofinstallments: numberofinstallments,
        numberofinstallments_matching: numberofinstallments_matching,
        schedule_id: selected_schedule_id,
      };
      await axios
        .post(`${baseURL}/updateinstallmentscheduleandcustomerjob`, formData)
        .then((response) => console.log(response), window.location.reload())
        .catch((error) => console.log(error));

      // get_status_from_api(paymentIntent.status)

      // const messageData = {
      //     sender: get_schedule_data_nested?.customerId, // Assuming storedUserId is the vendorId
      //     receiver: get_schedule_data_nested?.vendorId, // Assuming receivedObject._id is the customerId
      //     message: 'Payment send successfully',
      //   };

      //   // Emit chat message event with sender, receiver, and message
      //   socket.emit('send_message', messageData);

      // console.log("paymentIntent", paymentIntent)

      // Handle successful payment and send data to your backend for saving in MongoDB
      // const { customerId, vendorId, amount } = paymentIntent;

      // Make an API call to your backend to save the payment details
      // savePaymentDetails(customerId, vendorId, amount);
      // dispatch(save_and_post_async(
      //     {
      //         customerId: get_schedule_data_nested?.customerId,
      //         vendorId: get_schedule_data_nested?.vendorId,
      //         amount: get_schedule_data_nested?.vendorBudget
      //     }
      // ))
      // dispatch(edit_schedule_by_id_async({
      //     scheduleId: get_schedule_data_nested?.scheduleId
      // }))
      // dispatch(get_customer_schedule_async_service())
    }
  };

  const [payment, setpayment] = useState(true);
  const [installment, setinstallment] = useState(false);

  const handleShow = () => {
    setinstallment(false);
    setpayment(true);

    setIsActive1(false);
    setIsActive(true);

    console.log(vendor_budget, "CHECKOUT BUDGET");
  };

  const handleShow1 = () => {
    setpayment(false);

    setinstallment(true);

    console.log("cancel");
    setIsActive(false);

    setIsActive1(true);
  };

  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);

  const [coupon_code, setcoupon_code] = useState("");
  const [coupon_price, setcoupon_price] = useState("");

  const handlecheckcoupon = async () => {
    const formData = {
      coupon_code: coupon_code,
    };

    axios
      .post(`${baseURL}/checkcoupon`, formData)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === true) {
          handleRedeem_Coupon(res.data);
          setcoupon_status(res.data.message);

          toast.success("Code Applied Successfully");
        } else if (
          res.data.message === "invalid" ||
          res.data.message === false
        ) {
          toast.error("Invalid Or Expire Code.");
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const [price_final1, setprice_final1] = useState(null);
  const [coupon_status, setcoupon_status] = useState(false);
  const handleRedeem_Coupon = (e) => {
    console.log(e.message, "REDDEM", e.check_valid._id, e.check_valid.budget);

    if (e.message === true) {
      // var a=  price1 * (1 - 2.5 / 100)

      var a = vendor_budget - parseInt(e.check_valid.budget);

      var b = Math.floor(a);
      console.log(a, b);

      setprice_final1(b);
      setprice_final(b + "00");

      setcoupon_id(e.check_valid._id);
    }
  };

  const create_reward = async () => {
    const storedUserId = localStorage.getItem("userId");
    const requestData = {
      Customer_ID: storedUserId,
      Job_ID: J_ID,
      budget: price_final1 != null ? price_final1 : vendor_budget,
      voucher_taken: "0",
    };

    console.log(requestData, "REQ");

    try {
      const response = await fetch(`${baseURL}/createrewards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success Login:", data);
      } else {
        console.error("Error TS:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const expire_coupon = async () => {
    console.log(coupon_code);

    const requestData = {
      coupon_id: coupon_id,
    };

    console.log(requestData, "REQ");

    try {
      const response = await fetch(`${baseURL}/expirecoupon`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Code_STATUS:", data.message);

        // await AsyncStorage.removeItem('userId');
      } else {
        console.error("Error TS:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    //  new form
    <>
      <div class="popup-my payment--popup--my--h">
        <div class="main-ts-popup payment--card--cont--alt--h">
          <div class="tab">
            <button
              class="tablinks"
              onClick={handleShow}
              className={`hover-yellow ${isActive ? "active" : ""}`}
            >
              Direct Pay
            </button>
            {/* <button
              class="tablinks"
              onClick={handleShow1}
              className={`hover-yellow ${isActive1 ? "active" : ""}`}
            >
              Easy Installments
            </button> */}
          </div>

          {payment && (
            <div id=" " class=" ">
              <div class="go-dady">
                <form
                  onSubmit={handleSubmit}
                  style={{ padding: "10px", width: "80%" }}
                  className="unique-class-78 payment--stripe--form--h"
                >
                  {/* Add your additional fields here */}
                  <div className="payment--stripe--title--h">
                    <h2
                      style={{
                        marginBottom: "20px",
                        color: "#002758",
                        fontWeight: "600",
                        fontFamily: "Urbanist",
                        textAlign: "center",
                        fontSize: "50px",
                        letterSpacing: "1px",
                      }}
                      className="unique-class-79"
                    >
                      Pay With Stripe
                    </h2>
                    <h2 className="payment--steps--title--h">
                      Price :{" "}
                      {price_final1 != null ? price_final1 : vendor_budget}
                    </h2>
                  </div>
                  <label
                    style={{
                      color: "#01BAF2",
                      fontFamily: "Urbanist",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                    className="unique-class-9090"
                  >
                    Enter Card Details
                    <CardElement className="unique-class-81" />
                  </label>
                  <div
                    style={{ display: "flex", justifyContent: "center" ,flexDirection:"column",alignItems:"center" }}
                    className="unique-class-82"
                  >
                    <button
                      style={{
                        padding: "10px",
                        borderRadius: "10px",
                        background: "#01BAF2",
                        
                        color: "white",
                        border: "none",
                        outline: "none",
                        marginTop: "30px",
                        width: "257px",
                      }}
                      type="submit"
                      disabled={!stripe}
                      onClick={stripe}
                      className="unique-class-83"
                    >
                      Pay
                    </button>

                    <div className="stripepower-img-box">
                    <button>  <img src={stripepower} alt="" /></button>
                    </div>
                    <br />
                  </div>

                  <h3>
                    The funds are held in escrow and are only released to the
                    vendor upon successful completion of the job.
                  </h3>
                </form>
              </div>
            </div>
          )}

          {installment && (
            <div id=" " class=" ">
              <div class="go-dady">
                <form
                  onSubmit={handleSubmitInstallment}
                  style={{ padding: "10px", width: "80%" }}
                  className="unique-class-78"
                >
                  <div className="main-total-invest">
                    <div className="total-investment">
                      Total Installments:{numberofinstallments}
                    </div>
                    <div className="installment">
                      Installment:{numberofinstallments_matching}{" "}
                    </div>
                  </div>
                  {/* Add your additional fields here */}
                  <h2
                    style={{
                      marginBottom: "20px",
                      color: "#002758",
                      fontWeight: "600",
                      fontFamily: "Urbanist",
                      textAlign: "center",
                      fontSize: "50px",
                      letterSpacing: "1px",
                    }}
                    className="unique-class-79"
                  >
                    Pay Installments With Stripe
                  </h2>

                  <label
                    style={{
                      color: "#01BAF2",
                      fontFamily: "Urbanist",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                    className="unique-class-9090"
                  >
                    Enter Card Details
                    <CardElement className="unique-class-81" />
                  </label>

                  <div
                    style={{ display: "flex", justifyContent: "center",alignItems:'center',flexDirection:"column" }}
                    className="unique-class-82"
                  >
                    <button
                      style={{
                        padding: "10px",
                        borderRadius: "10px",
                        background: "#01BAF2",
                        // width: "100%",
                        color: "white",
                        border: "none",
                        outline: "none",
                        marginTop: "30px",
                        width: "257px",
                      }}
                      type="submit"
                      disabled={!stripe}
                      onClick={stripe}
                      className="unique-class-83 "
                    >
                      Pay Installment
                    </button>


                    <div className="stripepower-img-box">
                    <button>  <img src={stripepower} alt="" /></button>
                    </div>
                  </div>
                  <h3>
                    The funds are held in escrow and are only released to the
                    vendor upon successful completion of the job.
                  </h3>
                </form>
              </div>
            </div>
          )}
        </div>

        <div className="chat_step_7-gol payment--card--cont--h">
          <SelectedVendor job_id1={J_ID} />
          <div className="payment--input--btn--cont--h">
            <input
              placeholder="Enter Coupon Code"
              onChange={(e) => setcoupon_code(e.target.value)}
            ></input>

            <button onClick={handlecheckcoupon}>Redeem</button>
          </div>
        </div>
      </div>
    </>
  );
}
