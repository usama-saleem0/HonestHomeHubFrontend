import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const RegisterDropdown = ({ outsideClick }) => {
  const navigate = useNavigate();

  function signUpToggle(signUpType) {
    navigate("signup/customersignup", { state: { signUpType } });
  }

  function signUpToggle1(signUpType) {
    navigate("signup/vendorsignup", { state: { signUpType } });
  }
  return (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="home--register--dropdown--h"
      ref={outsideClick}
    >
      <li onClick={() => signUpToggle("Customer")}>
        <a className="customer--header--reg--gtm">Customer</a>
      </li>
      <li onClick={() => signUpToggle1("Vendor")}>
        <a className="vendor--header--reg--gtm">Home Pro</a>
      </li>
      {/* <li onClick={() => signUpToggle("Expert")}>Expert</li> */}
    </motion.ul>
  );
};

export default RegisterDropdown;
