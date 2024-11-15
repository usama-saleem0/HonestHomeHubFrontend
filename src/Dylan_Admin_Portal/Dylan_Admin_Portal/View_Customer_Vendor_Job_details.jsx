import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../../config/apiHandle/apiHandle";

import m1 from "../../../src/assets/m1.png";
import m2 from "../../../src/assets/m2.png";
import m3 from "../../../src/assets/m3.png";
import m4 from "../../../src/assets/m4.png";
import m5 from "../../../src/assets/m5.png";
import m6 from "../../../src/assets/m6.png";

import pic1 from "../../../src/assets/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg";

import dashlogo from "../../../src/assets/dashlogo.png";
import total_vendors from "../../../src/assets/total_vendors2.png";
import job_pic from "../../../src/assets/m6.png";

import vendor_profile from "../../../src/assets/person_image.png";
import { useParams } from "react-router-dom";
import ImageSlider from "../../component/ChatApp/Image_Slider";
import { useDispatch, useSelector } from "react-redux";
import { get_admin_complete_job_tracking_by_id } from "../../services/customerService";
import star from "../../assets/Star.png";
import edit from "../../assets/edit.png";
import amd from "../../assets/amd.png";
import deleteimg from "../../assets/delete.png";
import projectclosed from "../../assets/projectclosed.png";
import who_img from "../../assets/who_img.png";
import cancel from "../../assets/cancel.png";
import save from "../../assets/save.png";

