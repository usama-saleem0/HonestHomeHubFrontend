import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../config/apiHandle/apiHandle";

import total_customers from '../../../src/assets/total_customers.png'

import total_vendors from '../../../src/assets/total_vendors.png'

import total_jobs from '../../../src/assets/total_jobs.png'

import logo_dash from '../../../src/assets/2222.png'
import MyChart from "./Chart";
import MyCalendar from "./Calendar";


const Dylan_Dashboard =()=>{

    const [all_vendors,setall_vendors]= useState([])
    const [Vendor_Count,setVendor_Count]= useState()



    const [All_Customers,setAll_Customers]= useState([])
    const [Customer_Count,setCustomer_Count]= useState()




    const [All_Jobs,setAll_Jobs]= useState([])
    const [Jobs_Count,setJobs_Count]= useState()



    const [total_amount,settotal_amount]=useState()



    useEffect(()=>{



        fetchDataForMonth()

            axios.get(`${baseURL}/getallvendors`)
            .then((response)=>{

                console.log(response.data,"Show All Vendors")
                setall_vendors(response.data.Vendors)
                setVendor_Count(response.data.Vendors_Count)




            })
            .catch((error)=>{
                console.log(error)
            })






            axios.get(`${baseURL}/getalljobs`)
            .then((response)=>{

                // console.log(response.data,"Show All Vendors")
                // setAll_Customers(response.data.Customers)
                setJobs_Count(response.data.Jobs_Count)




            })
            .catch((error)=>{
                console.log(error)
            })




            axios.get(`${baseURL}/getallcustomers`)
            .then((response)=>{

                // console.log(response.data,"Show All Vendors")
                // setAll_Customers(response.data.Customers)
                setCustomer_Count(response.data.Customer_Count)




            })
            .catch((error)=>{
                console.log(error)
            })






            
            // axios.get(`${baseURL}/getallreviews`)
            // .then((response)=>{

            //     console.log("REVIEWS",response.data)




            // })
            // .catch((error)=>{
            //     console.log(error)
            // })










    },[])



    const fetchDataForMonth = async () => {
        try {
            const response = await axios.get(`${baseURL}/getallreviews`);
            
            settotal_amount(response.data.cost)

        } catch (error) {
            console.error('Error fetching data from the backend:', error);
        }
    };




    return(

        <div>
 <section class="main-dashbord">
        <div class="main-mb">

            <div class="mb-part-1">


            <div class="mb-box-1-3"> 
            <div className="who-logo">
                
            <img src={logo_dash} alt=""/>
                <span>

                    <h2>Dylan Sloan</h2>
                    <p>Here you can manage your household problems</p>
                </span>
            </div>

            <div className="who-search">
            <input type="search" placeholder="Search"/>

            <button><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M20.5387 18.7713L25.8925 24.1238L24.1238 25.8925L18.7713 20.5387C16.7797 22.1353 14.3025 23.0036 11.75 23C5.54 23 0.5 17.96 0.5 11.75C0.5 5.54 5.54 0.5 11.75 0.5C17.96 0.5 23 5.54 23 11.75C23.0036 14.3025 22.1353 16.7797 20.5387 18.7713ZM18.0312 17.8438C19.6176 16.2124 20.5036 14.0255 20.5 11.75C20.5 6.91625 16.5837 3 11.75 3C6.91625 3 3 6.91625 3 11.75C3 16.5837 6.91625 20.5 11.75 20.5C14.0255 20.5036 16.2124 19.6176 17.8438 18.0312L18.0312 17.8438Z" fill="#01BAF2"/>
</svg></button>
            </div>
            </div>


                <div class="mb-box-1">

                    <div class="mb-list">
                        <div class="mb-list-img">
                            <img src={total_jobs} alt=""/>
                          
                        </div>

                        <span>
                            <h3>Total Jobs</h3>

                                <Link to={'/showalljobs'}>
                                <a>View Report</a>
                                </Link>
                            
                        </span>

                        <h2>
                            {Jobs_Count?Jobs_Count:0}
                        </h2>
                    </div>


                    <div class="mb-list">
                        <div class="mb-list-img">
                            <img src={total_customers} alt=""/>
                        </div>

                        <span>
                            <h3>Total Customers</h3>
                            <Link to={'/showallcustomers'}>
                                <a>View Report</a>
                                </Link>
                        </span>

                        <h2>
                            {Customer_Count?Customer_Count:0}
                        </h2>
                    </div>


                    <div class="mb-list">
                        <div class="mb-list-img">
                            <img src={total_vendors} alt=""/>
                        </div>

                        <span>
                            <h3>Total Vendors</h3>
                            <Link to={'/vendorlist'}> 
                            <a>View Report</a>
                            
                            </Link>
                        </span>

                        <h2>
                        {Vendor_Count}
                        </h2>
                    </div>

                </div>

                <div class="mb-box-2">
                <MyChart   timeframe={"monthly"}/>

                {/* <MyCalendar /> */}
                </div>
            </div>

            <div class="mb-part-2">

                <div class="my-list-1">
                   
                    <div class="id-my-card">
                    <div class="admin-logo-dp">
                    <img src={total_vendors} alt=""/>
                    </div>
                        <span>
                            <h2>Dylan Sloan</h2>
                            <h3>Admin</h3>
                        </span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                        <path d="M18.9997 0H0.333008V32.6667H32.9997V14H28.333V28H4.99967V4.66667H18.9997V0Z" fill="#01BAF2"/>
                      </svg>
                </div>

                <div class="my-list-2">
                    <p>Total Transactions</p>

                    <h3>{total_amount}$</h3>

                    <a href="#">View Report</a>
                </div>

                <div class="my-list-3">
                    <span>

                        <h3>Sales goal</h3>
                        <h2>$32,000</h2>

                    </span>


                    <span>

                        <h3>Remaining</h3>
                        <h2>$7,600</h2>

                    </span>
                </div>

                <div class="my-list-4">

                </div>

                <div class="my-list-5">
                    <p>Take A Record</p>
                </div>

                <div class="my-list-6">
                    <span><h2> Heating and Ventilation</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>

                      <span><h2> Roofing</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>

                      <span><h2> Re-modelling</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>

                      <span><h2> Cleanings</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>
                      <span><h2>Water Heater</h2><svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16" fill="none">
                        <path d="M28.7071 8.70711C29.0976 8.31658 29.0976 7.68342 28.7071 7.29289L22.3431 0.928932C21.9526 0.538408 21.3195 0.538408 20.9289 0.928932C20.5384 1.31946 20.5384 1.95262 20.9289 2.34315L26.5858 8L20.9289 13.6569C20.5384 14.0474 20.5384 14.6805 20.9289 15.0711C21.3195 15.4616 21.9526 15.4616 22.3431 15.0711L28.7071 8.70711ZM0 9H28V7H0V9Z" fill="#01BAF2"/>
                      </svg></span>
                </div>
            </div>

        </div>
    </section>
            </div>


    )


}


export default Dylan_Dashboard