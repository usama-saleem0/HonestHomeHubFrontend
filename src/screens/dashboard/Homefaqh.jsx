import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const Faqhamza = () => {
  const [faqOpen, setFaqOpen] = useState(Array(5).fill(false));

  const faqtoggle = (index) => {
    const newFaqOpen = faqOpen.map((item, i) => (i === index ? !item : item));
    setFaqOpen(newFaqOpen);
  };

  const faqarray = [
    {
      question: "What is Honest Home Hub?",
      answer:
        "Honest Home Hub is a platform designed to help homeowners with all their home service needs, whether they are dealing with an emergency or looking to get multiple quotes from different vendors. We offer services such as plumbing, cleaning, roofing, fencing, HVAC, landscaping, handyman services, home remodeling, and water heater services.",
    },
    {
      question: "How does Honest Home Hub work?",
      answer:
        "Simply create a job request on our platform by selecting the type of service you need and providing details about your project. You will receive up to three quotes from verified service providers. Compare the quotes, select the best one, and schedule the service. Payment is made securely through the platform and held in escrow until the job is completed to your satisfaction.",
    },
    {
      question: "How long does it take to receive quotes?",
      answer:
        "We guarantee that you will have all quotes at least 24 hours before your scheduled service is set to take place.",
    },
    {
      question: "How do I choose the best service provider?",
      answer:
        " Compare the quotes based on price, provider ratings, and customer reviews. You can also hire an expert through our platform to help you make an informed decision.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "If you are not satisfied with the service, contact us immediately. Our Honest Haley Promise ensures that if the service does not meet your expectations, you get your money back and a free cleaning.",
    },
  ];
  return (
    <section className="faq-sec">
      
      <div className="faq-main-sec-h">
        <div className="container-h">
          <div className="faq-cont-h">
            <div className="faq-title-h">
              <h1>Frequently Asked Questions</h1>
              <div className="faq-title-text-h">
                <p>
                  At Honest Home Hub, we strive to make your home service
                  experience as smooth and hassle-free as possible. Whether
                  you're dealing with an emergency repair or planning a home
                  improvement project, we connect you with trusted service
                  providers who can get the job done efficiently and
                  effectively. Below are some common questions to help you
                  understand how our platform works and how we can assist with
                  your home service needs.
                </p>
              </div>
            </div>

            <div className="faq-question-h">
              {faqarray.map((item, index) => (
                <div className="asd">
                  <div
                    key={index}
                    onClick={() => faqtoggle(index)}
                    className={`faq-question-cont-h ${
                      faqOpen[index] ? "faq-bg" : ""
                    }`}

                    //   className="faq-question-cont-h"
                  >
                    <div className="accordion-cont-h">
                      <h3>{item.question}</h3>
                      <h3
                        className={`${
                          faqOpen[index] ? "faq-question-cont-h-alt-h3" : ""
                        }`}
                      >
                        {faqOpen[index] ? "-" : "+"}
                      </h3>
                    </div>
                  </div>
                  <AnimatePresence>
                    {faqOpen[index] && (
                      <motion.div
                        initial="collapsed"
                        animate={faqOpen[index] ? "open" : "collapsed"}
                        exit="collapsed"
                        variants={{
                          open: {
                            opacity: 1,
                            height: "auto",
                          },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.04, 0.62, 0.23, 1],
                        }}
                        className="home-faq-drop-h"
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqhamza;
