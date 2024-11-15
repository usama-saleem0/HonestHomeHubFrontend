import React, { useState } from "react";
import { Link } from "react-router-dom";
const Headerdrop = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupVisible2, setIsPopupVisible2] = useState(false);

  // Function to toggle popup visibility
  const handleViewClick = () => {
    setIsPopupVisible(true); // Show the popup
  };
  const handleViewClick2 = () => {
    setIsPopupVisible2(true); // Show the popup
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setIsPopupVisible(false); // Hide the popup
  };
  const handleClosePopup2 = () => {
    setIsPopupVisible2(false); // Hide the popup
  };

  return (
    <>
      <div className="select-station-drop">
        <div onClick={() => setIsOpen(!isOpen)} className="dropdwon-1-list">
          <button>
       Type of Home Services


          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12" viewBox="0 0 21 12" fill="none"><path d="M10.5891 8.40033C10.7184 8.24649 10.8155 8.1114 10.9316 7.99602C13.4175 5.52041 15.9063 3.04668 18.3941 0.572009C18.8205 0.147994 19.3253 -0.00866575 19.9102 0.16019C20.48 0.324355 20.8338 0.710846 20.9612 1.2812C21.0829 1.82623 20.914 2.29527 20.5187 2.68833C19.5696 3.63111 18.6215 4.57482 17.6724 5.51853C15.7082 7.47163 13.7449 9.42472 11.7807 11.3769C10.9457 12.2071 10.1287 12.2071 9.29661 11.3806C6.37576 8.47538 3.45396 5.572 0.534045 2.66582C-0.264095 1.87126 -0.151827 0.704279 0.765185 0.192085C1.37181 -0.146564 2.09448 -0.033994 2.63695 0.502591C3.8134 1.66675 4.98325 2.83655 6.15594 4.00353C7.53523 5.37876 8.91452 6.75399 10.2957 8.12829C10.3693 8.20146 10.4476 8.26994 10.5891 8.40033Z" fill="white"></path></svg>
          </button>
        </div>

        {isOpen && (
          <ul className="options-list">
   
            <li>
            <Link
            className="none-list"
            to="/Newmy2"
            onClick={() => handleChangeIndex(5)}
          >
          Hire a Handyman

              </Link>
            </li>
        


            <li>
            <Link
            className="none-list"
            to="/Newmy3"
            onClick={() => handleChangeIndex(5)}
          >
            Hire a Plumber

              </Link>
            </li>




            <li>
            <Link
            className="none-list"
            to="/Newmy4"
            onClick={() => handleChangeIndex(5)}
          >
             Hire a Cleaner

              </Link>
            </li>




            <li>
            <Link
            className="none-list"
            to="/Newmy5"
            onClick={() => handleChangeIndex(5)}
          >
             Hire a Home Remodeler

              </Link>
            </li>



            <li>
            <Link
            className="none-list"
            to="/Newmy6"
            onClick={() => handleChangeIndex(5)}
          >
Hire a Landscaper
              </Link>
            </li>



            <li>
            <Link
            className="none-list"
            to="/Newmy7"
            onClick={() => handleChangeIndex(5)}
          >
Hire a Fencing Professional
              </Link>
            </li>



            
            <li>
            <Link
            className="none-list"
            to="/Newmy1"
            onClick={() => handleChangeIndex(5)}
          >
Hire a Roofer              </Link>
            </li>
       

            <li>
            <Link
            className="none-list"
            to="/Newmy8"
            onClick={() => handleChangeIndex(5)}
          >
Hire a Water Heater Professional              </Link>
            </li>
          </ul>
        )}
      </div>


    </>
  );
};

export default Headerdrop;
