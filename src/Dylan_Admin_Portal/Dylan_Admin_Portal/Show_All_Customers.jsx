import React, { useEffect, useState } from "react";

// import vendor_pic from '../../../src/assets/Frame 115.png'

import axios from "axios";
import { baseURL } from "../../config/apiHandle/apiHandle";

import vendor_pics from '../../../src/assets/total_jobs.png'



import total_vendors from '../../../src/assets/total_vendors.png'

import total_customers from '../../../src/assets/total_customers.png'
import  vander_aya from '../../../src/assets/Vendor-imger.png'

import logo_dash from '../../../src/assets/2222.png'

import who_img from '../../../src/assets/Successful.png'
import { Link } from "react-router-dom";




const Show_All_Customers=()=>{

    const [all_jobs,setall_jobs]= useState([])
    const [job_count,setjob_count]= useState()

    useEffect(()=>{

            axios.get(`${baseURL}/getallcustomers`)
            .then((response)=>{

                console.log(response.data,"Show All Jobs")
                setall_jobs(response.data.Customers)
                setjob_count(response.data.Customer_Count)




            })
            .catch((error)=>{
                console.log(error)
            })



            fetchDataForMonth()



    },[])


    const [total_amount,settotal_amount]=useState()



    const fetchDataForMonth = async () => {
        try {
            const response = await axios.get(`${baseURL}/getallreviews`);
            
            settotal_amount(response.data.cost)

        } catch (error) {
            console.error('Error fetching data from the backend:', error);
        }
    };










    return (

        <div>
  


  <section class="cell">
  <div class="cell-main">

  <div class="Admin-Vendors">
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

        <div class="main-Vendors">


            <div class="Vendors-tital">
                <span>

                    <img src={total_customers} alt=""/>
                    <h2>Total Customers</h2>
                </span>
                

                <h2>{job_count}</h2>
            </div>


            <div class="Vendors-box">

                {
                    all_jobs.map((e,i)=>(

                        <div class="Vendors-list" key={i}>
                    <div class="your-listing-tital with">


                    <div class="job-maru">  
                    <img src={e.Profile_Image?e.Profile_Image:vendor_pics} alt=""/>
                        </div>
                        

                        {/* <span>
                            <h2>Customer : George Wilson</h2>
                            <h3>Job Category: Plumbing</h3>
                        </span>


                        <span>
                            <h2>Vendor : Alex smith</h2>
                            <h3>Budget: 1500$</h3>
                        </span> */}

                        <span>
                        <h2>{e.Name?e.Name:'000'}</h2>
                            <h3>{e.email?e.email:'000'}</h3>
                        </span>
                    </div>

                    <div class="your-listing-btn">
                    <Link to={`/admin_customer_profile/${e._id}`}>
                        <button>View Profile</button>
                        </Link>
                    </div>

                </div>


                    ))
                }
                

                
            </div>


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


<div class="my-list-whe-img">
<img src={who_img } alt=""/>
<p>It’s Look Like a Beautiful Day</p>
</div>

</div>
</div>
        </section>







</div>


    )



}


export default Show_All_Customers
