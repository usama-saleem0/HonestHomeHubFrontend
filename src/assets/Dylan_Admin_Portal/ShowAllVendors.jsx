import React, { useEffect, useState } from "react";

import vendor_pic from '../../../src/assets/Vendors-pic.png'
import vendor_pic1 from '../../../src/assets/Vendor-imger.png'
import axios from "axios";
import { baseURL } from "../config/apiHandle/apiHandle";

const ShowAllVendors=()=>{

    const [all_vendors,setall_vendors]= useState([])
    const [Vendor_Count,setVendor_Count]= useState()

    useEffect(()=>{

            axios.get(`${baseURL}/getallvendors`)
            .then((response)=>{

                console.log(response.data,"Show All Vendors")
                setall_vendors(response.data.Vendors)
                setVendor_Count(response.data.Vendors_Count)




            })
            .catch((error)=>{
                console.log(error)
            })



    },[])






    return (

        <div>
  <section class="Admin-Vendors">
    <div class="main-Vendors">
      <div class="Vendors-tital">
        <span>
          <img src={vendor_pic} alt=""/>
          <h2>Total Vendors</h2>
        </span>
        <h2>{Vendor_Count}</h2>
      </div>
      <div class="Vendors-box">
        {all_vendors.map((vendor, i) => (
          <div key={i} class="Vendors-list">
            <div class="your-listing-tital">
              <img src={vendor.Profile_Image? vendor.Profile_Image:vendor_pic1} alt=""/>
              <span>
                <h2>{vendor.Name}</h2>
                <h3>{vendor.selected_queries[0]}</h3>
              </span>
            </div>
            <div class="your-listing-btn">
              <button>View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>


    )



}


export default ShowAllVendors