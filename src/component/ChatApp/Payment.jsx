import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { apiHandle } from '../../config/apiHandle/apiHandle';
import { user_color } from '../../utils/color';
import { useDispatch, useSelector } from 'react-redux';
import { edit_schedule_by_id_async, save_and_post_async } from '../../services/paymentService ';
import { get_customer_schedule_async_service } from '../../services/customerService';
import { socket } from "../../config/apiHandle/apiHandle.js";
import FiveStarRating from '../Community/Rating.jsx';
import { Toast } from 'react-bootstrap';


export function CheckoutForm({ get_schedule_data_nested, get_status_from_api ,s_id, job_ID,cust_id,vend_id}) {
    const   stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch()
    const [clientSecret, setClientSecret] = useState(null);

    const [showrating,setshowrating] = useState(false)

    const [showpayment,setshowpayment] = useState(true)

  



    const handleID=()=>{

        setshowpayment(false)
        setshowrating(true)

        console.log(cust_id,vend_id,s_id,job_ID,"QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
      
        
        
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
        
        

    }

    const [id1, setid1]=useState('');
    const { payment_status,
        payment_data,
        payment_error } = useSelector((state) => state.payment)


        // const handle_date =()=>{
        //     let i_num = 1;
        //     axios.post(' http://localhost:5000/update-shedule',{ id1: id1, i_num: i_num })
        //     console.log("Payment done TSTSTSTSTSTST",id1,i_num)

        // }

    useEffect(() => {
        setid1(get_schedule_data_nested.scheduleId)
        console.log(get_schedule_data_nested.scheduleId,"aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANANANANANANANANANANANANAN")
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
        }
        // else if (paymentIntent.status === 'succeeded') {
        else if (paymentIntent.status) {
            console.log('Payment succeeded! TS');


            get_status_from_api(paymentIntent.status)





            
            const messageData = {
                sender: get_schedule_data_nested?.customerId, // Assuming storedUserId is the vendorId
                receiver: get_schedule_data_nested?.vendorId, // Assuming receivedObject._id is the customerId
                message: 'Payment send successfully', 
              };
            
              // Emit chat message event with sender, receiver, and message
              socket.emit('send_message', messageData);
        
 
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

            Toast.success("Payment Done Successfully")


           
                
                window.location.reload();
           

        }
    };

    return (
<div className='Stripe_form unique-class-77' style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
    {showpayment && (
        <>
            <form onSubmit={handleSubmit} style={{ padding: '10px', width:'80%' }} className="unique-class-78">
                {/* Add your additional fields here */}
                <h2 style={{ marginBottom: '20px', color: "#002758", fontWeight: '600', fontFamily: 'Urbanist', textAlign:'center', fontSize:'50px', letterSpacing:'1px' }} className="unique-class-79">Pay With Stripe</h2>
                <label style={{ color: "#01BAF2", fontFamily: 'Urbanist', fontSize:'20px', fontWeight:'600' }} className="unique-class-80">
                    Enter Card Details
                    <CardElement className="unique-class-81" />
                </label>
                <div style={{ display:'flex', justifyContent:'center' }} className="unique-class-82">
                    <button style={{ padding: '10px', borderRadius: '10px', background: '#01BAF2' , color: 'white', border: "none", outline: "none", marginTop: '30px', width:'257px' }} type="submit" disabled={!stripe} onClick={stripe} className="unique-class-83">
                        Pay
                    </button>
                </div>
            </form>
            {/* <button onClick={handleID}>Feedback</button> */}
        </>
    )}
    {showrating && <FiveStarRating className="unique-class-84" />}
</div>

       
     
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



