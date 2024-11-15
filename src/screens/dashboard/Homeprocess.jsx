import { useState } from "react";
import Tabimg1 from "../../assets/work-process-img-h.png";
import Tabimg2 from "../../assets/process-2.png";
import Tabimg3 from "../../assets/process-3.png";
import Tabimg4 from "../../assets/process-4.png";
import Tabimg5 from "../../assets/process-5.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Homeprocessh = () => {
  const tabContent = [
    {
      title:
        "Describe Home Service Issue, Share 4 Images, and Provide Available Times",
      text: "This is the easiest and fastest way for you to talk about your problem. There is no need to answer 100 questions, or give your whole life story before you can submit your problem and availability",
      img: Tabimg1,
    },
    {
      title: "We Match You with Vetted Vendors",
      text: "After Step 1, Honest Home Hub does the rest. The more availability and vendors that you have giving quotes, the more likely it is to end up with a better end result whether that be cheaper or the project done with a better strategy.",
      img: Tabimg2,
    },
    {
      title:
        "The Approved Service Providers Visit Your Home, Then Share a Quote on the Platform.",
      text: "Approved vendors will visit your home at the time you specify, and afterwards, they upload their estimates and technique details directly to the platform. There is no need for direct discussion with the vendors. All relevant information, including the vendor profiles, is transparently shared on the website's dashboard to ensure both transparency and safety.",
      img: Tabimg3,
    },
    {
      title: "Consult an Expert for The Best Repair Choice Among Three Quotes",
      text: "Now, you have the opportunity to consult with an expert who will offer their recommendation on which quote to select, based on the price and the approach proposed by the vendor.",
      img: Tabimg4,
    },
    {
      title:
        "Pay Through Honest Home Hub and Coordinate Project Timing via Vendor Chat",
      text: "You will now make payments directly through Honest Home Hub. Additionally, you can communicate with the vendor via the dashboard's chat box to finalize the schedule for completing your project.",
      img: Tabimg5,
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const signUpToggle = () => {
    navigate("/signup/customersignup");
  };

  const handleTabChange = (increment) => {
    setActiveTab((prevTab) =>
      prevTab + increment >= tabContent.length
        ? 0
        : prevTab + increment < 0
        ? tabContent.length - 1
        : prevTab + increment
    );
  };

  return (
    <section className="main-process-sec-h">
      <div className="main-process-h">
        <div className="process-heading-h">
          <h1>Our Process Work Flow</h1>
          <div className="process-title-text">
            <p>
              Honest Home Hub is a service that helps you address home service
              problems by matching you with vetted vendors. You can choose from
              up to three vendors, have them come to your house at your
              preferred time, and even consult with an expert to select the best
              quote and service description. Payments are made through Honest
              Home Hub, and you can communicate with the vendor through a
              convenient chat box to coordinate until project completion.
            </p>
          </div>
        </div>

        <div className="process-tabs-h">
          {tabContent.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`process-tab-num ${
                index === activeTab ? "active" : ""
              }`}
            >{`0${index + 1}`}</div>
          ))}
        </div>
        <div className="process-tabs-btns-cont-h">
          <span
            className="process-tabs-btn-h"
            onClick={() => handleTabChange(-1)}
          >
            ←
          </span>
          <span
            className="process-tabs-btn-h"
            onClick={() => handleTabChange(1)}
          >
            →
          </span>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <div className="process-tab-content">
            <div className="process-tab-img-h">
              <img src={tabContent[activeTab].img} alt="" />
            </div>
            <div className="process-tab-text-content">
              <div className="process-tab-title">
                <h1>{tabContent[activeTab].title}</h1>
              </div>
              <div className="process-tab-text">
                <p>{tabContent[activeTab].text}</p>
              </div>
              <a className="home--process--gtm--link" onClick={signUpToggle} >
                Get A Quote
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Homeprocessh;