const Customer_Vendor = () => {
  const dispatch = useDispatch();

  const [order_id, setorder_id] = useState("");
  const [selected_queries, setselected_queries] = useState("");
  const [description, setdescription] = useState("");
  const [job_created_date, setjob_created_date] = useState("");

  const [Job_Review, setJob_Review] = useState([]);

  const [get_selected_vendor_profile, setget_selected_vendor_profile] =
    useState([]);

  const [Vendor_Selected, setVendor_Selected] = useState([]);

  const [PendingVendor, setPendingVendor] = useState([]);

  const [Selected_Quote, setSelected_Quote] = useState([]);

  const [CustomerProfile, setCustomerProfile] = useState([]);

  const [jobdata, setjobdata] = useState("");

  const { id } = useParams();

  // useEffect(() => {
  //   console.log("tlllllllllll");

  //   axios
  //     .get(`${baseURL}/get_vendor_customer_job_detailstt/${id}`)
  //     .then((response) => {
  //       console.log(response.data, "CUSTOMER_VENDOR_DETAILS");

  //       const data = response.data.data;

  //       setorder_id(data.Order_Id || "-");
  //       setselected_queries(data.selected_queries || "-");
  //       setdescription(data.details || "-");
  //       setjob_created_date(data.createdAt || "-");
  //       setjobdata(data)

  //       // Check if Job_Review is not null or undefined
  //       if (
  //         response.data.Job_Review &&
  //         response.data.Job_Review.rating !== null
  //       ) {
  //         setJob_Review(response.data.Job_Review);
  //       }

  //       if (
  //         response.data.PendingVendors
  //       ) {
  //         setPendingVendor(response.data.PendingVendors);
  //       }

  //       // Check if get_selected_vendor_profile is not null or undefined
  //       if (
  //         response.data.selectedVendorProfiles &&
  //         response.data.selectedVendorProfiles.Name !== null
  //       ) {
  //         setget_selected_vendor_profile(
  //           response.data.selectedVendorProfiles[0]
  //         );
  //       }

  //       // Check if Vendor_Selected is not null or undefined
  //       if (
  //         response.data.vendorsForJob &&
  //         response.data.vendorsForJob.vendorId !== null
  //       ) {
  //         setVendor_Selected(response.data.QuoteVendors);
  //       }

  //       // Check if selectedObjects is not null or undefined
  //       if (
  //         response.data.selectedObjects &&
  //         response.data.selectedObjects.vendorId !== null
  //       ) {
  //         setSelected_Quote(response.data.selectedObjects);
  //       }

  //       // Check if customer_details is not null or undefined
  //       if (
  //         response.data.customerDetails &&
  //         response.data.customerDetails.Name !== null
  //       ) {
  //         setCustomerProfile(response.data.customerDetails);
  //       }

  //       console.log(Selected_Quote, "Vendor Selected");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   fetchDataForMonth();
  // }, []);

  useEffect(() => {
    dispatch(get_admin_complete_job_tracking_by_id(id));
  }, []);

  const {
    JobDetails,
    PendingVendors,
    QuoteVendors,
    customerDetails,
    jobReview,
    selectedVendorProfiles,
    selectedVendors,
    vendorsForJob,
    FinalVendor,
    get_admin_complete_job_tracking_by_id_status,
  } = useSelector((state) => state.customerAuth);

  // console.log(  JobDetails,
  //   PendingVendors,
  //   QuoteVendors,
  //   customerDetails,
  //   jobReview,
  //   selectedVendorProfiles,
  //   selectedVendors,
  //   vendorsForJob,"mmm")

  // console.log(jobReview, "selectedVendorProfiles");
  // console.log("jobReview", jobReview);

  const [total_amount, settotal_amount] = useState("500");

  const fetchDataForMonth = async () => {
    try {
      const response = await axios.get(`${baseURL}/getallreviews`);

      settotal_amount(response.data.cost);
    } catch (error) {
      console.error("Error fetching data from the backend:", error);
    }
  };

  // Parse the ISO 8601 date string
  const date = new Date(job_created_date);

  // Format the date to "day month year" format
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Format the time to "hour:minute AM/PM" format
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formatTime1 = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);
    const suffix = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${suffix}`;
  };

  const DateFormatCustom = (date) => {
    let x = date;

    const month = [
      "ts",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const mm = x.split("-")[1];

    const yy = x.split("-")[0];

    const dd = x.split("-")[2];

    const y = mm[0].includes("0") ? mm.split("0")[1] : mm;

    // console.log(y)

    const  final_date= month[y]+" "+ dd+" "+ yy

    return final_date;

    // console.log(dd,month[y],yy)
  };

  const Delete_Pending_Vendor = (id) => {
    console.log(id, "DELETE");

    delete_pending_schedule(id);
  };

  const delete_pending_schedule = async (s_id) => {
    const formData = {
      _id: s_id,
      job_id: id,
    };

    axios
      .post(`${baseURL}/deleteschedule`, formData)
      .then((res) => {
        console.log(res);

        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Delete_Quote_Vendor = (id) => {
    console.log(id, "DELETE");

    delete_Quote_schedule(id);
  };

  const delete_Quote_schedule = async (s_id) => {
    const formData = {
      _id: s_id,
      job_id: id,
    };

    axios
      .post(`${baseURL}/deletequoteschedule`, formData)
      .then((res) => {
        console.log(res);

        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [filterjobtype, setfilterjobtype] = useState("None");

  const [editableJob, setEditableJob] = useState({
    selected_queries: "",
    job_type: "",
    details: "",
    phase: "",
    location: "",
    amount: "",
    availablity_times: [],
    availablity_time: [],
  });

  // Update editableJob when JobDetails is available
  React.useEffect(() => {
    if (JobDetails) {
      console.log("Job details are there  : ", JobDetails);
      setEditableJob({
        selected_queries: JobDetails.selected_queries || "",
        job_type: JobDetails.job_type || "",
        details: JobDetails.details || "",
        phase: JobDetails.phase || "",
        location: JobDetails.location || "",
        amount: JobDetails.amount || "",
        availablity_times: JobDetails.availablity_times || [],
        availablity_time: JobDetails.availablity_time || [],
      });
    }
  }, [JobDetails]);

  const [isEditing, setIsEditing] = useState(false);
  const [tempJob, setTempJob] = useState({ ...editableJob });

  const handleChangeDropdown = (e) => {
    // Update the job type in the tempJob state
    setTempJob((prev) => ({
      ...prev,
      selected_queries: e.target.value, // Update the job_type field
    }));
  };

  // const handleInputChange = (key, value) => {
  //   // Update other fields in the formData array
  //   setFormData((prevData) =>
  //     prevData.map((item) => (item.key === key ? { ...item, value } : item))
  //   );
  // };

  // Save function that logs the formData array to the console

  const handleSave = async () => {
    console.log("Saving job:", tempJob);
    try {
      const response = await axios.patch(
        `${baseURL}/update-customer-job/${id}`,
        tempJob
      );
      setIsEditing(false);

      setEditableJob(response.data);
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };
  const handleInputChange = (field, value) => {
    setTempJob({ ...tempJob, [field]: value }); // Update tempJob instead of editableJob
  };

  // const handleDateChange = (index, key, value) => {
  //   setEditableJob((prev) => {
  //     const updatedTimes = prev.availablity_times.map((item, i) =>
  //       i === index ? { ...item, [key]: value } : item
  //     );
  //     return { ...prev, availablity_times: updatedTimes };
  //   });
  // };

  const handleDateChange = (index, field, value) => {
    const newAvailabilities = [...tempJob.availablity_times];

    if (field === "date") {
      newAvailabilities[index].date = value;
    } else if (field === "times") {
      newAvailabilities[index].times[0] = value;
    }

    // Update only availablity_times
    setTempJob({
      ...tempJob,
      availablity_times: newAvailabilities, // Remove this if it's not necessary
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setTempJob({ ...editableJob }); // Copy current job details to tempJob when editing starts
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setTempJob({ ...editableJob }); // Reset tempJob to original editableJob values
  };

  return (
    <div>
      <section className="by-go-ja customer--vendor--job--dylan--dash--h">
        <div class="main-by-go-ja">
          <div class="ts-bhai">
            <div class="mb-box-1-3">
              <div className="who-logo">
                <img src={dashlogo} alt="" />
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
            <div class="main-ts-bhai">
              <div class="ts-bhai-box">
                <div class="ts-list-bhai-1">
                  <h2>Order IDs: {JobDetails?.Order_Id}</h2>
                </div>

                {/* <div class="ts-list-bhai-2">
                  <h3>Timeline</h3>
                </div> */}
                <div className="outer-vendor-customer-job-details-div-ar">
                  <div className="side-number-line-ar"></div>
                  <div class="ts-list-bhai-3">
                    <div class="who-list-1">
                      <div className="detail-sideediv-ar">
                        <div class="who-tital">
                          <h2>Job Created</h2>
                          <p style={{ color: "#000" }}>
                            {JobDetails&& DateFormatCustom(JobDetails?.createdAt.split('T')[0])},  {JobDetails&& formatTime1(JobDetails?.createdAt.split('T')[1])}
                          </p>
                          <div className="number-circle-div-ar1">
                            <p className="number-circle-div-ar-p">01</p>
                          </div>
                        </div>

                        <div className="who-box">
                          <div className="who-box-inner">
                            <div className="who-box-tital">
                              <div className="heading-para-job-created-ar">
                                <h2>
                                  {isEditing ? (
                                    <>
                                      <div className="labeldropdown adminjobdropdowndiv">
                                        <select
                                          id="dropdown"
                                          value={tempJob.job_type} // Use tempJob directly
                                          onChange={handleChangeDropdown} // Ensure this points to the correct handler
                                          className="dropdownid"
                                        >
                                          <option value="">
                                            Type of Service
                                          </option>
                                          <option value="Heating, Ventilation, Air Conditioning">
                                            Heating, Ventilation, Air
                                            Conditioning
                                          </option>
                                          <option value="Water Heater">
                                            Water Heater
                                          </option>
                                          <option value="Roofing">
                                            Roofing
                                          </option>
                                          <option value="Plumbing">
                                            Plumbing
                                          </option>
                                          <option value="Remodeling">
                                            Remodeling
                                          </option>
                                          <option value="Landscaping">
                                            Landscaping
                                          </option>
                                          <option value="Cleaning">
                                            Cleaning
                                          </option>
                                          <option value="Fencing">
                                            Fencing
                                          </option>
                                          <option value="Handyman">
                                            Handyman
                                          </option>
                                        </select>
                                      </div>
                                      <h2>Selected Type: {tempJob.job_type}</h2>
                                    </>
                                  ) : (
                                    editableJob.selected_queries
                                  )}
                                </h2>

                                <p>
                                  {isEditing ? (
                                    <textarea
                                      value={tempJob.details}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "details",
                                          e.target.value
                                        )
                                      }
                                    />
                                  ) : (
                                    editableJob.details
                                  )}
                                </p>
                              </div>
                              <div className="heading-para-job-created-ar">
                                <h2>Date and Time</h2>
                                { (editableJob?.amount=="" || editableJob?.amount=='T,,')&&editableJob.availablity_times.map((e, i) => (
                                  <div
                                    key={i}
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      gap: "20px",
                                    }}
                                  >
                                    {isEditing ? (
                                      <>
                                        <input
                                          type="date"
                                          value={e?.date} // This should point to tempJob.availablity_times
                                          onChange={(event) =>
                                            handleDateChange(
                                              i,
                                              "date",
                                              event.target.value
                                            )
                                          }
                                        />
                                        <input
                                          type="time"
                                          value={e?.times[0]} // This should point to tempJob.availablity_times
                                          onChange={(event) =>
                                            handleDateChange(i, "times", [
                                              event.target.value,
                                            ])
                                          }
                                        />
                                      </>
                                    ) : (
                                      <>
                                        <p>{DateFormatCustom(e?.date)}</p>
                                        <p>{formatTime1(e?.times[0])}</p>
                                      </>
                                    )}
                                  </div>
                                ))}
                                { (editableJob?.amount!="" && editableJob?.amount!='T,,') && editableJob?.amount}
                              </div>
                              <div className="heading-para-job-created-ar">
                                <h2>Job Step</h2>
                                <p>
                                  {isEditing ? (
                                    <input
                                      type="text"
                                      value={tempJob.phase}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "phase",
                                          e.target.value
                                        )
                                      }
                                    />
                                  ) : (
                                    editableJob.phase
                                  )}
                                </p>
                              </div>
                              <div className="heading-para-job-created-ar">
                                <h2>Address</h2>
                                <p>
                                  {isEditing ? (
                                    <input
                                      type="text"
                                      value={tempJob.location}
                                      onChange={(e) =>
                                        handleInputChange(
                                          "location",
                                          e.target.value
                                        )
                                      }
                                    />
                                  ) : (
                                    editableJob.location
                                  )}
                                </p>
                              </div>
                            </div>

                            <div className="who-box-imger">
                              {JobDetails &&JobDetails?.images !=null && (
                                <ImageSlider
                                  images={JobDetails?.images }
                                  className="unique-class-6"
                                />
                              )}
                            </div>
                          </div>
                          <button
                            className="edit-delete-update-btn-ar"
                            onClick={
                              isEditing ? handleCancelClick : handleEditClick
                            }
                          >
                            <div
                              style={{
                                display: isEditing ? "none" : "block",
                              }}
                            >
                              <img src={edit} alt="" />
                            </div>
                            <div
                              style={{
                                width: "10px",
                                display: isEditing ? "block" : "none",
                              }}
                            >
                              <img
                                style={{ width: "100%" }}
                                src={cancel}
                                alt=""
                              />
                            </div>
                            {isEditing ? "Cancel" : "Edit"}
                          </button>

                          {isEditing && (
                            <button
                              style={{ marginTop: "10px" }}
                              className="edit-delete-update-btn-ar"
                              onClick={handleSave}
                            >
                              <div
                                style={{
                                  width: "10px",
                                }}
                              >
                                <img
                                  style={{ width: "100%" }}
                                  src={save}
                                  alt=""
                                />
                              </div>
                              Save Changes
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div class="who-list-1">
                      <div className="vendor-applied-side-div-ar">
                        <div class="who-tital">
                          <h2>Vendors Applied</h2>
                          {/* <p>24 March 2024  18:00</p> */}
                          <div className="number-circle-div-ar2">
                            <p className="number-circle-div-ar-p">02</p>
                          </div>
                        </div>

                        <div class="jj-ar who--box--dylan--dash--h">
                          {PendingVendors?.map((job) => {
                            return (
                              <div className="box-vendor-applied-ar">
                                <div className="amdlogo-heading-ar">
                                  <div className="amd-img-ar">
                                    <img src={job?.gig_image} alt="" />
                                  </div>
                                  <span>
                                    <h5>{job?.Vendor_Name}</h5>
                                    <h6>{job?.Vendor_Schedule_Descriptions}</h6>
                                  </span>
                                </div>
                                <div className="status-vendor-applied-ar">
                                  <h5>Status:</h5>
                                  <h6>{job?.status}</h6>
                                </div>
                                <button className="edit-delete-update-btn-ar" onClick={()=>Delete_Pending_Vendor(job?._id)}>
                                  <div className="delete-img-ar">
                                    <img src={deleteimg} alt="" />
                                  </div>
                                  Delete
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div class="who-list-1">
                      <div className="vendor-applied-side-div-ar">
                        <div class="who-tital">
                          <h2>Selected Vendor Profile</h2>
                          <div className="number-circle-div-ar3">
                            <p className="number-circle-div-ar-p">03</p>
                          </div>
                        </div>
                        
                            <div
                             
                              class="jj-ar who--box--dylan--dash--h"
                            >
                              <div class="vendor-applied-div-ar custumber--card--dylan--dash--h">
                                <div class="cs-list2">
                                  <div class="cs-card">
                                    <div class="cs-card-tital cs--card--tital--dylan--dash--h">
                                      <div className="customer--vendor--job--card--dylan--dash--h">
                                        <img src={selectedVendorProfiles?.Profile_Image} alt="" />
                                      </div>
                                      <span>
                                        <h2>
                                          {selectedVendorProfiles?.Name}
                                        </h2>
                                        <p>Vendor</p>
                                      </span>
                                    </div>
                                    <div className="project-closed-rating-ar">
                                      <div className="star-img">
                                        <img src={star} alt="" />
                                      </div>
                                      <h2 className="rating-text-ar">
                                        {Job_Review.rating
                                          ? Job_Review.rating
                                          : "4.5"}
                                      </h2>
                                    </div>
                                  </div>

                                  {/* <div class="cs-card-para">
                            <h3>Intro</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue leo, dapibus vitae cursus sed, tempor fringilla .</p>
                        </div> */}
                                  <div class="cs-ul-li">
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
                                          fill="#fff"
                                        />
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M3.1456 7.3975C3.28384 5.72215 4.04697 4.16003 5.2835 3.02121C6.52003 1.8824 8.13956 1.25016 9.8206 1.25H10.1806C11.8616 1.25016 13.4812 1.8824 14.7177 3.02121C15.9542 4.16003 16.7174 5.72215 16.8556 7.3975C17.01 9.26791 16.4325 11.1253 15.2448 12.5783L11.2506 17.4633C11.0992 17.6486 10.9085 17.7979 10.6923 17.9005C10.4762 18.003 10.2399 18.0562 10.0006 18.0562C9.76133 18.0562 9.52505 18.003 9.30886 17.9005C9.09268 17.7979 8.90199 17.6486 8.7506 17.4633L4.75727 12.5783C3.56919 11.1254 2.9914 9.26802 3.1456 7.3975ZM10.0006 4.375C8.95079 4.375 7.94397 4.79204 7.20164 5.53437C6.45931 6.2767 6.04227 7.28352 6.04227 8.33333C6.04227 9.38315 6.45931 10.39 7.20164 11.1323C7.94397 11.8746 8.95079 12.2917 10.0006 12.2917C11.0504 12.2917 12.0572 11.8746 12.7996 11.1323C13.5419 10.39 13.9589 9.38315 13.9589 8.33333C13.9589 7.28352 13.5419 6.2767 12.7996 5.53437C12.0572 4.79204 11.0504 4.375 10.0006 4.375Z"
                                          fill="#fff"
                                        />
                                      </svg>
                                      {selectedVendorProfiles?.Home_Address}
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
                                          fill="#fff"
                                        />
                                      </svg>
                                      {selectedVendorProfiles?.phoneno}
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
                                          fill="#fff"
                                        />
                                        <path
                                          d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z"
                                          fill="#fff"
                                        />
                                      </svg>{" "}
                                      { 
                                        selectedVendorProfiles?.email}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                        
                      </div>
                    </div>

                    <div class="who-list-1">
                      <div className="vendor-applied-side-div-ar">
                        <div class="who-tital">
                          <h2>Quotes Created</h2>
                          {/* <p>24 March 2024  18:00</p> */}
                          <div className="number-circle-div-ar4">
                            <p className="number-circle-div-ar-p">04</p>
                          </div>
                        </div>

                        <div class="jj-ar who--box--dylan--dash--h">
                          {QuoteVendors?.map((quote) => {
                            return (
                              <div className="box-vendor-applied-ar">
                                <div className="amdlogo-heading-ar">
                                  <div className="amd-img-ar">
                                    <img src={quote?.gig_image} alt="" />
                                  </div>
                                  <span>
                                    <h5>{quote?.Vendor_Name}</h5>
                                    <h6>
                                      {quote?.Vendor_Schedule_Descriptions}
                                    </h6>
                                  </span>
                                </div>
                                <div className="note-job-price-div-ar">
                                  <div className="note-pending-ar">
                                    <h5>Note:</h5>
                                    <h6>{quote?.shedule_descriptions}</h6>
                                  </div>
                                  <div className="note-pending-ar">
                                    <h5>Job Duration:</h5>
                                    <h6>{quote?.jobtime}</h6>
                                  </div>
                                  <div className="note-pending-ar">
                                    <h5>Price:</h5>
                                    <h6>${quote?.vendorBudget}</h6>
                                  </div>
                                </div>
                                <button className="edit-delete-update-btn-ar" onClick={()=>Delete_Quote_Vendor(quote?._id)}>
                                  <div className="delete-img-ar">
                                    <img src={deleteimg} alt="" />
                                  </div>
                                  Delete
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>




                    <div class="who-list-1">
                      <div className="vendor-applied-side-div-ar">
                        <div class="who-tital">
                          <h2>Quote Selected</h2>
                          {/* <p>24 March 2024  18:00</p> */}
                          <div className="number-circle-div-ar4">
                            <p className="number-circle-div-ar-p">04</p>
                          </div>
                        </div>

                        <div class="jj-ar who--box--dylan--dash--h">
                          {FinalVendor?.map((quote) => {
                            return (
                              <div className="box-vendor-applied-ar">
                                <div className="amdlogo-heading-ar">
                                  <div className="amd-img-ar">
                                    <img src={quote?.gig_image} alt="" />
                                  </div>
                                  <span>
                                    <h5>{quote?.Vendor_Name}</h5>
                                    <h6>
                                      {quote?.Vendor_Schedule_Descriptions}
                                    </h6>
                                  </span>
                                </div>
                                <div className="note-job-price-div-ar">
                                  <div className="note-pending-ar">
                                    <h5>Note:</h5>
                                    <h6>{quote?.shedule_descriptions}</h6>
                                  </div>
                                  <div className="note-pending-ar">
                                    <h5>Job Duration:</h5>
                                    <h6>{quote?.jobtime}</h6>
                                  </div>
                                  <div className="note-pending-ar">
                                    <h5>Price:</h5>
                                    <h6>${quote?.vendorBudget}</h6>
                                  </div>
                                </div>
                                <button className="edit-delete-update-btn-ar" onClick={()=>Delete_Quote_Vendor(quote?._id)}>
                                  <div className="delete-img-ar">
                                    <img src={deleteimg} alt="" />
                                  </div>
                                  Delete
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* <div class="who-list-1">
                    <img src={m4} alt="" class="mm" />
                    <div class="who-tital">
                      <h2>Selected Quote</h2>
                      <p>
                        {Selected_Quote.lenght > 0
                          ? Selected_Quote[0].date
                          : "Date"}
                      </p>
                    </div>

                    <div class="who-box">
                      <div class="Vendor-id">
                        <img
                          src={
                            Selected_Quote.lenght > 0
                              ? Selected_Quote[0].gig_image
                              : vendor_profile
                          }
                          alt=""
                        />
                        <span>
                          <h2>
                            {Selected_Quote.length > 0
                              ? Selected_Quote[0].Vendor_Name
                              : "Name"}
                          </h2>
                          <p>Vendor</p>
                        </span>
                      </div>

                      <div class="Vendor-ul-boxer">
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
                          </svg>{" "}
                          United States
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
                          {get_selected_vendor_profile.phoneno
                            ? get_selected_vendor_profile.phoneno
                            : "No Number Yet"}
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
                          </svg>{" "}
                          {get_selected_vendor_profile.email
                            ? get_selected_vendor_profile.email
                            : "Email@email.com"}
                        </span>
                      </div>

                      <div class="Vendor-para">
                        <h2>{Job_Review.rating ? Job_Review.rating : "-"}</h2>
                        <p>Rating</p>
                      </div>
                    </div>
                  </div> */}

                    <div class="who-list-1">
                      <div className="vendor-applied-side-div-ar">
                        <div class="who-tital">
                          <h2>Payment Option</h2>
                          <div className="number-circle-div-ar5">
                            <p className="number-circle-div-ar-p">05</p>
                          </div>
                        </div>
                        {FinalVendor?.map((finalvendor) => {
                          return (
                            <div class="jj-ar who--box--dylan--dash--h">
                              <div class="vendor-applied-div-ar custumber--card--dylan--dash--h">
                                <div
                                  style={{
                                    paddingTop: "15px",
                                    paddingBottom: "15px",
                                  }}
                                >
                                  <div className="note-pending-ar">
                                    <h5>Total Amount:</h5>
                                    <h6>${finalvendor?.vendorBudget}</h6>
                                  </div>
                                  <div className="note-pending-ar">
                                    <h5>Status:</h5>
                                    <h6>{finalvendor?.Paystatus}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div class="who-list-1">
                      <div className="vendor-applied-side-div-ar">
                        <div class="who-tital">
                          <h2>Project Closed</h2>
                          <div className="number-circle-div-ar6">
                            <p className="number-circle-div-ar-p">06</p>
                          </div>
                        </div>

                        <div class="jj-ar who--box--dylan--dash--h">
                          <div class="project-closed-div-ar">
                            <div className="project-closed-img-div-ar">
                              <img src={projectclosed} alt="" />
                            </div>
                            <div className="project-closed-detail-ar">
                              <h5>John Smith</h5>
                              <h6>Customer</h6>
                              <p>{jobReview?.review}</p>
                            </div>
                            <div className="project-closed-rating-ar">
                              <div className="star-img">
                                <img src={star} alt="" />
                              </div>
                              <h2 className="rating-text-ar">
                                {jobReview?.rating ? jobReview?.rating : "4.5"}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ts-bhai-box-1 ts--bhai--box--dylan--dash--h">
                    <div className="customer-crad-outer-ar">
                      <h5>Customer Profile</h5>
                      <div class="custumber-card custumber--card--dylan--dash--h">
                        <div class="cs-list2">
                          <div class="cs-card">
                            <div class="cs-card-tital cs--card--tital--dylan--dash--h">
                              <div className="customer--vendor--job--card--dylan--dash--h">
                                <img src={vendor_profile} alt="" />
                              </div>

                              <span>
                                <h2>{customerDetails?.Name}</h2>
                                <p>Customer</p>
                              </span>
                            </div>
                            <span>
                              {/* <h2>4.5</h2>
                        <p>Rating</p> */}
                            </span>
                          </div>

                          {/* <div class="cs-card-para">
                            <h3>Intro</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue leo, dapibus vitae cursus sed, tempor fringilla .</p>
                        </div> */}
                          <div class="cs-ul-li">
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
                                  fill="#fff"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.1456 7.3975C3.28384 5.72215 4.04697 4.16003 5.2835 3.02121C6.52003 1.8824 8.13956 1.25016 9.8206 1.25H10.1806C11.8616 1.25016 13.4812 1.8824 14.7177 3.02121C15.9542 4.16003 16.7174 5.72215 16.8556 7.3975C17.01 9.26791 16.4325 11.1253 15.2448 12.5783L11.2506 17.4633C11.0992 17.6486 10.9085 17.7979 10.6923 17.9005C10.4762 18.003 10.2399 18.0562 10.0006 18.0562C9.76133 18.0562 9.52505 18.003 9.30886 17.9005C9.09268 17.7979 8.90199 17.6486 8.7506 17.4633L4.75727 12.5783C3.56919 11.1254 2.9914 9.26802 3.1456 7.3975ZM10.0006 4.375C8.95079 4.375 7.94397 4.79204 7.20164 5.53437C6.45931 6.2767 6.04227 7.28352 6.04227 8.33333C6.04227 9.38315 6.45931 10.39 7.20164 11.1323C7.94397 11.8746 8.95079 12.2917 10.0006 12.2917C11.0504 12.2917 12.0572 11.8746 12.7996 11.1323C13.5419 10.39 13.9589 9.38315 13.9589 8.33333C13.9589 7.28352 13.5419 6.2767 12.7996 5.53437C12.0572 4.79204 11.0504 4.375 10.0006 4.375Z"
                                  fill="#fff"
                                />
                              </svg>{" "}
                              {customerDetails?.Home_Address}
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
                                  fill="#fff"
                                />
                              </svg>
                              {customerDetails?.phoneno}
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
                                  fill="#fff"
                                />
                                <path
                                  d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z"
                                  fill="#fff"
                                />
                              </svg>{" "}
                              {customerDetails?.email}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="customer-crad-outer-ar">
                      <h5>Vendor Profile</h5>
                      <div class="custumber-card custumber--card--dylan--dash--h">
                        <div class="cs-list2">
                          <div class="cs-card">
                            <div class="cs-card-tital cs--card--tital--dylan--dash--h">
                              <div className="customer--vendor--job--card--dylan--dash--h">
                                <img
                                  src={
                                    selectedVendorProfiles?.Profile_Image
                                  }
                                  alt=""
                                />
                              </div>
                              <span>
                                <h2>
                                  {selectedVendorProfiles?.Name}
                                </h2>
                                <p>Vendor</p>
                              </span>
                            </div>
                            <div className="project-closed-rating-ar">
                              <div className="star-img">
                                <img src={star} alt="" />
                              </div>
                              <h2 className="rating-text-ar">
                                {jobReview?.rating ? jobReview?.rating : "4.5"}
                              </h2>
                            </div>
                          </div>

                          {/* <div class="cs-card-para">
                            <h3>Intro</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue leo, dapibus vitae cursus sed, tempor fringilla .</p>
                        </div> */}
                          <div class="cs-ul-li">
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
                                  fill="#fff"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.1456 7.3975C3.28384 5.72215 4.04697 4.16003 5.2835 3.02121C6.52003 1.8824 8.13956 1.25016 9.8206 1.25H10.1806C11.8616 1.25016 13.4812 1.8824 14.7177 3.02121C15.9542 4.16003 16.7174 5.72215 16.8556 7.3975C17.01 9.26791 16.4325 11.1253 15.2448 12.5783L11.2506 17.4633C11.0992 17.6486 10.9085 17.7979 10.6923 17.9005C10.4762 18.003 10.2399 18.0562 10.0006 18.0562C9.76133 18.0562 9.52505 18.003 9.30886 17.9005C9.09268 17.7979 8.90199 17.6486 8.7506 17.4633L4.75727 12.5783C3.56919 11.1254 2.9914 9.26802 3.1456 7.3975ZM10.0006 4.375C8.95079 4.375 7.94397 4.79204 7.20164 5.53437C6.45931 6.2767 6.04227 7.28352 6.04227 8.33333C6.04227 9.38315 6.45931 10.39 7.20164 11.1323C7.94397 11.8746 8.95079 12.2917 10.0006 12.2917C11.0504 12.2917 12.0572 11.8746 12.7996 11.1323C13.5419 10.39 13.9589 9.38315 13.9589 8.33333C13.9589 7.28352 13.5419 6.2767 12.7996 5.53437C12.0572 4.79204 11.0504 4.375 10.0006 4.375Z"
                                  fill="#fff"
                                />
                              </svg>
                              {selectedVendorProfiles ?.Home_Address}
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
                                  fill="#fff"
                                />
                              </svg>
                              {selectedVendorProfiles ?.phoneno}
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
                                  fill="#fff"
                                />
                                <path
                                  d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z"
                                  fill="#fff"
                                />
                              </svg>{" "}
                              {selectedVendorProfiles ?.email}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <h2>Dylan Sloan</h2>
                  <h3>Admin</h3>
                </span>
              </div>
              {/* <div className="admin-customer-header-logo-div-ar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M18.9997 0H0.333008V32.6667H32.9997V14H28.333V28H4.99967V4.66667H18.9997V0Z"
                    fill="#0874B7"
                  />
                  <div className="notification-div-absolute">
                    <p>10</p>
                  </div>
                </svg>
              </div> */}
            </div>

            <div class="my-list-2">
              <div>
                <p>Total Transactions</p>

                <h3>${total_amount}</h3>

                <a href="#">View Report</a>
              </div>
              <button className="filter-btn-ar">Filter</button>
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

export default Customer_Vendor;
