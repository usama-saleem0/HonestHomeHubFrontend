import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { apiHandle } from '../../config/apiHandle/apiHandle';
import { user_color } from '../../utils/color';
import { useDispatch, useSelector } from 'react-redux';
import { edit_schedule_by_id_async, save_and_post_async } from '../../services/paymentService ';
import { get_customer_schedule_async_service } from '../../services/customerService';
import { socket } from "../../config/apiHandle/apiHandle.js";

export function InstallmentCheckoutForm({ get_schedule_data_nested, get_status_from_api }) {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch()
    const [clientSecret, setClientSecret] = useState(null);
    const [id1, setid1]=useState('');
    const { payment_status,
        payment_data,
        payment_error } = useSelector((state) => state.payment)



        // const handle_date =()=>{
        //     let i_num = 1;
        //     axios.post(' http://localhost:5000/update-shedule',{ id1: id1, i_num: i_num })
        //     console.log("Payment done TSTSTSTSTSTST",id1,i_num)

        // }
       
        const handle_date = () => {
            let i_num = 1;
          
            axios.post('https://honesthome-backend-6d8f37871a1b.herokuapp.com/update-shedule', { id1: id1, i_num: i_num }, {
              timeout: 30000 // Set the timeout to 30 seconds
            })
            .then(response => {
              console.log("Payment done", response.data);
            })
            .catch(error => {
              if (axios.isCancel(error)) {
                // Request was canceled, handle it if needed
                console.log('Request canceled', error.message);
              } else {
                // Request failed or timed out, handle it
                console.error('Error during request', error.message);
              }
            });
          
            console.log("Request sent", id1, i_num);
          }

    useEffect(() => {


        setid1(get_schedule_data_nested.scheduleId)
        // Fetch the client secret when the component mounts
        apiHandle.post('/create-payment-intent', { amount: get_schedule_data_nested?.vendorBudget.toString() + '00' })
            .then(response => {
                const { clientSecret } = response.data;
                console.log('Client Secret:', clientSecret); // Log clientSecret
                setClientSecret(clientSecret);
            })
            .catch(error => {
                console.error('Error fetching client secret:', error);
            });
    }, []);

    // console.log("get_schedule_data_nested", get_schedule_data_nested);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        // Fetch additional data (customerId, vendorId, amount) from your application state or props

        // Use the client secret to confirm the payment
        const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
            // Pass additional data here

            // customerId: '657b3267b61870438dc6a2da', // Replace with actual customerId
            // vendorId: '657b33a8b0ecf22648173b2c',     // Replace with actual vendorId
            // amount: 20000,                   // Replace with actual amount

        });

        if (error) {
            console.error('Payment failed:', error.message);
        } else if (paymentIntent.status === 'succeeded') {
            console.log('Payment succeeded!');
            handle_date()
            get_status_from_api(paymentIntent.status)
            const messageData = {
                sender: get_schedule_data_nested?.customerId, // Assuming storedUserId is the vendorId
                receiver: get_schedule_data_nested?.vendorId, // Assuming receivedObject._id is the customerId
                message: 'Payment send successfully', 

              };
            
              // Emit chat message event with sender, receiver, and message
              socket.emit('send_message', messageData);
        

            // console.log("paymentIntent", paymentIntent)

            // Handle successful payment and send data to your backend for saving in MongoDB
            // const { customerId, vendorId, amount } = paymentIntent;

            // Make an API call to your backend to save the payment details
            // savePaymentDetails(customerId, vendorId, amount);
            dispatch(save_and_post_async(
                {
                    customerId: get_schedule_data_nested?.customerId,
                    vendorId: get_schedule_data_nested?.vendorId,
                    amount: get_schedule_data_nested?.vendorBudget
                }
            ))
            dispatch(edit_schedule_by_id_async({
                scheduleId: get_schedule_data_nested?.scheduleId
            }))
            dispatch(get_customer_schedule_async_service())

        }
    };

    return (
<form onSubmit={handleSubmit} style={{ padding: '10px', width:'80%' }} className="unique-class-78">
                {/* Add your additional fields here */}
                <h2 style={{ marginBottom: '20px', color: "#002758", fontWeight: '600', fontFamily: 'Urbanist', textAlign:'center', fontSize:'50px', letterSpacing:'1px' }} className="unique-class-79">Pay With Stripe</h2>
                <label style={{ color: "#01BAF2", fontFamily: 'Urbanist', fontSize:'20px', fontWeight:'600' }} className="unique-class-80">
                    Enter Card Details
                    <CardElement className="unique-class-81" />
                </label>
                <div style={{ display:'flex', justifyContent:'center' }} className="unique-class-82">
                    <button style={{ padding: '10px', borderRadius: '10px', background: '#01BAF2' , color: 'white', border: "none", outline: "none", marginTop: '30px', width:'257px' }} type="submit" disabled={!stripe} onClick={stripe} className="unique-class-83">
                        Pay Installment
                    </button>
                </div>
            </form>

    );
}

