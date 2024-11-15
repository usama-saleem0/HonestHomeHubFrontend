import React from "react";
import Header from "./header/Header";

import Footer1 from "./footer/Footer1";

import { Container, Divider, Grid } from "@mui/material";
// import React from 'react'
import { Stack } from "react-bootstrap";
import "./footer/index.css";
// import CustomInput from '../input/IconInput'
// import Link from '@mui/material'
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";

import LandingPageHeader from "./header/LandingPageHeader";
import HeroSection from "../hero/HeroSection";
import Footerh from "./footer/Footerhamza";

const Howitworkvendor = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div style={{ backgroundColor: "#0874b7" }}>
      <>
        <div className="header" style={{ backgroundColor: "#0874b7" }}>
          <LandingPageHeader />

          <HeroSection />
        </div>

        {/* <hr
          style={{
            color: "#FFFFFF",
            border: "2px solid #FFFFFF",
            backgroundColor: "white",
          }}
        /> */}

        {/* <Header /> */}
        <Container
          maxWidth=""
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            border: "4px solid #0874b7",
            borderRadius: "15px",
            width: "80%",
            backgroundColor: "#0874b7",
            color: "white",
          }}
        >
          <div className=" ">
            <div>
              <h1 className="text-center" style={{ fontSize: "4.1rem" }}>
                How Honest Home Hub Works for Vendors
              </h1>
              <br />
              <p style={{ fontSize: "larger" }}>
                Welcome to Honest Home Hub! We're excited to partner with you to
                provide top-notch home services to our customers. This guide
                will walk you through how our platform works and how you can
                make the most of it.
              </p>
              {/* <p style={{ fontSize: "larger" }}>
                Protecting your private information is our priority. This
                Statement of Privacy applies to honesthomehub.com, and Honest
                Home Hub and governs data collection and usage. For the purposes
                of this Privacy Policy, unless otherwise noted, all references
                to Honest Home Hub include honesthomehub.com. The Honest Home
                Hub website is a Home Services Marketplace site. By using the
                Honest Home Hub website, you consent to the data practices
                described in this statement.{" "}
              </p> */}
              {/* <h1>Overview</h1>
              <p style={{ fontSize: "larger" }}>
                Honest Home Hub is your go-to platform for all your home service
                needs. We make it easy for you to get multiple quotes, compare
                options, and select the best service provider for your specific
                requirements. With Honest Home Hub, you can sit back, relax, and
                let us handle the hassle of finding reliable home service
                professionals.
              </p> */}
              {/* <ul>
                <li style={{ fontSize: "larger" }}>First and Last Name</li>
                <li style={{ fontSize: "larger" }}>Mailing Address</li>
                <li style={{ fontSize: "larger" }}>E-mail Address</li>
                <li style={{ fontSize: "larger" }}>Phone Number</li>
              </ul>
              <p style={{ fontSize: "larger" }}>
                If you purchase Honest Home Hub's products and services, we
                collect billing and credit card information. This information is
                used to complete the purchase transaction.
              </p>
              <p style={{ fontSize: "larger" }}>
                Honest Home Hub may also collect anonymous demographic
                information, which is not unique to you, such as your:
              </p>
              <ul>
                <li style={{ fontSize: "larger" }}>Age</li>
                <li style={{ fontSize: "larger" }}>Gender</li>
              </ul>
              <p style={{ fontSize: "larger" }}>
                We do not collect any personal information about you unless you
                voluntarily provide it to us. However, you may be required to
                provide certain personal information to us when you elect to use
                certain products or services. These may include: (a) registering
                for an account; (b) entering a sweepstakes or contest sponsored
                by us or one of our partners; (c) signing up for special offers
                from selected third parties; (d) sending us an email message;
                (e) submitting your credit card or other payment information
                when ordering and purchasing products and services. To wit, we
                will use your information for, but not limited to, communicating
                with you in relation to services and/or products you have
                requested from us. We also may gather additional personal or
                non-personal information in the future.
              </p> */}
              <h1>Getting Started</h1>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> 1. Sign Up </h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Visit the Website:{" "}
                </span>
                <span>Go to honesthomehub.com.</span>
                <p></p>

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Click "Sign Up":{" "}
                </span>
                <span>
                  Navigate to the "Sign Up" section and click on "Vendor."
                </span>

                <p></p>

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Create an Account:{" "}
                </span>
                <span>
                  Register with your business details, including your service
                  areas, specialties, and contact information.
                </span>

                <p></p>

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Verification:{" "}
                </span>
                <span>
                  Complete the verification process to ensure your business
                  meets our quality standards.
                </span>
              </p>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> 2. Profile Setup </h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Business Profile:{" "}
                </span>
                <span>
                  Set up your business profile with a detailed description,
                  services offered, pricing, and photos of past work.
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Availability:{" "}
                </span>
                <span>
                  Update your availability calendar so customers know when
                  you’re free to take on new jobs.{" "}
                </span>

                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Insurance and Licensing:{" "}
                </span>
                <span>
                  (Optional) Upload any relevant insurance and licensing
                  documents to build trust with potential clients.{" "}
                </span>
              </p>

              {/* ================== */}

              <h1>Receiving Job Requests</h1>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> 3. Job Alerts</h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Notifications:{" "}
                </span>
                <span>
                  Receive notifications via the app or email when a customer
                  requests a quote for a service you offer.
                </span>
                <p></p>

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Review Details:{" "}
                </span>
                <span>
                  Review the job details, including the scope of work, location,
                  and any special requirements provided by the customer.
                </span>
              </p>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> 4. Submit Quotes </h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Prepare a Quote:{" "}
                </span>
                <span>
                  Based on the job details, prepare a detailed and competitive
                  quote.
                </span>
                <p></p>

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Submit:{" "}
                </span>
                <span>
                  Send your quote through the app. The customer will receive
                  quotes from multiple vendors to compare.
                </span>
              </p>

              {/* ======================= */}
              {/* *********** */}

              <h1>Managing Jobs</h1>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> 5. Job Confirmation</h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Customer Selection:{" "}
                </span>
                <span>
                  If the customer selects your quote, you’ll receive a
                  notification to confirm the job.
                </span>
                <p></p>

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Confirmation:{" "}
                </span>
                <span>
                  Confirm the job within the app to lock in the schedule.
                </span>
              </p>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> 6. Completing the Job </h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Perform the Service:{" "}
                </span>
                <span>
                  Complete the service as agreed upon. Ensure high-quality work
                  to maintain a good reputation on the platform.
                </span>
                <p></p>
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Customer Review:{" "}
                </span>
                <span>
                  After completing the job, the customer will have the
                  opportunity to leave a review and rate your service.
                </span>
              </p>

              <h1>Getting Paid</h1>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> 7. Payment</h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Immediate Payment:{" "}
                </span>
                <span>
                  Once the job is completed, Honest Home Hub facilitates the
                  payment process. You will receive immediate payment as per
                  your agreement.
                </span>
                <p></p>

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Customer Payment Plans:{" "}
                </span>
                <span>
                  Honest Home Hub offers customers the option to pay over time,
                  ensuring you still get paid right away.
                </span>
              </p>

              <h1>Maintaining Your Profile</h1>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> 8. Profile Updates</h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Keep Current:{" "}
                </span>
                <span>
                  Regularly update your profile with new photos, updated
                  pricing, and any new services you offer.
                </span>
                <p></p>

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Respond Promptly:{" "}
                </span>
                <span>
                  Quickly respond to job requests and customer messages to
                  maintain a high response rate and positive reviews.
                </span>
              </p>
              <h1>Support</h1>
              <p style={{ fontSize: "larger" }}>
                <br />
                <h4> 9. Vendor Support</h4>
                <br />
                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Help Center:{" "}
                </span>
                <span>
                  Access the Help Center within the app for FAQs and
                  troubleshooting.
                </span>
                <p></p>

                <span style={{ fontSize: "larger", fontWeight: 500 }}>
                  {" "}
                  Contact Us:{" "}
                </span>
                <span>
                  Reach out to our support team via email or phone for any
                  assistance. Thank you for being a valued partner of Honest
                  Home Hub. We look forward to helping you grow your business
                  and connect with more customers.
                </span>
              </p>
            </div>
          </div>
        </Container>

        <div></div>
        <br />

        <hr
          style={{
            color: "#FFFFFF",
            border: "2px solid #FFFFFF",
            backgroundColor: "white",
          }}
        />
        <Stack style={{ backgroundColor: "#002758" }}>
          {/* <Footer1 /> */}
          <Footerh />
        </Stack>
      </>
    </div>
  );
};

export default Howitworkvendor;
