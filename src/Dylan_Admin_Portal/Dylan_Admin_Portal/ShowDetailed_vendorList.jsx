import React, { useEffect, useState } from "react";

import vendor_pic from "../../../src/assets/Vendors-pic.png";
import vendor_noimage from "../../assets/new/logo1.png";
// import vendor_pic1 from '../../../src/assets/Vendor-imger.png'
import axios from "axios";
import { baseURL } from "../../config/apiHandle/apiHandle";

import total_vendors from "../../../src/assets/total_vendors.png";

// import total_customers from '../../../src/assets/total_customers.png'
import vander_aya from "../../../src/assets/Vendor-imger.png";

import logo_dash from "../../../src/assets/new/logo1.png";

import who_img from "../../../src/assets/Successful.png";
import Show_Vendor_Profile from "./Show_Vendor_Profile";
import { Link } from "react-router-dom";

const ShowAllVendorsDetailed = () => {
  const [all_vendors, setall_vendors] = useState([]);
  const [Vendor_Count, setVendor_Count] = useState();

  const [gig_discription, setgig_discription] = useState("");
  const [gig_image, setgig_image] = useState("");
  const [gig_title, setgig_title] = useState("");
  const [gig_keyword, setgig_keyword] = useState("");
  const [vendor_address, setvendor_address] = useState("");
  const [vendor_email, setvendor_email] = useState("");
  const [vendor_phone, setvendor_phone] = useState("");
  const [vendor_name, setvendor_name] = useState("");
  const [vendor_profile_picture, setvendor_profile_picture] = useState("");

  const [show, setshow] = useState(false);

  const HidePopup = () => {
    // setshow(false);
    setshow((prevShow) => !prevShow);
  };

  useEffect(() => {
    axios
      .get(`${baseURL}/getallvendors`)
      .then((response) => {
        console.log(response.data, "Show All Vendors");
        setall_vendors(response.data.Vendors);
        setVendor_Count(response.data.Vendors_Count);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchDataForMonth();
  }, []);

  const [total_amount, settotal_amount] = useState();
  const [filter, setfilter] = useState("");

  const [filterjobtype, setfilterjobtype] = useState("");

  const fetchDataForMonth = async () => {
    try {
      const response = await axios.get(`${baseURL}/getallreviews`);

      settotal_amount(response.data.cost);
    } catch (error) {
      console.error("Error fetching data from the backend:", error);
    }
  };

  const Vendor_Id = (e) => {
    console.log(e, "Vendor_ID");

    const id = e;

    axios
      .get(`${baseURL}/get_vendor_profile_admin/${id}`)
      .then((response) => {
        console.log(response.data);

        if (response.data.Vendor_Profile != null) {
          setgig_discription(response.data.Vendor_Profile.gig_discription);
          setgig_image(response.data.Vendor_Profile.gig_image);
          setgig_title(response.data.Vendor_Profile.gig_title);
        }

        setvendor_name(response.data.Vendor_Bio.Name);

        setvendor_address(response.data.Vendor_Bio.Home_Address);
        setvendor_profile_picture(
          response.data.Vendor_Bio.vendor_profile_picture
        );
        setvendor_email(response.data.Vendor_Bio.email);
        setvendor_phone(response.data.Vendor_Bio.phoneno);
        setgig_keyword(response.data.Vendor_Bio.selected_queries[0]);

        setshow(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  const handleChangeDropdown = (event) => {
   
    console.log(`Selected option: ${event.target.value}`);
    setfilterjobtype(event.target.value)
  };

  return (
    <div>
      <section class="cell">
        <div class="cell-main">
          <div class="Admin-Vendors">
            <div class="mb-box-1-3">
              <div className="who-logo">
                <img src={logo_dash} alt="" />
                <span>
                  <h2>Dylan Sloan</h2>
                  <p>Here you can manage your household problems</p>
                </span>
              </div>

              <div className="who-search">
                {/* <input
                  type="search"
                  placeholder="Filter by Type "
                  onChange={(e) => setfilterjobtype(e.target.value)}
                /> */}

<div className="labeldropdown">
               
              <select id="dropdown" value={filterjobtype} onChange={handleChangeDropdown} className="dropdownid">
        <option value="">Type of Service</option>

        <option value="Heating, Ventilation, Air Conditioning">Heating, Ventilation, Air Conditioning</option>
        <option value="Water Heater">Water Heater</option>
        <option value="Roofing">Roofing</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Remodeling">Remodeling</option>
        <option value="Landscaping">Landscaping</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Fencing">Fencing</option>
        <option value="Handyman">Handyman</option>

       
         
      </select>
            </div>


<input
                  type="search"
                  placeholder="Filter by Zipcode "
                  onChange={(e) => setfilter(e.target.value)}
                />

                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M20.5387 18.7713L25.8925 24.1238L24.1238 25.8925L18.7713 20.5387C16.7797 22.1353 14.3025 23.0036 11.75 23C5.54 23 0.5 17.96 0.5 11.75C0.5 5.54 5.54 0.5 11.75 0.5C17.96 0.5 23 5.54 23 11.75C23.0036 14.3025 22.1353 16.7797 20.5387 18.7713ZM18.0312 17.8438C19.6176 16.2124 20.5036 14.0255 20.5 11.75C20.5 6.91625 16.5837 3 11.75 3C6.91625 3 3 6.91625 3 11.75C3 16.5837 6.91625 20.5 11.75 20.5C14.0255 20.5036 16.2124 19.6176 17.8438 18.0312L18.0312 17.8438Z"
                      fill="#01BAF2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="main-Vendors">
              <div class="Vendors-tital">
                <span>
                  <img src={vendor_pic} alt="" />
                  <h2>Total Vendors</h2>
                </span>

                <h2>{Vendor_Count}</h2>
              </div>

              <div class="Vendors-box vendors--box--h">
                {filter === "" && filterjobtype===""? (
                  <>
                    {all_vendors.map((vendor, i) => (
                      <div class="Vendors-list vendors--list--h" key={i}>
                        <div class="your-listing-tital with more-ahti">
                          <div class="job-maru awho-maro vendors--list--img--cont--h">
                            <img
                              style={{
                                objectFit: !vendor.Profile_Image
                                  ? "contain"
                                  : "cover",
                              }}
                              src={
                                vendor.Profile_Image
                                  ? vendor.Profile_Image
                                  : vendor_noimage
                              }
                              alt=""
                            />
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
                            <h2>{vendor.Name}</h2>
                            <h3
                              style={{
                                color: "#b22234",
                              }}
                            >
                              {vendor.selected_queries[0]}
                            </h3>
                            <h3
                              style={{
                                color: "#b22234",
                              }}
                            >
                              {vendor.email}
                            </h3>
                            <h3
                              style={{
                                color: "#b22234",
                              }}
                            >
                              {vendor.phoneno}
                            </h3>

                            <h3
                              style={{
                                color: "#b22234",
                              }}
                            >
                              ZipCode: {vendor.zipCode}
                            </h3>

                            <h3
                              style={{
                                color: "#b22234",
                              }}
                            >
                              Address: {vendor.Home_Address}
                            </h3>
                          </span>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {all_vendors
                      .filter((e) => e.selected_queries[0].includes(filterjobtype) && (filter!=""?e.zipCode.includes(filter):true))
                      .map((vendor, i) => (
                        <div class="Vendors-list vendors--list--h" key={i}>
                          <div class="your-listing-tital with more-ahti">
                            <div class="job-maru awho-maro vendors--list--img--cont--h">
                              <img
                                style={{
                                  objectFit: !vendor.Profile_Image
                                    ? "contain"
                                    : "cover",
                                }}
                                src={
                                  vendor.Profile_Image
                                    ? vendor.Profile_Image
                                    : vendor_noimage
                                }
                                alt=""
                              />
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
                              <h2>{vendor.Name}</h2>
                              <h3
                                style={{
                                  color: "#b22234",
                                }}
                              >
                                {vendor.selected_queries[0]}
                              </h3>
                              <h3
                                style={{
                                  color: "#b22234",
                                }}
                              >
                                {vendor.email}
                              </h3>
                              <h3
                                style={{
                                  color: "#b22234",
                                }}
                              >
                                {vendor.phoneno}
                              </h3>

                              <h3
                                style={{
                                  color: "#b22234",
                                }}
                              >
                                ZipCode: {vendor.zipCode}
                              </h3>
                            </span>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>

          <div class="mb-part-2">
            <div class="my-list-1">
              <div class="id-my-card">
                <div class="admin-logo-dp">
                  <img src={total_vendors} alt="" />
                </div>
                <span>
                  <h2>Dylan Sloan TS</h2>
                  <h3>Admin</h3>
                </span>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M18.9997 0H0.333008V32.6667H32.9997V14H28.333V28H4.99967V4.66667H18.9997V0Z"
                  fill="#01BAF2"
                />
              </svg>
            </div>

            <div class="my-list-2">
              <p>Total Transactions</p>

              <h3>{total_amount}$</h3>

              <a href="#">View Report</a>
            </div>

            <div class="my-list-whe-img">
              <img src={who_img} alt="" />
              <p>It’s Look Like a Beautiful Day</p>
            </div>
          </div>
        </div>
      </section>

      {show && (
        <Show_Vendor_Profile
          show={show}
          HidePopup={HidePopup}
          gig_title={gig_title}
          gig_image={gig_image}
          gig_discription={gig_discription}
          gig_keyword={gig_keyword}
          vendor_name={vendor_name}
          vendor_address={vendor_address}
          vendor_email={vendor_email}
          vendor_phone={vendor_phone}
          vendor_profile_picture={vendor_profile_picture}
        />
      )}
    </div>
  );
};

export default ShowAllVendorsDetailed;
