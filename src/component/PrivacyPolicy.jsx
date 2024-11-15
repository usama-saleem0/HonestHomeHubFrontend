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

const PrivacyPolicy = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div style={{ backgroundColor: "#0874b7" }}>
      <>
        <div className="header" style={{ backgroundColor: "#0874b7" }}>
          <LandingPageHeader />

          {/* <HeroSection /> */}
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
                Privacy Policy
              </h1>
              <br />
              <p style={{ fontSize: "larger" }}>
                Protecting your private information is our priority. This
                Statement of Privacy applies to honesthomehub.com, and Honest
                Home Hub and governs data collection and usage. For the purposes
                of this Privacy Policy, unless otherwise noted, all references
                to Honest Home Hub include honesthomehub.com. The Honest Home
                Hub website is a Home Services Marketplace site. By using the
                Honest Home Hub website, you consent to the data practices
                described in this statement.{" "}
              </p>
              <h1>Collection of your Personal Information</h1>
              <p style={{ fontSize: "larger" }}>
                In order to better provide you with products and services
                offered, Honest Home Hub may collect personally identifiable
                information, such as your:
              </p>
              <ul>
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
              </p>
              <h1>Use of your Personal Information</h1>
              <p style={{ fontSize: "larger" }}>
                Honest Home Hub collects and uses your personal information to
                operate and deliver the services you have requested. <br />
                <br />
                Honest Home Hub may also use your personally identifiable
                information to inform you of other products or services
                available from Honest Home Hub and its affiliates.
              </p>
              <h1>Sharing Information with Third Parties</h1>
              <p style={{ fontSize: "larger" }}>
                Honest Home Hub does not sell, rent or lease its customer lists
                to third parties. <br />
                <br />
                Honest Home Hub may, from time to time, contact you on behalf of
                external business partners about a particular offering that may
                be of interest to you. In those cases, your unique personally
                identifiable information (e-mail, name, address, telephone
                number) is not transferred to the third party. Honest Home Hub
                may share data with trusted partners to help perform statistical
                analysis, send you email or postal mail, provide customer
                support, or arrange for deliveries. All such third parties are
                prohibited from using your personal information except to
                provide these services to Honest Home Hub, and they are required
                to maintain the confidentiality of your information. <br />
                <br />
                Honest Home Hub may disclose your personal information, without
                notice, if required to do so by law or in the good faith belief
                that such action is necessary to: (a) conform to the edicts of
                the law or comply with legal process served on Honest Home Hub
                or the site; (b) protect and defend the rights or property of
                Honest Home Hub; and/or (c) act under exigent circumstances to
                protect the personal safety of users of Honest Home Hub, or the
                public.
              </p>
              <h1>Tracking User Behavior</h1>
              <p style={{ fontSize: "larger" }}>
                Honest Home Hub may keep track of the websites and pages our
                users visit within Honest Home Hub, in order to determine what
                Honest Home Hub services are the most popular. This data is used
                to deliver customized content and advertising within Honest Home
                Hub to customers whose behavior indicates that they are
                interested in a particular subject area.
              </p>
              <br />
              <h1>Automatically Collected Information</h1>
              <p style={{ fontSize: "larger" }}>
                Information about your computer hardware and software may be
                automatically collected by Honest Home Hub. This information can
                include: your IP address, browser type, domain names, access
                times and referring website addresses. This information is used
                for the operation of the service, to maintain quality of the
                service, and to provide general statistics regarding use of the
                Honest Home Hub website.
              </p>
              <h1>Use of Cookies</h1>
              <p style={{ fontSize: "larger" }}>
                The Honest Home Hub website may use "cookies" to help you
                personalize your online experience. A cookie is a text file that
                is placed on your hard disk by a web page server. Cookies cannot
                be used to run programs or deliver viruses to your computer.
                Cookies are uniquely assigned to you, and can only be read by a
                web server in the domain that issued the cookie to you. <br />
                <br />
                One of the primary purposes of cookies is to provide a
                convenience feature to save you time. The purpose of a cookie is
                to tell the Web server that you have returned to a specific
                page. For example, if you personalize Honest Home Hub pages, or
                register with Honest Home Hub site or services, a cookie helps
                Honest Home Hub to recall your specific information on
                subsequent visits. This simplifies the process of recording your
                personal information, such as billing addresses, shipping
                addresses, and so on. When you return to the same Honest Home
                Hub website, the information you previously provided can be
                retrieved, so you can easily use the Honest Home Hub features
                that you customized. <br />
                <br />
                You have the ability to accept or decline cookies. Most Web
                browsers automatically accept cookies, but you can usually
                modify your browser setting to decline cookies if you prefer. If
                you choose to decline cookies, you may not be able to fully
                experience the interactive features of the Honest Home Hub
                services or websites you visit.
              </p>
              <h1>Links</h1>
              <p style={{ fontSize: "larger" }}>
                This website contains links to other sites. Please be aware that
                we are not responsible for the content or privacy practices of
                such other sites. We encourage our users to be aware when they
                leave our site and to read the privacy statements of any other
                site that collects personally identifiable information.
              </p>
              <h1>Right to Deletion</h1>
              <p style={{ fontSize: "larger" }}>
                Subject to certain exceptions set out below, on receipt of a
                verifiable request from you, we will:
              </p>
              <ul>
                <li style={{ fontSize: "larger" }}>
                  Delete your personal information from our records.
                </li>
                <li style={{ fontSize: "larger" }}>
                  Direct any service providers to delete your personal
                  information from their records.
                </li>
              </ul>
              <p style={{ fontSize: "larger" }}>
                Please note that we may not be able to comply with requests to
                delete your personal information if it is necessary to:
              </p>
              <ul>
                <li style={{ fontSize: "larger" }}>
                  Complete the transaction for which the personal information
                  was collected, fulfill the terms of a written warranty or
                  product recall conducted in accordance with federal law,
                  provide a good or service requested by you, or reasonably
                  anticipated within the context of our ongoing business
                  relationship with you, or otherwise perform a contract between
                  you and us.
                </li>

                <li style={{ fontSize: "larger" }}>
                  Detect security incidents, protect against malicious,
                  deceptive, fraudulent, or illegal activity; or prosecute those
                  responsible for that activity.
                </li>

                <li style={{ fontSize: "larger" }}>
                  Debug to identify and repair errors that impair existing
                  intended functionality.
                </li>

                <li style={{ fontSize: "larger" }}>
                  Exercise free speech, ensure the right of another consumer to
                  exercise his or her right of free speech, or exercise another
                  right provided for by law.
                </li>

                <li style={{ fontSize: "larger" }}>
                  Comply with the California Electronic Communications Privacy
                  Act.
                </li>

                <li style={{ fontSize: "larger" }}>
                  Engage in public or peer-reviewed scientific, historical, or
                  statistical research in the public interest that adheres to
                  all other applicable ethics and privacy laws, when our
                  deletion of the information is likely to render impossible or
                  seriously impair the achievement of such research, provided we
                  have obtained your informed consent.
                </li>

                <li style={{ fontSize: "larger" }}>
                  Enable solely internal uses that are reasonably aligned with
                  your expectations based on your relationship with us.
                </li>

                <li style={{ fontSize: "larger" }}>
                  Comply with an existing legal obligation.
                </li>

                <li style={{ fontSize: "larger" }}>
                  Otherwise use your personal information, internally, in a
                  lawful manner that is compatible with the context in which you
                  provided the information.
                </li>
              </ul>
              <h1>Children Under Thirteen</h1>
              <p style={{ fontSize: "larger" }}>
                Honest Home Hub does not knowingly collect personally
                identifiable information from children under the age of
                thirteen. If you are under the age of thirteen, you must ask
                your parent or guardian for permission to use this website.
              </p>
              <h1>E-mail Communications</h1>
              <p style={{ fontSize: "larger" }}>
                From time to time, Honest Home Hub may contact you via email for
                the purpose of providing announcements, promotional offers,
                alerts, confirmations, surveys, and/or other general
                communication. In order to improve our Services, we may receive
                a notification when you open an email from Honest Home Hub or
                click on a link therein. <br />
                If you would like to stop receiving marketing or promotional
                communications via email from Honest Home Hub, you may opt out
                of such communications by honesthomehub@gmail.com.
              </p>
              <h1>External Data Storage Sites</h1>
              <p style={{ fontSize: "larger" }}>
                We may store your data on servers provided by third party
                hosting vendors with whom we have contracted.
              </p>{" "}
              <br />
              <h1>Changes to this Statement</h1>
              <p style={{ fontSize: "larger" }}>
                Honest Home Hub reserves the right to change this Privacy Policy
                from time to time. We will notify you about significant changes
                in the way we treat personal information by sending a notice to
                the primary email address specified in your account, by placing
                a prominent notice on our website, and/or by updating any
                privacy information. Your continued use of the website and/or
                Services available after such modifications will constitute
                your: (a) acknowledgment of the modified Privacy Policy; and (b)
                agreement to abide and be bound by that Policy.
              </p>{" "}
              <br />
              <h1>Contact Information</h1>
              <p style={{ fontSize: "larger" }}>
                Honest Home Hub welcomes your questions or comments regarding
                this Statement of Privacy. If you believe that Honest Home Hub
                has not adhered to this Statement, please contact Honest Home
                Hub at: <br />
                <br />
                Honest Home Hub
                <br />
                704 Wheaton Ct <br />
                Allen, Texas 75013 <br />
                <br />
                Email Address: <br />
                honesthomehub@gmail.com <br />
                <br />
                Telephone number: <br />
                4692233255 <br />
                <br />
                Effective as of January 02, 2024 <br />
              </p>
            </div>
          </div>
        </Container>

        <div>


          {/* <div className=" " >


<div >

<h1 className="text-center"  style={{ fontSize: "3.5rem" }}>
Privacy Policy
</h1>
<br/>

<p> 
Protecting your private information is our priority. This Statement of Privacy applies to 
honesthomehub.com, and Honest Home Hub and governs data collection and usage. For the 
purposes of this Privacy Policy, unless otherwise noted, all references to Honest Home Hub 
include honesthomehub.com. The Honest Home Hub website is a Home Services Marketplace 
site. By using the Honest Home Hub website, you consent to the data practices described in this 
statement. </p>

<h1>
Collection of your Personal Information
</h1>
<p>
In order to better provide you with products and services offered, Honest Home Hub may collect 
personally identifiable information, such as your: 
</p>

<ul>
<li>First and Last Name</li>
<li>Mailing Address</li>
<li>E-mail Address</li>
<li>Phone Number</li>
</ul>

<p>
 
If you purchase Honest Home Hub's products and services, we collect billing and credit card 
information. This information is used to complete the purchase transaction. 
</p>

<p>
Honest Home Hub may also collect anonymous demographic information, which is not unique to 
    you, such as your: 

</p>

<ul>
    <li>Age</li>
    <li>Gender</li>
</ul>


<p>
 
    We do not collect any personal information about you unless you voluntarily provide it to us. 
    However, you may be required to provide certain personal information to us when you elect to use 
    certain products or services. These may include: (a) registering for an account; (b) entering a 
    sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers 
    from selected third parties; (d) sending us an email message; (e) submitting your credit card or 
    other payment information when ordering and purchasing products and services. To wit, we will 
    use your information for, but not limited to, communicating with you in relation to services and/or 
    products you have requested from us. We also may gather additional personal or non-personal 
    information in the future. 

</p>

<h1>

Use of your Personal Information 

</h1>

<p>
Honest Home Hub collects and uses your personal information to operate and deliver the services 
you have requested. <br/><br/>

    Honest Home Hub may also use your personally identifiable information to inform you of other 
    products or services available from Honest Home Hub and its affiliates.     
</p>


<h1>
Sharing Information with Third Parties
</h1>

<p>
Honest Home Hub does not sell, rent or lease its customer lists to third parties. <br/><br/> 

    Honest Home Hub may, from time to time, contact you on behalf of external business partners 
    about a particular offering that may be of interest to you. In those cases, your unique personally 
    identifiable information (e-mail, name, address, telephone number) is not transferred to the third 
    party. Honest Home Hub may share data with trusted partners to help perform statistical analysis, 
    send you email or postal mail, provide customer support, or arrange for deliveries. All such third 
    parties are prohibited from using your personal information except to provide these services to 
    Honest Home Hub, and they are required to maintain the confidentiality of your information. <br/><br/>
    
    Honest Home Hub may disclose your personal information, without notice, if required to do so by 
    law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law 
    or comply with legal process served on Honest Home Hub or the site; (b) protect and defend the 
    rights or property of Honest Home Hub; and/or (c) act under exigent circumstances to protect the 
    personal safety of users of Honest Home Hub, or the public. 

</p>

<h1>
Tracking User Behavior
</h1>

<p>
Honest Home Hub may keep track of the websites and pages our users visit within Honest Home 
    Hub, in order to determine what Honest Home Hub services are the most popular. This data is 
    used to deliver customized content and advertising within Honest Home Hub to customers whose 
    behavior indicates that they are interested in a particular subject area. 

</p>

<br/><br/><br/>


<h1>
Automatically Collected Information
</h1>

<p>
Information about your computer hardware and software may be automatically collected by 
    Honest Home Hub. This information can include: your IP address, browser type, domain names, 
    access times and referring website addresses. This information is used for the operation of the 
    service, to maintain quality of the service, and to provide general statistics regarding use of the 
    Honest Home Hub website.
</p>

<h1>
Use of Cookies
</h1>


<p>
        The Honest Home Hub website may use "cookies" to help you personalize your online experience. 
        A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be 
        used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, 
        and can only be read by a web server in the domain that issued the cookie to you. <br/><br/>
        
        One of the primary purposes of cookies is to provide a convenience feature to save you time. The 
        purpose of a cookie is to tell the Web server that you have returned to a specific page. For 
        example, if you personalize Honest Home Hub pages, or register with Honest Home Hub site or 
        services, a cookie helps Honest Home Hub to recall your specific information on subsequent visits. 
        This simplifies the process of recording your personal information, such as billing addresses, 
        shipping addresses, and so on. When you return to the same Honest Home Hub website, the 
        information you previously provided can be retrieved, so you can easily use the Honest Home Hub 
        features that you customized. <br/><br/>
        
        You have the ability to accept or decline cookies. Most Web browsers automatically accept 
        cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you 
        choose to decline cookies, you may not be able to fully experience the interactive features of the 
        Honest Home Hub services or websites you visit. 
</p>


<h1>
    Links
</h1>

<p>
This website contains links to other sites. Please be aware that we are not responsible for the 
content or privacy practices of such other sites. We encourage our users to be aware when they 
leave our site and to read the privacy statements of any other site that collects personally 
identifiable information. 
</p>



<h1>
Right to Deletion

</h1>

<p>
Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:
</p>

<ul>
    <li>
    Delete your personal information from our records.
    </li>
    <li>
    Direct any service providers to delete your personal information from their records.
    </li>
</ul>

<p>
Please note that we may not be able to comply with requests to delete your personal information if 
    it is necessary to:
</p>

<ul>
    <li>
    Complete the transaction for which the personal information was collected, fulfill the 
    terms of a written warranty or product recall conducted in accordance with federal 
    law, provide a good or service requested by you, or reasonably anticipated within the 
    context of our ongoing business relationship with you, or otherwise perform a contract 
    between you and us.
    </li>

    <li>
    Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal 
    activity; or prosecute those responsible for that activity.
    </li>

    <li>
    Debug to identify and repair errors that impair existing intended functionality.
    </li>

    <li>
    Exercise free speech, ensure the right of another consumer to exercise his or her right 
    of free speech, or exercise another right provided for by law.
    </li>

    <li>
    Comply with the California Electronic Communications Privacy Act.
    </li>

    <li>
    Engage in public or peer-reviewed scientific, historical, or statistical research in the 
    public interest that adheres to all other applicable ethics and privacy laws, when our 
    deletion of the information is likely to render impossible or seriously impair the 
    achievement of such research, provided we have obtained your informed consent.
    </li>

    <li>
    Enable solely internal uses that are reasonably aligned with your expectations based on 
    your relationship with us.

    </li>

    <li>
    Comply with an existing legal obligation.
    </li>

    <li>
    Otherwise use your personal information, internally, in a lawful manner that is 
    compatible with the context in which you provided the information.
    </li>

</ul>

<h1>
Children Under Thirteen
</h1>

    <p>
    Honest Home Hub does not knowingly collect personally identifiable information from children 
    under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website. 

    </p>
    <h1>
    E-mail Communications
</h1>

    <p>
    From time to time, Honest Home Hub may contact you via email for the purpose of providing 
    announcements, promotional offers, alerts, confirmations, surveys, and/or other general 
    communication. In order to improve our Services, we may receive a notification when you open an 
    email from Honest Home Hub or click on a link therein. <br/>
    
    If you would like to stop receiving marketing or promotional communications via email from 
    Honest Home Hub, you may opt out of such communications by honesthomehub@gmail.com. 

    </p>

    <h1>
    External Data Storage Sites 
</h1>

    <p>
    We may store your data on servers provided by third party hosting vendors with whom we have 
    contracted.

    </p> <br/>

    <h1>
    Changes to this Statement
    </h1>

    <p>
    Honest Home Hub reserves the right to change this Privacy Policy from time to time. We will 
        notify you about significant changes in the way we treat personal information by sending a notice to 
        the primary email address specified in your account, by placing a prominent notice on our website, 
        and/or by updating any privacy information. Your continued use of the website and/or Services 
        available after such modifications will constitute your: (a) acknowledgment of the modified Privacy 
        Policy; and (b) agreement to abide and be bound by that Policy. 
    </p> <br/>

    <h1>
    Contact Information
    </h1>

    <p>
    Honest Home Hub welcomes your questions or comments regarding this Statement of Privacy. If 
        you believe that Honest Home Hub has not adhered to this Statement, please contact Honest 
        Home Hub at: <br/><br/>
        
        Honest Home Hub<br/> 
        704 Wheaton Ct <br/>
        Allen, Texas 75013 <br/><br/>
        
        Email Address: <br/>
        honesthomehub@gmail.com <br/><br/>
        
        Telephone number: <br/>
        4692233255 <br/><br/>
        
        Effective as of January 02, 2024 <br/>

    </p>

</div>
    </div> */}




        </div>
        <br />

        <hr
          style={{
            color: "#FFFFFF",
            border: "2px solid #FFFFFF",
            backgroundColor: "white",
          }}
        />
        <Stack style={{ backgroundColor: "#002758" }}>
          {/* <Footer1 />    */}
          <Footerh />
        </Stack>
      </>
    </div>
  );
};

export default PrivacyPolicy;
