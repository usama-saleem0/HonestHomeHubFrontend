import React, { useEffect, useState } from "react";

import pic from "../../../src/assets/Activeimg.png";
import { baseURL } from "../../config/apiHandle/apiHandle";
import axios from "axios";
import { useParams } from "react-router-dom";
import total_vendors from "../../../src/assets/total_vendors.png";

import who_img from "../../../src/assets/Successful.png";
import pic1 from "../../../src/assets/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";

import logo_dash from "../../../src/assets/2222.png";

const ShowCustomerProfile = () => {
  const { id } = useParams();

  const [active_jobs, setactive_jobs] = useState("");
  const [completed_jobs, setcompleted_jobs] = useState("");

  const [customer_details, setcustomer_details] = useState([]);

  const [response, setresponse] = useState([]);

  const [customer_bio, setcustomer_bio] = useState([]);

  useEffect(() => {
    console.log("tlllllllllll");

    axios
      .get(`${baseURL}/admin_customer_profile/${id}`)
      // axios.get(`${baseURL}/get_vendor_customer_job_details/661c3f531c334070be429939`)
      .then((response) => {
        setcustomer_details(response.data.Customer_Bio);

        setresponse(response.data);

        setcustomer_bio(response.data.Customer_Jobs);

        console.log(response.data, "Customer_Profile", customer_details);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchDataForMonth();
  }, []);

  const [total_amount, settotal_amount] = useState();
  const fetchDataForMonth = async () => {
    try {
      const response = await axios.get(`${baseURL}/getallreviews`);

      settotal_amount(response.data.cost);
    } catch (error) {
      console.error("Error fetching data from the backend:", error);
    }
  };

  return (
    <div>
      <section className="well-come">
        <div class="main-well-come">
          <div class="section-dasborad admin--customer--profile--sec--1--h">
            <div class="mb-box-1-3">
              <div className="who-logo">
                <img src={logo_dash} alt="" />
                <span>
                  <h2>Dylan Sloan</h2>
                  <p>Here you can manage your household problems</p>
                </span>
              </div>

              <div className="who-search">
                <input type="search" placeholder="Search" />

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

            <div class="main-section-bord">
              <div class="bord-list-1">
                <div class="bord-list1-imger">
                  <img src={pic1} alt="" />
                </div>

                <div class="bord-list1-box">
                  <h2>{customer_details.Name}</h2>
                  <p>Customer</p>
                  <div class="loction-box">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.29297 8.33333C7.29297 7.61504 7.57831 6.92616 8.08622 6.41825C8.59413 5.91034 9.28301 5.625 10.0013 5.625C10.7196 5.625 11.4085 5.91034 11.9164 6.41825C12.4243 6.92616 12.7096 7.61504 12.7096 8.33333C12.7096 9.05163 12.4243 9.7405 11.9164 10.2484C11.4085 10.7563 10.7196 11.0417 10.0013 11.0417C9.28301 11.0417 8.59413 10.7563 8.08622 10.2484C7.57831 9.7405 7.29297 9.05163 7.29297 8.33333Z"
                          fill="#01BAF2"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.1456 7.3975C3.28384 5.72215 4.04697 4.16003 5.2835 3.02121C6.52003 1.8824 8.13956 1.25016 9.8206 1.25H10.1806C11.8616 1.25016 13.4812 1.8824 14.7177 3.02121C15.9542 4.16003 16.7174 5.72215 16.8556 7.3975C17.01 9.26791 16.4325 11.1253 15.2448 12.5783L11.2506 17.4633C11.0992 17.6486 10.9085 17.7979 10.6923 17.9005C10.4762 18.003 10.2399 18.0562 10.0006 18.0562C9.76133 18.0562 9.52505 18.003 9.30886 17.9005C9.09268 17.7979 8.90199 17.6486 8.7506 17.4633L4.75727 12.5783C3.56919 11.1254 2.9914 9.26802 3.1456 7.3975ZM10.0006 4.375C8.95079 4.375 7.94397 4.79204 7.20164 5.53437C6.45931 6.2767 6.04227 7.28352 6.04227 8.33333C6.04227 9.38315 6.45931 10.39 7.20164 11.1323C7.94397 11.8746 8.95079 12.2917 10.0006 12.2917C11.0504 12.2917 12.0572 11.8746 12.7996 11.1323C13.5419 10.39 13.9589 9.38315 13.9589 8.33333C13.9589 7.28352 13.5419 6.2767 12.7996 5.53437C12.0572 4.79204 11.0504 4.375 10.0006 4.375Z"
                          fill="#01BAF2"
                        />
                      </svg>
                      <p>{customer_details.Home_Address}</p>
                    </span>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.3307 14.904 16.2256 14.887 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3Z"
                          fill="#01BAF2"
                        />
                      </svg>
                      <p>{customer_details.phoneno}</p>
                    </span>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          opacity="0.3"
                          d="M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z"
                          fill="#01BAF2"
                        />
                        <path
                          d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z"
                          fill="#01BAF2"
                        />
                      </svg>
                      <p>{customer_details.email}</p>
                    </span>
                  </div>
                </div>
              </div>

              <div class="bord-list-2">
                <div class="ActiveJob activejob--alt--h">
                  <span>
                    <img src={pic} alt="" />
                    <h3>Active Jobs</h3>
                  </span>
                  <h2>{response.Active_Jobs}</h2>
                </div>

                <div class="ActiveJob activejob--alt--h">
                  <span>
                    <img src={pic} alt="" />
                    <h3>Jobs Completed</h3>
                  </span>
                  <h2>{response.Completed_Jobs}</h2>
                </div>

                <div class="ActiveJob activejob--alt--h">
                  <span>
                    <img src={pic} alt="" />
                    <h3>Jobs Pending</h3>
                  </span>
                  <h2>{response.Active_Jobs}</h2>
                </div>
              </div>

              <div class="bord-list-3">
                <h2>Intro</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  augue leo, dapibus vitae cursus sed, tempor fringilla ante.
                  Sed hendrerit est sed odio laoreet ultrices. Etiam laoreet
                  nunc at malesuada mollis. Quisque nec risus at mauris pretium
                  eleifend. Nam cursus lacinia finibus. Duis posuere eleifend
                  justo, sed vestibulum leo ornare ut.{" "}
                </p>
              </div>

              <div class="bord-list-4">
                <h2>Recent Jobs</h2>

                <div class="ts-bord-box">
                  {customer_bio.map((e, i) => (
                    <div class="bord-card">
                      <h2>{e.selected_queries}</h2>
                      <p>{e.details}</p>
                      <div class="borde-imger-btn">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                          >
                            <path
                              d="M27.3062 12.9979L22.3124 8.00418L19.302 10.9792L16.2916 8.00418L20.2937 3.96668C20.577 3.68335 20.8958 3.47699 21.2499 3.3476C21.6041 3.21821 21.9583 3.15304 22.3124 3.1521C22.6902 3.1521 23.0505 3.21727 23.3934 3.3476C23.7362 3.47793 24.037 3.68429 24.2958 3.96668L27.3062 6.9771C27.7312 7.37849 28.0443 7.84504 28.2454 8.37677C28.4466 8.90849 28.5467 9.44541 28.5458 9.98752C28.5458 10.5306 28.4457 11.0618 28.2454 11.5813C28.0452 12.1007 27.7321 12.5729 27.3062 12.9979ZM7.7916 19.5146C7.3666 19.0896 7.1541 18.5876 7.1541 18.0087C7.1541 17.4297 7.3666 16.9282 7.7916 16.5042L11.2624 12.9979L14.2729 16.0084L10.7666 19.5146C10.3652 19.9396 9.87505 20.1521 9.2961 20.1521C8.71716 20.1521 8.21566 19.9396 7.7916 19.5146ZM6.26869 30.0333C6.00896 29.75 5.80827 29.4374 5.6666 29.0955C5.52494 28.7536 5.4541 28.3933 5.4541 28.0146C5.4541 27.6368 5.51927 27.277 5.6496 26.9351C5.77993 26.5932 5.9863 26.2801 6.26869 25.9958L16.2916 16.0084L11.7937 11.475C11.3687 11.0736 11.1562 10.5839 11.1562 10.0059C11.1562 9.42793 11.3687 8.92596 11.7937 8.50002C12.1951 8.07502 12.6909 7.86252 13.2812 7.86252C13.8715 7.86252 14.3791 8.07502 14.8041 8.50002L19.302 12.9979L21.3208 10.9792L25.2874 15.0167C25.5708 15.3 25.7124 15.6306 25.7124 16.0084C25.7124 16.3861 25.5708 16.7167 25.2874 17C25.0041 17.2833 24.6735 17.425 24.2958 17.425C23.918 17.425 23.5874 17.2833 23.3041 17L10.2708 30.0333C9.98743 30.3167 9.67435 30.5235 9.33152 30.6538C8.98868 30.7842 8.64066 30.8489 8.28743 30.8479C7.93327 30.8479 7.5791 30.7771 7.22493 30.6354C6.87077 30.4938 6.55202 30.2931 6.26869 30.0333Z"
                              fill="#B22234"
                            />
                          </svg>{" "}
                          {e.selected_queries}
                        </button>

                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                          >
                            <path
                              d="M27.3062 12.9979L22.3124 8.00418L19.302 10.9792L16.2916 8.00418L20.2937 3.96668C20.577 3.68335 20.8958 3.47699 21.2499 3.3476C21.6041 3.21821 21.9583 3.15304 22.3124 3.1521C22.6902 3.1521 23.0505 3.21727 23.3934 3.3476C23.7362 3.47793 24.037 3.68429 24.2958 3.96668L27.3062 6.9771C27.7312 7.37849 28.0443 7.84504 28.2454 8.37677C28.4466 8.90849 28.5467 9.44541 28.5458 9.98752C28.5458 10.5306 28.4457 11.0618 28.2454 11.5813C28.0452 12.1007 27.7321 12.5729 27.3062 12.9979ZM7.7916 19.5146C7.3666 19.0896 7.1541 18.5876 7.1541 18.0087C7.1541 17.4297 7.3666 16.9282 7.7916 16.5042L11.2624 12.9979L14.2729 16.0084L10.7666 19.5146C10.3652 19.9396 9.87505 20.1521 9.2961 20.1521C8.71716 20.1521 8.21566 19.9396 7.7916 19.5146ZM6.26869 30.0333C6.00896 29.75 5.80827 29.4374 5.6666 29.0955C5.52494 28.7536 5.4541 28.3933 5.4541 28.0146C5.4541 27.6368 5.51927 27.277 5.6496 26.9351C5.77993 26.5932 5.9863 26.2801 6.26869 25.9958L16.2916 16.0084L11.7937 11.475C11.3687 11.0736 11.1562 10.5839 11.1562 10.0059C11.1562 9.42793 11.3687 8.92596 11.7937 8.50002C12.1951 8.07502 12.6909 7.86252 13.2812 7.86252C13.8715 7.86252 14.3791 8.07502 14.8041 8.50002L19.302 12.9979L21.3208 10.9792L25.2874 15.0167C25.5708 15.3 25.7124 15.6306 25.7124 16.0084C25.7124 16.3861 25.5708 16.7167 25.2874 17C25.0041 17.2833 24.6735 17.425 24.2958 17.425C23.918 17.425 23.5874 17.2833 23.3041 17L10.2708 30.0333C9.98743 30.3167 9.67435 30.5235 9.33152 30.6538C8.98868 30.7842 8.64066 30.8489 8.28743 30.8479C7.93327 30.8479 7.5791 30.7771 7.22493 30.6354C6.87077 30.4938 6.55202 30.2931 6.26869 30.0333Z"
                              fill="#B22234"
                            />
                          </svg>{" "}
                          {e.selected_queries}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div class="mb-part-2 mb--part--2--alt--h">
            <div class="my-list-1">
              <div class="id-my-card">
                <div class="admin-logo-dp">
                  <img src={total_vendors} alt="" />
                </div>
                <span>
                  <h2>Dylan Sloan</h2>
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
    </div>
  );
};

export default ShowCustomerProfile;
