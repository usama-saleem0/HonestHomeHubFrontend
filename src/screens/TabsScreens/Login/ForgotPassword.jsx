import React from 'react'
import '../../auth/auth.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login_vendor_async_service } from '../../../services/vendorService';
import { get_customer_job_byId_async_service } from '../../../services/customerService';
import { useEffect } from 'react';
import { asyncStatus } from '../../../utils/async_status';
import { setVendorLoginIdle } from '../../../store/slice/vendorSlice';

const ForgotPassword = () => {


    const dispatch = useDispatch()
    const navigation = useNavigate()

    const [data, setData] = useState({});


    const {
        vendor_login_status,
        vendor_login_data,
        vendor_login_error
    } = useSelector((state) => state.vendorAuth)


    const loginHandle = () => {
        dispatch(login_vendor_async_service(data));
        dispatch(get_customer_job_byId_async_service())
        // navigation('/dashboard')


    };

    useEffect(() => {
        if (vendor_login_status === asyncStatus.SUCCEEDED) {
            navigation('/dashboard')
            dispatch(setVendorLoginIdle(setVendorLoginIdle))
        }
    }, [, vendor_login_status])
    
    console.log("vendor_login_data", vendor_login_data)
    const NavigateSignUp = () => {
        navigation('/mainSectiontwo')
    }
    return (
        <div>

<div class="form-container">
      <div class="logo-container">
        Forgot Password
      </div>

      <form class="form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email" required=""/>
        </div>

        <button class="form-submit-btn" type="submit">Send Email</button>
      </form>

      <p class="signup-link">
        Don't have an account?
        <a href="#" class="signup-link link"> Sign up now</a>
      </p>
    </div>


            <div className="form">
                <div className="form-group">
                    <input onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    } type="text" id="email" name="email" placeholder="Enter your email" required="" />
                </div>
                <div className="form-group">
                    <input onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    } type="password" id="pass" name="password" placeholder="Enter your Password" required="" />
                </div>
                {/* <button onClick={() => loginHandle()} className="form-submit-btn" type="submit">Login </button> */}


                <button onClick={() => loginHandle()} className="form-submit-btn" type="submit">Forgot Password </button>

            </div>
            <p className="signup-link" style={{
                textAlign: 'center'
            }}>
                Not a Member? 
                <a href="#" className="signup-link link" onClick={NavigateSignUp}> Signup Now </a>
            </p>
        </div>
    )
}

export default ForgotPassword