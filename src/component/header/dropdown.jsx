import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const BootstrapDropdown = () => {
  return (
    <Dropdown className="helpful-blogs">
      <Dropdown.Toggle
        variant="success"
        id="dropdown-basic"
        style={{
          backgroundColor: " #0874B7",
          fontSize: "20px",
          fontWeight: "700",
          border: "none",
        }}
      >
        Helpful Blogs
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="https://homeservicepatrol.com/" target="_blank">
          For Customers
        </Dropdown.Item>
        <Dropdown.Item href="https://cleanerdreams.com/" target="_blank">
          For Cleaners
        </Dropdown.Item>
        <Dropdown.Item href="https://landscaperdreams.com/" target="_blank">
          For Landscapers
        </Dropdown.Item>
        <Dropdown.Item href="https://hvacdreams.com/" target="_blank">
          For HVAC Pros
        </Dropdown.Item>
        <Dropdown.Item href="https://plumdogmillionaires.com/" target="_blank">
          For Plumbers
        </Dropdown.Item>
        <Dropdown.Item href="https://rooferdreams.com/" target="_blank">
          For Roofers
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default BootstrapDropdown;