// import React, { useState, useEffect } from 'react';
// import {
//     LinkAuthenticationElement,
//     PaymentElement,
//     CardNumberElement,
//     Elements,
//     useStripe,
//     useElements,
//     CardElement,
// } from '@stripe/react-stripe-js';
// import { apiHandle } from '../../config/apiHandle/apiHandle';
// import { user_color } from '../../utils/color';

// export function CheckoutForm() {
//     const stripe = useStripe();
//     const elements = useElements();

//     const [clientSecret, setClientSecret] = useState(null);
//     const [paymentStatus, setPaymentStatus] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         // Fetch the client secret when the component mounts
//         apiHandle
//             .post('/create-payment-intent')
//             .then((response) => {
//                 const { clientSecret } = response.data;
//                 setClientSecret(clientSecret);
//             })
//             .catch((error) => {
//                 console.error('Error fetching client secret:', error);
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);

//     const handleChange = (event) => {
//         // Handle changes in the LinkAuthenticationElement if needed
//         console.log('LinkAuthenticationElement value:', event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!stripe || !elements) {
//             // Stripe.js has not yet loaded.
//             return;
//         }
//         if (!elements) {
//             console.error('Elements is null or undefined');
//             return;
//         }

//         // Use the client secret to confirm the payment
//         const { paymentIntent, error } = await stripe.confirmCardPayment(
//             clientSecret,
//             {
//                 payment_method: {
//                     card: elements.getElement(CardElement),
//                     billing_details: {
//                         // Add billing details if needed
//                     },
//                 },
//             }
//         );

//         // const cardElement = elements.getElement(CardElement);
//         if (error) {
//             console.error('Payment failed:', error.message);
//             setPaymentStatus('failed');
//         } else if (paymentIntent.status === 'succeeded') {
//             console.log('Payment succeeded!');
//             setPaymentStatus('succeeded');
//             // Handle successful payment
//         }
//     };

//     const PayOption = {
//         layout: 'tabs',
//     };
//     // const cardElement = elements.getElement(CardElement);
//     // if (!cardElement) {
//     //     console.error('Card Element not found');
//     //     return;
//     // }

//     return (
//         <form
//             onSubmit={handleSubmit}
//             style={{
//                 padding: '10px',
//                 marginTop: '20px',
//             }}
//         >
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <Elements stripe={stripe} options={{ clientSecret }}>
//                     {/* Add your additional fields here */}
//                     <LinkAuthenticationElement
//                         id="link-authentication-element"
//                         onChange={handleChange}
//                     />
//                     <PaymentElement options={PayOption} />
//                 </Elements>
//             )}

//             <button
//                 style={{
//                     padding: '10px',
//                     borderRadius: '10px',
//                     background: user_color,
//                     width: '100%',
//                     color: 'white',
//                     border: 'none',
//                     outline: 'none',
//                     marginTop: '10px',
//                 }}
//                 type="submit"
//                 disabled={!stripe || loading}
//             >
//                 Pay
//             </button>

//             {paymentStatus && (
//                 <div>
//                     {paymentStatus === 'succeeded' ? (
//                         <p>Payment succeeded! Thank you for your purchase.</p>
//                     ) : (
//                         <p>Payment failed. Please try again.</p>
//                     )}
//                 </div>
//             )}
//         </form>
//     );
// }



